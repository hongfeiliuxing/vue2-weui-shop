<template>
  <div class="shop-header">
    <div @click="goBack" v-show="$store.state.isNeedShowBackButton">&nbsp;< 返回</div>
    <div class="header-title">{{$store.state.currentTitleName}}</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
