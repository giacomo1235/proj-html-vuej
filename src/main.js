import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'// fontawesome
import { faBicycle, faCloud, faHeartPulse, faLinkSlash } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'

library.add(faLinkSlash)
library.add(faBicycle)
library.add(faCloud)
library.add(faHeartPulse)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faInstagram)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)// fontawesome
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
