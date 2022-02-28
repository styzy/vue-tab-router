const path = require('path')

module.exports = {
	lintOnSave: false,
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', path.resolve('examples'))
			.set('~', path.resolve('src'))
			.set('#', path.resolve('src/utils'))
		config.module
			.rule('js')
			.include.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
		// config.module
		// 	.rule('fonts')
		// 	.use('url-loader')
		// 	.tap(options => {
		// 		options.limit = 30 * 1024
		// 		return options
		// 	})
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'stylus',
			patterns: [
				path.resolve(__dirname, './examples/assets/stylus/color.styl'),
				path.resolve(__dirname, './examples/assets/stylus/global.styl')
			]
		}
	},
	devServer: {
		overlay: {
			warning: false,
			errors: false
		}
	},
	runtimeCompiler: true,
	configureWebpack: {
		output: {
			libraryExport: 'default'
		}
	},
	css: {
		extract: false
	}
}
