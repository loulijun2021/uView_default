<template>
	<view>
		<view class="top">
			<u-search placeholder="请输入举报编码" shape="square" @search="searchKeyWord(keyword)"
				@custom="searchKeyWord(keyword)" :show-action="true" action-text="搜索" :animation="false"
				:clearabled="true" style="padding: 12rpx;letter-spacing: 2rpx;" :action-style="{'color':'#3184e0'}"
				v-model="keyword"></u-search>

			<!-- <view :v-show="flag" style="text-align: center;">未查到相关记录</view> -->
			<view v-if="flag===false">
				<view>
					
				</view>
			</view>
			<view v-else>
				<view class="noRecord">
					未查到相关记录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				flag: false
			}
		},
		methods: {
			searchKeyWord(keyword) {
				console.log(keyword)
				if (keyword !== '') {
					
					this.flag = true
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #f5f5f5;
	}
	.noRecord{
		color: #a1a1a1;
		margin-top: 300rpx ;
		letter-spacing: 4rpx;
		margin-left: 33%;
	}
	.top {
		height: 90rpx;
		background-color: #FFFFFF;

	}
</style>
