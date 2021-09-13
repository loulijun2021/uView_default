<template>
    <formComponent title="侵害线索受理" :actionSheetList="actionSheetList"></formComponent>
</template>
<script>
    import formComponent from '../formComponent.vue'
    export default {
        components: {
            formComponent
        },
        data() {
            return {
                actionSheetList: [{
                    value: 3001,
                    text: '性侵害'
                }, {

                    value: 3002,
                    text: '监护侵害'
                }]
            }
        }
    }
</script>

<style>

</style>
