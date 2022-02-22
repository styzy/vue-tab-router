import Vue from 'vue'
import Route from './Route'
import Location from './Location'
import Page from './Page'

class Core {
	constructor(_routes = []) {
		this.store = Vue.observable({
			routes: [],
			pages: [],
			currentPage: null
		})
		this._pageIdSeed = 0
		try {
			this._initRoutes(_routes)
		} catch (error) {
			this.errorHandler(`[init] ${error}`)
		}
	}
	_initRoutes(_routes) {
		_routes.forEach(_route => {
			this.store.routes.push(new Route(_route))
		})
	}
	_getRouteByLocation(location) {
		return this.store.routes.find(
			route =>
				route.name === location.name ||
				route.path === location.path ||
				route.path === '*'
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
	_createPage(route, location) {
		return new Page({ id: this._createPageId(), route, location })
	}
	_openPage(page) {
		this.store.pages.push(page)
	}
	_focusPage(page) {
		this.store.currentPage = page
	}
	_reloadPage(page) {
		const newPage = this._createPage(page.route, page.location),
			pageIndex = this.store.pages.findIndex(_page => _page === page)
		this.store.pages.splice(pageIndex, 1, newPage)
		if (page === this.store.currentPage) {
			this.store.currentPage = newPage
		}
	}
	_closePage(page) {
		if (page === this.store.currentPage) {
			this._focusPage(this._getNearbyPageByPage(page))
		}

		this._destroyPage(page)
	}
	_destroyPage(page) {
		const pageIndex = this.store.pages.findIndex(_page => _page === page)
		if (pageIndex < 0) return
		this.store.pages.splice(pageIndex, 1)
	}
	reset() {
		this.store.pages = []
		this.store.currentPage = null
	}
	errorHandler(error) {
		console.error(`[TabRouter] ${error}`)
	}
	getRoute(location) {
		if (!(location instanceof Location)) {
			location = new Location(location)
		}
		return this._getRouteByLocation(location)
	}
	open(_location = '') {
		try {
			const location = new Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			let page = this._getPageByRoute(route)

			if (page) {
				page.location.update(location)
			} else {
				page = this._createPage(route, location)
				this._openPage(page)
			}

			this._focusPage(page)
		} catch (error) {
			this.errorHandler(`[open] ${error}`)
		}
	}
	focus(_location = '') {
		try {
			const location = new Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			this._focusPage(page)
		} catch (error) {
			this.errorHandler(`[focus] ${error}`)
		}
	}
	reload(_location = '') {
		try {
			const location = new Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			this._reloadPage(page)
		} catch (error) {
			this.errorHandler(`[reload] ${error}`)
		}
	}
	close(_location = '') {
		try {
			const location = new Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			this._closePage(page)
		} catch (error) {
			this.errorHandler(`[close] ${error}`)
		}
	}
	closeAll() {
		try {
			const pages = Object([], this.store.pages).reverse()
			pages.forEach(page => {
				this._closePage(page)
			})
		} catch (error) {
			this.errorHandler(`[closeAll] ${error}`)
		}
	}
}

export default Core
