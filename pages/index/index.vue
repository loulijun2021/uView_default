<template>
	<view>
		<view class="header">
			<view>
				<view class="title">
					检察监督线索举报
				</view>
				<view class="sub-title">
					浙里办，您掌上的事务管家
				</view>
			</view>
			<svg viewBox="0 0 1024 1024" width="64" height="64">
				<path
					d="M48 785.6c-22.4-28.8-20.8-76.8 4.8-100.8C110.4 627.2 208 544 272 544c96 0 424 3.2 443.2 28.8 19.2 24 3.2 100.8-89.6 108.8-65.6 6.4-148.8 4.8-192 8-8 0-9.6 14.4-3.2 19.2 35.2 22.4 104 57.6 187.2 54.4 68.8-3.2 134.4-40 185.6-97.6 43.2-48 107.2-115.2 136-115.2 20.8 0 35.2 4.8 44.8 9.6 8 4.8 9.6 16 4.8 25.6-33.6 56-166.4 260.8-310.4 316.8-121.6 44.8-254.4 30.4-321.6 17.6-27.2-4.8-56 3.2-78.4 22.4l-27.2 24c-20.8 17.6-49.6 14.4-67.2-8L48 785.6z"
					fill="#4E8DF6" p-id="3793"></path>
				<path
					d="M624 480c-3.2 0-6.4-1.6-9.6-4.8L428.8 275.2c-22.4-25.6-35.2-57.6-35.2-92.8 0-35.2 12.8-68.8 36.8-94.4C452.8 62.4 484.8 48 516.8 48c27.2 0 54.4 9.6 75.2 27.2 12.8 11.2 24 24 32 38.4 8-14.4 19.2-28.8 32-38.4C678.4 57.6 704 48 731.2 48c33.6 0 64 14.4 88 40s36.8 59.2 36.8 94.4-12.8 67.2-35.2 92.8L633.6 476.8c-1.6 1.6-4.8 3.2-9.6 3.2z"
					fill="#E1E1DF" p-id="3794"></path>
				<path
					d="M502.4 505.6c-3.2 0-6.4-1.6-9.6-4.8L305.6 299.2c-22.4-25.6-35.2-57.6-35.2-92.8 0-35.2 12.8-68.8 36.8-94.4 24-25.6 54.4-40 88-40 27.2 0 54.4 9.6 75.2 27.2 12.8 11.2 24 24 32 38.4 8-14.4 19.2-28.8 32-38.4 22.4-17.6 48-27.2 75.2-27.2 33.6 0 64 14.4 88 40s36.8 59.2 36.8 94.4-12.8 67.2-35.2 92.8L510.4 502.4c-1.6 1.6-4.8 3.2-8 3.2z"
					fill="#2166CC" p-id="3795"></path>
			</svg>
		</view>
		<view class="top">
			<view class="top_left">
				<view class="top_line"></view>
				<view class="top_title">我要举报</view>
			</view>
			<view class="top_phone" @click="makePhoneCall">非专项举报电话12309</view>
		</view>



		<u-cell-group v-for="(itemCard,indexCard) in items">
			<view class="center_title">{{itemCard.name}}</view>
			<u-cell-item v-for="(item,index) in itemCard.pileReportType" @click="getDetail(item.code)"
				:title="item.name" :title-style="{'font-size':'36rpx','color':'#000','letter-spacing': '2rpx'}"
				:arrow="true">
				<view class="icon" slot="icon" :style="{'background-image': 'url('+baseUrl+item.icon+''}">
				</view>
				<!-- <view class="icon" slot="icon"
					:style="{'background-image': 'url('+item.icon+')'}">
				</view> -->
			</u-cell-item>
		</u-cell-group>


		<!-- 我的举报记录 -->
		<u-cell-group style="display: flex;justify-content: center;">
			<u-cell-item @click="onClick('pages/items/record/record')" title="我的举报记录"
				:title-style="{'font-size':'28rpx','color':'#d2d2d2','letter-spacing': '2rpx'}" style="height: 68rpx;">
			</u-cell-item>
		</u-cell-group>





		<view class="footer">义乌市人民检察院 0579-85329126</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [], //菜单列表
				baseUrl: 'http://172.16.66.142:8180/pile_yw' //图片前缀地址
			}
		},
		mounted() {
			this.getList() //获取菜单列表
		},
		methods: {
			// 获取菜单列表
			async getList() {
				const res = await this.$u.api.request('/baseInfo/category_list')
				this.items = res.content
			},
			getDetail(code) {
				uni.navigateTo({
					url: '../items/main/index2?code=' + code + ''
				})
			},
			onClick(path) {
				this.$u.route({
					url: path
				})
			},
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '12309'
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.icon {
		height: 30px;
		width: 30px;
		border-radius: 8px;
		margin-right: 16px;
		// margin: auto 15px;
		// display: block;
		// color: #FFFFFF;
		// margin-right: 8px;
		// background-color: #409eff;

		// svg {
		// 	margin: 2px;
		// }
		box-sizing: border-box;
		background-size: 100% 100%;
	}


	.header {
		display: flex;
		justify-content: space-between;
		padding: 16px;
		height: 88px;
		background-color: #1c84f1;

		.title {
			font-size: 26px;
			color: #fff;
		}

		.sub-title {
			font-size: 14px;
			color: #e1e1e1;
		}
	}

	.top {
		display: flex;
		justify-content: space-between;
		padding: 26rpx 20rpx;

		.top_left {
			display: flex;
			justify-content: start;

			.top_line {
				border-left: 7rpx solid #255BDA;
				height: 30rpx;
				margin: auto 15rpx;
			}

			.top_title {
				font-weight: bolder;
				font-size: 38rpx;
				letter-spacing: 4rpx;
			}
		}

		.top_phone {
			margin: auto 0;
			color: #4992e3;
		}
	}

	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
		background-color: $u-type-primary;
	}

	.center_title {
		// height: 80rpx;
		line-height: 60rpx;
		color: #c3c3c3;
		margin: auto 30rpx;
		padding-top: 20rpx;
		font-size: 26rpx;
		// margin: auo;
	}

	// .ellipsis::after{
	// 	content: "...";
	// 	display: inline;
	// }
	// .u-cell {
	// 	height: 140rpx;
	// }

	// .wrap {
	// padding: 20rpx 0;
	// background-color: #eee;
	// .u-swiper-image[data-v-a5b2d580]{
	// 	width: 30% !important;
	// }
	// }

	.footer {
		// position: fixed;
		// bottom: 2%;
		// background-color: #f5f5f5;
		line-height: 100rpx;
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		color: #aeb8c6
	}
</style>
