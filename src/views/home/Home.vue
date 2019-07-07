<template>
  <div class='home'>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if (this.lastCity === this.city) {
      return
    }
    this.lastCity = this.city
    this.getHomeInfo()
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      console.log('我发请求了')
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      let dataObj = res.data
      if (dataObj.ret) {
        this.swiperList = dataObj.data.swiperList
        this.iconList = dataObj.data.iconList
        this.recommendList = dataObj.data.recommendList
        this.weekendList = dataObj.data.weekendList
      }
    }
  }
}
</script>

<style>

</style>
