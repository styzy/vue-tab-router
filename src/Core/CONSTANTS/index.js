export const GLOBAL_INJECTS = {
	ROUTE: `TAB_ROUTER_INJECT_ROUTE`
}

export const NAVIGATE_TYPES = {
	OPEN: Symbol('OPEN'),
	FOCUS: Symbol('FOCUS'),
	RELOAD: Symbol('RELOAD'),
	CLOSE: Symbol('CLOSE')
}

export default { GLOBAL_INJECTS, NAVIGATE_TYPES }
