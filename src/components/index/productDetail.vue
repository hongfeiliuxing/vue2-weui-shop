<template>
  <div class="product-detail">
    <div class="banner">
        <swipe class="detail-swipe" :auto="3000" :show-indicators="false">
          <swipe-item class="slide1">
            <img src="../../assets/images/swipter.png">
          </swipe-item>
          <swipe-item class="slide2">
            <img src="../../assets/images/swipter.png">
          </swipe-item>
          <swipe-item class="slide3">
            <img src="../../assets/images/swipter.png">
          </swipe-item>
        </swipe>
      </div>
      <div class="product-content">
        <div class="title">
          vue.js vue.js vue.js vue.js vue.js vue.js vue.js vue.js vue.js vue.js vue.js vue.js vue.js
        </div>
        <div class="price">
          <span>￥：</span><span>100</span>
        </div>
        <div class="buy">

        </div>
      </div>
  </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css')
// https://github.com/ElemeFE/vue-swipe
import {Swipe, SwipeItem} from 'vue-swipe'

export default {
  data () {
    return {
      data: null
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  created () {
    var self = this
    var params = self.$route.params
    console.log(params)
  }
}
</script>
