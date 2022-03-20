import MistBreadcrumb from './src/breadcrumb';

MistBreadcrumb.install = function (Vue) {
  Vue.component(MistBreadcrumb.name, MistBreadcrumb);
}

export default MistBreadcrumb;