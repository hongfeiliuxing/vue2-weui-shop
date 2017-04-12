<template>
  <div class="container" id="app">
    <div class="header">
      <shop-header></shop-header>
    </div>
    <div class="content" :class="{'content-bottom':needMarginBottom}">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div v-show="$store.state.isNeedShowTabNav">
      <tab-nav></tab-nav>
    </div>
  </div>
</template>

<script>
import shopHeader from '@/components/common/header'
import tabNav from './components/common/tab-nav'

export default {
  name: 'app',
  components: {
    shopHeader,
    tabNav
  },
  data () {
    return {
      needMarginBottom: true
    }
  },
  methods: {
    // 判断需要显示导航栏
    handleIsNeedTabNav (to) {
      this.$store.commit('setIsNeedShowTabNav', to.name === '我的商店')
    },
    isNeedMarginBottom (to) {
      this.needMarginBottom = to.name === '我的商店'
    }
  },
  watch: {
    // 监控路由变化
    '$route' (to, from) {
      // console.log(to, from)
      var self = this
      self.$store.commit('setcurrentTitleName', to.name)
      if (to.name === '我的商店') {
        self.$store.commit('setIsNeedShowBackButton', false)
      } else {
        self.$store.commit('setIsNeedShowBackButton', true)
      }
      self.handleIsNeedTabNav(to)
      self.isNeedMarginBottom(to)
    }
  }
}
</script>

<style lang="sass">
@import 'assets/sass/demo.scss';
</style>
