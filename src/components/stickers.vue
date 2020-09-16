<!-- 贴纸组件 -->
<template>
  <div class="stickers">
    <img class="stickers_img" :src="require(`../assets/images/introduce/${img}`)" />
    <audio ref="audio" class="audio" src="../assets/bgm/stickers.mp3"></audio>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    time: Number
  },
  components: {},
  data () {
    return {
      show: false,
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    setTimeout(() => {
      this.show = false;
    }, this.time);
    setTimeout(() => {
      this.$refs.audio.play();
      this.$refs.audio.volume = 0.3
    }, this.time);
  },
};
</script>
<style lang="scss" scoped>
.stickers {
  .stickers_img {
    animation: show 0.5s linear;
    background-size: cover;
  }
}
@keyframes show {
  0% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
