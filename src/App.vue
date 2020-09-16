<template>
  <div id="app">
    <router-view />
    <load :imgs="imgs"></load>
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
      imgs: [
        '../assets/images/introduce/introduce1.png',
        '../assets/images/introduce/introduce2.png',
        '../assets/images/introduce/introduce3.png',
        '../assets/images/introduce/introduce4.png',
        '../assets/images/introduce/introduce5.png',
        '../assets/images/introduce/introduce6.png',
        '../assets/images/introduce/introduce7.png',
        '../assets/images/introduce/introduce8.png',
      ]
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
}
</style>
