const typeOf = function (param) {
	return Object.prototype.toString.call(param).match(/\s+(\w+)/)[1]
}

export default typeOf
