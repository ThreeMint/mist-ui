<template>
  <div class="mi-rate">
    <span
      v-for="(item, key) in max"
      :key="key"
      class="mi-rate-item"
      @mousemove="mouseMoveItem(item, $event)"
      @mouseleave="resetMouseMoveItem"
      @click="selectValue"
      :style="{ cursor: isDisabled ? 'auto' : 'pointer' }"
    >
      <i class="mi-icon-star" :class="{ hover: hoverIndex === item }">
        <i v-if="showActiveIcon(item)" class="mi-icon-star-fill"></i>
      </i>
    </span>
    <span
      v-if="showScore"
      class="mi-rate-text"
      :style="{ color: scoreColor }"
      >{{ text }}</span
    >
  </div>
</template>

<script>
export default {
  name: "MistRate",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    scoreTemplate: {
      type: String,
      default: "{value}",
    },
    scoreColor: {
      type: String,
      default: "#1f2d3d",
    },
  },
  data() {
    return {
      currentValue: this.value,
      hoverIndex: -1,
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    text() {
      let result = "";
      if (this.showScore) {
        result = this.scoreTemplate.replace(
          /\{\s*value\s*\}/,
          this.isDisabled ? this.value : this.currentValue
        );
      }
      return result;
    },
  },
  methods: {
    mouseMoveItem(value, event) {
      if (this.isDisabled) {
        return;
      }
      this.currentValue = value;
      this.hoverIndex = value;
    },
    resetMouseMoveItem() {
      if (this.isDisabled) {
        return;
      }
      //始终为传入的值
      this.currentValue = this.value;
      this.hoverIndex = -1;
    },
    showActiveIcon(item) {
      let result = item <= this.currentValue && item <= this.currentValue;
      return result;
    },
    selectValue() {
      if (this.isDisabled) {
        return;
      }
      // 通过v-model
      this.$emit("input", this.currentValue);
      this.$emit("change", this.currentValue);
    },
  },
  created() {
    if (!this.value) {
      this.$emit("input", 0);
    }
  },
};
</script>
