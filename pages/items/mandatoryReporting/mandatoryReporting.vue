<template>
    <formComponent title="强制专项报告" :actionSheetList="actionSheetList"></formComponent>
</template>

<script>
    import formComponent from '../formComponent.vue'
    export default {
        components:{formComponent},
        data() {
            return {
                actionSheetList: [{
                    value: 7001,
                    text: '医疗从业者报告'
                }, {
                    value: 7002,
                    text: '教育从业者报告'
                }, {
                    value: 7003,
                    text: '其他行业从业者报告',
                }
				]
            }
        },
        methods: {
            
        },

    }
</script>

<style>

</style>
