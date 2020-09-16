<template>
  <div id="app">
    <router-view />
    <load></load>
  </div>
</template>

<script>
import load from "./components/load"
// import VConsole from 'vconsole';

// const isDebug = true;
// // 本地开发调试注入vConsole
// if (isDebug) {
//   new VConsole();
// }


export default {
  data () {
    return {
    }
  },
  components: {
    load
  }

};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
