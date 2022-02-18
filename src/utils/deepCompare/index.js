const deepCompare = function (origin, target) {
	if (typeof target === 'object') {
		if (typeof origin !== 'object') return false
		if (Object.keys(origin).length !== Object.keys(target).length) return false
		for (let key in target) {
			if (!deepCompare(origin[key], target[key])) {
				return false
			}
		}
		return true
	} else return origin === target
}

export default deepCompare
