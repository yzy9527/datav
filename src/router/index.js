import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import('../demoView/BMap')
  },
  {
    path: '/liquidfill',
    name: 'liquidfill',
    component: () => import('../demoView/LiquidFill')
  }

]

const router = new VueRouter({
  routes
})

export default router
