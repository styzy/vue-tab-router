const path = require('path')

module.exports = {
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	chainWebpack: config => {
		config.resolve.alias.set('@', path.resolve('examples')).set('~', path.resolve('packages'))
		config.module.rule('js').include.add('/packages').end().use('babel').loader('babel-loader')
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'stylus',
			patterns: [
				path.resolve(__dirname, './examples/assets/stylus/color.styl'),
				path.resolve(__dirname, './examples/assets/stylus/global.styl')
			]
		}
	}
}
