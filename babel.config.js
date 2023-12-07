const presets = ['@vue/cli-plugin-babel/preset']

const plugins = []

module.exports = api => {
	api.cache(false)

	return {
		presets,
		plugins
	}
}
