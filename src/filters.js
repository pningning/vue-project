//把全局的过滤器抽离出来，实现模块化思想、
import Vue from 'vue'

//moment模块格式化时间
import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat', function(dateStr,formatStr="YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(formatStr)
  })