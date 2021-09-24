<template>
	<view>
		<view class="all">
			<!-- 大标题部分 -->
			<view class="big_title">
				侵害公益部分点位
			</view>

			<!-- 小标题+内容部分 -->
			<view class="main_part1" v-for="item in items_part1">
				<view class="small_title">{{item.small_title}}</view>
				<view class="describe">{{item.describe}}</view>
			</view>
			
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
				items_part1: [{
					"small_title": "安全生产",
					"describe": "企业违法临时搭建物、客运班车、出租车、货运车辆严重超载、电梯无安检证书、公路等交通设施损坏影响安全通行、工厂生产不具备安全条件、燃气瓶运输、储存不合规、消防条件不具备、公共场所安全、充电设施安全、经营场所电气设备安全、工程机械运行隐患、长期阻塞消防通道、飞线充电不整改、森林防火、危化品管理(如汽柴油、乒乓球等易燃易爆品运输、烟花爆竹无证销售、违规存储等)、黑加油网点或车辆、游乐设施安全。"
				}, {
					"small_title": "个人信息保护",
					"describe": "公民隐私信息泄露(泄露住宿、出行等方面记录、跟踪行程等)、公民个人信息泄露(姓名、电话号码身份证号、家庭住址等足以锁定个人的信息)、生物信息保护(人脸信息泄露)。"
				}, {
					"small_title": "生态环境和资源保护",
					"describe": "单位或个人违法排污、往大气违规排放、污染河道或水流、往雨水井排放污水、污泥违规堆放填埋垃圾、汽修厂偷倒废油、造成土壤或水质重金属污染、破坏水质、餐厅违规排放油烟、违法采伐林木、破坏林地、在森林、水源、动物等保护区违法建设、破坏水库环境、违规取用地下水、建筑工程未遮挡覆盖并安装喷淋装置、违规猎捕动物、出售保护动物及其制品、医疗废物违规处置、非法釆矿、工程非法填埋水域。"
				}, {
					"small_title": "食品药品安全",
					"describe": "食品卫生问题、食品标签与实际不符、食品宣称有治疗功效、进口食品无中文标签、营业执照与实际不符、网络订餐买菜问题、无证经营食品药品、餐具消毒、农药管理(如农药瓶随意丢弃、网上卖农药)、违法养殖动物、农业种子管理、影响饮用水安全、肉品未经检疫销售、未经批准销售净水器等水处理设备、城市二次供水安全、自称药妆产品、违法药品广告、处方药无处方。"
				}, {
					"small_title": "国有财产",
					"describe": "税款流失、偷盗国有设施、毁损国有文物、国家补贴被骗或流失。"
				}, {
					"small_title": "国有土地使用权出让",
					"describe": "欠缴出让金、出让工业土地上违反规划建设(企业建筑无权属证明)。"
				}, {
					"small_title": "公共卫生",
					"describe": "可能引发不特定人群疫病风险。"
				}, {
					"small_title": "英雄烈士保护",
					"describe": "网上辱骂、讽刺、诋毁义乌籍或在义乌牺牲的英雄烈士,英烈纪念设施损毁、影响英烈纪念场所秩序烈士墓破损。"
				}, {
					"small_title": "其他侵害不特定人群的公共利益",
					"describe": "充值卡未消费商家跑路、教育辅导站违规收费、健身器材毁损影响安全、破坏军用设施、对机场运行造成影响等影响飞行安全(如未经审批在机场周边飞无人机、放气球等)、破坏珍贵历史遗迹、毁损文化遗产、建筑安全、公共安全(如反恐)、破坏扶贫。"
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

		.main_part1 {
			margin-bottom: 20rpx;

			.small_title {
				font-weight: bolder;
				font-size: 36rpx;
				margin-bottom: 20rpx;
			}

			.describe {
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
