import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'// fontawesome
import { faBicycle, faCloud, faHeartPulse, faLinkSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkSlash)
library.add(faBicycle)
library.add(faCloud)
library.add(faHeartPulse)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)// fontawesome

new Vue({
  render: h => h(App)
}).$mount('#app')
