<script>
    export default {
        onLaunch: function() {
            dd.ready({
                usage: [
                    'dd.device.location.get',
                    'dd.device.notification.toast'
                ],
                remark: '检务监督线索举报'
            },()=>{
                this.$u.toast =(message)=>{
                    try{
                        dd.device.notification.toast({
                          message,
                          duration: 2000,
                          onSuccess : function(data) {},
                          onFail: function(error) {}
                        })
                    }catch(e){
                        //TODO handle the exception
                    }

                }
                // console.log('ready')
            });
            // console.log('App Launch')
        },
        onShow: function() {
            // console.log('App Show')
        },
        onHide: function() {
            // console.log('App Hide')
        }
    }
</script>

<style lang="scss">
    @import "uview-ui/index.scss";
    /*每个页面公共css */

    //大按钮：高度48，圆角4，字号17；

    .big-btn {
        height: 48px !important;
        border-radius: 4px !important;
        font-size: 17px !important;
        line-height: 48px !important;
    }

    .u-form-item--left__content {
        padding-right: 16px !important;
    }
    .uni-system-choose-location {
        .system-header {
            .header-back {
                display: none;  
            }
        }
        .nav {
            .nav-btn.back {
                display: none;
            }
        }
    }
</style>
