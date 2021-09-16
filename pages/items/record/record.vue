<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750" bar-height="2"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				<scroll-view scroll-y style="height: 800rpx;width: 100%; text-align: center;"
					@scrolltolower="onreachBottom">
					{{item.content}}
				</scroll-view>
			</swiper-item>
		</swiper>
		<button class="footer_button" @click="getNext">查询举报</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部',
					content: '我是全部内容'
				}, {
					name: '已提交',
					content: '我是已提交内容'
				}, {
					name: '已接收',
					content: '我是已接收内容'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的

			};
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			getNext() {
				uni.navigateTo({
					url: './queryRecord'
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

	.footer_button {
		background-color: #408ce2;
		color: #FFFFFF;
		letter-spacing: 4rpx;
		font-size: 32rpx;
		margin-top: 30rpx;
		position: fixed;
		width: 91%;
		bottom: 0;
	}
</style>
