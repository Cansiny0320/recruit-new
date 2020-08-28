<!-- 贴纸组件 -->
<template>
  <div class="stickers">
    <img
      class="stickers_img"
      :src="require(`../assets/images/introduce/${img}`)"
    />
    <audio ref="audio" class="audio" src="../assets/bgm/stickers.mp3"></audio>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  },
  components: {},
  data() {
    return {
      show: false,
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 1000);
    setTimeout(() => {
      this.$refs.audio.play();
    }, 500);
  },
};
</script>
<style lang="scss" scoped>
.stickers {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .stickers_img {
    width: 100%;
    height: 100%;
    animation: show 1s linear;
  }
}
@keyframes show {
  0% {
    clip-path: inset(0px 100% 0px 0%);
  }
  100% {
    clip-path: inset(0px 0% 0px 0%);
  }
}
</style>
