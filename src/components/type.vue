<!-- 打字特效 -->
<template>
  <div class="type">
    {{ txt2 }}
    <audio ref="audio" class="audio" src="../assets/bgm/txtType.mp3"></audio>
  </div>
</template>

<script>
export default {
  props: {
    typetxt: String,
    time: Number,
  },
  components: {},
  data() {
    return {
      txt1: [],
      txt2: '',
    };
  },
  methods: {
    /**
     * @description: 将文字动态展现
     * @param {string,number} 动态显示的文本 , 每个文本显示的时间间隔
     * @return {}
     * @author: 林其星
     */
    isString(typetxt, time) {
      let txt = typetxt.split('');
      this.$refs.audio.play();
      let txtplay = setInterval(() => {
        this.txt1.push(txt.shift());
        this.txt2 = String(this.txt1).replace(/,/g, '');
        if (txt == '') {
          clearInterval(txtplay);
          this.$refs.audio.pause();

          // console.log("暂停");
        }
      }, time);
    },
  },
  mounted() {
    //打字特效
    console.log(this.typetxt);
    this.isString(this.typetxt, this.time);
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'AliHYAiHei';
  src: url('../assets/font-style/AliHYAiHei.ttf');
}

.type {
  font-size: 26px;
  font-weight: Regular;
  font-family: 'AliHYAiHei';
  text-align: left;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 48px;
  letter-spacing: 1px;
}
</style>
