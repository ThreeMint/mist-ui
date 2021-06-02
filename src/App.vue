<template>
  <div id="app">
    <h2>button按钮</h2>
    <div class="button">
      <mist-button type="default">默认按钮</mist-button>
      <br />
      <mist-button type="success" round>圆形按钮</mist-button>
      <br />
      <mist-button type="success" circle>圆</mist-button>
      <br />
      <mist-button type="primary" disabled>主要按钮</mist-button>
      <br />
      <mist-button type="success" round disabled>圆形按钮</mist-button>
      <br />
      <mist-button type="primary" round size="small">小型按钮</mist-button>
      <br />
      <mist-button type="default" circle size="medium">中</mist-button>
      <br />
      <mist-button :loading="true">加载中</mist-button>
    </div>
    <!-- <hr /> -->
    <h2>link链接</h2>
    <div class="link">
      <h3>默认</h3>
      <mist-link>有下划线</mist-link>
      <mist-link type="success" :underline="false">无下划线</mist-link>
      <h3>disabled</h3>
      <mist-link disabled>有下划线</mist-link>
      <mist-link type="primary" disabled>谢谢谢谢</mist-link>
    </div>

    <h2>Switch链接</h2>
    <div class="switch">
      <mist-switch
        disabled
        :value.sync="outValue"
        active-color="#ff0000"
        inactive-color="#000000"
        @change="switchClick"
      ></mist-switch>
    </div>
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
    };
  },
  methods: {
    switchClick(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
#app {
  .button {
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
    height: 300px;
  }
}
</style>
