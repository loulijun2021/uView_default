<template>
	<view>

		<u-cell-group>
			<u-cell-item v-for="item in items" @click="getDetail(item.name)"
				:title-style="{'color':'#000','font-size':'32rpx','letter-spacing':'2rpx'}" :title="item.name">
			</u-cell-item>
		</u-cell-group>

		<view class="footer">
			<view @click="getBack">查看专项介绍</view>
			<view @click="makePhoneCall">非专项举报电话12309</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [],
				parentCode: '' ,//父节点
				parentName:'',//父节点名称
			}
		},
		onLoad(option) {
			this.parentCode = option.parentCode
			this.parentName = option.name
		},
		mounted() {
			this.getList()
		},
		methods: {
			async getList() {
				const res = await this.$u.api.request('/baseInfo/subcategory_list?parentCode=' + this.parentCode)
				this.items=res.Subcategory
			},
			getDetail(name) {
				uni.navigateTo({
					url: './index4?name=' + name + '&parentName='+this.parentName+'&parentCode='+this.parentCode+''
				})
			},
			getBack() {
				uni.navigateBack({

				})
			},
			makePhoneCall() {
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
		padding: 0 8rpx;
	}

	.footer {
		position: fixed;
		bottom: 2%;
		width: 100%;
		letter-spacing: 2rpx;
		text-align: center;
		line-height: 100rpx;
		color: #4992e3;
	}
</style>
