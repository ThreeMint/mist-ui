<template>
  <a
    class="mi-link"
    :class="[
      type ? `mi-link--${type}` : '',
      underline && !disabled ? 'is-underline' : '',
      {
        'is-disabled': disabled,
      },
    ]"
    :href="disabled ? null : href"
  >
    <span class="mi-link--inner"><slot></slot></span>
  </a>
</template>

<script>
export default {
  name: "MistLink",
  props: {
    href: String,
    type: {
      type: String,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
  },
  // methods: {
  //   handleClick(evt) {
  //     if (!this.disabled) {
  //       if (!this.href) {
  //         this.$emit("click", evt);
  //       }
  //     }
  //   },
  // },
};
</script>
