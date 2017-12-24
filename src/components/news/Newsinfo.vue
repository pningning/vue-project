<template>
  <div class="info-container">
      <h3  class="title">{{ info.title }}</h3>
      <p class="info">
        <span>发表时间：{{ info.add_time | dateFormat}}</span>
        <span> 点击次数：{{ info.click }}次</span>
      </p>
      <hr>
      <div class="content" v-html="info.content"></div>

      <!-- 评论子组件 -->
      <coment :newsId="id"></coment>
  </div>
</template>
<script>
//导入评论子组件
import coment from '../sub-components/Coment.vue'
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    this.getNewsinfo()
  },
  methods: {
    async getNewsinfo() {
      const { data } = await this.$http.get('/api/getnew/' + this.id)
      if(data.status === 0 ) this.info = data.message[0]
      console.log(data)
    }
  },
  //使用props接受通过地址栏传送过来的参数，此处接受的名称要跟路由规则中的占位符名称保持一致
  //同时对应的路由规则中，要开启props: true模式
  props: ['id'],
  components: {
    coment
  }
};
</script>
<style lang="scss" scoped>
  .info-container {
    padding: 5px;
    .title{
      font-size: 16px;
      text-align: center;
      color: red;
      margin: 10px 0;
    }
    .info {
      font-size: 14px;
      color: #26a2ff;
      display: flex;
      justify-content: space-between;
    }

  }

</style>
