<template>
    <div class="header">
        <div class="header-left">
          <span class="iconfont icon-back"></span>
        </div>
        <div class="header-input">
          <span class="iconfont icon-search"></span>
          输入旅游景点
        </div>
        <div class="header-right">
          <router-link :to="{name:'City'}" class="aColor">
            <!--{{this.$store.state.city}}-->
            {{this.city}}
          <span class="iconfont icon-arrow-bottom"></span>
          </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
  /*//<!--此处1rem=html font-size:50px-->*/
  /*@import '../assets/scss/variables';*/
  /*在webpack.base.conf.js中起了别名，但是css的导入需要加上~*/
  @import '~scss/variables';
.header{
  height: .86rem;
  line-height: .86rem;
  display: flex;
  background-color: $bgcolor;
  color: #fff;
  .header-left{
    width: .64rem;
    float: left;
    .icon-back{
      margin-left: .2rem;
      font-size: .4rem;
    }
  }
  .header-input{
    margin: .12rem 0 .12rem .2rem;
    line-height: .64rem;
    color: #ccc;
    /*自动撑大*/
    flex: 1;
    border-radius: .1rem;
    background-color: #ffffff;
    padding-left: .2rem;
  }
  .header-right{
    min-width: 1rem;
    padding:0 .2rem;
    float: right;
    text-align: center;
    .icon-arrow-bottom{
      font-size: .1rem;
      text-align: center;
      margin-left: -.08rem;
    }
  }
}
</style>
