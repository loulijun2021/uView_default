<template>
    <view class="counter">
        {{`${text&&text.length ||0}/${max}`}}
    </view>
</template>

<script>
    export default {
        props:['max','text'],
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped lang="scss">
    .counter {
        color:$u-light-color;
        position: absolute;
        bottom:4px;
        right:8px;
        font-size: 12px;
        line-height: 1.4;
    }
</style>
