import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false;

// 引入 router 設定檔
import { router } from './router_role.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
