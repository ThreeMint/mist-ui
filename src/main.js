import Vue from 'vue'
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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')