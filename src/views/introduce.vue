<!-- 网校介绍页面 -->
<template>
  <div class="mask">
    <img src="../assets/images/introduce/swiper.gif" class="gif" />
    <div class="introduce">
      <div class="stickers" v-if="index >= 1">
        <stickers1 :img="img1"></stickers1>
      </div>
      <div class="stickers" v-if="index >= 2">
        <stickers2 :img="img2"></stickers2>
      </div>
      <div class="stickers" v-if="index >= 3">
        <stickers3 :img="img3"></stickers3>
      </div>
      <div class="stickers" v-if="index >= 4">
        <stickers4 :img="img4"></stickers4>
      </div>
      <div class="stickers" v-if="index >= 5">
        <stickers5 :img="img5"></stickers5>
      </div>
      <div class="stickers" v-if="index >= 6">
        <stickers6 :img="img6"></stickers6>
      </div>
      <div class="stickers" v-if="index >= 7">
        <stickers7 :img="img7"></stickers7>
      </div>
      <div class="stickers" v-if="index >= 8">
        <stickers8 :img="img8"></stickers8>
      </div>
      <div class="stickers" v-if="index >= 9">
        <stickers9 :img="img9"></stickers9>
      </div>
      <div class="stickers" v-if="index >= 10">
        <stickers10 :img="img10"></stickers10>
      </div>
    </div>
  </div>
</template>

<script>
import stickers1 from '../components/stickers';
import stickers2 from '../components/stickers';
import stickers3 from '../components/stickers';
import stickers4 from '../components/stickers';
import stickers5 from '../components/stickers';
import stickers6 from '../components/stickers';
import stickers7 from '../components/stickers';
import stickers8 from '../components/stickers';
import stickers9 from '../components/stickers';
import stickers10 from '../components/stickers';
export default {
  components: {
    stickers1,
    stickers2,
    stickers3,
    stickers4,
    stickers5,
    stickers6,
    stickers7,
    stickers8,
    stickers9,
    stickers10,
  },
  data() {
    return {
      gif: true,
      hidden: true,
      img1: '组 1@2x.png',
      img2: '组 2@2x.png',
      img3: '组 3@2x.png',
      img4: '组 4@2x.png',
      img5: '组 5@2x.png',
      img6: '组 6@2x.png',
      img7: '组 7@2x.png',
      img8: '组 8@2x.png',
      img9: '组 9@2x.png',
      img10: '组 10@2x.png',

      index: 0,
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(() => {
      let that = this;
      let Show = setInterval(() => {
        that.index++;
        console.log(that.index);
        if (this.index == 11) {
          clearInterval(Show);
        }
      }, 1000);
    }, 2000);
  },
};
</script>
<style lang="scss" scoped>
.mask {
  height: 1206px;
  width: 750px;
  position: relative;
  overflow: hidden;
}
.gif {
  position: absolute;
  height: 1206px;
  width: 750px;
  animation: hidden 2s linear;
  z-index: 10;
  opacity: 0;
  // clip-path: inset(0px 100% 0px 0px);
}

@keyframes hidden {
  0% {
    //clip-path: inset(0px 0px 0px 0px);
    opacity: 1;
  }
  100% {
    //clip-path: inset(0px 100% 0px 0px);
    opacity: 0;
  }
}
.introduce {
  height: 1206px;
  width: 750px;
  position: relative;
  overflow: hidden;
  background-image: url('../assets/images/introduce/背景@2x.png');
  background-size: cover;
  animation: onshow 1s linear;
  .stickers:nth-child(1) {
    position: absolute;
    width: 717px;
    height: 226px;
    margin-top: 10px;
    transform: translateX(-10px);
  }
  .stickers:nth-child(2) {
    position: absolute;
    width: 750px;
    height: 460px;
    margin-top: 116px;
  }
  .stickers:nth-child(3) {
    position: absolute;
    margin-top: 348px;
    width: 654px;
    height: 276px;
  }
  .stickers:nth-child(4) {
    position: absolute;
    width: 750px;
    height: 171px;
    margin-top: 567px;
  }
  .stickers:nth-child(5) {
    position: absolute;
    width: 750px;
    height: 318px;
    margin-top: 590px;
  }
  .stickers:nth-child(6) {
    position: absolute;
    width: 750px;
    height: 371px;
    margin-top: 736px;
  }
  .stickers:nth-child(7) {
    position: absolute;
    width: 675px;
    height: 297px;
    margin-top: 909px;
  }
  .stickers:nth-child(8) {
    position: absolute;
    width: 488px;
    height: 474px;
    margin-top: 304px;
  }
  .stickers:nth-child(9) {
    position: absolute;
    width: 643px;
    height: 390px;
    margin-top: 262px;
  }
  .stickers:nth-child(10) {
    position: absolute;
    width: 620px;
    height: 399px;
    margin-top: 450px;
  }
}

@keyframes onshow {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
