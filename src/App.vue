<template>
  <div id="app">
    <!--尽可能的缓存组件,主要是用name指向对应的组件-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
</style>
