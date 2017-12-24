<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
//导入mui的js
import mui from '../../../lib/mui/js/mui.js'
    export default {
        data() { 
            return {}
        },
        methods: {},
        mounted() {
            //当页面都渲染完的时候初始化组件
            mui('.mui-numbox').numbox()
        },
        props: ['max'],
        watch: {
            //当父组件传过来最大的时候，是undefined(ajax异步加载的原因)
            //监听max数据的变化，重新设置max的最大值
            max: function(newval) {
                mui('.mui-numbox').numbox().setOption('max',newval)
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>

