<!-- 加载页面 -->
<template>
  <div class="loading">
    <img class="loading_tv" src="../assets/images/loading/Texteffects@2x.png" />
    <div class="loading_txt">
      <type :typetxt="loadingtxt1"></type>
    </div>
    <div class="loading_mask"></div>
  </div>
</template>

<script>
import type from "@components/type.vue"
export default {
  components: { type },
  data () {
    return {
      loadingtxt1: "20年前，互联网时代的大幕徐徐拉开，诞生了一个又一个神话"
    };
  },
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
.loading {
  width: 750px;
  height: 1200px;
  background-image: url('../assets/images/loading/Hue_Saturation.png');
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
    height: 1200px;
    background-image: url('../assets/images/loading/O2@2x.png');
    z-index: 999;
  }
}
</style>