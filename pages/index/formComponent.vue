<template>
	<view>
		<u-modal title="成功" :show-cancel-button="true" v-model="modelShow" @cancel="modelCancel" @confirm="modelConfirm"
			:content="'您的线索已提交'"></u-modal>
		<u-toast ref="uToast" />
		<u-navbar :back-text-style="{color:'#409eff'}" :is-back="false" back-icon-color="#409eff"
			:custom-back="customBack" title-width="400" back-text="返回" :title="title"></u-navbar>
		<view class="wrapper">
			<u-form class="main-form" :error-type="['border-bottom','toast']" label-align="left"
				label-width="calc(112rpx + 18px)" :model="form" ref="uForm">
				<u-form-item required label="举报类型" prop="type">
					<u-input v-model="form.type" :placeholder="placeholderSelectTitle" type="select"
						@click="show = true" />
					<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback">
					</u-action-sheet>
				</u-form-item>
				<u-form-item required label="举报地点" prop="place">
					<u-cell-group :border="false">
						<u-cell-item @click="getPlace" :border-bottom="false" hover-class="none" :title="form.place"
							value="选择地点"></u-cell-item>
					</u-cell-group>
				</u-form-item>
				<u-form-item style="position: relative;" label-position="top" label-align="left" required label="线索描述"
					prop="desc">
					<u-input style="margin-bottom: 6px;" v-model="form.desc" placeholder="" :trim="false"
						type="textarea" :auto-height="true" placeholder="请输入" :maxlength="200" />
					<textCounter :text="form.desc" :max="200"></textCounter>
				</u-form-item>
				<u-gap height="20" bg-color="#eee"></u-gap>
				<u-form-item label="举报对象" prop="object">
					<u-input v-model="form.object" placeholder="相关机构、地区名称(选填)" />
				</u-form-item>
				<u-form-item label="姓名" prop="name">
					<u-input v-model="form.name" placeholder="选填" />
				</u-form-item>
				<u-form-item label="联系电话" prop="phone">
					<u-input v-model="form.phone" placeholder="选填" />
				</u-form-item>
				<u-form-item label="线索图片">
					<!-- 限制图片上传的大小和格式 -->
					<u-upload :max-size="10 * 1024 * 1024" multiple :limitType="['png', 'jpg']" width="160" height="160"
						class="uploader" :form-data="{unique_id:uniqueId}" ref="uUpload" :action="action"
						:file-list="fileList"></u-upload>
				</u-form-item>
				<u-gap height="20" bg-color="#eee"></u-gap>
				<u-form-item label="举报人" prop="people">
					<u-input v-model="form.people" placeholder="举报人姓名(选填)" />
				</u-form-item>
				<u-form-item label="联系电话" prop="tel">
					<u-input v-model="form.tel" placeholder="举报人电话号码(选填)" />
				</u-form-item>
			</u-form>
			<view style="width: 100%;height:80px">
				<u-card :foot-border-top="false" :head-border-bottom="false" margin="0" :show-head="false"
					:show-foot="false">
					<view class="" slot="body">
						<u-button :loading="loading" class="big-btn " @click="submit" type="primary">提交</u-button>
					</view>
				</u-card>
			</view>
		</view>



	</view>
</template>

