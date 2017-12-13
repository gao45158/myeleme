<template>
  <div class="header">
    <img style="width: 60px;" :src="seller.avatar" alt=""> {{ seller.name }}
  </div>
</template>

<script>
  export default {
    name: 'headerView',
    props: ['seller']
  }

</script>

<style lang="stylus" scoped>
  .header
    background #000
    color #fff
    padding 10px
</style>
