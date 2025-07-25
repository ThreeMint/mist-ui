import MistButton from "./Button/index";
import MistBadge from "./Badge/index";
import MistBreadcrumb from "./breadcrumb/index";
import MistBreadcrumbItem from "./breadcrumb-item/index";
import MistCard from "./Card/index";
import MistCollapse from "./Collapse/index";
import MistCollapseItem from "./CollapseItem/index";
import MistLink from "./Link/index.js";
import MistRate from "./Rate/index.js";
import MistSwitch from "./Switch/index.js";
import MistTabs from "./Tabs/index.js";
import MistTabPane from "./Tab-pane/index.js";
import MistMessage from "./Message/index.js";

const MistUI = {};

const COMPONENTS = [
  MistButton,
  MistBadge,
  MistBreadcrumb,
  MistBreadcrumbItem,
  MistCard,
  MistCollapse,
  MistCollapseItem,
  MistLink,
  MistSwitch,
  MistTabs,
  MistTabPane,
  MistRate,
];

// Vue.use()会调用定义插件的install方法
MistUI.install = function(Vue, options) {
  if (options && options.components) {
    const comps = options.components;

    comps.forEach((componentName) => {
      COMPONENTS.forEach((component) => {
        if (componentName === component.name) {
          Vue.component(component.name, component);
        }
      });
    });
  } else {
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component);
    });
  }

  Vue.prototype.$message = MistMessage;
};
const install = MistUI.install;
// export default MistUI;

//  用于按需引入
export default {
  install,
  MistButton,
  MistBadge,
  MistBreadcrumb,
  MistBreadcrumbItem,
  MistCard,
  MistCollapse,
  MistCollapseItem,
  MistLink,
  MistSwitch,
  MistTabs,
  MistTabPane,
  MistRate,
  MistMessage,
};
