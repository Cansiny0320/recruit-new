<!-- 部门卡片组件 -->
<template>
  <div class="card">
    <div class="card_ctx">
      <div class="topic">
        <gravity1 :img="img[0]" :id="0"></gravity1>
      </div>
      <div class="logo">
        <gravity2 :img="img[1]" :id="1"></gravity2>
      </div>
      <div class="otherlogo">
        <gravity3 :img="img[2]" :id="2"></gravity3>
      </div>

      <div class="tip"></div>
    </div>
    <div class="mask"></div>
    <div class="paperclip"></div>
  </div>
</template>

<script>
import gravity1 from "./gravity"
import gravity2 from "./gravity"
import gravity3 from "./gravity"
export default {
  components: { gravity1, gravity2, gravity3 },
  data () {
    return {
      img: ['部门帖子@2x.png', '工程文件1@2x.png', '2@2x.png']
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
.card {
  width: 347px;
  height: 506px;
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    position: absolute;
    width: 347px;
    height: 506px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/detail/塑料质感@2x.png');
    background-size: cover;
    z-index: 10;
  }
  .card_ctx {
    width: 335px;
    height: 498px;
    background-image: url('../assets/images/detail/Overlay Effect - Change Opacity@2x.png');
    background-size: cover;
    z-index: 2;
    .tip {
      position: absolute;
      width: 84px;
      height: 86px;
      background-image: url('../assets/images/detail/组 12@2x.png');
      background-size: cover;
      transform: translateX(231px) translateY(383px);
    }
    .topic {
      position: absolute;
      width: 217px;
      height: 132px;
      transform: translateX(50px) translateY(50px);
      z-index: 3;
      ::v-deep img {
        width: 217px;
        height: 132px;
      }
    }
    .logo {
      position: absolute;
      width: 139px;
      height: 107px;
      transform: translateX(70px) translateY(330px);
      ::v-deep img {
        width: 139px;
        height: 107px;
      }
    }
    .otherlogo {
      position: absolute;
      width: 175px;
      height: 338px;
      transform: translateX(110px) translateY(100px);
      ::v-deep img {
        width: 175px;
        height: 338px;
      }
    }
  }
  .paperclip {
    position: absolute;
    width: 76px;
    height: 103px;
    background-image: url('../assets/images/detail/图层 677@2x.png');
    transform: translateX(130px) translateY(-220px);
    background-size: cover;
    z-index: 20;
  }
}
</style>