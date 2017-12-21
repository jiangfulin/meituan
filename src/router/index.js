import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'
import detailInfo from '@/components/detailInfo'
import message from '@/components/message'
import userInfo from '@/components/userInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      name: 'detailInfo',
      path: '/detailInfo',
      component: detailInfo
    },
    {
      name: 'signin',
      path: '/signin',
      component: Login
    },
    {
      name: 'message',
      path: '/message',
      component: message
    }, {
      name: 'userInfo',
      path: '/userInfo/:title',
      component: userInfo

    }
  ]
})
