// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'

//导入公共的配置
import './gloablConfig.js'
//导入图片缩略图预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



//导入路由模块
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)

//导入路由文件
import router from './router.js'

// 导入 根组件
import App from './components/App.vue'
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})