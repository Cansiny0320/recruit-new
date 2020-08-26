<!-- 打字特效 -->
<template>
  <div class="type">
    {{ txt2 }}
    <audio ref="audio" class="audio" autoplay loop src="../assets/bgm/txtType.mp3"></audio>
  </div>
</template>

<script>
export default {
  props: {
    typetxt: String,
  },
  components: {},
  data () {
    return {
      txt1: [],
      txt2: "",
    };
  },
  mounted () {
    //打字特效
    let txt = this.typetxt.split("");
    //this.$refs.audio.play();
    let txtplay = setInterval(() => {
      this.txt1.push(txt.shift());
      this.txt2 = String(this.txt1).replace(/,/g, "");
      if (txt == "") {
        clearInterval(txtplay);
        this.$refs.audio.pause();
        // console.log("暂停");
      }
    }, 100);
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'AliHYAiHei';
  src: url('../assets/font-style/AliHYAiHei.ttf');
}

.type {
  font-family: 'AliHYAiHei';
  text-align: left;
}
</style>
