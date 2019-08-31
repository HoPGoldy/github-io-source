// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MainScroll from './views/MainScroll'

const routes = [
    { path: '/', component: MainScroll }
]

export default new VueRouter({
  routes
})
