<template>
  <div>
      <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <detail-list :list="categoryList"></detail-list>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data () {
    return {
      gallaryImgs: [],
      sightName: '',
      bannerImg: '',
      categoryList: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      console.log(res)
      let dataObj = res.data
      if (dataObj.ret) {
        this.sightName = dataObj.data.sightName
        this.bannerImg = dataObj.data.bannerImg
        this.gallaryImgs = dataObj.data.gallaryImgs
        this.categoryList = dataObj.data.categoryList
        console.log(this.sightName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.content {
  height: 50rem;
}
</style>
