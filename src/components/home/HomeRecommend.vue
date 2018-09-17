<template>
    <div class="changeBgcolor">
      <div class="title">热销推荐</div>
      <ul>
        <!--border-bottom是border.css中的，即一像素边框-->
          <router-link class="item border-bottom" v-for="item in recommendList" :key="item.id" :to="{name:'Detail',params:{id:item.id}}" tag="li">
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl" alt="">
            </div>
            <div class="item-right">
              <p class="item-title ellipsis">{{item.title}} </p>
              <p class="item-desc ellipsis">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>

      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: ''
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
    display: flex;
    height: 1.9rem;
    .item-img-wrapper{
      .item-img{
        height: 1.7rem;
        width: 1.7rem;
        padding: .1rem;
      }
    }
    .item-right{
      flex: 1;
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
      .item-button{
        background-color: #ff9300;
        padding: .05rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
</style>
