<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe64a;</span> {{gallaryImgs.length}}</div>
      </div>
    </div>
    <common-fade>
      <common-gallary
            v-show="showImgGallary"
            :imgs="gallaryImgs"
            @close="handlerGallaryClose"></common-gallary>
    </common-fade>
  </div>
</template>

<script>
import CommonGallary from '../../../components/gallary/Gallary'
import CommonFade from '../../../components/fade/CommonFade'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    CommonFade
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showImgGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showImgGallary = true
    },
    handlerGallaryClose () {
      this.showImgGallary = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.6rem;
      color: #ffffff;
      background-image: linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8));
      .banner-title {
        flex: 1;
        font-size: 0.32rem;
        padding: 0 0.2rem;
      }
      .banner-number {
        height: 0.32rem;
        line-height: 0.32rem;
        margin-top: 0.14rem;
        padding: 0 0.4rem;
        border-radius: 0.18rem;
        background: rgba(0,0,0,0.8);
        font-size: 0.24rem;
        .banner-icon {
          font-size: 0.24rem;
        }
      }
    }
  }
</style>
