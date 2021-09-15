<template>
	<view>
		
		<u-cell-group>
			<u-cell-item 	v-for="item in items"
							@click="getNext(item.title)"
							:title-style="{'color':'#000','font-size':'32rpx','letter-spacing':'2rpx'}"
							:title="item.title"></u-cell-item>
		</u-cell-group>
		
		<view class="footer">
			<view @click="getBack">查看专项介绍</view>
			<view @click="makePhoneCall">非专项举报电话12309</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					// {"title":"性侵未成年人"},
					// {"title":"拐骗、拐卖未成年人"},
					// {"title":"家庭暴力"},
					// {"title":"校园欺凌"},
					// {"title":"违法雇佣未成年人"},
					// {"title":"未成年人进入不适宜场所"},
					{"title":"其他侵害未成年人行为"},
				]
			}
		},
		methods:{
			getNext(title){
				uni.navigateTo({
					url:'./againstMinors?title='+title+''
				})
			},
			getBack(){
				uni.navigateBack({
					
				})
			},
			makePhoneCall(){
				uni.makePhoneCall({
					phoneNumber: '12309'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f5f5f5;
		padding:0 8rpx;
	}
	
	.footer{
		position: fixed;
		bottom: 2%;
		width: 100%;
		letter-spacing: 2rpx;
		text-align: center;
		line-height: 100rpx;
		color: #4992e3;
	}
</style>
