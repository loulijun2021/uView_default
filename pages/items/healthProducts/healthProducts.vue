<template>
    <formComponent title="困境儿童救助线索受理" :actionSheetList="actionSheetList"></formComponent>
</template>

<script>
    import formComponent from '../formComponent.vue'
    export default {
        components:{formComponent},
        data() {
            return {
                actionSheetList: [{
                    value: 2001,
                    text: '爱心助学'
                },{
					value: 2002,
					text: '监护缺失'
				},{
					value: 2003,
					text: '家庭教育缺失'
				},{
					value: 2004,
					text: '重大疾病救助'
				}]
            }
        }
    }
</script>

