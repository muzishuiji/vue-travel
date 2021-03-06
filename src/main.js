import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import '@/assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'
import router from './router'
import fastClick from 'fastclick'
Vue.config.productionTip = false
require('./mock')
// 解决移动端点击事件300ms延迟的问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
