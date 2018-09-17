<template>
    <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"  v-for="item in iconList" :key="item.id">
            <a href="#">
              <img :src="item.imgUrl" alt="">
              <div class="mui-media-body mui-ellipsis">{{item.desc}}</div>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    iconList: ''
  }
}
</script>

<style lang="scss" scoped>

div{
    .mui-table-view{
      background-color: #fff;
      .mui-table-view-cell{
        padding: 0;
        border: 0;
        img{
          width: 1rem;
          height: 1rem;
        }
      }
    }
}
</style>
