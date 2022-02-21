import MistButton from './src/index.vue'

MistButton.install = function (Vue) {
  Vue.component(MistButton.name, MistButton);
}

export default MistButton;