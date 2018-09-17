<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="swipe in swipeList" :key="swipe.id">
        <img :src="swipe.imgUrl">
      </mt-swipe-item>

    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwipe',
  props: {
    swipeList: ''
  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 2.34rem;
    .mint-swipe-item{
      img{
        width: 100%;
      }
    }
  }
</style>
