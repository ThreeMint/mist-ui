<template>
  <div class="mi-card" :class="'has-shadow'">
    <div class="mi-card__header" v-if="$slots.header || header">
      <slot name="header">{{ headerContent }}</slot>
    </div>
    <div class="mi-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MistCard",
  props: {
    headerContent: {},
    bodyStyle: {},
  },
};
</script>
