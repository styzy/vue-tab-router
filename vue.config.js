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
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'stylus',
			patterns: [
				path.resolve(__dirname, './examples/assets/stylus/color.styl'),
				path.resolve(__dirname, './examples/assets/stylus/global.styl')
			]
		},
		'markdown-loader': {
			// 渲染的组件的根节点标签
			wrapperTag: 'div',
			// 渲染的组件的根节点class
			wrapperClassName: 'markdown-body',
			// 是否使用缓存，默认为true
			useCache: false,
			// 块设置
			container: {
				// demo块
				demo: {
					// 块名字
					spoiler: 'demo',
					// 渲染的标签名
					tag: 'Demo'
				},
				// 自定义的块
				customBlocks: [
					{
						spoiler: 'tip',
						tag: 'Tip'
					},
					{
						spoiler: 'success',
						tag: 'Tip'
					},
					{
						spoiler: 'warning',
						tag: 'Tip'
					},
					{
						spoiler: 'danger',
						tag: 'Tip'
					}
				]
			}
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
