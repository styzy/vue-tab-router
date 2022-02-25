import { typeOf } from '#'

class Location {
	constructor(options = '') {
		if (typeOf(options) === 'String') {
			options = {
				path: options
			}
		}

		const { name, path, query = {}, title } = options

		// if (path === '*') throw `path不可使用通配符'*'`

		if (query && typeOf(query) !== 'Object') throw `query必须为Object类型`

		this.name = name
		this.path = path
		this.query = query
		this.title = title
	}
}

export default Location
