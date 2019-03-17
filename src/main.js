// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import {router} from './router';
import axios from 'axios';
console.log({router});
//定义全局变量
Vue.use(elementui)

Vue.prototype.$axios = axios;
console.log(123,Vue.$axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
