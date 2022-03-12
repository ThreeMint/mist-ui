let zIndex;
let hasInitZIndex = false; //是否初始化

const PopupManager = {
  getNextZIndex() {
    return PopupManager.zIndex++;
  }
}

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get() {
    if (!hasInitZIndex) {
      zIndex = zIndex || 2000;
      hasInitZIndex = true;
    }
    return zIndex;
  },
  set(val) {
    zIndex = val;
  }
})

export default PopupManager;