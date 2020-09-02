<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <div class="top"></div>
    <div class="cards">
      <div class="card1" v-if="!show">
        <card1 :img="img.product.images" :ids="img.product.ids"></card1>
      </div>
      <div class="card2" v-if="!show">
        <card2 :img="img.design.images" :ids="img.design.ids"></card2>
      </div>
      <div class="card3" v-if="!show">
        <card3 :img="img.mobile.images" :ids="img.mobile.ids"></card3>
      </div>
      <div class="card4" v-if="!show">
        <card4 :img="img.web.images" :ids="img.web.ids"></card4>
      </div>
      <div class="card5" v-if="!show">
        <card5 :img="img.sre.images" :ids="img.sre.ids"></card5>
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
          images: ['product/部门帖子@2x.png', 'product/工程文件1@2x.png', 'product/2@2x.png'],
          ids: [0, 1, 2]
        },
        design: {
          images: ['design/图层 682@2x.png', 'design/1png@2x.png', 'design/眼@2x.png'],
          ids: [3, 4, 5]
        },
        mobile: {
          images: ['mobile/图层 682@2x.png', 'mobile/3@2x.png', 'mobile/小人@2x.png'],
          ids: [6, 7, 8]
        },
        web: {
          images: ['web/图层 682@2x.png', 'web/眼@2x.png', 'web/1png@2x.png'],
          ids: [9, 10, 11]
        },
        sre: {
          images: ['sre/图层 682_1@2x.png', 'sre/安全@2x.png', 'sre/蛾@2x.png'],
          ids: [12, 13, 14]
        }
      },

    };
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
//部门标签
$topic-w: '217', '217', '217', '217', '241';
$topic-h: '132', '132', '132', '132', '78';
$topic-X: '50', '50', '50', '50', '30';
$topic-Y: '50', '250', '250', '250', '365';
//小logo
$logo-w: '139', '262', '420', '262', '218';
$logo-h: '107', '265', '420', '265', '226';
$logo-X: '70', '30', '-40', '30', '50';
$logo-Y: '330', '100', '0', '100', '115';
//大logo
$otherlogo-w: '175', '188', '300', '188', '158';
$otherlogo-h: '338', '122', '300', '122', '228';
$otherlogo-X: '110', '95', '16', '95', '125';
$otherlogo-Y: '100', '170', '166', '170', '145';

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
            width: 347px;
            height: 506px;
            background-image: url('../assets/images/detail/#{nth($mask,$i)}.png');
          }
          .card_ctx {
            width: 335px;
            height: 498px;
            background-image: url('../assets/images/detail/#{nth($background,$i)}.png');
            .tip {
              background-image: url('../assets/images/detail/#{nth($tip,$i)}.png');
            }
            .topic {
              position: absolute;
              width: #{nth($topic-w, $i)}px;
              height: #{nth($topic-h, $i)}px;
              transform: translateX(#{nth($topic-X, $i)}px)
                translateY(#{nth($topic-Y, $i)}px);
              z-index: 3;
            }
            .logo {
              position: absolute;
              width: #{nth($logo-w, $i)}px;
              height: #{nth($logo-h, $i)}px;
              transform: translateX(#{nth($logo-X, $i)}px)
                translateY(#{nth($logo-Y, $i)}px);
            }
            .otherlogo {
              position: absolute;
              width: #{nth($otherlogo-w, $i)}px;
              height: #{nth($otherlogo-h, $i)}px;
              transform: translateX(#{nth($otherlogo-X, $i)}px)
                translateY(#{nth($otherlogo-Y, $i)}px);
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
