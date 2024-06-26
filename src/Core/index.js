import Vue from 'vue'
import Route from './Route'
import Location from './Location'
import Page from './Page'
import EventListener from './EventListener'
import { NAVIGATE_TYPES as NT } from './CONSTANTS'
import { typeOf } from '#'

class Core {
	get $store() {
		return this._store
	}
	get NAVIGATE_TYPES() {
		return this._NAVIGATE_TYPES
	}
	constructor({
		routes: _routes = [],
		autoClean = true,
		logEnable = process.env.NODE_ENV !== 'production'
	} = {}) {
		this._store = Vue.observable({
			routes: [],
			pages: [],
			currentPages: {}
		})
		this._autoClean = autoClean
		this._logEnable = !!logEnable
		this._NAVIGATE_TYPES = NT
		this._componentReferenceCount = 0
		this._pageIdSeed = 0
		this._beforeEachs = []
		this._afterEachs = []

		try {
			this._initRoutes(_routes)
		} catch (error) {
			this.$error(`[init] ${error}`)
		}

		if (process.env.NODE_ENV === 'development') {
			window.__TAB_ROUTER_STORE__ = this._store
		}
	}
	_initRoutes(_routes) {
		_routes.forEach(_route => {
			this.$store.routes.push(new Route(_route))
		})
	}
	_getRouteByLocation(location, useWildcard) {
		return this.$store.routes.find(route =>
			route.$match(location, useWildcard)
		)
	}
	_getPageByRoute(route) {
		return this.$store.pages.find(page => page.route === route)
	}
	_getNearbyPageByPage(page) {
		const sameRouterPages = this.$getPagesByRouter(page.route.router)
		const pageIndex = sameRouterPages.findIndex(_page => _page === page)
		return sameRouterPages[pageIndex + 1] || sameRouterPages[pageIndex - 1]
	}
	_isCurrentPage(page) {
		return this.$store.currentPages[page.route.router] === page
	}
	_setCurrentPage(page) {
		Vue.set(this.$store.currentPages, page.route.router, page)
	}
	_removeCurrentPage(page) {
		this.$store.currentPages[page.route.router] = null
	}
	_getCurrentPageByRouter(router) {
		return this.$store.currentPages[router]
	}
	_createPage(route) {
		return new Page(route)
	}
	_addPage(page) {
		this.$store.pages.push(page)
	}
	async _openPage(route, location, isLocationForceUpdate) {
		if (!(await this._triggerBeforeDefender(NT.OPEN, route))) return

		route.$updateLocation(location, isLocationForceUpdate)

		const page = this._createPage(route)

		await this._focusPage(page)

		await new Promise(resolve => {
			page.component.$addHook('mounted', resolve)

			this._addPage(page)
			this._triggerAfterDefender(NT.OPEN, page.route)
		})
	}
	async _focusPage(page, location, isLocationForceUpdate) {
		if (!(await this._triggerBeforeDefender(NT.FOCUS, page.route))) return

		if (location) {
			page.route.$updateLocation(location, isLocationForceUpdate)
		}

		const currentPage = this._getCurrentPageByRouter(page.route.router)

		if (page !== currentPage) {
			this._setCurrentPage(page)
		}

		this._triggerAfterDefender(
			NT.FOCUS,
			page.route,
			currentPage?.route || null
		)
	}
	async _reloadPage(page, location) {
		if (!(await this._triggerBeforeDefender(NT.RELOAD, page.route))) return

		page.route.$updateLocation(location)
		page.component.reload()

		this._triggerAfterDefender(NT.RELOAD, page.route)
	}
	async _closePage(page) {
		if (!(await this._triggerBeforeDefender(NT.CLOSE, page.route))) return

		let nextFocusPage = null
		if (this._isCurrentPage(page)) {
			this._removeCurrentPage(page)
			nextFocusPage = this._getNearbyPageByPage(page)
		}

		const pageIndex = this.$store.pages.findIndex(_page => _page === page)

		if (pageIndex < 0) return

		await new Promise(resolve => {
			page.component.$addHook('destroyed', resolve)

			this.$store.pages.splice(pageIndex, 1)
		})

		this._triggerAfterDefender(NT.CLOSE, page.route)

		if (nextFocusPage) {
			await this._focusPage(nextFocusPage)
		}
	}
	_addDefender(defender, isBefore) {
		if (isBefore) {
			this._beforeEachs.push(defender)
		} else {
			this._afterEachs.push(defender)
		}
	}
	_removeDefender(defender, isBefore) {
		const defenders = isBefore ? this._beforeEachs : this._afterEachs,
			index = defenders.findIndex(_defender => _defender === defender)

		if (index !== -1) {
			defenders.splice(index, 1)
		}
	}
	async _triggerBeforeDefender(type, targetRoute = null) {
		if (!targetRoute) return

		const currentRoute =
			this._getCurrentPageByRouter(targetRoute?.router)?.route || null

		const resArray = await Promise.all(
			this._beforeEachs.map(defender => {
				return new Promise(resolve => {
					defender(type, currentRoute, targetRoute, nextParam => {
						if (nextParam === false) {
							resolve(false)
						} else {
							resolve(true)
						}
					})
				})
			})
		)
		return resArray.every(res => res)
	}
	_triggerAfterDefender(
		type,
		targetRoute = null,
		currentRoute = this._getCurrentPageByRouter(targetRoute?.router)
			?.route || null
	) {
		this._afterEachs.forEach(defender => {
			defender(type, currentRoute, targetRoute)
		})
	}
	$error(error) {
		try {
			if (!this._logEnable) return
			// eslint-disable-next-line
			console.error(`[TabRouter] ${error}`)
		} catch (error) {
			// eslint-disable-next-line
			console.error(`[TabRouter] [$error] ${error}`)
		}
	}
	$warn(error) {
		try {
			if (!this._logEnable) return
			// eslint-disable-next-line
			console.warn(`[TabRouter] ${error}`)
		} catch (error) {
			// eslint-disable-next-line
			console.warn(`[TabRouter] [$warn] ${error}`)
		}
	}
	$reset() {
		this.$store.pages = []
		this.$store.currentPages = {}
	}
	$getRouteByLocation(location, useWildcard = false) {
		if (!(location instanceof Location)) {
			location = new Location(location)
		}
		return this._getRouteByLocation(location, useWildcard)
	}
	$getPagesByRouter(router = '') {
		return this.$store.pages.filter(page => page.route.router === router)
	}
	$recordReference(isAdd = false) {
		this._componentReferenceCount += isAdd ? 1 : -1

		if (this._componentReferenceCount > 0) return

		if (!this._autoClean) return

		this.$reset()
	}
	$getCurrentRoutes() {
		const currentRoutes = {}
		for (const router in this.$store.currentPages) {
			if (Object.hasOwnProperty.call(this.$store.currentPages, router)) {
				currentRoutes[router] = this.$store.currentPages[router]?.route
			}
		}
		return currentRoutes
	}
	async open(_location = '') {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location, true)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			let page = this._getPageByRoute(route)

