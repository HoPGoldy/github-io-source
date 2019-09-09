import Vue from 'vue'
import App from './views/App.vue'
// router
import router from './router.js'
// ajax
import './api.js'
// config
import { global, windowInfo } from './mixin.js'
// 平滑滚动
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()

Vue.config.productionTip = false
Vue.mixin(global)
Vue.mixin(windowInfo)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
