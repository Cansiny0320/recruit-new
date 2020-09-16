<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <div class="top"></div>
    <div class="cards">
      <div class="product" @click="toDetail(1)">
        <product :img="img.product"></product>
      </div>
      <div class="design" @click="toDetail(2)">
        <design :img="img.design"></design>
      </div>
      <div class="mobile" @click="toDetail(3)">
        <mobile :img="img.mobile"></mobile>
      </div>
      <div class="web" @click="toDetail(4)">
        <web :img="img.web"></web>
      </div>
      <div class="sre" @click="toDetail(5)">
        <sre :img="img.sre"></sre>
      </div>
      <img class="QR-code" />
    </div>
  </div>
</template>

<script>
import product from '../components/card';
import design from '../components/card';
import mobile from '../components/card';
import web from '../components/card';
import sre from '../components/card';
export default {
  components: { product, design, mobile, web, sre },
  data () {
    return {
      img: {
        product: {
          src: 'https://s1.ax1x.com/2020/09/12/waYqW8.png',
          width: 110.5,
          height: 170.5,
          id: 0,
        },
        design: {
          src: 'https://s1.ax1x.com/2020/09/12/waYXQg.png',
          width: 131,
          height: 132.5,
          id: 1,
        },
        mobile: {
          src: 'https://s1.ax1x.com/2020/09/12/watx1O.png',
          width: 107,
          height: 156.5,
          id: 2,
        },
        web: {
          src: 'https://s1.ax1x.com/2020/09/12/waYHFP.png',
          width: 126.5,
          height: 128.5,
          id: 3,
        },
        sre: {
          src: 'https://s1.ax1x.com/2020/09/12/waYbJf.png',
          width: 114,
          height: 129.5,
          id: 4,
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
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
};
</script>
<style lang="scss" scoped>
//部门
$department: 'product', 'design', 'mobile', 'web', 'sre';
//塑料幕遮
$mask: 'product/塑料质感@2x', 'design/FW_Plastik_Bags_08 拷贝@2x',
  'mobile/FW_Plastik_Bags_10@2x', 'web/FW_Plastik_Bags_08@2x', 'sre/塑料质感@2x';
//卡片背景
$background: 'product/Overlay Effect - Change Opacity@2x',
  'design/Overlay Effect - Change Opacity_1@2x',
  'mobile/Overlay Effect - Change Opacity_2@2x',
  'web/Overlay Effect - Change Opacity 拷贝@2x',
  'sre/Overlay Effect - Change Opacity_3@2x';
//右下角标签
$tip: 'product/组 12@2x', 'design/组 11@2x', 'mobile/MOBILE@2x',
  'web/组 12_2@2x', 'sre/组 12_3@2x';

$signW: '217', '162', '222', '214', '241';
$signH: '132', '165', '134', '167', '78';
$signX: '-10', '-60', '-20', '-20', '-20';
$signY: '-135', '130', '130', '100', '160';

$sign: 'product/部门帖子@2x', 'design/图层_682@2x', 'mobile/图层_682@2x',
  'web/图层 682@2x', 'sre/图层 682_1@2x';
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
    background-image: url('../assets/images/detail/纯图形标 (2)@2x.png');
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
              background-image: url('../assets/images/detail/#{nth($sign, $i)}.png');
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
    width: 339px;
    height: 380px;
    margin-top: 70px;
    margin-left: 25px;
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
