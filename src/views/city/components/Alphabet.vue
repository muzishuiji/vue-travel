<template>
    <div class="list">
        <div class="item"
        v-for='item in list'
        :key='item'
        :ref='item'
        @touchstart.prevent='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
        @click="clickHandler">
          {{item}}
        </div>
    </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers'
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: '',
      timer: '',
      list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    clickHandler (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 给touch操作设置节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.list.length) {
            this.$emit('change', this.list[index])
          }
        }
      }, 20)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '@/assets/css/varibles.scss';
  .list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 1.58rem;
      bottom: 0;
      width: 0.4rem;
      .item {
          line-height: 0.4rem;
          text-align: center;
          color: $bgColor;
      }
  }
</style>
