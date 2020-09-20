<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <div class="top"></div>
    <div class="cards">
      <div class="productCard" @click="toDetail(1)">
        <productCard :img="img.product"></productCard>
      </div>
      <div class="designCard" @click="toDetail(2)">
        <designCard :img="img.design"></designCard>
      </div>
      <div class="mobileCard" @click="toDetail(3)">
        <mobileCard :img="img.mobile"></mobileCard>
      </div>
      <div class="webCard" @click="toDetail(4)">
        <webCard :img="img.web"></webCard>
      </div>
      <div class="sreCard" @click="toDetail(5)">
        <sreCard :img="img.sre"></sreCard>
      </div>
      <img class="QR-code" src="../assets/images/detail/Sticker.png" />
    </div>
  </div>
</template>

<script>
import productCard from '../components/card';
import designCard from '../components/card';
import mobileCard from '../components/card';
import webCard from '../components/card';
import sreCard from '../components/card';
export default {
  components: { productCard, designCard, mobileCard, webCard, sreCard },
  data () {
    return {
      img: {
        product: {
          src: 'https://s1.ax1x.com/2020/09/19/wIfRCn.png',
          width: 99.5,
          height: 153.5,
          id: 0,
          translateX: 30,
          translateY: 70,
        },
        design: {
          src: 'https://s1.ax1x.com/2020/09/12/waYXQg.png',
          width: 131,
          height: 132.5,
          id: 1,
          translateX: 20,
          translateY: 70,
        },
        mobile: {
          src: 'https://s1.ax1x.com/2020/09/16/w2YAOA.png',
          width: 111.5,
          height: 163,
          id: 2,
          translateX: 30,
          translateY: 50,
        },
        web: {
          src: 'https://s1.ax1x.com/2020/09/12/waYHFP.png',
          width: 126.5,
          height: 128.5,
          id: 3,
          translateX: 20,
          translateY: 50,
        },
        sre: {
          src: 'https://s1.ax1x.com/2020/09/12/waYbJf.png',
          width: 114,
          height: 129.5,
          id: 4,
          translateX: 20,
          translateY: 90,
        },
      },
    };
  },
  methods: {
    toDetail (index) {
      this.$router.push({
        path: '/detail',
        query: { index },
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
};
</script>
<style lang="scss" scoped>
//部门
$department: 'productCard', 'designCard', 'mobileCard', 'webCard', 'sreCard';
//塑料幕遮
$mask: 'product/plastic', 'design/plastic', 'mobile/plastic', 'web/plastic',
  'sre/plastic';
//卡片背景
$background: 'product/background', 'design/background', 'mobile/background',
  'web/background', 'sre/background';
//右下角标签
$tip: 'product/sign', 'design/sign', 'mobile/sign', 'web/sign', 'sre/sign';

$signW: '217', '162', '222', '214', '241';
$signH: '132', '165', '134', '167', '78';
$signX: '-10', '-60', '-20', '-20', '-20';
$signY: '-135', '130', '130', '100', '160';

$icon: 'product/icon', 'design/icon', 'mobile/icon', 'web/icon', 'sre/icon';
.detail {
  width: 750px;
  height: 2008px;
  overflow: hidden;
  background-image: url('../assets/images/introduce/background-grid.png');
  background-size: cover;
  .top {
    width: 912px;
    height: 275px;
    position: relative;
    background-image: url('../assets/images/detail/top.png');
    background-size: cover;
    top: -60px;
    left: -100px;
  }
  .cards {
    position: relative;
    top: -40px;
    display: flex;
    flex-wrap: wrap;

    @for $i from 1 through 5 {
      .#{nth($department,$i)} {
        width: 347px;
        height: 506px;
        margin-left: 20px;
        margin-bottom: 40px;
        animation: rotate 0.5s linear;
        ::v-deep .card {
          width: 347px;
          height: 506px;

          .mask {
            width: 335px;
            height: 498px;
            background-image: url('../assets/images/detail/#{nth($background,$i)}.png');
            .tip {
              width: 87px;
              height: 87px;
              background-image: url('../assets/images/detail/#{nth($tip,$i)}.png');
            }
            .on {
              width: 347px;
              height: 506px;
              background-image: url('../assets/images/detail/#{nth($mask,$i)}.png');
            }
            .sign {
              position: absolute;
              width: #{nth($signW, $i)}px;
              height: #{nth($signH, $i)}px;
              background-image: url('../assets/images/detail/#{nth($icon, $i)}.png');
              background-size: cover;
              z-index: 997;
              transform: translateX(#{nth($signX, $i)}px)
                translateY(#{nth($signY, $i)}px);
            }
          }
        }
      }
    }
  }
  .QR-code {
    position: relative;
    width: 360px;
    height: 380px;
    top: 70px;
    left: -10px;
    background-image: url('../assets/images/detail/Sticker.png');
    background-size: cover;
  }
  @keyframes rotate {
    0% {
      opacity: 0;
      transform: rotateY(90deg);
    }
    100% {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
}
</style>
