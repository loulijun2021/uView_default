<template>
	<view>
		<view class="all">
			<!-- 大标题部分 -->
			<view class="big_title">
				强制报告专项
			</view>

			<!-- 小标题+内容部分 -->
			<view class="main_part1" v-for="item in items_part1">
				<view class="small_title">{{item.small_title}}</view>
				<view class="describe">{{item.describe}}</view>
			</view>
			
			<view class="main_part2" v-for="item in items_part2">
				<view class="small_title">{{item.small_title}}</view>
				<view class="describe" v-for="it in item.describe">{{it.des}}<b>{{it.pp_bolder}}</b></view>
			</view>
				
			<button  class="footer_button" @click="getNext">发起举报</button>

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
					"small_title":"强制报告制度",
					"describe":"《未成年人保护法》第十一条第二款规定：“国家机关、居民委员会、村民委员会、密切接触未成年人的单位及其工作人员，在工作中发现未成年人身心健康受到侵害、疑似遭受侵害或者面临其他危险情形的，应当立即向公安、民政、教育等有关部门报告。”强制报告制度被写入《未成年人保护法》，是一项具备强制力的法律制度。负有强制报告制度义务的主体，在发现孩子遭受或疑似遭受强奸、猥亵、虐待、遗弃、暴力、中毒等情况时，一定要立即报告。"
				},{
					"small_title":"密切接触未成年人的单位",
					"describe":"学校、幼儿园等教育机构；校外培训及机构；未成年人救助保护机构、儿童福利机构等未成年人安置、救助机构；婴幼儿照护服务机构、早期教育服务机构；校外托管、临时看护机构；家政服务机构；为未成年人提供医疗服务的医疗机构；其他对未成年人负有教育、培训、监护、救助、看护、医疗等职责的企事业单位、社会组织等。"
				}],
				items_part2:[{
					"small_title":"哪些情况要强制报告",
					"describe":[
						{"des":"1、未成年人的生殖器官遭受或疑似遭受损伤的；"},
						{"des":"2、未满十四周岁的女性与人发生过性关系；"},
						{"des":"3、可能是非正常原因造成的未成年人怀孕、流产的；"},
						{"des":"4、未成年人身体存在多处损伤、创伤，或严重营养不良，或精神恍惚等情况，存在或疑似存在"},
						{"des":"5、家庭暴力、虐待、遭人麻醉、下毒等情形的；"},
						{"des":"6、未成年人被遗弃的；"},
						{"des":"7、未成年人存在自杀、自残、坠楼、溺水、中毒等非正常伤害、死亡情形的；"},
						{"des":"8、其他严重侵害未成年人身心健康的情形。"},
						{"pp_bolder":"人民检察院、接收举报线索的工作人员对报案人的信息予以保密。"}
					]
				}]
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
		
		.main_part2{
			margin-bottom: 40rpx;
			.small_title{
				font-weight: bolder;
				font-size: 36rpx;
				margin-bottom: 20rpx;
			}
			
			.describe{
				line-height: 44rpx;
				
			}
		}
		
		.footer_button{
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
