import { typeOf } from '#'

class Location {
	get name() {
		return this._name
	}
	get path() {
		return this._path
	}
	get query() {
		return this._query
	}
	get title() {
		return this._title
	}
	constructor(options = '') {
		if (typeOf(options) === 'String') {
			options = {
				path: options
			}
		}

		const { name, path, query = {}, title } = options

		// if (path === '*') throw `path不可使用通配符'*'`

		if (query && typeOf(query) !== 'Object') throw `query必须为Object类型`

		this._name = name
		this._path = path
		this._query = query
		this._title = title
	}
}

export default Location
