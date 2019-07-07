<template>
    <div>
        <div class="search">
            <input class="search-input" v-model='keyword' type="text" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-list" ref="search" v-show="keyword">
            <ul class="content">
                <li
                  class="search-content border-bottom"
                  v-for="item in list"
                  :key="item.id"
                  @click="clickHandler(item.name)">
                  {{item.name}}
                </li>
                <li class="search-content border-bottom"
                v-show="keyword && list.length === 0">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers'
import BScroll from '@better-scroll/core'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) > -1 ||
                  item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  data () {
    return {
      list: [],
      keyword: '',
      timer: '',
      scroll: ''
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  methods: {
    clickHandler (city) {
      console.log(city)
      alert('123')
      this.$store.commit('changeCity', city)
      this.list = []
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    @import '@/assets/css/varibles.scss';
    .search {
        margin-top: -1px;
        height: 0.72rem;
        padding: 0.1rem;
        background: $bgColor;
        .search-input {
            width: 100%;
            height: 0.62rem;
            box-sizing: border-box;
            padding: 0 0.1rem;
            line-height: 0.62rem;
            text-align: center;
            border-radius: 0.06rem;
            color: #999;
        }
    }
    .search-list {
        z-index: 1;
        overflow-y: auto;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eeeeee;
        .search-content {
            line-height: 0.62rem;
            padding-left: 0.2rem;
            color: #666;
            background: #ffffff;
        }
    }
</style>
