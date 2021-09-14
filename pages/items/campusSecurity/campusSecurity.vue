<template>
    <formComponent title="校园安全专项" :actionSheetList="actionSheetList"></formComponent>
</template>

<script>
    import formComponent from '../formComponent.vue'
    export default {
        components:{formComponent},
        data() {
            return {
                actionSheetList: [{
                    value: 7001,
                    text: '校园食品安全'
                }, {
                    value: 7002,
                    text: '校车、校园设施安全'
                }, {
                    value: 7003,
                    text: '校园周边环境安全',
                },{
                    value: 7004,
                    text: '校外培训、辅导站问题',
                }
				]
            }
        },
		onLoad(option) {
			console.log(option.title)
		},
        methods: {
            
        },

    }
</script>

<style>

</style>
