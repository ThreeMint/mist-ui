<template>
  <div
    class="mi-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    @click.prevent="handleClick"
  >
    <span class="mi-switch__core" ref="core"></span>
  </div>
</template>

<script>
export default {
  name: "MistSwitch",
  props: {
    value: {
      type: [Boolean, String, Number],
      defalut: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
  },
  computed: {
    checked() {
      return this.value;
    },
    switchDisabled() {
      return this.disabled;
    },
  },
  watch: {
    checked: function () {
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    },
  },
  methods: {
    handleClick: function () {
      if (!this.switchDisabled) {
        //  修改props传的值，并同步父组件的入参
        this.$emit("update:value", !this.checked);
        //  发送 change 事件click
        this.$emit("change", !this.checked);
      }
    },
    setBackgroundColor: function () {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
  },
  mounted() {
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
  },
};
</script>