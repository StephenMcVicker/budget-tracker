import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBus,
  faCog,
  faGift,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCurrencyInput from "vue-currency-input";

// * * *
// FontAwesome
library.add(faBus, faCog, faGift, faUtensils);

Vue.component("font-awesome-icon", FontAwesomeIcon);
// * * *

// Currency input
Vue.use(VueCurrencyInput);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
