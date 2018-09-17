<template>
  <div>
    <home-header></home-header>
    <home-swipe :swipeList="swipeList"></home-swipe>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwipe from './HomeSwipe'
import HomeIcon from './HomeIcon'
import HomeRecommend from './HomeRecommend'
import HomeWeekend from './HomeWeekend'
import {mapState} from 'vuex'

import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      swipeList: '',
      iconList: '',
      recommendList: '',
      weekendList: '',
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwipe,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  // 确保选择不同城市，发送不同的ajax请求
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo () {
      // 当前选择的城市不同，那么发送的ajax请求也会不同
      axios.get('api/index.json?city=' + this.city).then(res => {
        const data = res.data.data
        this.swipeList = data.swipeList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
