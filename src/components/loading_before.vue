<!-- 加载前置动画 -->
<template>
  <div class="loadingbefore">
    <div :class="show ? '' : loading_tv" src="../assets/images/loading/Texteffects@2x.png"></div>
    <div class="loading_txt">
      <type1 :typetxt="loadingtxt[0].txt" :time="time" v-if="index == loadingtxt[0].id"></type1>
      <type2 :typetxt="loadingtxt[1].txt" :time="time" v-if="index == loadingtxt[1].id"></type2>
      <type3 :typetxt="loadingtxt[2].txt" :time="time" v-if="index == loadingtxt[2].id"></type3>
    </div>
  </div>
</template>

<script>
import type1 from '@components/type.vue';
import type2 from '@components/type.vue';
import type3 from '@components/type.vue';
import jump from '../utils/jump';
import judgeClient from '../utils/judgeClient';
export default {
  components: { type1, type2, type3 },
  data () {
    return {
      loadingtxt: [
        {
          txt: '20年前，互联网时代的大幕徐徐拉开，诞生了一个又一个神话。',
          id: 0,
        },
        { txt: '同时，一个名不见经传的小组织 “红岩网校工作站”诞生。', id: 1 },
        {
          txt: '今天，互联网蓬勃发展，深刻地重塑了我们的生活，重新塑造了这个世界的面貌。',
          id: 2,
        },
      ],
      index: -1,
      time: 100,
      show: true,
      loading_tv: 'loading_tv',
      times: [3600, 3400, 4300]
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    if (judgeClient() == 'ios') {
      this.loading_tv = 'loading_tv_ios';
    } else {
      this.loading_tv = 'loading_tv';
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    setTimeout(() => {
      this.show = false;
    }, 100);
    let loading = setInterval(() => {
      this.index++;
      if (this.index == 2) {
        clearInterval(loading);
        setTimeout(() => {
          jump('/prelude', this);
        }, 4000);
      }
      console.log(this.index);
    }, this.times[this.index + 1]);
  },
};
</script>
<style lang="scss" scoped>
.loadingbefore {
  display: flex;
  align-items: center;
  flex-direction: column;
  .loading_tv {
    width: 182px;
    height: 161px;
    position: relative;
    margin-top: 346px;
    margin-bottom: 51px;
    background-image: url('../assets/images/loading/Texteffects@2x.png');
    background-size: cover;
    &::before {
      position: absolute;
      width: 182px;
      height: 161px;
      background: inherit;
    }
    &::after {
      position: absolute;
      width: 182px;
      height: 161px;
      background: inherit;
    }

    &::after {
      content: '';
      animation: glitch-one 2s infinite step-end;
      animation-delay: 1s;
      z-index: 200;
    }
    &::before {
      content: '';
      animation: glitch-two 2s infinite step-end;
      animation-delay: 1s;
      z-index: 200;
    }
  }
  .loading_tv_ios {
    width: 182px;
    height: 161px;
    position: relative;
    margin-top: 346px;
    margin-bottom: 51px;
    background-image: url('../assets/images/loading/Texteffects@2x.png');
    background-size: cover;
    &::before {
      position: absolute;
      width: 182px;
      height: 161px;
      background: inherit;
    }
    &::after {
      position: absolute;
      width: 182px;
      height: 161px;
      background: inherit;
    }

    &::after {
      content: '';
      animation: glitch-three 2s infinite step-end;
      animation-delay: 1s;
      z-index: 200;
    }
    &::before {
      content: '';
      animation: glitch-four 2s infinite step-end;
      animation-delay: 1s;
      z-index: 200;
    }
  }
  .loading_txt {
    height: 76px;
    width: 427px;
    ::v-deep .type {
      width: 410px;
      word-break: break-all;
    }
  }
  @function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random() * $max) * $u;
  }
  @keyframes glitch-one {
    3% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    6% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    9% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    12% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    15% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    18% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    21% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    24% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    27% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    30% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    33% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    36% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    39% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      opacity: 0;
    }
    42% {
      opacity: 0.5;
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      filter: hue-rotate(90deg) saturate(1.3);
    }
    45% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      filter: invert(1);
    }

    48% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    51% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }
    54% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.2);
    }
    57% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.3);
      filter: invert(0);
    }
    60% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }
    63% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.2);
      filter: none;
    }
    66% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.3);
    }
    69% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }
    72% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    75% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.2);
    }
    78% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    81% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }
    84% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }
    87% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.3);
      filter: hue-rotate(90deg) saturate(1.3);
    }
    90% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
      filter: none;
    }
    93% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
      filter: none;
    }
    96% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
      filter: none;
    }
    99% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
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
  @keyframes glitch-three {
    3% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    9% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    18% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    30% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    39% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      opacity: 0;
    }

    51% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }

    60% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }

    69% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }
    78% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    90% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
      filter: none;
    }

    100% {
      background-image: none;
    }
  }
  @keyframes glitch-four {
    3% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    9% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    18% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    30% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    39% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      opacity: 0;
    }

    51% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }

    60% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }

    69% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
    }
    78% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
    }

    90% {
      transform: translateX(#{randomNum(100, -50)}px);
      clip-path: inset(#{randomNum(60, 20)}px 0 #{randomNum(100, 20)}px);
      transform: scale(1.1);
      filter: none;
    }

    100% {
      background-image: none;
    }
  }
}
</style>
