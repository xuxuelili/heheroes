import Vue from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

//导入router
import router from './routes/router'

import VueRouter from 'vue-router'
//注册VueRouter组件
Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
