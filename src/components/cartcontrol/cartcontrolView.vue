<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreadeCart($event)">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <transition name="move">
      <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    </transition>
    <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart(e) {
      if(!e._constructed) {
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      }else {
        this.food.count++;
      }
      this.$emit('cartadd', e.target);
    },
    decreadeCart(e) {
      if(!e._constructed) {
        return;
      }
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
  @import '../../common/stylus/index'

  .cartcontrol
    font-size 0
    .cart-decrease, .cart-add
      display inline-block
      height 24px
      line-height 24px
      font-size 24px
      padding 6px
      color rgb(0, 160, 220)
    .cart-decrease
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear  
        .inner
          display inline-block
          transition: all 0.4s linear  
          transform rotate(0)
      &.move-enter, &.move-leave-active
        transform translate3d(40px, 0, 0)
        opacity: 0 
        .inner
          transform rotate(360deg)
    .cart-count
      display inline-block
      font-size 10px
      vertical-align top
      min-width 15px
      padding-top 6px
      line-height 24px
      text-align center
      color rgb(7, 17, 27)
      &.move-enter-active, &.move-leave-active
        transition: all 0.35s linear  
      &.move-enter, &.move-leave-active
        transform translate3d(20px, 0, 0)
        opacity: 0 
</style>
