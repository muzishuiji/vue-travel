<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showabs">
        <div class='iconfont header-abs-back'>
            &#xe624;
        </div>
    </router-link>
    <div
        class="header-fixed"
        v-show="!showabs"
        :style="opacityOptions">
        <router-link to='/'>
            <div class='iconfont header-back'>
                &#xe624;
            </div>
        </router-link>
        城市选择
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showabs: true,
      opacityOptions: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        this.opacityOptions = {
          opacity: opacity > 1 ? 1 : opacity
        }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '@/assets/css/varibles.scss';
  .header-abs {
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
      width: 0.6rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      text-align: center;
      background: rgba(0,0,0,0.8);
      .header-abs-back {
          color: #ffffff;
          font-size: 0.32rem;
      }
  }
  .header-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
      color: #fff;
      background: $bgColor;
      font-size: 0.32rem;
      z-index: 2;
      .header-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 0.64rem;
          text-align: center;
          font-size: 0.32rem;
          color: #fff;
      }
    }
</style>
