<template>
	<formComponent 	title="侵害公益专项" 
					:placeholderSelectTitle="placeholderSelectTitle"
					:actionSheetList="actionSheetList">
	</formComponent>
</template>

<script>
	import formComponent from '../formComponent.vue'
	export default {
		components: {
			formComponent
		},
		data() {
			return {
				actionSheetList: [{
					value: 7001,
					text: '安全生产'
				}, {
					value: 7002,
					text: '个人信息保护'
				}, {
					value: 7003,
					text: '生态环境和资源保护',
				}, {
					value: 7004,
					text: '食品药品安全',
				}, {
					value: 7005,
					text: '国有财产'
				}, {
					value: 7006,
					text: '国有土地使用权出让',
				}, {
					value: 7007,
					text: '英雄烈士保护',
				}, {
					value: 7008,
					text: '其他侵害不特定人群的公共利益',
				}],
			}
		},
		onLoad(option) {
			this.placeholderSelectTitle = option.title
		},
		methods: {

		},

	}
</script>

<style>

</style>
