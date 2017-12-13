<template>
  <div id="app">
    <headerView :seller="seller"></headerView>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerView from './components/header/headerView'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('http://localhost:3000/seller').then((response) => {
      var response = response.body;
      this.seller = response
    })
  },
  components: {
    headerView
  }
}
</script>

<style lang="stylus">
  @import './common/stylus/index'
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgba(77, 85, 93, 1)
        &.router-link-active
          color rgba(240, 20, 20, 1)
</style>