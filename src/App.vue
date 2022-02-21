<template>
  <div id="app">
    <!-- <mist-button type="default">默认按钮</mist-button>
    <mist-button type="success">默认按钮</mist-button>
    <mist-button type="warning">默认按钮</mist-button>
    <mist-button type="danger">默认按钮</mist-button>
    <mist-button type="primary">默认按钮</mist-button> -->

    <mist-collapse
      style="width: 500px"
      @change="handleChange"
      v-model="collapseValue"
    >
      <mist-collapse-item title="button 按钮">
        <mist-button type="default">默认按钮</mist-button>
        <mist-button type="success">默认按钮</mist-button>
        <mist-button type="warning">默认按钮</mist-button>
        <mist-button type="danger">默认按钮</mist-button>
        <mist-button type="primary">默认按钮</mist-button>
      </mist-collapse-item>

      <mist-collapse-item title="Link 链接">
        <mist-link>有下划线</mist-link>
        <mist-link type="success" :underline="false">无下划线</mist-link>
      </mist-collapse-item>

      <mist-collapse-item title="switch">
        <mist-switch v-model="outValue" @change="switchClick"></mist-switch>
      </mist-collapse-item>
    </mist-collapse>
    <br />

    <mist-badge value="10">
      <mist-button>按钮</mist-button>
    </mist-badge>
    <br />

    <mi-tabs v-model="currentName" class="tabs" @change="tabsHandle">
      <mi-tab-pane label="选项一" name="first">选项一2</mi-tab-pane>
      <mi-tab-pane label="选项二" name="two">选项二33</mi-tab-pane>
    </mi-tabs>
    <br />

    <mist-rate v-model="rateVlaue" :max="10"></mist-rate>
    <mist-rate
      v-model="rateVlaue2"
      disabled
      show-score
      score-template="值为：{value}"
      score-color="#0fb5d0"
    ></mist-rate>
    <br />

    <mist-card style="width: 480px">
      <template v-slot:header>
        <span>sssssss</span>
        <mist-button type="default" size="mini">按钮</mist-button>
      </template>
      <div v-for="o in 4" :key="o" style="font-size: 14px; margin-bottom: 18px">
        {{ '列表内容 ' + o }}
      </div>
    </mist-card>

    <mist-card
      style="width: 480px"
      headerContent="这里是标题"
      :bodyStyle="{ padding: '5px' }"
    >
      <div
        v-for="num in 4"
        :key="num"
        style="font-size: 14px; margin-bottom: 18px"
      >
        {{ '列表内容 ' + num }}
      </div>
    </mist-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //button
      load: false,
      //switch
      outValue: true,
      // tabs
      currentName: 'first',
      //collapse
      collapseValue: '',

      //rate
      rateVlaue: 3,
      rateVlaue2: 2,
    }
  },
  methods: {
    tabsHandle(val) {
      console.log(val)
    },
    switchClick(val) {
      console.log(val)
    },
    handleChange(val) {
      console.log('使用时触发，', val)
      console.log('v-model,', this.collapseValue)
    },
  },
}
</script>

<style lang="scss">
#app {
  // button {
  //   margin-right: 5px;
  //   margin-bottom: 5px;
  // }

  .button,
  .link,
  .switch {
    border: 1px solid #999;
    overflow: scroll;
    height: 100px;
  }
}
</style>
