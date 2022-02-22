module.exports = {
	// <always|avoid> - 默认 always，当箭头函数只有一个参数是不省略 ()
	arrowParens: 'avoid',
	// <bool> - 默认值 false，尖括号结束符号>是否在同一行
	bracketSameLine: false,
	// <bool> - 默认值 false 对象中间空格
	bracketSpacing: true,
	// <lf|crlf|cr|auto> - 默认 lf，行位换行符
	endOfLine: 'crlf',
	// <int> - 默认值 80，每行字符数
	printWidth: 80,
	// <always|never|preserve> - 默认值 preserve，即按原样包装markdown文本(保持原本的折行)，never 是软折行(当屏幕放不下时才折行), always 是超过 printWidth 就折行
	proseWrap: 'preserve',
	// <bool> - 默认值 true，表示在每个语句的末尾添加分号
	semi: false,
	// <bool> - 默认值 false，强制html每个属性单独一行
	singleAttributePerLine: true,
	// <bool> - 默认值 false，true则表示使用单引号而不是双引号
	singleQuote: true,
	// <int> - 默认值 2，缩进级别的空格数
	tabWidth: 4,
	// <es5|none|all> - 默认值 es5，即在es5中给数组/对象的末尾元素加上逗号
	trailingComma: 'none',
	// <bool> - 默认值 false，true 表示用tab代替space来作为缩进的单位
	useTabs: true,
	// <bool> - 默认值 false，是否在vue单文件标签内使用缩进
	vueIndentScriptAndStyle: false,
	// -----使用pug格式化插件-----
	plugins: [require.resolve('@prettier/plugin-pug')],
	// <bool> - 默认值 false 对象中间空格
	pugBracketSpacing: true,
	// <bool> - 默认值 false，尖括号结束符号)是否在同一行
	pugBracketSameLine: false,
	// <int> - 默认值 80，每行字符数
	pugPrintWidth: 80,
	// <bool> - 默认值 true，表示在每个语句的末尾添加分号
	pugSemi: false,
	// <bool> - 默认值 false，true则表示使用单引号而不是双引号
	pugSingleQuote: true,
	// <always|as-needed|none> - 默认值 always，是否使用逗号隔开属性
	pugAttributeSeparator: 'none',
	// <keep-all|keep-leading|trim-all> - 默认值 keep-all，是否删除注释前的空格
	pugCommentPreserveSpaces: 'trim-all',
	// <as-is|asc|desc> - 默认值 as-is，属性排序
	pugSortAttributes: 'asc',
	// <auto|vue|vue|angular> - 默认值 auto，框架适配
	pugFramework: 'vue',
	// <bool> - 默认值 false，单文件组件缩进
	pugSingleFileComponentIndentation: false,
	// <as-is|none|all> - 默认值 as-is，空值属性简化
	pugEmptyAttributes: 'none',
	// <bool> - 默认值 []，包含的空值属性会强制使用引号
	pugEmptyAttributesForceQuotes: [],
	// <literal|attribute|as-is> - 默认值 literal，class属性格式化
	pugClassNotation: 'literal',
	// <literal|as-is> - 默认值 literal，id属性格式化
	pugIdNotation: 'literal',
	// <before-attributes|after-attributes> - 默认值 before-attributes，class属性位置
	pugClassLocation: 'before-attributes',
	// <bool> - 默认值 false，div禁止省略
	pugExplicitDiv: false
}
