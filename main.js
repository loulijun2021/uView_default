import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'





// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})

import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
