<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750" bar-height="2"></u-tabs-swiper>
		</view>

		<swiper  style="height: 700px;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				<scroll-view scroll-y style="height: 100%; width: 100%; text-align: center;"
					@scrolltolower="onreachBottom">
					
					<u-table style="" bg-color="#f5f5f5" border-color="#f5f5f5">
						<u-tr class="u-tr">
							<u-th class="u-th">时间</u-th>
							<u-th class="u-th">类型</u-th>
							<u-th class="u-th" v-if="index===0">状态</u-th>
						</u-tr>
						
						<!-- <view v-if="item.items.time===undefined">
							<view class="noRecord">暂无举报记录</view>
						</view> -->
						<view>
							<u-tr class="u-tr" v-for="it in item.items">
								<u-td class="u-td">{{it.time}}</u-td>
								<u-td class="u-td">{{it.type}}</u-td>
								<u-td class="u-td" v-if="index===0">{{it.status}}</u-td>
							</u-tr>
						</view>
						
					</u-table>
					
				</scroll-view>
			</swiper-item>
		</swiper>

		<view class="footer">
			<button class="footer_button" @click="getNext">查询举报</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部',
					// items:[{time:'',type:'',status:''}]
					items:[
						{time: '2021-01-01',type: '其他侵害不特定人群的公共利益',status: '已接收'},
						{time: '2021-01-02',type: '公益诉讼',status: '已接收'},
						{time: '2021-01-03',type: '校园安全',status: '已接收'},
						{time: '2021-03-01',type: '监护缺失',status: '已提交'},
						{time: '2021-04-01',type: '校园安全',status: '已提交'},
						{time: '2021-05-01',type: '校园安全',status: '已提交'},
						{time: '2021-06-06',type: '监护侵害、监护不当',status: '已提交'},
						{time: '2021-01-01',type: '校园安全',status: '已接收'},
						{time: '2021-01-02',type: '公益诉讼',status: '已接收'},
						{time: '2021-01-03',type: '校园安全',status: '已接收'},
						{time: '2021-03-01',type: '监护缺失',status: '已提交'},
						{time: '2021-04-01',type: '校园安全',status: '已提交'},
						{time: '2021-05-01',type: '校园安全',status: '已提交'},
						{time: '2021-06-06',type: '监护侵害、监护不当',status: '已提交'},
						{time: '2021-01-01',type: '测试测试测试测试2311',status: '已接收'},
						{time: '2021-01-02',type: '公益',status: '已接收'},
						{time: '2021-01-03',type: '测试测试测试测试',status: '已接收'},
						{time: '2021-03-01',type: '监护缺失',status: '已提交'},
						{time: '2021-04-01',type: '安全ss',status: '已提交'},
						{time: '2021-05-01',type: '校园全',status: '已提交'},
						{time: '2021-06-06',type: '监护测试数据侵害、监护不当',status: '已提交'},
						{time: '2021-01-01',type: '校园安全',status: '已接收'},
						{time: '2021-01-02',type: '公益诉讼',status: '已接收'},
						{time: '2021-01-03',type: '校园安全校园安全',status: '已接收'},
						{time: '2021-03-01',type: '监护缺失222',status: '已提交'},
						{time: '2021-04-01',type: '校园安全1',status: '已提交'},
						{time: '2021-05-01',type: '校园安全',status: '已提交'},
						{time: '2021-06-06',type: '监护侵害、监护不当',status: '已提交'},
						{time: '2021-01-02',type: '公益诉讼',status: '已提交'},
						{time: '2021-01-03',type: '校园安全',status: '已提交'},
						{time: '2021-03-01',type: '监护缺失',status: '已提交'},
						{time: '2021-04-01',type: '校园安全',status: '已提交'},
						{time: '2021-05-01',type: '校园安全',status: '已提交'},
						{time: '2021-06-06',type: '监护侵害、监护不当',status: '已提交'},
						{time: '2021-01-01',type: '校园安全',status: '已提交'},
						{time: '2021-01-02',type: '公益诉讼',status: '已提交'},
						{time: '2021-01-03',type: '校园安全',status: '已提交'},
						{time: '2021-03-01',type: '监护缺失',status: '已提交'},
						{time: '2021-04-01',type: '校园安全',status: '已提交'},
						{time: '2021-05-01',type: '校园安全',status: '已提交'},
						{time: '2021-06-06',type: '监护侵害、监护不当',status: '已提交'},
					]
					
				}, {
					name: '已提交',
					items:[
						{time: '2021-01-01',type: '其他侵害不特定人群的公共利益'},
						{time: '2021-01-02',type: '公益诉讼'},
						{time: '2021-01-03',type: '校园安全'},
						{time: '2021-03-01',type: '监护缺失'},
						{time: '2021-04-01',type: '校园安全'},
						{time: '2021-05-01',type: '校园安全'},
						{time: '2021-06-06',type: '监护侵害、监护不当'},
						{time: '2021-01-01',type: '其他侵害不特定人群的公共利益'},
						{time: '2021-01-02',type: '公益诉讼'},
						{time: '2021-01-03',type: '校园安全'},
						{time: '2021-03-01',type: '监护缺失'},
						{time: '2021-04-01',type: '校园安全'},
						{time: '2021-05-01',type: '校园安全'},
						{time: '2021-06-06',type: '监护侵害、监护不当'},
						
					]
				}, {
					name: '已接收',
					items:[
						{time: '2021-01-01',type: '其他侵害不特定人群的公共利益'},
						{time: '2021-01-03',type: '校园安全'},
						{time: '2021-03-01',type: '监护缺失'},
						{time: '2021-04-01',type: '校园安全'},
						{time: '2021-05-01',type: '校园安全'},
						{time: '2021-06-06',type: '监护侵害、监护不当'},
						{time: '2021-01-01',type: '其他侵害不特定人群的公共利益'},
						{time: '2021-01-02',type: '公益诉讼'},
						{time: '2021-01-03',type: '校园安全'},
						{time: '2021-03-01',type: '监护缺失'},
						{time: '2021-04-01',type: '校园安全'},
						{time: '2021-05-01',type: '校园安全'},
						{time: '2021-06-06',type: '监护侵害、监护不当'},		
					]
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

	.u-td,.u-th{
		margin: auto;
	}
	
	.noRecord{
		color: #a1a1a1;
		margin-top: 300rpx;
		letter-spacing: 4rpx;
	}

		.footer{
			width: 100%;
			background-color: #FFFFFF;
			height: 110rpx;
			position: fixed;
			bottom: -1px;
			margin-top: 30rpx;
			
			padding-top: 16rpx;
			.footer_button {
				background-color: #408ce2;
				color: #FFFFFF;
				letter-spacing: 4rpx;
				font-size: 32rpx;
				width: 95%;
				
			}
		}
</style>
