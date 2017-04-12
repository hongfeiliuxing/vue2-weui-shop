<template>
  <div>
    <div class="banner">
        <swipe class="index-swipe" :auto="1000" :show-indicators="false">
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
      <div class="index-catalog">
        <div class="catalog-item" v-for="item in catalogList">
          <router-link :to="'/productList/' + item.id">
            <img src="../../assets/images/catalog.png">
            <div class="catalog-name">{{item.name}}</div>
          </router-link>
        </div>
        <div class="catalog-item">
          <router-link to="/catalog">
            <img src="../../assets/images/catalog.png">
            <div class="catalog-name">更多</div>
          </router-link>
        </div>
      </div>
      <div class="index-list">
        <div class="product">
          <div class="title">
            最近比较火的商品
          </div>
          <div class="product-list">
            <div class="product-item" v-for="item in productList">
              <router-link :to="'/productdetail/' + item.id">
                <div class="img">
                  <img src="../../assets/images/vue.png" alt="">
                </div>
                <div class="content">
                  <div class="product-name">
                    Vue.js Vue.js Vue.js Vue.js Vue.js Vue.js Vue.js Vue.js Vue.js Vue.js Vue.js
                  </div>
                  <div class="price">
                    <span>￥：</span><span>100</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
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
      catalogList: [],
      productList: []
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  mounted () {
    this.catalogList = this.$store.getters.getCatalogByLen.slice(0, 7)

    for (let i = 0; i < 8; i++) {
      this.productList.push({
        id: i,
        src: '',
        name: 'i' + i
      })
    }
  }
}
</script>
