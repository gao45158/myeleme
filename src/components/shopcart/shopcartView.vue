<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price">￥10</div>
        <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <div class="pay">
          ￥{{ minPrice }}元起送
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopcartView',
  props: ['deliveryPrice', 'minPrice']
};
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/index'

  .shopcart
    position fixed
    left 0
    bottom 0
    width 100%
    height 48px
    z-index 60
    .content
      display flex
      background #141d27
      font-size 0
      color rgba(255, 255, 255, 0.4)
      .content-left
        flex 1
        .logo-wrapper
          display inline-block
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          box-sizing border-box
          vertical-align top
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            background #2b343c
            text-align center
            .icon-shopping_cart
              font-size 24px
              color #80858a
              line-height 44px
        .price
          display inline-block
          vertical-align top
          line-height 24px
          margin-top 12px
          box-sizing border-box
          padding-right 12px
          border-right 1px solid rgba(255, 255, 255, 0.1)
          font-size 16px
          font-weight 700
        .desc
          display inline-block
          vertical-align top
          line-height 24px
          margin 12px 0 0 12px
          font-size 10px
          font-weight 200
      .content-right
        flex 0 0 150px
        width 150px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 16px
          font-weight 700
          background #2b333b
</style>
