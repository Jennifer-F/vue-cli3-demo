/**
 * vue.config.js
 * vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
 * 你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。
 * 创建于2019/01/25
 * by Jennifer-fuyj
 */
module.exports = {
	// 部署应用包时的基本 URL。
	publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  // 开发环境下端口、地址等相关配置
  devServer: {
  	overlay: {
      warnings: true,
      errors: true
    },
    host: '0.0.0.0', // 地址
    port: 8001 // 端口
  },

  // 样式配置
  css: {
    loaderOptions: {
      // 这里的选项会传递给 css
    	css: {
      	data: `@import '@/assets/style/base.css';` // 基本样式
    	},
      // 这里的选项会传递给 less-loader
      less: {
      	data: `@import '@/assets/style/common.less';` // 公共样式
      }
    }
  }
}