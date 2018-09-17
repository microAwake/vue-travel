<template>
    <div class="header border-bottom">
      <router-link :to="{name:'Home'}" class="aColor">
        <span class="iconfont icon-back"></span>
      </router-link>
      <span class="header-left header-span">国内城市</span>
      <span class="header-right header-span">国外城市</span>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  @import '~scss/variables.scss';
.header{
    background-color: $bgcolor;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
  .icon-back{
    margin-left: -0.4rem;
    margin-right: 0.2rem;
    font-size: .4rem;
  }
  .header-span{
    border: 1px solid forestgreen;
    box-sizing: border-box;
    display: inline-block;
    height: .84rem;
    width: 2.8rem;
  }
  .header-left{
    margin-right: -0.1rem;
  }
}
</style>
