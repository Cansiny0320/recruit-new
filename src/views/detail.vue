<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <!-- <div class="top"></div>
    <div class="cards">
      <card1></card1>
    </div> -->
    <gravity :img="img"></gravity>
  </div>
</template>

<script>
import gravity from "../components/gravity"
// import card1 from "@components/card"
export default {
  components: { gravity },
  data () {
    return {
img:'2@2x.png'
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
@font-face {
  font-family: 'AliHYAiHei';
  src: url('../assets/font-style/AliHYAiHei.ttf');
}
.detail {
  width: 750px;
  height: 100%;
  overflow: hidden;
  background-image: url('../assets/images/introduce/背景@2x.png');
  background-size: cover;
  .top {
    width: 912px;
    height: 275px;
    position: relative;
    background-image: url('../assets/images/detail/纯图形标 (2)@2x.png');
    background-size: cover;
    top: -60px;
    left: -100px;
  }
  .cards {
    position: relative;
    top: -60px;
  }
}
</style>