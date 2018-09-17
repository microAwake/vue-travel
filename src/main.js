// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 不同设备上css初始样式表现不同，使用reset.css统一化
import 'css/reset.css'
// 解决一像素边框问题
import 'css/border.css'
// 解决移动设备上click事件300ms延迟问题
import FastClick from 'fastclick'
// 导入iconfont字体文件
import './assets/iconfont/iconfont.css'

import { Swipe, SwipeItem } from 'mint-ui'
// 记得引入样式文件
import 'mint-ui/lib/style.min.css'

import 'scss/global.scss'

import './assets/mui/css/mui.min.css'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// import axios from 'axios'
// Vue.prototype.$axios=axios
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // render: c => c(App)
})
