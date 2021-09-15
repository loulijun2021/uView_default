<template>
    <formComponent title="家庭保护专项" :actionSheetList="actionSheetList"></formComponent>
</template>

<script>
    import formComponent from '../formComponent.vue'
    export default {
        components:{formComponent},
        data() {
            return {
                actionSheetList: [{
                    value: 7001,
                    text: '监护侵害、监护不当'
                }, {
                    value: 7002,
                    text: '监护缺失'
                }, {
                    value: 7003,
                    text: '困境、留守儿童救助',
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
