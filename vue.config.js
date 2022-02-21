const path = require('path');

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
  chainWebpack: config => {
    config.resolve.alias
      .set('mist-ui', path.resolve(process.cwd(), './'));
  }
}