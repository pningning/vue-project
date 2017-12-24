<template>
    <div class="com-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请求输入要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postCom">发表评论</mt-button>
        <div class="com-list" v-for="(item, i) in list" :key="i">
            <div class="com-title">第{{ i+1 }}楼 用户：{{ item.use_name}} 发表时间：{{ item.add_time | dateFormat}}</div>
            <div class="com-body">{{ item.content }}</div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>

//按需导入mint的弹框组件
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            list: [],
            page: 1,
            msg: ''
        }
    },
    props: ['newsId'],
    created() {
        this.getCmtList()
    },
    methods: {
        async getCmtList() {
            const {data} = await this.$http.get('/api/getcomments/'+ this.newsId +'?pageindex=' + this.page)
            if(data.status === 0 ) return (this.list = this.list.concat(data.message))
        },
        getMore() {
            //点击的时候，页面加一
            this.page++
            //重新渲染页面
            this.getCmtList()
        },
        async postCom() {
            if(this.msg.trim().length === 0) return Toast('请输入评论内容')
          const {data} = await this.$http.post('/api/postcomment/' + this.newsId, { content: this.msg })
          if(data.status === 0) {
              //如果发送成功，手动的把用户提交的内容跟当前的用户信息提交到list数据中，达到重新渲染页面的效果
              this.list.unshift({
                  use_name: '匿名用户',
                  add_time: new Date(),
                  content: this.msg.trim()
              })
              this.msg = ''
          }
        }
    }
}
</script>
<style lang="scss" scoped>
.com-container {
  textarea {
    margin: 0;
    font-size: 14px;
  }
  .com-list {
    line-height: 30px;
    margin: 5px 0;
    .com-title {
      font-size: 14px;
      height: 30px;
      background-color: #ccc;
    }
    .com-body {
      font-size: 13px;
      height: 30px;
      text-indent: 2em;
    }
  }
}
</style>
