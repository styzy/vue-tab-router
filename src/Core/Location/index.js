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
	get hasTitle() {
		return this.title !== undefined
	}
	constructor(options = '') {
		if (typeOf(options) === 'String') {
			options = {
				path: options
			}
		}

		const { name, path, query, title } = options

		// if (path === '*') throw `path不可使用通配符'*'`

		if (query && typeOf(query) !== 'Object') throw `query必须为Object类型`

		this._name = name
		this._path = path
		this._query = query
		this._title = title
	}
	$assign({
		name = this.name,
		path = this.path,
		query = {},
		title = this.title
	} = {}) {
		return new Location({
			name,
			path,
			query,
			title
		})
	}
}

export default Location
