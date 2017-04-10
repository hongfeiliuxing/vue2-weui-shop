<template>
  <!--<div id="app">
    <router-view></router-view>
  </div>-->

  <div class="container" id="app">
    <div class="">
      <div class="page__bd">
        <div class="weui-tab">
            <div class="weui-tab__panel">

            </div>
            <div class="weui-tabbar">
                <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                    <p class="weui-tabbar__label">首页</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <p class="weui-tabbar__label">购物车</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">

                    <p class="weui-tabbar__label">个人中心</p>
                </a>
            </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import 'assets/weui.css';
@import 'assets/demo.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
