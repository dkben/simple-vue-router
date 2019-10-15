import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// 引入 router 設定檔
import { router } from './router_role.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
