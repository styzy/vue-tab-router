import { typeOf } from '#'

let keySeed = 0

class Component {
	get key() {
		return this._key
	}
	get options() {
		return this._options
	}
	get instance() {
		return this._instance
	}
	get hooks() {
		return this._hooks
	}
	constructor(route) {
		this._key = this._createKey()
		this._options = null
		this._instance = null
		this._hooks = {}
		this._initOptions(route)
	}
	_createKey() {
		return `TabRouterViewComponent-${++keySeed}`
	}
	async _initOptions(route) {
		let options = route.$component

		if (typeOf(options) === 'Function') {
			options = (await options()).default
		}

		this._options = options
	}
	$setInstance(vm) {
		if (this._instance) return

		this._instance = vm
	}
	$addHook(name = '', hook = () => {}) {
		if (!name) return

		this._hooks[name] = hook
	}
	$getHook(name) {
		return this._hooks[name] || null
	}
	$removeHook(name = '') {
		if (!name) return

		this._hooks[name] = null
	}
	reload() {
		this._key = this._createKey()
	}
}

export default Component
