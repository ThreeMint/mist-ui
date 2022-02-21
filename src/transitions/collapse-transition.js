import {
  addClass,
  removeClass
} from 'mist-ui/src/utils/dom';

const onTransition = {
  // enter
  beforeEnter(el) {
    addClass(el, 'mifade')
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },
  enter(el) {
    el.dataset.oldOverflow = el.style.overflow

    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }
    el.style.overflow = 'hidden'
  },
  afterEnter(el) {
    removeClass(el, 'mifade')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  },
  // leave
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave(el) {
    if (el.scrollHeight !== 0) {
      addClass(el, 'mifade')
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },
  afterLeave(el) {
    removeClass(el, 'mifade')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  },
}

export default {
  name: 'MistCollapseTransition',
  functional: true,
  render(createElement, {
    children
  }) {
    const data = {
      on: onTransition
    }

    return createElement('transition', data, children)
  }
};