<template>
    <formComponent title="校园安全线索受理" :actionSheetList="actionSheetList"></formComponent>
</template>

<script>
    import formComponent from '../formComponent.vue'
    export default {
        components:{formComponent},
        data() {
            return {
                actionSheetList: [{
                    value: 7001,
                    text: '校园欺凌'
                }, {
                    value: 7002,
                    text: '视频安全'
                }, {
                    value: 7003,
                    text: '校园周边环境及设施安全',
                },{
                    value: 7004,
                    text: '违法培训辅导站',
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
