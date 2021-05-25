import Vue from 'vue'
import App from './App.vue'
//样式
import '../modules/mist-ui/theme-chalk/index.scss'

// 导入方式1
import MistUI from '../modules/mist-ui'
Vue.use(MistUI);
// Vue.use(MistUI, {
//   components: [
//     'MistButton'
//   ]
// })

// 导入方式2
// element等ui采用的导入方式
// import {MistButton} from '../modules/mist-ui'
// Vue.use(MistButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
