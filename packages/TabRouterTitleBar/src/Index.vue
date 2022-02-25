<template lang="pug">
.tab-router-title-bar(ref="container")
	.tab-router-title-bar-scroll-wrapper(
		:style="{ marginLeft: `${scrollOffset}px` }"
		@DOMMouseScroll.stop="scrollHandler"
		@mousewheel.stop="scrollHandler"
		ref="scrollWrapper"
	)
		TabRouterTitle(
			:key="page.id"
			:page="page"
			@contextmenu="renderContextmenu"
			v-for="page in pages"
		)
			template(#default="titleProps" v-if="$scopedSlots.title")
				slot(name="title" v-bind="titleProps")
			template(v-else-if="$slots.title")
				slot(name="title")
		TabRouterTitleContextmenu(
			:left="contextmenu.left"
			:page="contextmenu.page"
			:top="contextmenu.top"
			v-if="contextmenu.isShow"
		)
			template(#default="contextmenuProps" v-if="$scopedSlots.contextmenu")
				slot(name="contextmenu" v-bind="contextmenuProps")
			template(v-else-if="$slots.contextmenu")
				slot(name="contextmenu")
</template>

<script>
import { core } from '~/mixins'
import { px2number } from '#'

export default {
	name: 'TabRouterTitleBar',
	components: {
		TabRouterTitle: () => import('./components/TabRouterTitle'),
		TabRouterTitleContextmenu: () =>
			import('./components/TabRouterTitleContextmenu')
	},
	mixins: [core],
	data() {
		return {
			scrollOffset: 0,
			scrollOffsetUnit: 80,
			isShowContextmenu: false,
			contextmenu: {
				isShow: false,
				top: 0,
				left: 0,
				page: null
			}
		}
	},
	computed: {
		pageLength() {
			if (!this.pages) return 0
			return this.pages.length
		}
	},
	created() {
		this.$watch('pageLength', (newLength, oldLength) => {
			if (newLength > oldLength) {
				this.$nextTick(() => {
					this.scrollToBottom()
				})
			}
			this.scrollFixOnResize()
		})
		this.$watch('currentPage', currentPage => {
			if (!currentPage) return
			const index = this.pages.findIndex(page => page === currentPage),
				{ isIn, isLeft } = this.isIndexTitleInView(index)
			if (isIn) return
			this.scrollToIndex(index, isLeft)
		})
	},
	mounted() {
		this.bindWindowResize()
	},
	destroyed() {
		this.unbindWindowResize()
	},
	methods: {
		scrollHandler(event = window.event) {
			let wheelDelta = event.wheelDelta || -event.detail * 24,
				isUp = wheelDelta > 0

			this.scroll(isUp)
		},
		scrollToTop() {
			this.scroll(true, 999999999)
		},
		scrollToBottom() {
			this.scroll(false, 999999999)
		},
		scrollToIndex(index, isLeft) {
			this.scroll(!isLeft, 999999999, index)
		},
		isIndexTitleInView(index) {
			if (-this.scrollOffset >= this.getTitleWidth(0, index)) {
				return {
					isIn: false,
					isLeft: true
				}
			}

			if (
				this.getTitleWidth(0, index - 1) >=
				this.getContainerWidth() - this.scrollOffset
			) {
				return {
					isIn: false,
					isLeft: false
				}
			}

			return {
				isIn: true,
				isLeft: false
			}
		},
		scroll(isUp, offset = this.scrollOffsetUnit, includeIndex = -1) {
			const isInclude = includeIndex !== -1
			let offsetMax = Math.max(
					this.getTitleWidth() - this.getContainerWidth(),
					0
				),
				offsetMin = 0

			if (isInclude) {
				// offsetMax =
				offsetMax = Math.min(
					offsetMax,
					this.getTitleWidth(0, includeIndex - 1)
				)
				offsetMin = Math.max(
					offsetMin,
					this.getTitleWidth(0, includeIndex) -
						this.getContainerWidth()
				)
			}

			if (isUp) {
				this.scrollOffset = Math.min(
					Math.max(this.scrollOffset + offset, -offsetMax),
					-offsetMin
				)
			} else {
				this.scrollOffset = Math.max(
					this.scrollOffset - offset,
					-offsetMax
				)
			}
		},
		getContainerWidth() {
			return px2number(
				window.getComputedStyle(this.$refs.container)['width']
			)
		},
		getTitleWidth(rangeStart = 0, rangeEnd = this.pages.length - 1) {
			let width = 0,
				el_titleList = this.$refs.scrollWrapper.children

			new Array(...el_titleList).forEach((el, index) => {
				if (index >= rangeStart && index <= rangeEnd) {
					width += this.getComputedWidth(el)
				}
			})

			return width
		},
		getComputedWidth(el) {
			let styles = window.getComputedStyle(el),
				width =
					px2number(styles['width']) +
					px2number(styles['marginLeft']) +
					px2number(styles['marginRight'])

			if (styles['boxSizing'] !== 'border-box') {
				width +=
					px2number(styles['paddingLeft']) +
					px2number(styles['paddingRight']) +
					px2number(styles['borderLeftWidth']) +
					px2number(styles['borderRightWidth'])
			}

			return width
		},
		bindWindowResize() {
			window.addEventListener('resize', this.scrollFixOnResize)
		},
		unbindWindowResize() {
			window.removeEventListener('resize', this.scrollFixOnResize)
		},
		scrollFixOnResize() {
			if (this.getTitleWidth() < this.getContainerWidth()) {
				this.scrollToTop()
			} else {
				if (
					-this.scrollOffset >
					this.getTitleWidth() - this.getContainerWidth()
				) {
					this.scrollToBottom()
				}
			}
		},
		renderContextmenu({ clientY, clientX }, page) {
			this.contextmenu.page = page
			this.contextmenu.top = clientY
			this.contextmenu.left = clientX
			this.contextmenu.isShow = true

			this.bindContextmenuDestroyListener()
		},
		destroyContextmenu() {
			this.unbindContextmenuDestroyListener()

			this.contextmenu.isShow = false
		},
		bindContextmenuDestroyListener() {
			window.addEventListener('click', this.destroyContextmenu)
			window.addEventListener(
				'contextmenu',
				this.destroyContextmenu,
				true
			)
		},
		unbindContextmenuDestroyListener() {
			window.removeEventListener('click', this.destroyContextmenu)
			window.removeEventListener(
				'contextmenu',
				this.destroyContextmenu,
				true
			)
		}
		// createContextmenu(event, page) {
		// 	const { clientY: top, clientX: left } = event,
		// 		Contextmenu = Vue.extend(TabRouterTitleContextmenu)

		// 	this.contextmenuIns = new Contextmenu({
		// 		propsData: {
		// 			top: top,
		// 			left: left,
		// 			page: page,
		// 			slot: this.$slots.contextmenu,
		// 			scopedSlot: this.$scopedSlots.contextmenu
		// 		},
		// 		slot: this.$slots.contextmenu,
		// 		scopedSlot: this.$scopedSlots.contextmenu
		// 	}).$mount()
		// },
		// renderContextmenu(event, page) {
		// 	console.log('render cm', page.route.title)

		// 	this.createContextmenu(event, page)

		// 	document.body.appendChild(this.contextmenuIns.$el)

		// 	this.bindContextmenuDestroyListener()
		// },
		// destroyContextmenu() {
		// 	this.unbindContextmenuDestroyListener()
		// 	console.log('destroy cm')

		// 	if (!this.contextmenuIns) return
		// 	document.body.removeChild(this.contextmenuIns.$el)
		// 	this.contextmenuIns = null
		// },
		// bindContextmenuDestroyListener() {
		// 	window.addEventListener('click', this.destroyContextmenu)
		// 	window.addEventListener(
		// 		'contextmenu',
		// 		this.destroyContextmenu,
		// 		true
		// 	)
		// },
		// unbindContextmenuDestroyListener() {
		// 	window.removeEventListener('click', this.destroyContextmenu)
		// 	window.removeEventListener(
		// 		'contextmenu',
		// 		this.destroyContextmenu,
		// 		true
		// 	)
		// }
	}
}
</script>

<style lang="stylus">
.tab-router-title-bar
	overflow hidden
	.tab-router-title-bar-scroll-wrapper
		baseTrans(0.15s)

		overflow hidden
		margin-left 0
		background #F4F5F6
		white-space nowrap
</style>
