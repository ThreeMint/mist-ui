<template>
  <div id="app">
    <h2>button按钮</h2>
    <!-- <div class="button">
      <mist-button type="default">默认按钮</mist-button>
    </div> -->

    <h2>link链接</h2>
    <!-- <div class="link">
      <h3>默认</h3>
      <mist-link>有下划线</mist-link>
      <mist-link type="success" :underline="false">无下划线</mist-link>
    </div> -->

    <h2>Switch链接</h2>
    <!-- <div class="switch">
      <mist-switch v-model="outValue" @change="switchClick"></mist-switch>
    </div> -->

    <h2>tabs标签页</h2>
    <!-- <mi-tabs v-model="currentName" class="tabs">
      <mi-tab-pane label="选项一" name="first">选项一2</mi-tab-pane>
      <mi-tab-pane label="选项二" name="two">选项二33</mi-tab-pane>
    </mi-tabs> -->

    <h2>badge上标</h2>
    <!-- <mist-badge value="10">
      <mist-button>按钮</mist-button>
    </mist-badge> -->

    <h2>折叠框</h2>
    <mist-collapse
      style="width: 500px"
      @change="handleChange"
      v-model="collapseValue"
    >
      <mist-collapse-item title="标题 1">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <mist-button>submit</mist-button>
      </mist-collapse-item>

      <mist-collapse-item title="标题 2">
        aliquam ipsa repellat aut fugit quisquam id. Officia, totam amet.
      </mist-collapse-item>
    </mist-collapse>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //button
      load: false,
      //switch
      outValue: true,
      // tabs
      currentName: "first",
      collapseValue: "",
    };
  },
  methods: {
    switchClick(val) {
      console.log(val);
    },
    handleChange(val) {
      console.log("使用时触发，", val);
    },
  },
};
</script>

<style lang="scss">
#app {
  .button {
    // display: flex;
    button {
      margin-left: 5px;
      margin-bottom: 5px;
    }
  }
  .button,
  .link,
  .switch {
    border: 1px solid #999;
    overflow: scroll;
    height: 100px;
  }
}
</style>
