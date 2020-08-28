<!-- 前奏页面 -->
<template>
  <div class="prelude">
    <div :class="change ? prelude_img1 : prelude_img2"></div>
    <div class="mask" :class="show ? '' : mask_after"></div>
  </div>
</template>

<script>
import jump from '../utils/jump';
export default {
  components: {},
  data() {
    return {
      prelude_img1: 'prelude_img1',
      prelude_img2: 'prelude_img2',
      mask_after: 'mask_after',
      change: true,
      show: true,
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(() => {
      this.change = false;
      // setTimeout(() => {
      //   this.show = false;
      // }, 2000);
      setTimeout(() => {
        jump('/introduce', this);
      }, 3000);
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

  .mask {
    position: absolute;
    width: 0px;
    height: 0px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: white;
    transition: all 0.7s;
    z-index: 1000;
  }

  .mask_after {
    width: 4000px;
    height: 4000px;
  }

  .prelude_img1 {
    position: relative;
    width: 488px;
    height: 223px;

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
      animation: glitch-two 3s infinite 1s step-end;
      z-index: 2;
    }
  }
  @keyframes glitch-one {
    3% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    6% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    9% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    12% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    15% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    18% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    21% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    24% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    27% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    30% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    33% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    36% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    39% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      opacity: 0;
    }
    42% {
      opacity: 0.5;
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      filter: hue-rotate(90deg) saturate(1.3);
    }
    45% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      filter: invert(1);
    }

    48% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    51% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    54% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.2);
    }
    57% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.3);
      filter: invert(0);
    }
    60% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    63% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.2);
      filter: none;
    }
    66% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.3);
    }
    69% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    72% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    75% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.2);
    }
    78% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    81% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    84% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    87% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.3);
      filter: hue-rotate(90deg) saturate(1.3);
    }
    90% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    93% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    96% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    99% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    100% {
      background-image: none;
    }
  }

  @keyframes glitch-two {
    20% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    20.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    21% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    21.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    22% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    22.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    23% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    23.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    24% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    24.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    25% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    25.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    26% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      opacity: 0;
    }
    45% {
      opacity: 0.3;
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      filter: hue-rotate(45deg) saturate(1.1);
    }
    45.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      filter: invert(1.2);
    }

    46% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    46.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.2);
    }
    47% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.3);
    }
    47.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
      filter: invert(1.1);
    }
    48% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.2);
    }
    48.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.2);
      filter: none;
    }
    49% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.3);
    }
    49.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
    }
    50% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    50.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.4);
    }
    51% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    51.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    52% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
    }
    52.5% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.3);
      filter: hue-rotate(150deg) saturate(1.3);
    }
    54% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
      filter: none;
    }
    54% {
      background-image: none;
    }
  }

  @keyframes main-img-hide {
    5% {
      filter: invert(1);
    }
    5.2% {
      filter: none;
    }
    10% {
      opacity: 0.5;
      filter: grayscale(1);
    }
    11% {
      filter: none;
      opacity: 1;
    }
    45% {
      opacity: 0.5;
      filter: grayscale(1);
    }
    46% {
      filter: none;
      opacity: 1;
    }
    53.5% {
      opacity: 0.5;
      filter: grayscale(1);
    }
    54% {
      filter: none;
      opacity: 1;
    }
    54.5% {
      opacity: 0.5;
      filter: hue-rotate(30deg);
    }
    55% {
      filter: none;
    }
    55.5% {
      background-image: none;
      filter: none;
      opacity: 1;
    }
    56% {
      opacity: 0.5;
    }
    56.5% {
      background-image: none;
    }
    57% {
      opacity: 0.8;
    }
    57.5% {
      opacity: 0.3;
    }
    58% {
      background-image: none;
    }
  }
}
</style>
