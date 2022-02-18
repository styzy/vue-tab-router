import typeOf from '../typeOf'

const deepClone = function (param) {
	let type = typeOf(param),
		newParam

	if (type === 'Array') {
		newParam = []
	} else if (type === 'Object') {
		newParam = {}
	} else {
		return param
	}

	if (type === 'Array') {
		for (let index = 0, length = param.length; index < length; index++) {
			newParam.push(deepClone(param[index]))
		}
		return newParam
	} else if (type === 'Object') {
		for (const key in param) {
			newParam[key] = deepClone(param[key])
		}
		return newParam
	}
}

export default deepClone
