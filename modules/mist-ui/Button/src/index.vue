<template>
  <button
    class="mi-button"
    :type="btnType"
    :class="[
      type ? 'mi-button--' + type : '',
      size ? `mi-button--${size}` : '',
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <span class="mi-button-loading" v-if="loading"></span>
    <slot />
  </button>
</template>

<script>
export default {
  name: "MistButton",
  props: {
    type: String,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    size: String,
    btnType: {
      type: String,
      default: "button",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(evt) {
      if (!this.disabled) {
        this.$emit("click", evt);
      }
    },
  },
};
</script>