<template>
  <div class="star" :class="starType">
      <!-- <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item">
aaa
      </span> -->
      aa
  </div>
</template>

<script>
  // const LENGTH = 5;
  // const CLS_ON = 'on';
  // const CLS_HALF = 'half';
  // const CLS_OFF = 'off';

  export default {
    props: ['size', 'score'],
    computed: {
      starType() {
        return 'star-' + this.size + this.score;
      }
      // itemClasses() {
      //   let result = [];
      //   let score = Math.floor(this.score * 2) / 2;
      //   let aaa = score % 1 !== 0;
      //   let bbb = Math.floor(aaa);
      //   for (var i = 0;i < bbb;i++) {
      //     result.push(CLS_ON)
      //   };
      //   if (aaa) {
      //     result.push(CLS_HALF)
      //   };
      //   while(bbb < LENGTH) {
      //     result.push(CLS_OFF)
      //   };

      //   return result;
      // }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/index'

  .star
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        *.last-child
          margin-right 0
        &.on
          ba-image('star24_on')
        &.half
          ba-image('star24_half')
        &.off
          ba-image('star24_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        *.last-child
          margin-right 0
        &.on
          ba-image('star36_on')
        &.half
          ba-image('star36_half')
        &.off
          ba-image('star36_off')
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        *.last-child
          margin-right 0
        &.on
          ba-image('star48_on')
        &.half
          ba-image('star48_half')
        &.off
          ba-image('star48_off')
</style>

