<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <div class="top"></div>
    <div class="cards">
      <div class="card1">
        <card1 :img="img.product"></card1>
      </div>
      <div class="card2">
        <card2 :img="img.design"></card2>
      </div>
      <div class="card3">
        <card3 :img="img.mobile"></card3>
      </div>
      <div class="card4">
        <card4 :img="img.web"></card4>
      </div>
      <div class="card5">
        <card5 :img="img.sre"></card5>
      </div>
    </div>
  </div>
</template>

<script>
import card1 from "../components/card"
import card2 from "../components/card"
import card3 from "../components/card"
import card4 from "../components/card"
import card5 from "../components/card"
export default {
  components: { card1, card2, card3, card4, card5 },
  data () {
    return {
      img: {
        product: {
          src: 'https://s1.ax1x.com/2020/09/05/wVwjfS.png',
          width: 119.5,
          height: 198.5,
          id: 0
        },
        design: {
          src: 'https://s1.ax1x.com/2020/09/05/wVwxSg.png',
          width: 131,
          height: 191.5,
          id: 1
        },
        mobile: {
          src: 'https://s1.ax1x.com/2020/09/05/wVwzlQ.png',
          width: 145.5,
          height: 206.5,
          id: 2
        },
        web: {
          src: 'https://s1.ax1x.com/2020/09/05/wVwOFf.png',
          width: 133,
          height: 182.5,
          id: 3
        },
        sre: {
          src: 'https://s1.ax1x.com/2020/09/05/wVwXY8.png',
          width: 127.5,
          height: 162.5,
          id: 4
        },
      }
    }
  },
  methods: {
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
}
</script>
<style lang='scss' scoped>
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

.detail {
  width: 750px;
  height: 2008px;
  overflow: hidden;
  background-image: url('../assets/images/introduce/背景@2x.png');
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
      .card#{$i} {
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
          }
        }
      }
    }
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
