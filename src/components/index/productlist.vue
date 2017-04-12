<template>
  <div class="index-list" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" infinite-scroll-distance="30">
    <div class="product">
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
      <div class="loading">
        请稍等，正在加载...
      </div>
    </div>
  </div>
</template>

<script>
// https://github.com/ElemeFE/vue-infinite-scroll
/*
 * infinite-scroll-disabled:boolean 是否禁用滚动 默认false
 * infinite-scroll-immediate-check:boolean 是否立即执行一次绑定方法 默念 true
 * infinite-scroll-distance:number 距离底部多远开始执行回调 默认 0
*/
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'productList',
  directives: {
    infiniteScroll
  },
  data () {
    return {
      productList: []
    }
  },
  mounted () {
    var self = this
    var params = self.$route.params
    console.log(params)

    for (let i = 0; i < 8; i++) {
      this.productList.push({
        id: i,
        src: '',
        name: 'i' + i
      })
    }
  },
  methods: {
    loadMore () {
      var self = this

      setTimeout(() => {
        for (let i = 0; i < 8; i++) {
          self.productList.push({
            id: i,
            src: '',
            name: 'i' + i
          })
        }
      }, 3000)
    }
  }
}
</script>
