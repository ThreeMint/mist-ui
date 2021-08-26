<template>
  <div class="mi-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MistCollapse",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      activeTitle: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.activeTitle = newVal;
    },
  },
  methods: {
    handleChange(val) {
      let value = val;
      //注意顺序
      this.$emit("input", value);
      this.$emit("change", value);
    },
  },
  created() {
    this.$on("collapse", this.handleChange);
  },
};
</script>
