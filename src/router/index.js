import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      meta: {
        title: '城市'
      },
      component: City
    }

  ]
})
