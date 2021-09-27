<template>
	<formComponent :title="parentName" :placeholderSelectTitle="placeholderSelectTitle"
		:actionSheetList="actionSheetList"></formComponent>
</template>

<script>
	import formComponent from './formComponent.vue'
	export default {
		components: {
			formComponent
		},
		data() {
			return {
				items: [],
				parentName: '', //父节点名称
				parentCode: '', //父节点代码
				actionSheetList: [],
			}
		},
		onLoad(option) {
			this.placeholderSelectTitle = option.name
			this.parentName = option.parentName
			this.parentCode = option.parentCode
		},
		mounted() {
			this.getList()
		},
		methods: {
			async getList() {
				const res = await this.$u.api.request('/baseInfo/subcategory_list?parentCode=' + this.parentCode)
				for (var i = 0; i < res.Subcategory.length; i++) {
					this.actionSheetList.push({
						value: res.Subcategory[i].code,
						text: res.Subcategory[i].name
					})
				}
			}
		}
	}
</script>

<style>

</style>
