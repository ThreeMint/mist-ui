<template>
  <transition name="mi-message-fade" @after-leave="handleAfterLeave">
    <div
      :class="[
        'mi-message',
        type ? `mi-message--${type}` : '',
        showClose ? 'is-closable' : '',
      ]"
      v-show="visible"
      :style="positionTop"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <p class="mi-message__content">{{ message }}</p>

      <i
        v-if="showClose"
        class="mi-message__closeBtn mi-icon-quxiao"
        @click="close"
      ></i>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      type: 'info',
      message: '',
      visible: false,
      verticalOffset: 20,
      duration: 3000,
      timer: null,
      onClose: null,
      closed: false,
      showClose: false,
    }
  },
  computed: {
    positionTop() {
      return {
        top: `${this.verticalOffset}px`,
      }
    },
  },
  watch: {
    closed(val) {
      if (val) {
        this.visible = false
      }
    },
  },
  methods: {
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose() //this未传
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          //close,关闭回调待定，传参this
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    handleAfterLeave() {
      this.$destroy(this)
      this.$el.parentNode.removeChild(this.$el)
    },
  },
  mounted() {
    this.startTimer()
  },
}
</script>

<style>
</style>
