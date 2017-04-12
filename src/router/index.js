import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from '@/components/index/index'
import catalog from '@/components/index/catalog'
import productlist from '@/components/index/productlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '我的商店',
      component: index
    },
    {
      path: '/catalog',
      name: '商品分类',
      component: catalog
    },
    {
      path: '/productlist/:id',
      name: '商品列表',
      component: productlist
    }
  ]
})
