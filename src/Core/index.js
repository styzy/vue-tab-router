import Vue from 'vue'
import Route from './Route'
import Location from './Location'
import Page from './Page'
import { NAVIGATE_TYPES as navTypes } from './CONSTANTS'
import { typeOf } from '#'
class Core {
	constructor(
		{ routes: _routes, logEnable } = {
			routes: [],
			logEnable: process.env.NODE_ENV !== 'production'
		}
	) {
		this.store = Vue.observable({
			routes: [],
			pages: [],
			currentPage: null,
			focusComplate: null
		})
		this.NAVIGATE_TYPES = navTypes
		this._logEnable = !!logEnable
		this._pageIdSeed = 0
		this._beforeEachs = []
		this._afterEachs = []
		try {
			this._initRoutes(_routes)
		} catch (error) {
			this.$error(`[init] ${error}`)
		}
	}
	_initRoutes(_routes) {
		_routes.forEach(_route => {
			this.store.routes.push(new Route(_route))
		})
	}
	_getRouteByLocation(location, useWildcard) {
		return this.store.routes.find(route =>
			route.match(location, useWildcard)
		)
	}
	_getPageByRoute(route) {
		return this.store.pages.find(page => page.route === route)
	}
	_getNearbyPageByPage(page) {
		const pageIndex = this.store.pages.findIndex(_page => _page === page)
		return (
			this.store.pages[pageIndex + 1] || this.store.pages[pageIndex - 1]
		)
	}
	_createPageId() {
		return `page-${this._pageIdSeed++}`
	}
	_createPage(route) {
		return new Page({ id: this._createPageId(), route })
	}
	_addPage(page) {
		this.store.pages.push(page)

		this._triggerAfterDefender(navTypes.OPEN, page.route)
	}
	async _openPage(route, location) {
		if (!(await this._triggerBeforeDefender(navTypes.OPEN, route))) return

		route.updateLocation(location)

		const page = this._createPage(route)

		this._addPage(page)
		await this._focusPage(page)
	}
	async _focusPage(page) {
		if (page === this.store.currentPage) return

		if (!(await this._triggerBeforeDefender(navTypes.FOCUS, page.route)))
			return

		const lastCurrentPage = this.store.currentPage

		this.store.currentPage = page

		this._triggerAfterDefender(
			navTypes.FOCUS,
			page.route,
			lastCurrentPage ? lastCurrentPage.route : null
		)
	}
	async _reloadPage(page) {
		if (!(await this._triggerBeforeDefender(navTypes.RELOAD, page.route)))
			return

		const newPage = this._createPage(page.route),
			pageIndex = this.store.pages.findIndex(_page => _page === page)
		this.store.pages.splice(pageIndex, 1, newPage)
		if (page === this.store.currentPage) {
			this.store.currentPage = newPage
		}

		this._triggerAfterDefender(navTypes.RELOAD, page.route)
	}
	async _closePage(page) {
		if (!(await this._triggerBeforeDefender(navTypes.CLOSE, page.route)))
			return

		let nextFocusPage = null
		if (page === this.store.currentPage) {
			nextFocusPage = this._getNearbyPageByPage(page)
		}

		this._destroyPage(page)

		this._triggerAfterDefender(navTypes.CLOSE, page.route)

		if (nextFocusPage) {
			await this._focusPage(nextFocusPage)
		}
	}
	_destroyPage(page) {
		const pageIndex = this.store.pages.findIndex(_page => _page === page)
		if (pageIndex < 0) return
		this.store.pages.splice(pageIndex, 1)
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
		const currentRoute = this.store.currentPage
			? this.store.currentPage.route
			: null

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
		currentRoute = this.store.currentPage
			? this.store.currentPage.route
			: null
	) {
		this._afterEachs.forEach(defender => {
			defender(type, currentRoute, targetRoute)
		})
	}
	$error(error) {
		try {
			if (!this._logEnable) return
			console.error(`[TabRouter] ${error}`)
		} catch (error) {
			console.error(`[TabRouter] [$error] ${error}`)
		}
	}
	$warn(error) {
		try {
			if (!this._logEnable) return
			console.warn(`[TabRouter] ${error}`)
		} catch (error) {
			console.warn(`[TabRouter] [$warn] ${error}`)
		}
	}
	$reset() {
		try {
			this.store.pages = []
			this.store.currentPage = null
		} catch (error) {
			this.$error(`[$reset] ${error}`)
		}
	}
	$getRoute(location, useWildcard) {
		if (!(location instanceof Location)) {
			location = new Location(location)
		}
		return this._getRouteByLocation(location, useWildcard)
	}
	async open(_location = '') {
		try {
			const location = new Location(_location),
				route = this._getRouteByLocation(location, true)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			let page = this._getPageByRoute(route)

			if (page) {
				route.updateLocation(location)
				await this._focusPage(page)
			} else {
				await this._openPage(route, location)
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

			await this._focusPage(page)
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

			await this._reloadPage(page)
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
	async closeAll() {
		try {
			const pages = Object.assign([], this.store.pages).reverse()

			for (let index = 0; index < pages.length; index++) {
				const page = pages[index]
				await this._closePage(page)
			}
		} catch (error) {
			this.$error(`[closeAll] ${error}`)
		}
	}
	beforeEach(defender) {
		try {
			if (typeOf(defender) !== 'Function') throw `参数必须为Function类型`

			this._addDefender(defender, true)
			return () => this._removeDefender(defender, true)
		} catch (error) {
			this.$error(`[beforeEach] ${error}`)
		}
	}
	afterEach(defender) {
		try {
			if (typeOf(defender) !== 'Function') throw `参数必须为Function类型`

			this._addDefender(defender, false)
			return () => this._removeDefender(defender, false)
		} catch (error) {
			this.$error(`[afterEach] ${error}`)
		}
	}
}

export default Core
