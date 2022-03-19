import { typeOf } from '#'

class EventListener {
	get event() {
		return this._event
	}
	get listener() {
		return this._listener
	}
	get once() {
		return this._once
	}
	get emitted() {
		return this._emitted
	}
	set emitted(value) {
		if (typeOf(value) !== 'Function') return
		this._emitted = value
	}
	constructor({ event, listener = () => {}, once = false } = {}) {
		if (typeOf(listener) !== 'Function')
			throw `listener类型为:${typeOf(listener)},必须为Function类型，`

		this._once = !!once
		this._event = event
		this._listener = this._createListener(listener)
		this._emitted = null
	}
	_createListener(listener) {
		return (...args) => {
			listener(...args)

			this.emitted && this.emitted()
		}
	}
}

export default EventListener
