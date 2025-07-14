import Vue from "vue";
import MainMessage from "./main.vue";

import PopupManager from "mist-ui/src/utils/popup";

let MessageConstructor = Vue.extend(MainMessage);

let instance;
let instances = [];
let idConut = 1;

const Message = function(options) {
  options = options || {};
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  let id = "message-" + idConut++;

  options.onClose = function() {
    // 回调待定
    Message.close(id);
  };

  // Vue内部做了处理，将传入的options，
  // 和组件内已定义好的data合并，或者是复制，她们的地址/指向相同
  instance = new MessageConstructor({
    data: options,
  });

  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  let verticalOffset = options.offset || 20;
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;

  //插入后，控制过度动画渲染
  instance.visible = true;
  instance.$el.style.zIndex = PopupManager.getNextZIndex();
  //每调用一次message，存一个实例
  instances.push(instance);

  return instance;
};

Message.close = function(id) {
  let leng = instances.length;
  let index = -1;
  let removeHeight;
  for (let i = 0; i < leng; i++) {
    if (id === instances[i].id) {
      removeHeight = instances[i].$el.offsetHeight;
      index = i;
      //回调待定
      // ...
      instances.splice(i, 1);
      break;
    }
  }

  //包括自己和以下的都移除
  if (leng <= 1 || index > instances.length - 1) return;
  for (let i = index; i < leng - 1; i++) {
    let dom = instances[i].$el;
    dom.style["top"] =
      parseInt(dom.style["top"], 10) - removeHeight - 16 + "px";
  }
};

export default Message;
