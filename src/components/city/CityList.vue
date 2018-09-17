<template>
  <!--设置ref属性，可以操作DOM-->
    <div class="city-list" ref="wrapper">
      <div class="city-wrapper">
        <div class="area">
          <div class="title border-topbottom">
            当前城市
          </div>
          <div class="card-list">
            <div class="card-wrapper">
              <div class="card-item">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            热门城市
          </div>
          <div class="card-list">
            <div class="card-wrapper" v-for="hotCity in hotCities" :key="hotCity.id" @click="changeCity(hotCity.name)">
              <div class="card-item">{{hotCity.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(city,key) in cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
            <ul class="item-list">
              <li class="item border-bottom" v-for="item in city" :key="item.id" @click="changeCity(item.name)">{{item.name}}</li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
    cities: '',
    hotCities: '',
    letter: ''
  },
  methods: {
    changeCity (city) {
      // console.log(city)
      // this.$store.dispatch('changeCities', city)
      this.changeCities(city)
      // this.$store.commit('changeCities', city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCities'])
  },
  // 需要监听letter的变化
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // better-scroll获取的必须是dom元素
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.border-topbottom{
  &:before{
    border-color: #777;
  }
  &:after{
    border-color: #777;
  }
}
.border-bottom{
  &:before{
    border-color: #ccc;
  }
}
.city-list{
  /*可以使页面超出部分不显示，且不能拖动*/
  overflow: hidden;
  position: absolute;
  right: 0;
  left: 0;
  /*设置top值，是因为上面cityHeader,citySearch所占高度*/
  top: 1.6rem;
  bottom: 0;
  .area{
    background-color: white;
    .title{
      background-color: #eee;
      line-height: .5rem;
      padding-left: .2rem;
      font-size: .35rem;
      clear: both;
    }
    .card-list{
      padding: .1rem .6rem .1rem .1rem;
      .card-wrapper{
        width: 33.3%;
        float: left;
        padding: .1rem 0;
        .card-item{
          border: .02rem solid #ccc;
          text-align: center;
          margin: 0 .2rem;
          padding: .1rem;
          border-radius: .1rem;
        }
      }

    }
    .item-list{
      .item{
        padding-left: .2rem;
        line-height: .75rem;
      }
    }
  }
}
</style>
