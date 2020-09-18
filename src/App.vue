<template>
  <div id="app" :class="isIosApp?`app_ios`:`others`">
    <router-view />
  </div>
</template>

<script>
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
    let type = this.GetRequest().type
    this.isIosApp = Boolean(type == 'banner')
  },
  methods: {
    GetRequest: function () {
      let url = location.search; //获取url中"?"符后的字串
      let theRequest = new Object();
      if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    },

  }
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
  height: 95vh;
}
</style>
