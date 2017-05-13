import Vue from 'vue'
import Router from 'vue-router'
import Yundan from '../components/Shang/Yundan.vue'
import Shanghu from '../components/Shang/Shanghu.vue'
import Meorder from '../components/Shang/Yundan/Meorder.vue'
import Payment from '../components/Shang/Yundan/Payment.vue'
import Pentry from '../components/Shang/Yundan/Pentry.vue'
import Porder from '../components/Shang/Yundan/Porder.vue'
import Mydate from '../components/Shang/Shanghu/Mydate.vue'
import Login from '../components/State/Login.vue'
import Reg from '../components/State/Reg.vue'
import StateIndex from '../components/State/StateIndex.vue'
import ShangIndex from '../components/ShangIndex.vue'
import textb from '../components/Shang/Shanghu/textb.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: StateIndex,
      redirect: '/Login',
      children: [
        {
          path: 'Login',
          component: Login
        },
        {
          path: 'Reg',
          component: Reg
        }
      ]
    },
    {
      path: '/ShangIndex',
      component: ShangIndex,
      meta: {
        requireAuth: true
      },
      redirect: '/ShangIndex/Yundan',
      children: [
        {
          path: '/ShangIndex/Shanghu',
          component: Shanghu,
          redirect: '/ShangIndex/Shanghu/Mydate',
          children: [
            {
              path: 'Mydate',
              component: Mydate
            },
            {
              path: 'textb',
              component: textb
            }
          ]
        },
        {
          path: '/ShangIndex/Yundan',
          component: Yundan,
          redirect: '/ShangIndex/Yundan/Porder',
          children: [
            {
              path: 'Porder',
              component: Porder
            },
            {
              path: 'Meorder',
              component: Meorder
            },
            {
              path: 'Payment',
              component: Payment
            },
            {
              path: 'Pentry',
              component: Pentry
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (sessionStorage.getItem('username')) { // 判断是否登录
      next()
    } else { // 没登录则跳转到登录界面
      next({
        path: '/Login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
