<!-- 网校介绍页面 -->
<template>
  <div class="mask" @click="add">
    <img src="../assets/images/introduce/swiper.gif" class="gif" />
    <div class="introduce">
      <div class="center">
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
      </div>
    </div>
    <div class="background"></div>
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
import jump from '../utils/jump';
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
  },
  data () {
    return {
      gif: true,
      hidden: true,
      img: [
        { src: 'introduce1.png' },
        { src: 'introduce2.png' },
        { src: 'introduce3.png' },
        { src: 'introduce4.png' },
        { src: 'introduce5.png' },
        { src: 'introduce6.png' },
        { src: 'introduce7.png' },
        { src: 'introduce8.png' },
      ],

      index: 0,
    };
  },
  methods: {
    add: function () {
      this.index++;
    },
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
        that.index = 1;
        if (this.index >= 9) {
          clearInterval(Show);
          jump('/select', this);
        }
      }, 1000);
    }, 2000);
  },
};
</script>
<style lang="scss" scoped>
$stickersW: '800', '1124', '859', '971', '952', '857', '1106', '851';
$stickersH: '226', '460', '267', '174', '318', '419', '371', '266';
$stickersX: '-45', '-120', '-150', '-50', '-126', '150', '-120', '163';
$stickersY: '40', '130', '360', '578', '605', '270', '750', '927';
.mask {
  height: 100%;
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.gif {
  position: absolute;
  height: 100%;
  width: 750px;
  animation: hidden 3s linear;
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
.center {
  position: relative;
  height: 100vw;
  width: 750px;
  top: 50%;
  transform: translateY(-88%);
}
.introduce {
  height: 100%;
  width: 750px;
  position: relative;
  overflow: hidden;
  animation: onshow 1s linear;

  @for $i from 1 through 8 {
    .stickers:nth-child(#{$i}) {
      position: absolute;
      width: #{nth($stickersW, $i)}px;
      height: #{nth($stickersH, $i)}px;
      transform: translateX(#{nth($stickersX, $i)}px)
        translateY(#{nth($stickersY, $i)}px);
      ::v-deep .stickers .stickers_img {
        width: #{nth($stickersW, $i)}px;
        height: #{nth($stickersH, $i)}px;
      }
      transition: all 1s;
    }

    .stickers:nth-child(5) {
      ::v-deep .stickers .stickers_img {
        animation: show5 0.5s linear;
      }
    }
    .stickers:nth-child(6) {
      ::v-deep .stickers .stickers_img {
        animation: show6 0.5s linear;
      }
    }
    .stickers:nth-child(7) {
      ::v-deep .stickers .stickers_img {
        animation: show7 0.5s linear;
      }
    }
    .stickers:nth-child(8) {
      ::v-deep .stickers .stickers_img {
        animation: show8 0.5s linear;
      }
    }
  }
}
.background {
  position: absolute;
  height: 1900px;
  width: 750px;
  transform: translateY(-25px);
  background-image: url('../assets/images/introduce/background.png');
  background-size: cover;
  z-index: -10;
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
@keyframes show5 {
  0% {
    transform: scale(2) translateX(200px);
  }
  100% {
    transform: scale(1) translateX(0px);
  }
}
@keyframes show6 {
  0% {
    transform: scale(2) translateX(-150px);
  }
  100% {
    transform: scale(1) translateX(0px);
  }
}
@keyframes show7 {
  0% {
    transform: scale(2) rotateZ(-60deg) translateY(-150px) translateX(400px);
  }
  100% {
    transform: scale(1) rotateZ(0deg) translateY(0px) translateX(0px);
  }
}
@keyframes show8 {
  0% {
    transform: scale(2) translateX(-100px);
  }
  100% {
    transform: scale(1) translateX(0px);
  }
}
</style>
