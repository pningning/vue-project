
import VueRouter from 'vue-router'
//导入组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
import NewsList from './components/news/Newslist.vue'
import NewsInfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/Photoinfo.vue'
import GoodsList from './components/goods/Goodslist.vue'
import GoodsInfo from './components/goods/Goodsinfo.vue'
//创建路由对象
const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer,},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo, props: true},
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo/:id', component: PhotoInfo, props: true},
    {path: '/home/goodslist', component: GoodsList},
    {path: '/home/goodsinfo/:id', component: GoodsInfo, props: true}
  ],
  linkActiveClass: 'mui-active'
})

export default router