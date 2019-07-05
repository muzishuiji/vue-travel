<template>
  <div class='home-swpier'>
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="" />
        </swiper-slide>
        <!-- slot可以传入自定义的一些配置 -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
    .home-swpier >>> .swiper-pagination-bullet-active {
        background: #ffffff;
    }
    .home-swpier {
        width: 100%;
        height:0;
        padding-bottom: 31.25%;
        overflow: hidden;
        .swiper-img {
            width: 100%;
        }
    }
</style>
