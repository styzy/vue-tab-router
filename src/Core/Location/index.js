import { deepCompare, typeOf } from '#'

class Location {
	constructor(options) {
		if (typeOf(options) === 'String') {
			options = {
				path: options
			}
		}
		const { name, path, query, title } = options

		if (!name && !path) throw 'name和path必须至少有一个'

		if (path === '*') throw `path不可使用通配符'*'`

		this.name = name
		this.path = path
		this.query = query
		this.title = title
	}
	_updateTitle(title) {
		if (title === undefined) return
		this.title = title
	}
	_updateQuery(query) {
		if (query !== undefined && typeof query !== 'object') return
		if (deepCompare(this.query, query)) return
		this.query = query
	}
	syncByRoute({ defaultTitle }) {
		if (this.title === undefined) {
			this.title = defaultTitle
		}
	}
	update({ title, query }) {
		this._updateTitle(title)
		this._updateQuery(query)
	}
}

export default Location
