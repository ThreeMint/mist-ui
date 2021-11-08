import MistCard from './src/index';

MistCard.install = function (Vue) {
  Vue.component(MistCard.name, MistCard);
};

export default MistCard;
