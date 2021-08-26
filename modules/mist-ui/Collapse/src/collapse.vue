<template>
  <div class="mi-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MistCollapse",
  methods: {
    handleChange(val) {
      this.$emit("change", val);
      this.$emit("input", val);
    },
  },
  created() {
    this.$on("collapse", this.handleChange);
  },
};
</script>
