import Vue from 'vue'
import App from './App.vue'
//样式
import '../modules/mist-ui/theme-chalk/index.scss'
import MistUI from '../modules/mist-ui'
Vue.use(MistUI);
// 导入1
// Vue.use(MistUI, {
//   components: [
//     'MistButton'
//   ]
// })

// 导入2
// 按需引入
// import {MistButton} from '../modules/mist-ui'
// Vue.use(MistButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
