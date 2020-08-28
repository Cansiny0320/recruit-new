<!-- 加载页面 -->
<template>
  <div class="loading">
    <router-view></router-view>
    <!--遮幕-->
    <div class="loading_mask"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="scss" scoped>
.loading {
  width: 750px;
  height: 1205px;
  overflow: hidden;
  position: relative;
  background-image: url('../assets/images/loading/Hue_Saturation.png');
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  .loading_tv {
    display: block;
    width: 182px;
    height: 161px;
    margin-top: 346px;
    margin-bottom: 51px;
    background-image: url('../assets/images/loading/Texteffects@2x.png');
    background-size: cover;
  }
  .loading_txt {
    height: 76px;
    width: 427px;
  }
  .loading_mask {
    width: 750px;
    height: 1205px;
    position: absolute;
    background-image: url('../assets/images/loading/O2@2x.png');
    background-size: cover;
    z-index: 999;
  }
}
</style>
