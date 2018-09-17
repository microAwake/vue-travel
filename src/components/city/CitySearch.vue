<template>
    <div class="search">
      <input type="text" placeholder="请输入搜索地点" class="search-input" v-model="keyword">
      <div ref="searchContent"  class="search-content" v-show="keyword">
        <ul>
          <li class="content border-bottom" v-for="res in results" :key="res.id" @click="changeCity(res.name)">
            {{res.name}}
          </li>
          <li class="content content-not-found border-bottom" v-show="noData">找不到符合的内容哦</li>
        </ul>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      // timer用来控制频率
      timer: '',
      results: ''
    }
  },
  computed: {
    noData () {
      return !this.results.length
    }
  },
  props: {
    cities: ''
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.results = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchContent)
  },
  methods: {
    changeCity (city) {
      // console.log(city)
      // this.$store.dispatch('changeCities', city)
      this.$store.commit('changeCities', city)
      this.keyword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~scss/variables.scss';
.search{
  height: .72rem;
  padding: 0 .1rem;
  background-color: $bgcolor;
  .search-input{
    border-radius: .4rem;
    height: .62rem;
    box-sizing: border-box;
    margin:.06rem 0 0 0;
  }
  .search-content{
    z-index: 10;
    overflow: hidden;
    position: absolute;
    background-color: #eee;
    top: 1.6rem;
    bottom: 0;
    left: 0;
    right: 0;
    .content{
      padding-left: .2rem;
      line-height: .5rem;
    }
  }
}
</style>
