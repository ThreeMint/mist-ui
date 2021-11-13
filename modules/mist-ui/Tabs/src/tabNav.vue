<template>
  <div ref="navRef">
    <div
      v-for="item in nav_options"
      :key="item.name"
      :class="['mi-nav_item', currentName == item.name ? 'active' : '']"
      @click="handleClick($event, item.name)"
      ref="itemsArray"
      :data-selected="currentName === item.name ? true : false"
    >
      {{ item.label }}
    </div>
    <div class="mi-tab_indicator" ref="indicatorLine"></div>
  </div>
</template>

<script>
export default {
  name: "MiTabNav",
  props: {
    nav_options: Array,
    currentName: String,
  },
  data() {
    return {};
  },
  watch: {
    currentName: {
      handler() {
        this.$nextTick(() => {
          this.$refs.itemsArray.forEach((item) => {
            if (item.dataset.selected) {
              const lineWidth = item.getBoundingClientRect().width;
              this.$refs.indicatorLine.style.width = `${lineWidth}px`;

              const containerLeft =
                this.$refs.navRef.getBoundingClientRect().left;
              const beSelectedNavLeft = item.getBoundingClientRect().left;
              const indicatorLeft = beSelectedNavLeft - containerLeft;
              this.$refs.indicatorLine.style.left = `${indicatorLeft}px`;
            }
          });
        });
      },
    },
  },
  methods: {
    handleClick(e, name) {
      this.$emit("NavClick", e, name);
    },

    // initIndicatorWidth() {
    //   // 使用了v-for，在mounted阶段，dom无法通过refs获取
    //   this.$nextTick(() => {
    //     setTimeout(() => {
    //       this.$refs.itemsArray.forEach((item) => {
    //         if (item.dataset.selected) {
    //           let lineWidth = item.getBoundingClientRect().width;
    //           this.$refs.indicatorLine.style.width = `${lineWidth}px`;
    //         }
    //       });
    //     });
    //   });
    // },
  },
};
</script>