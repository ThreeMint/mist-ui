import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
import App from '../example/App.vue'
//样式
import '../modules/mist-ui/theme-chalk/index.scss'
import MistUI from '../modules/mist-ui/index.js'

//模拟打包好的
// import '../lib/theme-chalk/index.css'
// import MistUI from '../lib'

Vue.use(MistUI);

// 导入2
// 按需引入,配合babel-component-plugin
// import MistButton from '../modules/mist-ui/Button/index.js'
// import {
//   MistButton
// } from '../modules/mist-ui'
// import '../modules/mist-ui/theme-chalk/lib/button.css'
// Vue.use(MistButton)

Vue.use(VueRouter);

// 解决重复点击路由，跳转报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')