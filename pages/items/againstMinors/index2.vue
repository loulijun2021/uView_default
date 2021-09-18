<template>
	<view>
		<view class="all">
			<!-- 大标题部分 -->
			<view class="big_title">
				其他侵害未成年人情形
			</view>

			<!-- 小标题+内容部分 -->
			<view class="main_part1" v-for="item in items_part1">
				<!-- <view class="small_title">{{item.small_title}}</view> -->
				<view class="describe">{{item.describe}} <b>{{item.p_bolder}}</b></view>
			</view>
					
			<view class="footer">
				<button class="footer_button" @click="getNext">发起举报</button>
			</view>
			
		</view>

	</view>
</template>

<script>
	export default {
	    // props: ['actionSheetList', 'title'],
	    // components: {
	    //     textCounter
	    // },
	    data() {
	        return {
				items_part1:[{
					
					"describe":"根据最高人民检察院发布的《未成年人检察工作白皮书（2020）》，2020年，检察机关对侵害未成年人犯罪提起公诉人数居前六位的罪名、人数分别是强奸罪15365人、猥亵儿童罪5880人、寻衅滋事罪5098人、抢劫罪3474人、盗窃罪3033人、交通肇事罪2920人，其他21525人。性侵害案件持续占据较大比例，未成年人出行安全问题也引发高度重视。"
				},{
					
					"describe":"《未成年人保护法》规定：“任何组织或者个人发现不利于未成年人身心健康或者侵犯未成年人合法权益的情形，都有权劝阻、制止或者向公安、民政、教育等有关部门提出检举、控告。”这是一种“自愿报告”，法律鼓励每个人在发现侵害未成年人权益的情况、线索时积极报告。"
				},{
					"describe":"《未成年人保护法》规定，未成年人合法权益受到侵犯，涉及公共利益的，人民检察院有权提起公益诉讼。假如身边存在侵害未成年人权益的行为和现象，您都可以积极举报。"
				
				},{
					"p_bolder":"人民检察院、接收举报线索的工作人员对报案人的信息予以保密。"
				}],
			
			}
		},
		methods:{
			getNext(){
				uni.navigateTo({
					url:'./index3'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.all {
		margin: 20rpx;
		padding: 10rpx;
		font-size: 32rpx;
		letter-spacing: 2rpx;
		font-weight: 500;
		padding-bottom: 100rpx;
		.big_title {
			font-weight: bolder;
			font-size: 48rpx;
			margin-bottom: 60rpx;
		}
		
		.main_part1{
			margin-bottom: 20rpx;
			
			.small_title{
				font-weight: bolder;
				font-size: 36rpx;
				margin-bottom: 20rpx;
			}
			
			.describe{
				line-height: 44rpx;
				
			}
		}
		
		
		
		.footer{
			width: 102%;
			background-color: #FFFFFF;
			height: 110rpx;
			position: fixed;
			bottom: -1px;
			margin-top: 30rpx;
			margin-left: -36rpx;
			padding-top: 16rpx;
			.footer_button {
				background-color: #408ce2;
				color: #FFFFFF;
				letter-spacing: 4rpx;
				font-size: 32rpx;
				width: 95%;
				
			}
		}
		
	}
</style>
