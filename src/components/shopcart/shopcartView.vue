<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totailCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight': totailCount > 0}"></i>
          </div>
          <div class="num" v-show="totailCount > 0">{{ totailCount }}</div>
        </div>
        <div class="price" :class="{'highlight': totailPrice > 0}">￥{{ totailPrice }}</div>
        <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{ payDesc }}
        </div>
      </div>
    </div>
    <div class="ball-container">
      <transition v-for="ball in balls" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="ball.show">
          <div class="inner inner-hook"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopcartView',
  data(){
      return {
        balls: [
          {
            show: false
          },
          {
            show:  false
          },
          {
            show:  false
          },
          {
            show:  false
          },
          {
            show:  false
          }
        ],
        dropBalls:[]
      }
    },
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 1
          }
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totailPrice() {
      let totail = 0;
      this.selectFoods.forEach((food) => {
        totail += food.price * food.count
      })
      return totail
    },
    totailCount() {
      let count = 0;
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc() {
      if (this.totailPrice === 0) {
        return `￥${this.minPrice}元起送`
      }else if (this.totailPrice < this.minPrice) {
        let diff = this.minPrice - this.totailPrice
        return `还差￥${diff}元起送`
      }else {
        return '去结算'
      }
    },
    payClass() {
      if (this.totailPrice < this.minPrice) {
        return 'not-enough';
      }else {
        return 'enough';
      }
    }
  },
  methods: {
    drop(el) { 
      //触发一次事件就会将所有小球进行遍历
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];
        if (!ball.show) { //将false的小球放到dropBalls
          ball.show = true;
          ball.el = el; //设置小球的el属性为一个dom对象
          this.dropBalls.push(ball); 
          return;
        }
      }
    },
    beforeEnter(el){ //这个方法的执行是因为这是一个vue的监听事件
      let count = this.balls.length;
      while (count--) {
        let ball = this.balls[count];
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect(); //获取小球的相对于视口的位移(小球高度)
          let x = rect.left - 32;
          let y = -(window.innerHeight - rect.top - 22); //负数,因为是从左上角往下的的方向
          el.style.display = ''; //清空display
          el.style.webkitTransform = `translate3d(0,${y}px,0)`; 
          el.style.transform = `translate3d(0,${y}px,0)`;
          //处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0]; //使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
          inner.style.transform = `translate3d(${x}px,0,0)`;
        }
      }
    },
    enter(el, done) { //这个方法的执行是因为这是一个vue的监听事件
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight; //触发重绘html
      this.$nextTick(() => { //让动画效果异步执行,提高性能
        el.style.webkitTransform = 'translate3d(0,0,0)';
        el.style.transform = 'translate3d(0,0,0)';
        //处理内层动画
        let inner = el.getElementsByClassName('inner-hook')[0]; //使用inner-hook类来单纯被js操作
        inner.style.webkitTransform = 'translate3d(0,0,0)';
        inner.style.transform = 'translate3d(0,0,0)';
        el.addEventListener('transitionend', done); //Vue为了知道过渡的完成，必须设置相应的事件监听器。
      });
    },
    afterEnter(el) { //这个方法的执行是因为这是一个vue的监听事件
      let ball = this.dropBalls.shift(); //完成一次动画就删除一个dropBalls的小球
      if (ball) {
        ball.show = false;
        el.style.display = 'none'; //隐藏小球
      }
    }
  }
}
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
            &.highlight
              background rgb(0, 160, 220)
            .icon-shopping_cart
              font-size 24px
              color #80858a
              line-height 44px
              &.highlight
                color #fff
          .num
            padding 0 6px
            height 16px
            line-height 16px
            background rgb(240, 20, 20)
            position absolute
            border-radius 16px
            right 0
            top 0
            font-size 9px
            font-weight 700
            color #fff
            box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display inline-block
          vertical-align top
          line-height 24px
          margin-top 12px
          box-sizing border-box
          padding-right 12px
          border-right 1px solid rgba(255, 255, 255, 0.1)
          font-size 14px
          font-weight 700 
          &.highlight
            color #fff
        .desc
          display inline-block
          vertical-align top
          line-height 24px
          margin 12px 0 0 12px
          font-size 10px
          font-weight 200
      .content-right
        flex 0 0 130px
        width 130px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 14px
          font-weight 700
          background #2b333b
          &.not-enough
            background #2b333b
          &.enough
            background #00b43c
            color #fff;
    .ball-container
      .ball
        position fixed
        left 32px
        bottom 22px
        z-index 200
        transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width 16px
          height 16px
          border-radius 50%
          background rgb(0, 160, 220)
          transition: all 0.6s linear
</style>
