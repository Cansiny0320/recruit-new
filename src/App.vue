<template>
  <div id="app">
    <!-- <router-view /> -->
    <type :typetxt="loadingTxt1"></type>
  </div>
</template>

<script>
import type from "./components/type"
export default {
  components: {
    type
  },
  data () {
    return {
      loadingTxt1: "20年前，互联网时代的大幕徐徐拉开，诞生了一个又一个神话"
    }
  }
}
</script>

<style lang="scss">
</style>
