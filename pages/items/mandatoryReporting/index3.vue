<template>
	<view>
		
		<u-cell-group>
			<u-cell-item 	v-for="item in items"
							@click="getNext"
							:title-style="{'color':'#000','font-size':'32rpx','letter-spacing':'2rpx'}"
							:title="item.title"></u-cell-item>
		</u-cell-group>
		

	</view>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{"title":"医疗从业者报告"},
					{"title":"教育从业者报告"},
					{"title":"其它行业从业者报告"},
				]
			}
		},
		methods:{
			getNext(){
				uni.navigateTo({
					url:'./mandatoryReporting'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .all{
	// 	background-color: #eee;
	// }
	page {
		background-color: #f5f5f5;
		padding:0 8rpx;
	}
</style>
