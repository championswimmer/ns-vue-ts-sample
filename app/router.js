import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'
import FirstPage from '@/components/pages/FirstPage.vue'
import SecondPage from '@/components/pages/SecondPage.vue'

Vue.use(VueRouter)

import App from '@/components/App.vue'

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
          component: FirstPage
        },
        {
          path: 'second',
          name: 'second',
          component: SecondPage
        }
      ]
    },
    {
      path: '*', redirect: '/'
    }
  ]
})