<template>
  <div class="mi-tab-pane" v-show="showItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MiTabPane",
  props: {
    label: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      showItem: false,
    };
  },
};
</script>
