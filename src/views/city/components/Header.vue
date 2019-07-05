<template>
    <div class="header">
        城市选择
        <router-link to='/'>
            <div class='iconfont header-back'>
                &#xe624;
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '@/assets/css/varibles.scss';
  .header {
      position: relative;
      overflow: hidden;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
      color: #fff;
      background: $bgColor;
      font-size: 0.32rem;
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
