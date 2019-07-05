<template>
    <div class="home-icons">
        <swiper :options="swiperOption" ref="mySwiper" style="height: 0;
      padding-bottom: 50%;" v-if="list.length">
            <swiper-slide v-for='(child, index) in pages' :key='index'>
                <div class='icon' v-for='item in child' :key='item.id'>
                    <div class='icon-img'>
                        <img class='icon-img-content' :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc ellipsis">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
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
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '@/assets/css/varibles.scss';
  @import '@/assets/css/mixins.scss';
  .home-icons {
      margin-top: 0.1rem;
      .icon {
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        overflow: hidden;
        position: relative;
        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;
            padding: 0.1rem;
            .icon-img-content {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
            height: 0.44rem;
            line-height: 0.44rem;
            color: $darkTextColor;
        }
    }
  }

</style>
