import MistTabs from './src/tabs';

MistTabs.install = function(Vue) {
  Vue.component(MistTabs.name, MistTabs);
};

export default MistTabs;