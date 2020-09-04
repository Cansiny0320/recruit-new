<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import VConsole from 'vconsole';

const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
  new VConsole();
}


export default {};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
