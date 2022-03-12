import Vue from 'vue';
import MainMessage from './main.vue';
import PopupManager from 'mist-ui/src/utils/popup';

let MessageConstructor = Vue.extend(MainMessage);

let instance;
let instances = [];
let idConut = 1;

const Message = function (options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let id = "message-" + idConut++;

  options.onClose = function () {
    Message.close(id);
  }

  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  let verticalOffset = options.offset || 20;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  instance.$el.style.zIndex = PopupManager.getNextZIndex();

  instances.push(instance);
  return instance;
};

Message.close = function (id) {
  let leng = instances.length;
  let index = -1;
  let removeHeight;
  for (let i = 0; i < leng; i++) {
    if (id === instances[i].id) {
      removeHeight = instances[i].$el.offsetHeight;
      index = i;
      instances.splice(i, 1);
      break;
    }
  }

  if (leng <= 1 || index > instances.length - 1) return;
  for (let i = index; i < leng - 1; i++) {
    let dom = instances[i].$el;
    dom.style['top'] = parseInt(dom.style['top'], 10) - removeHeight - 16 + 'px';
  }
};

export default Message;