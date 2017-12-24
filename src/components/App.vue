<template>
  <div class="app-container">
		<!-- //顶部 -->
    <mt-header class="header" fixed title="Vue项目">
      <span slot="left">
    <mt-button icon="back">返回</mt-button>
  </span>
    </mt-header>
    <!-- //中间切换的子组件 -->
    <transition>
			<router-view></router-view>
		</transition>
		<!-- //底部 -->
    <nav class="mui-bar mui-bar-tab">
			<!-- //下面对应的每个路由链接 -->
			<router-link class="my-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="my-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="my-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-card"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="my-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>


<script>
</script>

// 这里写的样式，要符合 scss 语法，并且，样式是 当前组件私有的，不会成为全局的样式，也不会应用给子组件
<style lang="scss" scoped>
.app-container {
	.header {
		z-index: 100;
	}
  padding-top: 40px;
	padding-bottom: 50px;
	//解决动画时候页面别撑宽的时候的问题
	overflow: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.4s ease;
}
//mui的下面的导航栏跟轮动的topbar之间有冲突，改变下面的，类样式来避免冲突
.mui-bar-tab .my-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .my-tab-item .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .my-tab-item.mui-active {
    color: #007aff;
}
.mui-bar-tab .my-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
</style>
