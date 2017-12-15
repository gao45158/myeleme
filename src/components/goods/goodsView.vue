<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for="(food, index) in item.foods" class="food-item border-1px" :class="{'last-child':index == item.foods.length - 1}">
              <div class="icon">
                <img width="64" height="64" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span>月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span>￥{{ food.price }}</span>
                  <span v-show="food.oldPrice">
                    ￥{{ food.oldPrice }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsView',
  data() {
    return {
      classMap: [],
      goods: {}
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    this.$http.get('http://localhost:3000/goods').then((response) => {
      var response = response.body;
      this.goods = response
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/index'

  .goods
    display flex
    position absolute
    width 100%
    top 174px
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      overflow auto
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        margin auto
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size 12px
          .icon
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.special
              bg-image('special_3')
            &.invoice
              bg-image('invoice_3')
            &.guarantee
              bg-image('guarantee_3')
    .foods-wrapper
      flex 1
      overflow-x hidden
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgba(147, 153, 159, 1)
        background #f3f5f7
      .food-item
        width 100%
        display flex
        margin  18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &.last-child
          border-none()
          padding-bottom 0
        .icon
          flex 0 0 57px
          margin-right 10px
        .content
          flex 1
          .name
            margin 2px 0 8px 0
            font-size 14px
            line-height 14px
            color rgba(7, 17, 27, 1)
          .desc, .extra
            font-size 10px
            line-height 10px
            color rgba(147, 153, 159, 1)
          .desc
            margin-bottom 8px
          .extra
            line-height 10px
            &.line-count
              margin-right 12px
</style>
