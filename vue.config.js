module.exports = {
  css: {
    loaderOptions: {
      sass: { 
        //  配置全局sass
        prependData: `
          @import "./modules/mist-ui/theme-chalk/common-var.scss";
        `
      }
    }
  }
}