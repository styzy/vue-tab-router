import { typeOf, deepClone } from '#'

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
	constructor(route, { mounted = () => {}, destroyed = () => {} } = {}) {
		this._key = this._createKey()
		this._options = null
		this._instance = null
		this.mounted = mounted
		this.destroyed = destroyed
		this._initOptions(route)
	}
	_createKey() {
		return `TabRouterViewComponent-${++keySeed}`
	}
	async _initOptions(route) {
		const that = this

		let options = route.$component

		if (typeOf(options) === 'Function') {
			options = (await options()).default
		}

		options = deepClone(options)

		options.mixins = options.mixins || []

		options.mixins.push({
			beforeCreate() {
				that._instance = this
			},
			mounted() {
				that.mounted()
			},
			destroyed() {
				that.destroyed()
			}
		})

		this._options = options
	}
	reload() {
		this._key = this._createKey()
	}
}

export default Component
