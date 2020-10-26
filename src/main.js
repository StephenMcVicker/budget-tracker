import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBus,faCog,faGift,faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// * * *
// FontAwesome
library.add(
  faBus,
  faCog,
  faGift,
  faUtensils
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// * * *


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
