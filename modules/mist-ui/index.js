import MistButton from './Button/index.js';
import MistBadge from './Badge/index';
import MistCollapse from './Collapse/index';
import MistCollapseItem from './CollapseItem/index';
import MistLink from './Link/index.js';
import MistSwitch from './Switch/index.js';
import MistTabs from './Tabs/index.js';
import MistTabPane from './Tab-pane/index'
// 打包为库文件需要引入
import './theme-chalk/index.scss'

const MistUI = {};

// element采用的导出方法之一
const COMPONENTS = [
  MistButton, MistBadge,
  MistCollapse, MistCollapseItem,
  MistLink, MistSwitch,
  MistTabs, MistTabPane,
];
  
// Vue.use()会调用定义插件的install方法
MistUI.install = function (Vue, options) {

  if (options && options.components) {
    const comps = options.components;
    
    comps.forEach((componentName) => {
      COMPONENTS.forEach((component) => {
        if (componentName === component.name) {
          Vue.component(component.name, component);
        }
      })
    });
  } else {
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component);
    });
  }
}

export default MistUI;

// element采用的导出方法之一
// 这里可以把每个组件的install抽离到单个文件中
/* 例：
 *  - Button
      - index.vue
      - index.js
    - Input
      - index.vue
      - index.js
 * 
 */
// const MistButton = {};
// MistButton.install = Vue => Vue.component(Button.name, Button);
export {
  MistButton, MistBadge,
  MistCollapse, MistCollapseItem,
  MistLink, MistSwitch,
  MistTabs, MistTabPane,
}
