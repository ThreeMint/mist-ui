<template>
  <div class="mi-collapse-item" :class="{ 'is-active': isShow }">
    <div
      class="mi-collapse_header"
      :class="{ 'is-active': isShow }"
      @click="handleHeaderClick"
    >
      {{ title }}
      <div class="mi-collapse__icon" :class="{ 'is-active': isShow }"></div>
    </div>
    <transition name="mifade">
      <div class="mi-collapse_content" v-show="isShow">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MistCollapseItem",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleHeaderClick() {
      this.$parent.$emit("collapse", this.title);
      this.isShow = !this.isShow;
    },
  },
};
</script>

