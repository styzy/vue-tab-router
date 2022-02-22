export default function (str) {
	let number = parseFloat(str)
	return isNaN(number) ? 0 : number
}
