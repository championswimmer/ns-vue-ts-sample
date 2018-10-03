import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from '@/components/App.vue'
import SideDrawerApp from '@/components/SideDrawerApp.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      children: [
        {
          path: 'first',
          name: 'first',
          component: () => import('@/components/pages/FirstPage.vue')
          // component: FirstPage
        },
        {
          path: 'second',
          name: 'second',
          component: () => import('@/components/pages/SecondPage.vue')
          // component: SecondPage
        }
      ]
    },
    {
      path: '/sda',
      name: 'sda',
      component: () => import('@/components/pages/ThirdPage.vue'),

    },
    {
      path: '*', redirect: '/'
    }
  ]
})