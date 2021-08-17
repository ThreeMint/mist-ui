<template>
  <div class="mi-tabs">
    <div class="mi-tabs_header">
      <mi-tab-nav
        :nav_options="nav_options"
        :currentName="value"
        @NavClick="handleNavClick"
      ></mi-tab-nav>
    </div>
    <div class="mi-tabs_content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import MiTabNav from "./tabNav.vue";

export default {
  name: "MiTabs",
  components: {
    MiTabNav,
  },
  props: {
    value: {
      type: String,
    },
  },

  data() {
    return {
      panes: [],
      nav_options: [],
    };
  },

  methods: {
    handleNavClick(e, navCurrentName) {
      this.$emit("input", navCurrentName);
      // 这里的更改选择项需要用 宏任务, 否则测试的时候有显示不正确的bug
      setTimeout(() => this.initSeleced(), 0);
    },

    initNav() {
      this.layer((item) => {
        let result = {
          label: item.label,
          name: item.name,
        };
        this.nav_options.push(result);
      });
    },

    layer(func) {
      this.$slots.default
        .filter((vnode) => {
          if (
            vnode.tag &&
            vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === "MiTabPane"
          ) {
            return true;
          }
        })
        .map((item) => {
          func(item.componentInstance);
        });
    },

    initSeleced() {
      this.layer((item) => (item.showItem = item.name == this.value));
    },
  },
  mounted() {
    this.initNav();
    this.initSeleced();
  },
};
</script>

<style>
</style>