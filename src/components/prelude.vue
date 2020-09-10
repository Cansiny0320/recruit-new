<!-- 前奏页面 -->
<template>
  <div class="prelude">
    <div :class="change ? prelude_img1 : prelude_img2" @click="jumpto"></div>
    <div v-show="!change" class="hand"></div>
  </div>
</template>

<script>
import jump from '../utils/jump';
export default {
  components: {},
  data () {
    return {
      prelude_img1: 'prelude_img1',
      prelude_img2: 'prelude_img2',
      mask_after: 'mask_after',
      change: true,
      show: true,
    };
  },
  methods: {
    jumpto () {
      this.getGrant()
      console.log('onclick');
      console.log(this);
      if (this.change == true) {
        return
      }
      jump('/introduce', this);
    },
    getGrant () {
      if (this.is_ios()) {
        window.DeviceOrientationEvent.requestPermission()
          .then(state => {
            switch (state) {
              case "granted":
                break;
              case "denied":
                alert("你拒绝了使用陀螺仪");
                break;
              case "prompt":
                alert("其他行为");
                break;
            }
          });
      }
    },
    is_ios () {
      if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return true
      } else {
        return false;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    console.log(this.change);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    setTimeout(() => {
      this.change = false;
      // setTimeout(() => {
      //   this.show = false;
      // }, 2000);
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
$img1: '../assets/images/prelude/-e-Text effects@2x.png';
$img2: '../assets/images/prelude/--e-Text-effects@2x.png';
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}
.prelude {
  width: 600px;
  height: 400px;
  margin-top: 375px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  .hand {
    position: absolute;
    width: 78px;
    height: 63px;
    animation: show 1.5s linear;
    transform: translateX(32vw) translateY(37.333vw);
    background-image: url('../assets/images/loading/hand.png');
    background-size: cover;
    z-index: 100000;
  }

  @keyframes show {
    0% {
      transform: translateX(56vw) translateY(56vw);
    }
    100% {
      transform: translateX(32vw) translateY(37.333vw);
    }
  }

  .prelude_img1 {
    position: relative;
    width: 488px;
    height: 223px;
    z-index: 1000;
    background-image: url($img1);
    background-size: cover;

    &::before {
      position: absolute;
      width: 488px;
      height: 223px;
      top: 0;
      left: 0;
      background: inherit;
    }
    &::after {
      position: absolute;
      width: 488px;
      height: 223px;
      top: 0;
      left: 0;
      background: inherit;
    }

    &::after {
      content: '';
      animation: glitch-one 3s infinite step-end;
      z-index: 2;
    }
    &::before {
      content: '';
      animation: glitch-two 3s infinite 1s step-end;
      z-index: 2;
    }
    z-index: 99999;
  }
  .prelude_img2 {
    position: relative;
    width: 488px;
    height: 223px;

    background-image: url($img2);
    background-size: cover;

    &::before {
      position: absolute;
      width: 488px;
      height: 223px;
      top: 0;
      left: 0;
      background: inherit;
    }
    &::after {
      position: absolute;
      width: 488px;
      height: 223px;
      top: 0;
      left: 0;
      background: inherit;
    }

    &::after {
      content: '';
      animation: glitch-one 3s infinite step-end;
      z-index: 2;
    }
    &::before {
      content: '';
      animation: glitch-one 3s infinite 1s step-end;
      z-index: 2;
    }
    z-index: 999999999999;
  }
  @keyframes glitch-one {
    10% {
      transform: translateX(-11px);
      clip-path: inset(29px 0 164px);
    }
    15% {
      transform: translateX(70px);
      clip-path: inset(55px 0 70px);
    }
    20% {
      transform: translateX(-95px);
      clip-path: inset(159px 0 128px);
    }
    25% {
      transform: translateX(8px);
      clip-path: inset(111px 0 70px);
    }
    30% {
      transform: translateX(-45px);
      clip-path: inset(159px 0 52px);
    }
    35% {
      transform: translateX(177px);
      clip-path: inset(80px 0 110px);
    }
    40% {
      transform: translateX(-14px);
      clip-path: inset(57px 0 180px);
    }
    45% {
      transform: translateX(52px);
      clip-path: inset(80px 0 17px);
    }
    50% {
      transform: translateX(-106px);
      clip-path: inset(40px 0 19px);
    }
    55% {
      transform: translateX(129px);
      clip-path: inset(105px 0 71px);
    }
    60% {
      transform: translateX(-56px);
      clip-path: inset(187px 0 55px);
    }
    65% {
      transform: translateX(2px);
      clip-path: inset(141px 0 141px);
    }
    70% {
      transform: translateX(-65px);
      clip-path: inset(83px 0 60px);
    }
    75% {
      transform: translateX(630px);
      clip-path: inset(55px 0 70px);
    }
    80% {
      transform: translateX(-53px);
      clip-path: inset(143px 0 92px);
    }
    85% {
      transform: translateX(30px);
      clip-path: inset(35px 0 170px);
    }
    90% {
      transform: translateX(-34px);
      clip-path: inset(92px 0 153px);
    }
    95% {
      transform: translateX(-43px);
      clip-path: inset(155px 0 40px);
    }
    100% {
      transform: translateX(42px);
      clip-path: inset(135px 0 108px);
    }
  }

  @keyframes glitch-two {
    10% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    20% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    30% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    40% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    50% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    60% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    70% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    80% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    90% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    100% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
  }
}
</style>
