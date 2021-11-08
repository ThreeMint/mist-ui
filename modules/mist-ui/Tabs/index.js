import MistTabs from './src/tabs.vue';

MistTabs.install = function (Vue) {
  Vue.component(MistTabs.name, MistTabs);
};

export default MistTabs;