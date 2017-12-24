<template>
    <div>
        <!-- 轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotu="GoodsList" :imgname="'src'"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品价格 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p>
                       市场价：<span style="padding-right: 10px;"><del>￥{{ GoodsInfo.market_price }}</del></span>
                       销售价：<span class="price">￥{{ GoodsInfo.sell_price }}</span>
                   </p>
                   <p>
                       购买数量：<nobox :max="GoodsInfo.stock_quantity"></nobox>
                   </p>
                   <div>
                       <mt-button type="primary" size="small">立即购买</mt-button>
                       <mt-button type="danger" size="small">加入购物车</mt-button>
                   </div>
                </div>
            </div>
        </div>
        <!-- 商品参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ GoodsInfo.goods_no }}</p>
                    <p>库存情况：{{ GoodsInfo.stock_quantity }}</p>
                    <p>上架时间：{{ GoodsInfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer btn">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    //导入轮播图组件
    import swiper from "../sub-components/Swiper.vue";
    //导入数字框组件
    import nobox from '../sub-components/goodsinfo_nobox.vue'
    export default {
        data() {
            return {
                GoodsList: [],
                GoodsInfo: {}
            }
        },
        created() {
            this.getGoodsList()
            this.getGoodsInfo()
        },
        methods: {
            async getGoodsList() {
                const {data} = await this.$http.get('/api/getthumimages/' + this.id)
                if(data.status === 0) return this.GoodsList = data.message
            },
            async getGoodsInfo() {
                const {data} = await this.$http.get('/api/goods/getinfo/' + this.id)
                if(data.status === 0) return this.GoodsInfo = data.message[0]
            }
        },
        props: ['id'],
        components: {
            swiper,
            nobox
        }
    } 
</script>
<style lang="scss" scoped>
.price {
    color: red;
    font-size: 16px;
    font-weight: 600;
}
.btn {
    flex-direction: column;
    button + button {
        margin-top: 10px;
    }
}
</style>