<script>
	import textCounter from './textCounter.vue'
	import {
		imageUploadUrl
	} from '@/config/url'
	import {
		formatLocation,
		getLocation
	} from '@/lib/util'
	export default {
		props: ['actionSheetList', 'title', 'placeholderSelectTitle'],
		components: {
			textCounter
		},
		data() {

			// 校验举报对象的名字
			const validateName = (rule, value, callback) => {
				if (value.length > 25) {
					callback(new Error('名字长度不能超过25个字'))
				} else {
					return callback()
				}
			}
			//校验举报对象的电话号码
			const validatePhone = (rule, value, callback) => {
				// 手机和座机号码的正则表达式
				const regexshouji = /^1[3|4|5|7|8][0-9]{9}$/; //手机
				const regexzuoji = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/; //座机
				// const regex =/(^(\d{3,4}-)?\d{7,8})$|(^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8})$/;

				if (value.length !== 0) {
					if (!(regexshouji.exec(value) || regexzuoji.exec(value))) {
						// console.log('请输入正确的联系电话')

						callback(new Error('请输入正确的联系电话'))
					} else {
						return callback()
					}
				} else {
					return callback()
				}
			}
			return {
				modelShow: false,
				uniqueId: '',
				fullAddress: null,
				action: imageUploadUrl,
				fileList: [],
				loading: false,
				show: false,
				form: {
					type: '', //类型
					place: '', //地点
					desc: '', //描述
					object: '', //被举报的对象
					name: '', //被举报的对象中的名字
					phone: '', //被举报对象的电话号码
					people: '', //举报人
					tel: '' //举报人电话号码
				},
				rules: {
					type: [{
						required: true,
						message: '请选择举报类型',
						trigger: ['change', 'blur'],
					}],
					place: [{
						required: true,
						message: '请选择举报地点',
						trigger: ['change', 'blur'],
					}],
					desc: [{
						required: true,
						message: '请输入线索描述',
						trigger: ['change', 'blur'],
					}],
					name: [{
						required: false,
						validator: validateName,
						trigger: ['change', 'blur'],
					}],
					phone: [{
						required: false,
						validator: validatePhone,
						trigger: 'change'
					}],
					people: [{
						required: false,
						validator: validateName,
						trigger: ['change', 'blur']
					}],
					tel: [{
						required:false,
						validator: validatePhone,
						trigger: ['change']
					}],
				},
			}
		},
		methods: {

			actionSheetCallback(index) {
				this.form.type = this.actionSheetList[index].text;
			},
			async getPlace() {

				// return uni.chooseLocation()
				try {
					const chooseLocation = (currentLocation) => {
						const {
							longitude,
							latitude,
							cityName,
							region,
							detailAddress
						} = currentLocation
						uni.chooseLocation({
							success: res => {
								let name = res.name
								this.form.place = name
								if (name == '我的位置') {
									this.fullAddress = formatLocation({
										name: '',
										address: detailAddress
									})
								} else {
									this.fullAddress = formatLocation(res)
								}
								// this.$u.toast(this.fullAddress)
							},
						})
					}
					let currentLocation = await getLocation()
					chooseLocation(currentLocation)
				} catch (e) {
					this.$u.toast('获取位置信息失败')
					// chooseLocation()
				}

			},
			submit() {
				this.$refs.uForm.validate(valid => {
					const _this = this
					if (valid) {
						this.loading = true
						const {
							type,
							desc,
							place,
							object,
							name,
							phone,
							people,
							tel
						} = this.form
						const {
							REGION_CITY,
							REGION_COUNTRY,
							REGION_PROVINCE,
							ADDRESS
						} = this.fullAddress
						let req = {
							uniqueId: this.uniqueId,
							reportUserName: name,
							reportUserPhone: phone,

							reportAddress: ADDRESS, //投诉地点
							reportProvince: REGION_PROVINCE, //省份
							reportCity: REGION_CITY, //城市

							// reportStreet:'',//街道
							reportStreet: REGION_COUNTRY, //街道

							reportContent: desc, //投诉内容
							reportObj: object, //投诉对象
							reportPeo: people, //投诉人
							reportTel: tel, //投诉人联系电话
							reportCode: this.actionSheetList.find(find => find.text == _this.form.type)
								.value //投诉专项编码
						}
						this.$u.api.commitReport(req).then(res => {
							this.loading = false
							if (res.status) {
								this.$refs.uForm.resetFields()
								this.$refs.uUpload.clear()

								this.next()
							} else {
								this.$refs.uToast.show({
									title: res.message || '操作失败',
									type: 'error',
									position: 'top'
								})
							}
						}).catch(err => {
							this.loading = false
							this.$refs.uToast.show({
								title: res.message || '操作失败',
								type: 'error'
							})
						})
					} else {
						console.log('123')
					}
				});
			},
			customBack() {
				uni.navigateTo({
					url: '/pages/index/index'
				});
			},
			async getUniqueId() {
				let u = await this.$u.api.getUniqueId()
				this.uniqueId = u.id
			},
			next() {
				// this.getUniqueId()
				this.modelShow = true
			},
			modelCancel() {
				this.getUniqueId()
			},
			modelConfirm() {
				this.customBack()
			}
		},
		mounted() {

			if (this.form.type === '') {
				this.form.type = this.placeholderSelectTitle
			}
			this.getUniqueId()
			this.$refs.uForm.setRules(this.rules)
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {

		// display: flex;
		// flex-direction: column;
		// height: calc(100vh - 44px);
		.main-form {
			// flex:1;
			padding: 16px;
			overflow: auto;
		}

	}

	.uploader {
		/deep/.u-add-tips {
			display: none;
		}
	}
</style>
