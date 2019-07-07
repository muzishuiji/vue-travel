<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
        :cities="cities"
        :hotCities="hotCities"
        :letter="letter"></city-list>
        <city-alphabet @change="changeLetter"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: '',
      city: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      let data = res.data
      if (data.ret) {
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
    },
    changeLetter (letter) {
      this.letter = letter
    },
    changeCity (city) {
      console.log(city)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
