import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import Dev from './serve.vue';
import BootstrapVue from 'bootstrap-vue';
import ShuttleVue from '@/entry';
import store from './store'
import router from './router'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircleNotch);

Vue.use(BootstrapVue);
Vue.use(ShuttleVue);

library.add(faAngleDoubleRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(Dev),
}).$mount('#app');
