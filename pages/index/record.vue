<template>
	<view>
		</swiper>


		<u-table bg-color="#f5f5f5" border-color="#f5f5f5">
			<u-tr>
				<u-th>线索描述</u-th>
				<u-th>状态</u-th>
			</u-tr>
			<u-tr v-for="item in items">
				<u-td>xxxxxxxxxxx1...</u-td>
				<u-td>未处理</u-td>
			</u-tr>
		</u-table>

		<!-- <view class="footer">
			<button class="footer_button" @click="getNext">查询举报</button>
		</view> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					{describe:'xxxxxxxxxxx1...',},
					]
			};
		},
		methods: {

			getNext() {
				uni.navigateTo({
					url: './recordDetail'
				})
			}
		}
	};
</script>

<style scoped lang="scss">
	page {
		background-color: #f5f5f5;
		// padding:0 8rpx;

	}

	.u-td,
	.u-th {
		margin: auto;
	}

	.noRecord {
		color: #a1a1a1;
		margin-top: 300rpx;
		letter-spacing: 4rpx;
	}

	// .footer{
	// 	width: 100%;
	// 	background-color: #FFFFFF;
	// 	height: 110rpx;
	// 	position: fixed;
	// 	bottom: -1px;
	// 	margin-top: 30rpx;

	// 	padding-top: 16rpx;
	// 	.footer_button {
	// 		background-color: #408ce2;
	// 		color: #FFFFFF;
	// 		letter-spacing: 4rpx;
	// 		font-size: 32rpx;
	// 		width: 95%;

	// 	}
	// }
</style>
