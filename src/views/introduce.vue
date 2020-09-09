<!-- 网校介绍页面 -->
<template>
  <div class="mask">
    <img src="../assets/images/introduce/swiper.gif" class="gif" />
    <div class="introduce">
      <div class="stickers" v-if="index >= 1">
        <stickers1 :img="img[0].src"></stickers1>
      </div>
      <div class="stickers" v-if="index >= 2">
        <stickers2 :img="img[1].src"></stickers2>
      </div>
      <div class="stickers" v-if="index >= 3">
        <stickers3 :img="img[2].src"></stickers3>
      </div>
      <div class="stickers" v-if="index >= 4">
        <stickers4 :img="img[3].src"></stickers4>
      </div>
      <div class="stickers" v-if="index >= 5">
        <stickers5 :img="img[4].src"></stickers5>
      </div>
      <div class="stickers" v-if="index >= 6">
        <stickers6 :img="img[5].src"></stickers6>
      </div>
      <div class="stickers" v-if="index >= 7">
        <stickers7 :img="img[6].src"></stickers7>
      </div>
      <div class="stickers" v-if="index >= 8">
        <stickers8 :img="img[7].src"></stickers8>
      </div>
      <div class="stickers" v-if="index >= 9">
        <stickers9 :img="img[8].src"></stickers9>
      </div>
      <div class="stickers" v-if="index >= 10">
        <stickers10 :img="img[9].src"></stickers10>
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

import jump from "../utils/jump"
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
  data () {
    return {
      gif: true,
      hidden: true,
      img: [
        { src: '组 1@2x.png' },
        { src: '组 2@2x.png' },
        { src: '组 3@2x.png' },
        { src: '组 4@2x.png' },
        { src: '组 5@2x.png' },
        { src: '组 6@2x.png' },
        { src: '组 7@2x.png' },
        { src: '组 8@2x.png' },
        { src: '组 9@2x.png' },
        { src: '组 10@2x.png' }
      ],

      index: 0,
    };
  },
  mounted () {
    /**
     * @description: 动态展现贴纸
     * @param {} 
     * @return {} 
     * @author: 林其星
     */
    setTimeout(() => {
      let that = this;
      let Show = setInterval(() => {
        that.index++;
        if (this.index == 11) {
          clearInterval(Show);
          jump("/select", this)
        }
      }, 1000);
    }, 2000);
  },
};
</script>
<style lang="scss" scoped>
.mask {
  height: 100%;
  width: 750px;
  position: relative;
  overflow: hidden;
}
.gif {
  position: absolute;
  height: 100%;
  width: 750px;
  animation: hidden 2s linear;
  z-index: 10;
  opacity: 0;
}

@keyframes hidden {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.introduce {
  height: 100%;
  width: 750px;
  position: relative;
  overflow: hidden;
  background-image: url('../assets/images/introduce/背景@2x.png');
  background-size: cover;
  animation: onshow 1s linear;
  .stickers:nth-child(1) {
    position: absolute;
    width: 800px;
    height: 226px;
    margin-top: 10px;
    transform: translateX(-41.5px);
    ::v-deep .stickers .stickers_img {
      width: 800px;
      height: 226px;
    }
  }
  .stickers:nth-child(2) {
    position: absolute;
    width: 1114px;
    height: 460px;
    margin-top: 116px;
    transform: translateX(-120px);
    ::v-deep .stickers .stickers_img {
      width: 1114px;
      height: 460px;
    }
  }
  .stickers:nth-child(3) {
    position: absolute;
    margin-top: 348px;
    width: 859px;
    height: 267px;
    transform: translateX(-165.5px);
    ::v-deep .stickers .stickers_img {
      width: 859px;
      height: 267px;
    }
  }
  .stickers:nth-child(4) {
    position: absolute;
    width: 971px;
    height: 174px;
    margin-top: 567px;
    transform: translateX(-50.5px);
    ::v-deep .stickers .stickers_img {
      width: 971px;
      height: 174px;
    }
  }
  .stickers:nth-child(5) {
    position: absolute;
    width: 952px;
    height: 318px;
    margin-top: 590px;
    transform: translateX(-131px);
    ::v-deep .stickers .stickers_img {
      width: 952px;
      height: 318px;
    }
  }
  .stickers:nth-child(6) {
    position: absolute;
    width: 750px;
    height: 371px;
    margin-top: 736px;
    transform: translateX(-135px);
    ::v-deep .stickers .stickers_img {
      width: 1106px;
      height: 371px;
    }
  }
  .stickers:nth-child(7) {
    position: absolute;
    width: 818px;
    height: 297px;
    margin-top: 909px;
    transform: translateX(119.5px);
    ::v-deep .stickers .stickers_img {
      width: 818px;
      height: 297px;
    }
  }
  .stickers:nth-child(8) {
    position: absolute;
    width: 591px;
    height: 447px;
    margin-top: 304px;
    transform: translateX(-62.5px);
    ::v-deep .stickers .stickers_img {
      width: 591px;
      height: 447px;
    }
  }
  .stickers:nth-child(9) {
    position: absolute;
    width: 643px;
    height: 390px;
    margin-top: 262px;
    transform: translateX(145px);
    ::v-deep .stickers .stickers_img {
      width: 857px;
      height: 419px;
    }
  }
  .stickers:nth-child(10) {
    position: absolute;
    width: 620px;
    height: 399px;
    margin-top: 450px;
    transform: translateX(#{(130)}px);
    ::v-deep .stickers .stickers_img {
      width: 620px;
      height: 399px;
    }
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
