<template>
    <div>
        <div class='title'>周末去哪儿</div>
        <ul>
            <li class='item border-bottom' v-for='item in list' :key='item.id'>
                <div class="item-img-wrapper">
                    <img class='item-img' :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <div class="item-title ellipsis">{{item.title}}</div>
                    <div class="item-desc ellipsis">{{item.desc}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '@/assets/css/mixins.scss';
    .title {
        line-height: 0.8rem;
        background: #f5f5f5;
        text-indent: 0.2rem;
    }
    .item-img-wrapper {
        overflow: hidden;
        height: 0;
        padding-bottom: 33.9%;
        .item-img {
            width: 100%;
        }
    }
    .item-info {
        padding: 0.1rem;
        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
        }
        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
        }
    }
</style>
