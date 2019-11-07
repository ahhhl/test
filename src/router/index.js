import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/pages/login/login')
    },
    {
      path: '/home',
      component: () => import('@/pages/home/home')
    }
  ]

})
export default router
