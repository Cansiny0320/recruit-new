<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <div class="top"></div>
    <div class="cards">
      <div class="card1" v-if="!show">
        <card1 :img="img.product"></card1>
      </div>
      <div class="card2" v-if="!show">
        <card2 :img="img.design"></card2>
      </div>
      <div class="card3" v-if="!show">
        <card3 :img="img.mobile"></card3>
      </div>
      <div class="card4" v-if="!show">
        <card4 :img="img.web"></card4>
      </div>
      <div class="card5" v-if="!show">
        <card5 :img="img.sre"></card5>
      </div>
    </div>

    <div class="Pop-ups" @click="getGrant" v-if="show">点击体验炫酷重力感应特效</div>
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
      show: true,
      img: {
        product: {
          src: 'https://s1.ax1x.com/2020/09/04/wApk1f.png',
          width: 120,
          height: 197,
          id: 0
        },
        design: {
          src: 'https://s1.ax1x.com/2020/09/04/wAFxnf.png',
          width: 131,
          height: 188,
          id: 1
        },
        mobile: {
          src: 'https://s1.ax1x.com/2020/09/04/wAkd4H.png',
          width: 146,
          height: 206,
          id: 2
        },
        web: {
          src: 'https://s1.ax1x.com/2020/09/04/wApAc8.png',
          width: 133,
          height: 186,
          id: 3
        },
        sre: {
          src: 'https://s1.ax1x.com/2020/09/04/wApF9P.png',
          width: 128,
          height: 166,
          id: 4
        },

      }
    }
  },
  methods: {

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
      this.show = false

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
  .Pop-ups {
    height: 200px;
    width: 400px;
    border-radius: 10px;
    color: cornsilk;
    line-height: 200px;
    text-align: center;
    background-color: #2486b9;
    position: absolute;
    top: 500px;
    left: 175px;

    animation: rotate 0.5s linear;
    z-index: 99;
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
