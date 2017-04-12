<template>
  <div class="container" id="app">
    <div class="header">
      <shop-header></shop-header>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div>
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
  watch: {
    '$route' (to, from) {
      console.log(to, from)
      var self = this
      self.$store.commit('setcurrentTitleName', to.name)
      if (to.name === '我的商店') {
        self.$store.commit('setIsNeedShowBackButton', false)
      } else {
        self.$store.commit('setIsNeedShowBackButton', true)
      }
    }
  }
}
</script>

<style lang="sass">
@import 'assets/sass/demo.scss';
</style>
