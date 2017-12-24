
<template>
  <div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
            <!-- //把渲染的每一条新闻作为路由链接，同时把id传过去 -->
            <router-link :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h3>{{ item.title }}</h3>
                    <p class='mui-ellipsis'>
                        <!-- //使用全局过滤器格式化时间 -->
                        <span>发表时间：{{ item.add_time | dateFormat  }}</span>
                        <span>次数：{{ item.click }}次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        //加载页面就发送ajax请求页面
        this.getNewslist()
    },
    methods: {
        async getNewslist() {
           const { data } =  await this.$http.get('/api/getnewslist')
           console.log(data)
           if(data.status === 0) return this.list = data.message
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-media-body {
    h3 {
        font-size: 14px;
    }
    
}
.mui-ellipsis {
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
</style>
