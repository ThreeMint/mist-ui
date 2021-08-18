module.exports = {
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        //  配置全局sass
        prependData: `
          @import "./modules/mist-ui/theme-chalk/common-var.scss";
        `,
      }
    },
  },
}