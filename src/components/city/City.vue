<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
      <city-capital :cities="cities" @change="clickLetter"></city-capital>
    </div>
</template>

<script>
import CityHeader from './CityHeader'
import CitySearch from './CitySearch'
import CityList from './CityList'
import CityCapital from './CityCapital'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      cities: '',
      hotCities: '',
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityCapital
  },
  mounted () {
    axios.get('api/city.json').then(res => {
      const data = res.data.data
      this.cities = data.cities
      this.hotCities = data.hotCities
    }, err => {
      console.log(err)
    })
  },
  methods: {
    clickLetter (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
