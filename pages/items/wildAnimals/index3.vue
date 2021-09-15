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
					{"title":"安全生产"},
					{"title":"个人信息保护"},
					{"title":"生态环境和资源保护"},
					{"title":"食品药品安全"},
					{"title":"国有财产"},
					{"title":"国有土地使用权出让"},
					{"title":"英雄烈士保护"},
					{"title":"其他侵害不特定人群的公共利益"},
				]
			}
		},
		methods:{
			getNext(title){
				uni.navigateTo({
					url:'./wildAnimals?title='+title+''
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
