<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'CommonFade',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .v-enter, .v-leave-to {
        opacity: 0;
    }
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s;
    }
</style>
