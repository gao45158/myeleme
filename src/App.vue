<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/seller">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/goods">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
