import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

import router from './router'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

router.replace('/')
new Vue({
  router,
  template: `<Frame><router-view/></Frame>`,
  // render: h => h('frame', [h(App)])
}).$start()
