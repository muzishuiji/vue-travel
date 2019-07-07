<template>
  <div>
      <div class="list">
          <div
            class="item"
            v-for="(item, index) in list"
            :key="index">
              <div class="item-title border-bottom">
                  <span class="item-title-icon"></span>
                  {{item.title}}
              </div>
              <div v-if="item.child" class="item-child">
                  <detail-list :list="item.child"></detail-list>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .item {
        .item-title {
            line-height: 0.8rem;
            font-size: 0.32rem;
            padding: 0 0.2rem;;
            .item-title-icon {
                display: inline-block;
                position: relative;
                width: .36rem;
                height: .36rem;
                top: .06rem;
                left: .06rem;
                background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
                margin-right: .1rem;
                background-size: .4rem 3rem;
            }
        }
        .item-child {
            padding: 0 0.2rem;
        }
    }
</style>
