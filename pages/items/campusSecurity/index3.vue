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
					{"title":"校园食品安全"},
					{"title":"校车、校园设施安全"},
					{"title":"校园周边环境安全"},
					{"title":"校外培训、辅导站问题"},
				]
			}
		},
		methods:{
			getNext(){
				uni.navigateTo({
					url:'./campusSecurity'
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
