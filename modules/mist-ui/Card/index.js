import MistCard from './src/index.vue';

MistCard.install = function (Vue) {
  Vue.component(MistCard.name, MistCard);
};

export default MistCard;
