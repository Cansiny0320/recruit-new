<!-- 前奏页面 -->
<template>
  <div class="prelude">
    <div :class="change ? prelude_img1 : prelude_img2"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      prelude_img1: 'prelude_img1',
      prelude_img2: 'prelude_img2',
      change: true,
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(() => {
      this.change = false;
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
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    6% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    9% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    12% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    15% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    18% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    21% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    24% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    27% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    30% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    33% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    36% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    39% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      opacity: 0;
    }
    42% {
      opacity: 0.5;
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      filter: hue-rotate(90deg) saturate(1.3);
    }
    45% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      filter: invert(1);
    }

    48% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    51% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    54% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.2);
    }
    57% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.3);
      filter: invert(0);
    }
    60% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    63% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.2);
      filter: none;
    }
    66% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.3);
    }
    69% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    72% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    75% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.2);
    }
    78% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    81% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
    84% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
    }
    87% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.3);
      filter: hue-rotate(90deg) saturate(1.3);
    }
    90% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    93% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    96% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
      transform: scale(1.1);
      filter: none;
    }
    99% {
      left: #{randomNum(200, -100)}px;
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
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    20.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    21% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    21.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    22% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    22.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    23% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    23.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    24% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    24.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    25% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    25.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    26% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      opacity: 0;
    }
    45% {
      opacity: 0.3;
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      filter: hue-rotate(45deg) saturate(1.1);
    }
    45.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      filter: invert(1.2);
    }

    46% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    46.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.2);
    }
    47% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.3);
    }
    47.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
      filter: invert(1.1);
    }
    48% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.2);
    }
    48.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.2);
      filter: none;
    }
    49% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.3);
    }
    49.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
    }
    50% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    50.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.4);
    }
    51% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    51.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
    52% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.1);
    }
    52.5% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
      transform: scale(1.3);
      filter: hue-rotate(150deg) saturate(1.3);
    }
    54% {
      left: #{randomNum(200, -100)}px;
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
