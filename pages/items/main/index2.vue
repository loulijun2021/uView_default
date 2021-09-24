<template>
	<view>
		<view class="all">
			<u-parse :html="items.explanation"></u-parse>

			<view class="footer">
				<button class="footer_button" @click="getNext">发起举报</button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: '', //所属父级
				items: [],
			}
		},
		onLoad(option) {
			this.code = option.code
		},
		mounted() {
			this.getIntroduce()
		},
		methods: {
			async getIntroduce() {
				const res = await this.$u.api.request('/baseInfo/category_info?code=' + this.code)
				this.items = res.categoryInfo
				this.content = this.items.explanation
			},
			getNext() {
				uni.navigateTo({
					url: './index3?parentCode=' + this.items.code + '&name=' + this.items.name + ''
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



		.footer {
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
