<template>
  <div id="app" :class="isIosApp?`app_ios`:`others`">
    <router-view />
  </div>
</template>

<script>
import judgeClient from './utils/judgeClient'
// import VConsole from 'vconsole';

// const isDebug = true;
// // 本地开发调试注入vConsole
// if (isDebug) {
//   new VConsole();
// }

export default {
  data () {
    return {
      isIosApp: ''
    }
  },
  mounted () {
    this.isIosApp = Boolean(window.location.href == 'https://wx.redrock.team/game/recruit-new-2020/#/?type=banner' && judgeClient() == 'ios')
  },

};
</script>

<style lang="scss">
#app {
}
.others {
  width: 100%;
  height: 100vh;
}
.app_ios {
  width: 100%;
  height: 1206px;
}
</style>
