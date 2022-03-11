<template lang="pug">
.tip(:class="spoiler")
	.title {{ title }}
	.content
		slot
</template>

<script>
export default {
	name: 'Tip',
	props: {
		spoiler: {
			type: String
		}
	},
	computed: {
		title() {
			switch (this.spoiler) {
				default:
				case 'tip':
					return '提示'
				case 'warning':
					return '警告'
				case 'danger':
					return '危险'
				case 'success':
					return '安全'
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.tip
	margin 30px 0
	padding 10px 20px 1px
	border-color $color-info
	border-left-width 6px
	border-left-style solid
	border-radius 4px
	background-color rgba($color-info, 0.1)
	.title
		margin-bottom 10px
		color $color-info
		font-weight 700
		font-size 18px
	.content
		code
			display inline
			padding 0 4px
			border-radius 4px
			font-size 14px
		pre
			code
				color $color-info
	&.danger
		border-color $color-error
		background-color rgba($color-error, 0.1)
		.title
			color $color-error
		.content
			code
				background-color rgba($color-error, 0.1)
				color $color-error
	&.success
		border-color $color-success
		background-color rgba($color-success, 0.1)
		.title
			color $color-success
		.content
			code
				background-color rgba($color-success, 0.1)
				color $color-success
	&.warning
		border-color $color-warn
		background-color rgba($color-warn, 0.1)
		.title
			color $color-warn
		.content
			code
				background-color rgba($color-warn, 0.1)
				color $color-warn
</style>
