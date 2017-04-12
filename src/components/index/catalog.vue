<template>
  <div class="catalog-list">
    <router-link :to="'/productlist/' + item.id" class="catalog-item" v-for="item in $store.state.allCatalogList">
      <div class="icon"><img src="../../assets/images/catalog.png" alt=""></div>
      <div class="title">{{item.name}}</div>
      <div class="dirention">></div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>
