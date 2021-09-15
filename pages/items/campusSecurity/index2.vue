<template>
	<view>
		<view class="all">
			<!-- 大标题部分 -->
			<view class="big_title">
				校园安全专项
			</view>
			
			<view style="margin-bottom: 40rpx;">
				<b>
					校园安全问题，始终是家长、学校乃至整个社会关注关心的重要问题。校园安全问题不仅包括学生在校园内的安全，也包括学生们在放学离校后，能够安全无虞地回到家中。为孩子打造舒适、安全的校园内外环境，需要全社会的共同努力。
				</b>
			</view>
			
			<view class="main_part2" v-for="item in items_part2">
				<view class="small_part2">
					<view class="small_title">{{item.small_title}}</view>
					<view class="small_title_describe">{{item.small_title_describe}}</view>
				</view>

				<view class="describe" v-for="it in item.describe">{{it.des}}<b>{{it.pp_bolder}}</b></view>
			</view>

			<button class="footer_button" @click="getNext">发起举报</button>

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
				items_part2: [{
					"small_title": "1、校园食品安全：",
					"small_title_describe": "校内餐饮（食堂、小卖部）、校园周边餐馆、流动摊贩等",
					"describe": [
						{"des": "（1）学校集中用餐应当坚持公益便利的原则，围绕采购、贮存、加工、配送、供餐等关键环节，健全学校食品安全风险防控体系，保障食品安全，促进营养健康。"},
						{"des": "（2）中小学、幼儿园一般不得在校内设置小卖部、超市等食品经营场所，确有需要设置的，应当依法取得许可，并避免售卖高盐、高糖及高脂食品。【学校食品安全与营养健康管理规定】。"},
						{"des":	"（3）校园周边的流动摊贩、餐馆、超市等是否存在违规经营、销售有毒有害食品、销售过期食品等违法违规行为。"}
					]
				},{
					"small_title": "2、校车、校园设施安全：",
					"small_title_describe": "消防设施、疏散设施、应急照明、实验设施、运动设施、建筑设施",
					"describe": [
						{"des": "（1）学校的教育教学、生活服务设施设备必须符合安全、卫生标准,并按规定配备消防设备，保证安全通道的畅通。"},
						{"des": "（2）学校举办者应当为学校配备符合标准的教育教学、生活服务设施设备,提供必需的人员、经费保障;学校自行添置的设施设备亦应当符合安全、卫生标准。"},
						{"des":	"（3）学校应当加强对设施设备的管理和保养,确保其使用安全；对有危险性的设施设备、教学科研实验仪器及其他有毒有害物品、易燃易爆物品，必须建立健全使用和管理制度,并实行严格管理。"},
						{"des":	"（4）学校应当在具有危险性的教育教学、生活服务设施设备上及校内施工区,设置明显的安全警示标志。"},
					]
				},{
					"small_title": "3、校园周边环境安全：",
					"small_title_describe": "文化环境（网吧、KTV歌厅、非法出版物）、交通环境、治安环境、卫生环境",
					"describe": [
						{"des": "（1）《未成年人保护法》第五十八条规定：“学校、幼儿园周边不得设置营业性娱乐场所、酒吧、互联网上网服务营业场所等不适宜未成年人活动的场所。营业性歌舞娱乐场所、酒吧、互联网上网服务营业场所等不适宜未成年人活动场所的经营者，不得允许未成年人进入；游艺娱乐场所设置的电子游戏设备，除国家法定节假日外，不得向未成年人提供。经营者应当在显著位置设置未成年人禁入、限入标志；对难以判明是否是未成年人的，应当要求其出示身份证件。”"},
						{"des": "（2）《未成年人保护法》第五十九条规定：“学校、幼儿园周边不得设置烟、酒、彩票销售网点。禁止向未成年人销售烟、酒、彩票或者兑付彩票奖金。烟、酒和彩票经营者应当在显著位置设置不向未成年人销售烟、酒或者彩票的标志；对难以判明是否是未成年人的，应当要求其出示身份证件。”"},
					]
				},{
					"small_title": "4、校外培训、辅导站问题：",
					"small_title_describe": "教育教学内容、办学资质、教学资质、收费标准、卫生条件、餐饮条件、消防条件",
					"describe": [
						{"des":"《未成年人保护法》规定：“学校不得占用国家法定节假日、休息日及寒暑假期，组织义务教育阶段的未成年学生集体补课，加重其学习负担。幼儿园、校外培训机构不得对学龄前未成年人进行小学课程教育。”"},
						{"des":"根据义乌市“双减”工作就校外培训机构有关事项的公告：校外培训机构不得占用国家法定节假日、休息日及寒暑假期组织学科类培训。线下培训时间不得晚于20:30，线上培训时间不得晚于21:00；校外培训机构不得在主流媒体、新媒体、网络平台、公共场所、居民区发布广告，不得在中小学校、幼儿园内开展商业广告活动，不得利用中小学和幼儿园的教材、教辅材料、练习册、文具、教具、校服、校车等发布或变相发布广告；校外培训机构不得以虚构原价、虚假折扣、虚假宣传等方式进行不正当竞争；校外培训机构不得一次性收取超过3个月或60课时以上的培训费用；严禁校外培训机构超标超前培训；严禁校外培训机构开展面向学龄前儿童的线上培训，严禁以学前班、幼小衔接班、思维训练班等名义面向学龄前儿童开展线下学科类（含外语）培训；严禁非学科类培训机构从事学科类培训；严禁校外培训机构提供境外教育课程，严禁聘请在境外的外籍人员开展培训活动。"},
						{"des":"此外，校外培训机构良莠不齐，可能存在未取得经营许可、无办学资质，培训机构教师无相应教学资质，卫生、餐饮、消防不达标等问题，请选择正规的培训机构。"},
						{"pp_bolder":"对校园内外安全存在问题的线索，可以积极举报。人民检察院、接收举报线索的工作人员对报案人的信息予以保密。"},
					]
				}]
			}
		},
		methods: {
			getNext() {
				uni.navigateTo({
					url: './index3'
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

		.main_part2 {
			margin-bottom: 40rpx;

			.small_part2 {
				margin-bottom: 10rpx;
				.small_title {
					font-weight: bolder;
					font-size: 36rpx;
					word-wrap: keep-all;
					float: left;
				}

				.small_title_describe {
					padding-top: 8rpx;
					text-align: left;
				}

			}

			.describe {
				line-height: 44rpx;

			}
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


	}
</style>
