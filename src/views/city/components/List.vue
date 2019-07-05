<template>
    <div class="list" ref='wrapper'>
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                    v-for='item in hotCities'
                    :key='item.id'>
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                v-for='(item, key) of cities'
                :key='key'
                :ref='key'>
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list"
                    v-for='child in item'
                    :key='child.id'>
                    <div class="item border-bottom">{{child.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  props: ['city', 'hotCities', 'cities', 'letter'],
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  data () {
    return {
      scroll: ''
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .border-topbottom {
        &::before {
            border-color: #ccc;
        }
        &::after {
            border-color: #ccc;
        }
    }
    .border-bottom {
       &::before {
            border-color: #ccc;
        }
    }
    .list {
        position: absolute;
        top: 1.58rem;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        .title {
            line-height: 0.54rem;
            background: #eee;
            padding-left: 0.15rem;
            color: #666;
            font-size: 0.26rem;
        }
        .button-list {
            padding: 0.1rem 0.6rem 0.1rem 0.1rem;
            overflow: hidden;
            .button-wrapper {
                float: left;
                width: 33.33%;
                .button {
                    margin: 0.1rem;
                    padding: 0.1rem 0;
                    text-align: center;
                    border: 0.02rem solid #ccc;
                    border-radius: 0.06rem;
                }
            }
        }
        .item-list {
            .item {
                line-height: 0.76rem;
                padding-left: 0.2rem;
            }
        }
    }
</style>
