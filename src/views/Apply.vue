<template>
  <div class="apply">
    <div class="title"></div>
    <div class="scan">
      <img src="../assets/images/apply/scan.png" class="img" />
    </div>
    <div class="bottom">
      <div class="item">
        <span>招新一群：1132961842</span>
        <div class="copy" v-clipboard:copy="copy1"></div>
      </div>
      <div class="item">
        <span>招新二群：1132961842</span>
        <div class="copy" v-clipboard:copy="copy2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copy1: '1132961842',
      copy2: '1132961842'
    }
  },
}
</script>

<style lang="scss" scoped>
.apply {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/introduce/背景@2x.png');
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  .title {
    width: 503px;
    height: 207px;
    position: absolute;
    background-image: url('../assets/images/apply/title.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 -128px;
    top: 0;
    left: 0;
  }
  .scan {
    margin-top: 98px;
    .img {
      width: 491px;
      height: 682px;
    }
  }
  .bottom {
    width: 100%;
    height: 641px;
    position: absolute;
    bottom: 0;
    background-image: url('../assets/images/apply/bottom.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .item {
      display: flex;
      font-size: 50px;
      color: #fff;
      margin-bottom: 70px;
      align-items: center;
      .copy {
        width: 162px;
        height: 60px;
        background-image: url('../assets/images/apply/copy.png');
        background-size: 100%;
        background-repeat: no-repeat;
        margin-left: 30px;
      }
    }
  }
}
</style>