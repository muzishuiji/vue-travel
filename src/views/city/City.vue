<template>
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list
        :city='city'
        :cities='cities'
        :hotCities='hotCities'
        :letter='letter'></city-list>
        <city-alphabet @change="changeLetter"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import dataObj from './js/data'
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
      city: '',
      letter: ''
    }
  },
  mounted () {
    this.getHomeInfoSucc()
  },
  methods: {
    getHomeInfoSucc () {
      let data = dataObj
      if (data.ret) {
        this.city = data.city
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
    },
    changeLetter (letter) {
      this.letter = letter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
