<template>
  <div class="detail">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide>
        <Detail className="product" :words="product" />
      </swiper-slide>
      <swiper-slide><Detail className="design" :words="design" /></swiper-slide>
      <swiper-slide><Detail className="mobile" :words="mobile" /></swiper-slide>
      <swiper-slide><Detail className="web" :words="web" /></swiper-slide>
      <swiper-slide><Detail className="sre" :words="sre" /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Detail from '@components/Detail'
import { Swiper, SwiperSlide, } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Detail, Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {

      },
      mobile: [
        '良好的代码编写规范',
        '框架设计与方案运用能力',
        '构建和交付工具的使用',
        '进行性能优化的能力',
        'Kotlin,OC等语言的使用',
      ],
      design: [
        '良好的设计审美素养',
        '严谨的视觉设计规范',
        '天马行空的视觉创意',
        '产品视觉设计的能力',
        'PS、C4D等软件的使用',
      ],
      product: [
        '更多观察产品的视角',
        '产品设计规划的能力',
        '对用户和需求的敏锐洞察',
        'Pr、Axure等软件的使用',
        '严谨的逻辑思维能力',
      ],
      web: [
        '架构、设计模式的理解',
        '丰富的开源框架使用能力',
        '优化性能,改善体验的方法',
        '网站开发与数据支持的能力',
        'JS和GO等语言的使用',
      ],
      sre: [
        '搭建基础服务和底层服务',
        '网络安全的相关技能',
        '操作系统的相关知识',
        '服务器,网站建设的知识',
        'Python等语言的使用',
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    const index = this.$route.query.index
    this.swiper.slideTo(index, 10, false)
  }
}
</script>

<style lang="scss" >
@font-face {
  font-family: 'AliHYAiHei';
  src: url('../assets/font-style/AliHYAiHei.ttf');
}
.detail {
  width: 100%;
  height: 100%;
  .swiper {
    height: 100%;
  }
  .mobile,
  .design,
  .product,
  .web,
  .sre {
    width: 100%;
    height: 100%;
    position: relative;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 -128px;
  }
  .apply {
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 236px;
    right: 0;
    bottom: 0;
    z-index: 20;
    .apply-btn {
      float: right;
      width: 310px;
      height: 100%;
    }
  }
  .title {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 -128px;
    z-index: 10;
  }
  .letter {
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 0;
  }
  .logo {
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .plus {
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 111px;
    height: 593px;
    top: 211px;
    left: 77px;
  }
  .des {
    font-family: AliHYAiHei;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 20;
    .item {
      margin-bottom: 15px;
      list-style: none;
      .content {
        display: inline-block;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 15px 42px 15px 16px;
      }
    }
    .icon {
      display: inline-block;
      margin-right: 16px;
      width: 19px;
      height: 21px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
  .mobile {
    background-image: url('../assets/images/intro-detail/mobile/bg.png');
    .apply {
      background-image: url('../assets/images/intro-detail/mobile/apply.png');
    }
    .title {
      background-image: url('../assets/images/intro-detail/mobile/title.png');
    }
    .letter {
      background-image: url('../assets/images/intro-detail/mobile/letter.png');
      width: 159px;
      height: 601px;
      bottom: 153px;
      right: 38px;
    }
    .plus {
      background-image: url('../assets/images/intro-detail/mobile/plus.png');
    }
    .logo {
      width: 503px;
      height: 593px;
      top: 202px;
      background-image: url('../assets/images/intro-detail/mobile/logo.png');
    }
    .des {
      color: #7c33ab;
      font-size: 28px;
      .content {
        background-image: url('../assets/images/intro-detail/mobile/word-bg.png');
      }
      .icon {
        background-image: url('../assets/images/intro-detail/mobile/icon.png');
      }
    }
  }
  .design {
    background-image: url('../assets/images/intro-detail/design/bg.png');
    .apply {
      background-image: url('../assets/images/intro-detail/design/apply.png');
    }
    .title {
      background-image: url('../assets/images/intro-detail/design/title.png');
    }
    .letter {
      background-image: url('../assets/images/intro-detail/design/letter.png');
      width: 205px;
      height: 601px;
      bottom: 135px;
      right: 25px;
    }
    .plus {
      background-image: url('../assets/images/intro-detail/design/plus.png');
    }
    .logo {
      width: 643px;
      height: 512px;
      top: 234px;
      background-image: url('../assets/images/intro-detail/design/logo.png');
    }
    .des {
      color: #5b50c7;
      font-size: 28px;
      .content {
        background-image: url('../assets/images/intro-detail/design/word-bg.png');
      }
      .icon {
        background-image: url('../assets/images/intro-detail/design/icon.png');
      }
    }
  }
  .product {
    background-image: url('../assets/images/intro-detail/product/bg.png');
    .apply {
      background-image: url('../assets/images/intro-detail/product/apply.png');
    }
    .title {
      background-image: url('../assets/images/intro-detail/product/title.png');
    }
    .letter {
      background-image: url('../assets/images/intro-detail/product/letter.png');
      width: 188px;
      height: 733px;
      bottom: 164px;
      right: 38px;
    }
    .plus {
      background-image: url('../assets/images/intro-detail/product/plus.png');
    }
    .logo {
      width: 670px;
      height: 400px;
      top: 343px;
      background-image: url('../assets/images/intro-detail/product/logo.png');
    }
    .des {
      color: #9b526c;
      font-size: 28px;
      .content {
        background-image: url('../assets/images/intro-detail/design/word-bg.png');
      }
      .icon {
        background-image: url('../assets/images/intro-detail/product/icon.png');
      }
    }
  }
  .web {
    background-image: url('../assets/images/intro-detail/web/bg.png');
    .apply {
      background-image: url('../assets/images/intro-detail/web/apply.png');
    }
    .title {
      background-image: url('../assets/images/intro-detail/web/title.png');
    }
    .letter {
      background-image: url('../assets/images/intro-detail/web/letter.png');
      width: 202px;
      height: 327px;
      bottom: 164px;
      right: 28px;
    }
    .plus {
      background-image: url('../assets/images/intro-detail/web/plus.png');
    }
    .logo {
      width: 634px;
      height: 517px;
      top: 265px;
      background-image: url('../assets/images/intro-detail/web/logo.png');
    }
    .des {
      color: #4778c4;
      font-size: 28px;
      .content {
        background-image: url('../assets/images/intro-detail/web/word-bg.png');
      }
      .icon {
        background-image: url('../assets/images/intro-detail/web/icon.png');
      }
    }
  }
  .sre {
    background-image: url('../assets/images/intro-detail/sre/bg.png');
    .apply {
      background-image: url('../assets/images/intro-detail/sre/apply.png');
    }
    .title {
      background-image: url('../assets/images/intro-detail/sre/title.png');
    }
    .letter {
      background-image: url('../assets/images/intro-detail/sre/letter.png');
      width: 212px;
      height: 313px;
      bottom: 164px;
      right: 46px;
    }
    .plus {
      background-image: url('../assets/images/intro-detail/sre/plus.png');
    }
    .logo {
      width: 540px;
      height: 551px;
      top: 256px;
      background-image: url('../assets/images/intro-detail/sre/logo.png');
      transform: translateX(-42%);
    }
    .des {
      color: #008fac;
      font-size: 28px;
      .content {
        background-image: url('../assets/images/intro-detail/sre/word-bg.png');
      }
      .icon {
        background-image: url('../assets/images/intro-detail/sre/icon.png');
      }
    }
  }
}
</style>