			if (page) {
				await this._focusPage(page, location, true)
			} else {
				await this._openPage(route, location, true)
			}
		} catch (error) {
			this.$error(`[open] ${error}`)
		}
	}
	async focus(_location = '') {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location, true)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			await this._focusPage(page, location)
		} catch (error) {
			this.$error(`[focus] ${error}`)
		}
	}
	async reload(_location = '') {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			await this._reloadPage(page, location)
		} catch (error) {
			this.$error(`[reload] ${error}`)
		}
	}
	async close(_location = '') {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			await this._closePage(page)
		} catch (error) {
			this.$error(`[close] ${error}`)
		}
	}
	async closeAll(router = '') {
		try {
			const pages = Object.assign([], this.$store.pages).reverse()

			for (let index = 0; index < pages.length; index++) {
				const page = pages[index]
				if (page.route.router === router || !router) {
					await this._closePage(page)
				}
			}
		} catch (error) {
			this.$error(`[closeAll] ${error}`)
		}
	}
	beforeEach(defender = () => {}) {
		try {
			if (typeOf(defender) !== 'Function') throw `参数必须为Function类型`

			this._addDefender(defender, true)
			return () => this._removeDefender(defender, true)
		} catch (error) {
			this.$error(`[beforeEach] ${error}`)
		}
	}
	afterEach(defender = () => {}) {
		try {
			if (typeOf(defender) !== 'Function') throw `参数必须为Function类型`

			this._addDefender(defender, false)
			return () => this._removeDefender(defender, false)
		} catch (error) {
			this.$error(`[afterEach] ${error}`)
		}
	}
	on(_location = '', event = '', listener = () => {}, once = false) {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location, true)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const eventListener = new EventListener({
				event,
				listener,
				once
			})

			route.$addEventListener(eventListener)

			return () => {
				route.$removeEventListener(
					eventListener.event,
					eventListener.listener
				)
			}
		} catch (error) {
			this.$error(`[on] ${error}`)
		}
	}
	once(_location = '', event = '', listener = () => {}) {
		return this.on(_location, event, listener, true)
	}
	off(_location = '', event = '', listener = () => {}) {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location, true)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			route.$removeEventListener(event, listener)
		} catch (error) {
			this.$error(`[off] ${error}`)
		}
	}
	getRoutes(router = '') {
		try {
			return [...this.$store.routes].filter(
				route => route.router === router || !router
			)
		} catch (error) {
			this.$error(`[getRoutes] ${error}`)
		}
	}
	getActiveRoutes(router = '') {
		try {
			return this.$store.pages
				.map(page => page.route)
				.filter(route => route.router === router || !router)
		} catch (error) {
			this.$error(`[getActiveRoutes] ${error}`)
		}
	}
}

export default Core
