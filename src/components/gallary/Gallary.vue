<template>
  <div class="container" @click="handlerGallaryClose">
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in imgs" :key="item">
                <img class="gallary-img" :src="item" alt="" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handlerGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .container /deep/ .swiper-container {
        overflow: inherit;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        z-index: 1;
        .wrapper {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            .gallary-img {
                width: 100%;
            }
            .swiper-pagination {
                color: #ffffff;
                bottom: -1.0rem;
            }
        }
    }
</style>
