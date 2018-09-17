<template>
  <div class="changeBgcolor">
  <div class="title">周末去哪儿</div>
  <ul>
    <!--border-bottom是border.css中的，即一像素边框-->
    <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="">
      </div>
      <div class="item-bottom">
        <p class="item-title ellipsis">{{item.title}} </p>
        <p class="item-desc ellipsis">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: ''
  }
}
</script>

<style lang="scss" scoped>
  .title{
    line-height: .6rem;
    text-indent: .2rem;
    background-color: #eee;
  }
  .item{
    overflow: hidden;
    /*display: flex;*/
    .item-img-wrapper{
      .item-img{
        height: 2.8rem;
        width: 100%;
      }
    }
    .item-bottom{
      margin-left: .1rem;
      min-width: 0;
      padding: .1rem;
      .item-title{
        margin-bottom: 0;
        line-height: .54rem;
        font-size: .32rem;
        font-weight: bold;
      }
      .item-desc{
        margin-bottom: 0;
        line-height: .42rem;
        color: #BDB6CC;
      }
    }
  }
</style>
