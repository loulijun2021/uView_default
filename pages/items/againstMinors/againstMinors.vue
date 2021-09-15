<template>
	<formComponent 	title="其他侵害未成年人情形"
					:placeholderSelectTitle="placeholderSelectTitle"
					:actionSheetList="actionSheetList"></formComponent>
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
					text: '其他侵害未成年人行为'
				}]
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
