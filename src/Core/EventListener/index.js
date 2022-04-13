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
	constructor({ event, listener = () => {}, once = false } = {}) {
		if (!(listener instanceof Function))
			throw `listener类型为:${typeOf(listener)},必须为Function类型，`

		this._once = !!once
		this._event = event
		this._listener = listener
	}
}

export default EventListener
