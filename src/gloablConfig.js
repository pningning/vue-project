//把跟vue无关的配置项抽离出来

import Vue from 'vue'

//导入 mini-ui
import MintUI from 'mint-ui'
//导入mini-ui的样式
import 'mint-ui/lib/style.css'
//使用全局注册
Vue.use(MintUI)


//导入mui的样式
import '../lib/mui/css/mui.min.css'
//导入mui的扩展样式
import '../lib/mui/css/icons-extra.css'

//导入axios文件，发送ajax
import axios from 'axios'
//把axios 挂载到vue的原型上
Vue.prototype.$http = axios.create({
  baseURL: 'http://39.106.32.91:3000/'
})
//导入全局过滤器
import './filters.js'
