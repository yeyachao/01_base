<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:"App",
  created() {
    console.log(process.env.NODE_ENV)
    console.log(process.env.VUE_APP_BASE_URL)
  }
}
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
</style>
