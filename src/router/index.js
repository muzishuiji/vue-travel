import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
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
      component: resolve => require(['@/views/city/City'], resolve)
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {
        title: '详情'
      },
      component: resolve => require(['@/views/detail/Detail'], resolve)
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
