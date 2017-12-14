<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="detailShow">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="detailShow">
      <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span><span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <div v-show="showDetail" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="name">{{ seller.name }}</div>
          <starView :size="48" :score="seller.score" />
        </div>
      </div>
      <div class="detail-close" @click="detailClose">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import starView from '../star/starView';

  export default {
    name: 'headerView',
    props: [
      'seller'
    ],
    data() {
      return {
        classMap: [],
        showDetail: false
      }
    },
    methods: {
      detailShow() {
        this.showDetail = true
      },
      detailClose() {
        this.showDetail = false
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    components: {
      starView
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/index'

  .header
    background rgba(7, 17, 27, 0.5)
    color #fff
    position relative
    overflow hidden
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size 0
      position relative
      .avatar
        display inline-block
        img
          border-radius 2px
      .content 
        vertical-align top
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            width 30px
            height 18px
            bg-image('brand')
            background-size 30px 18px
          .name
            font-size 16px
            font-weight bold
            margin-left 6px
            line-height 16px
            vertical-align top
        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.special
              bg-image('special_1')
            &.invoice
              bg-image('invoice_1')
            &.guarantee
              bg-image('guarantee_1')
          .text
            font-size 10px
            line-height 10px
            vertical-align top
    .support-count
      position absolute
      right 12px
      bottom 18px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background rgba(0, 0, 0, 0.2)
      .count
        font-size 10px
      .icon-keyboard_arrow_right
        vertical-align top
        margin-left 2px
        line-height 24px
        font-size 10px
    .bulletin-wrapper
      height 28px
      line-height 28px
      padding 0px 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7, 17, 27, 0.2)
      position relative
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        bg-image('bulletin')
        background-size 22px 12px
        vertical-align top
        margin-top 8px
      .bulletin-text
        font-size 10px
        margin 0px 4px
        vertical-align top
      .icon-keyboard_arrow_right
        position absolute
        right 12px
        top 8px
        font-size 10px
    .background
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .detail
      position fixed
      left 0
      top 0
      width 100%
      height 100%
      background rgba(7, 17, 27, 0.8)
      z-index 100
      overflow auto
      .detail-wrapper
        width 100%
        min-height 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .name
            line-height 16px
            font-size 16px
            text-align center
            font-weight 700
      .detail-close
        position relative
        width 32px
        height 32px
        margin -64px auto 0 auto
        font-size 32px
        clear both
</style>
