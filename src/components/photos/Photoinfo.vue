
<template>
  <div class="photoinfo-container">
      <h4 class="title">{{ PhotoInfo.title }}}</h4>
      <p class="info">
          <span>发表时间： {{ PhotoInfo.add_time }}</span>
          <span>点击次数： {{ PhotoInfo.click }}</span>
      </p>
        <img class="preview-img" v-for="(item, index) in photolist" :src="item.src" height="100" @click="$preview.open(index, photolist)" :key="index">
      <div class="content" v-html="PhotoInfo.content"></div>
        <comment :newsId="id"></comment>
  </div>
</template>

<script>
//导入评论子组件
import comment from '../sub-components/Coment.vue'
export default {
    data() {
        return {
            PhotoInfo: {},
            photolist: []
        }
    },
    created() {
        this.getPhotoInfo()
        this.getPhotoList()
    },
    methods: {
        async getPhotoInfo() {
           const {data} = await this.$http.get('/api/getimageInfo/' + this.id)
           if(data.status === 0) return this.PhotoInfo = data.message[0]
        },
        //得到缩略图
       async getPhotoList() {
           const {data} = await this.$http.get('/api/getthumimages/' + this.id)
           if(data.status === 0) {
               data.message.forEach(item => {
                   item.h = 400,
                   item.w = 600
               })
               this.photolist = data.message
           }
           console.log(this.photolist)
        }
    },
    props: ['id'],
    components: {
        // 'comment': comment 这种方式可以，下面的这种方式也可以
        comment
    }
}
</script>

<style lang="scss" scoped>
    .photoinfo-container {
        padding: 0 10px;
        .title {
            color: #26a2ff;
            font-size: 14px;
            text-align: center;
            margin: 15px 0;
        }
        .info {
            display: flex;
            justify-content: space-between;
        }
        .content {
            font-size: 12px;
            line-height: 30px;
        }
        img {
            vertical-align: middle;
            margin: 8px;
            box-shadow: 0 0 7px gray;
        }
    }
</style>


