<template>
  <div class="apply">
    <div class="title"></div>
    <div class="scan">
      <img src="../assets/images/apply/scan.png" class="img" />
    </div>
    <div class="bottom">
      <div class="item">
        <span>招新一群：1132961842</span>
        <div
          class="copy"
          v-clipboard:copy="copy1"
          v-clipboard:success="success"
          v-clipboard:error="error"
        ></div>
      </div>
      <div class="item">
        <span>招新二群：965360013</span>
        <div
          class="copy"
          v-clipboard:copy="copy2"
          v-clipboard:success="success"
          v-clipboard:error="error"
        ></div>
      </div>
    </div>
    <div class="toast" v-show="isShow">{{ toast }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copy1: '1132961842',
      copy2: '965360013',
      isShow: false,
      toast: '',
    }
  },
  methods: {
    success() {
      this.$_showToast('复制成功');
    },
    error() {
      this.$_showToast('复制失败 请手动复制');
    },
    $_showToast(tip) {
      const showTime = 1000
      this.toast = tip
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false
        this.toast = ''
      }, showTime)
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'FZJLJW';
  src: url('../assets/font-style/FZJLJW.ttf');
}
.apply {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/introduce/background-grid.png');
  background-position: 0 -128px;
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
    position: relative;
    z-index: 20;
    .img {
      width: 512px;
      height: 737px;
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
    z-index: 15;
    .item {
      display: flex;
      font-size: 54px;
      color: #fff;
      margin-bottom: 70px;
      align-items: center;
      font-family: 'FZJLJW';
      padding: 0 36px;
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
  .toast {
    position: absolute;
    bottom: 300px;
    z-index: 999;
    color: #fff;
    font-size: 24px;
    padding: 19px 32px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
}
</style>