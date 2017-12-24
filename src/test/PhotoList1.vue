<template>
    <div class="phl-container">
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id === 0 ? 'mui-active' : '']" v-for="item in Category" :key="item.id">
							{{ item.title }}
						</a>
					</div>
				</div>
			</div>
        <ul>
            <li v-for="item in Photos" :key="item.id">
                <img :src=" item.img_url" alt="">
                <div class="content">
                    <h4 class="cont-title">{{ item.seo_title }}</h4>
                    <div class="cont-body" v-html="item.content"></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
//导入mui的js文件
import mui from "../../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      Category: [],
      Photos: [],
    };
  },
  created() {
    this.getCategory();
    this.getPhotos(id=0);
  },
  methods: {
    async getCategory() {
      const { data } = await this.$http.get("/api/getimgcategory");
      if (data.status === 0) {
        this.Category = data.message;
        this.Category.unshift({
          id: 0,
          title: "全部"
        });
      }
    },
    async getPhotos() {
      const { data } = await this.$http.get("/api/getimages/" + id);
      if(data.status === 0) return this.Photos = data.message
      
    }
  },
  mounted() {
    // 当此钩子函数执行的时候，我们才可以进行控件或插件的初始化工作；
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="scss" scoped>
.phl-container {
    padding: 10px;
  .mui-slider {
    touch-action: pan-x;
  }
  ul {
      list-style: none;
      margin: 0;
      padding: 0;
    //   position: relative;
      li {
        //   height: 459px;
          position: relative;
          overflow: hidden;
          margin-bottom: 10px;
          box-shadow: 0 0 4px 2px #ccc;
          img {
              width: 100%;
              height: 100%;
              display: block;
          }
          .content {
              position: absolute;
              max-height: 84px;
              color: #fff;
              padding-top: 3px;
              background-color:rgba(0, 0, 0, 0.7);
            //   z-index: 100px;
              bottom: 0;
              .cont-title {
                  margin: 0;
                  font-size: 12px;
              }
              .cont-body {
                  font-size: 14px;
              }
          }
      }
  }
}
</style>
