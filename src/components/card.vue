<!-- matter.js -->
<template>
  <div class="card">
    <div class="mask">
      <div class="box" ref="matter"></div>
      <div class="on"></div>
      <div class="tip"></div>
      <div class="clip"></div>
      <div class="sign"></div>
    </div>
  </div>
</template>
<script>
import Matter from '../../node_modules/matter-js/build/matter.js';
import Orienter from '../utils/orienter';
export default {
  props: {
    img: Object,
  },
  components: {},
  data () {
    return {
      controlX: {},
      orienter: {},
    };
  },
  methods: {
    /**
     * @description: 感应设备中重力，并在matter.js中的重力控制对象中做出反应
     * @param {object} e 重力感应对象
     * @return {}
     */
    start (e) {
      var o = new Orienter();
      o.onOrient = function (obj) {
        let tofix = num => (num ? Math.abs(num) / num : 0);
        let GY = Math.abs(obj.b) < 10 || Math.abs(obj.b) > 170 ? 0 : obj.b;
        let GX = Math.abs(obj.g) < 10 ? 0 : obj.g;
        console.log('GX' + -tofix(GX) + 'GY' + tofix(GY));
        e.x = tofix(GX);
        e.y = tofix(GY);
      };
      o.on();
      this.orienter = o;
    },
    /**
     * @description: 获取设备像素比
     * @param {}
     * @return {Number} ratio 设备像素比
     */
    getDevicePixelRatio () {
      var mediaQuery;
      var is_firefox =
        navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      if (window.devicePixelRatio !== undefined && !is_firefox) {
        return window.devicePixelRatio;
      } else if (window.matchMedia) {
        mediaQuery =
          '(-webkit-min-device-pixel-ratio: 1.5),\
          (min--moz-device-pixel-ratio: 1.5),\
          (-o-min-device-pixel-ratio: 3/2),\
          (min-resolution: 1.5dppx)';
        if (window.matchMedia(mediaQuery).matches) {
          return 1.5;
        }
        mediaQuery =
          '(-webkit-min-device-pixel-ratio: 2),\
          (min--moz-device-pixel-ratio: 2),\
          (-o-min-device-pixel-ratio: 2/1),\
          (min-resolution: 2dppx)';
        if (window.matchMedia(mediaQuery).matches) {
          return 2;
        }
        mediaQuery =
          '(-webkit-min-device-pixel-ratio: 0.75),\
          (min--moz-device-pixel-ratio: 0.75),\
          (-o-min-device-pixel-ratio: 3/4),\
          (min-resolution: 0.75dppx)';
        if (window.matchMedia(mediaQuery).matches) {
          return 0.7;
        }
      } else {
        return 1;
      }
    },
  },
  /**
   * @description: 建立基于matter.js的物理模型
   */
  mounted () {
    const AREA = 375 * 603; // 视觉稿面积
    let w = window.innerWidth;
    let h = window.innerHeight;
    let ratio = this.getDevicePixelRatio();
    console.log(ratio);
    //console.log(w, h);
    //console.log(`缩放比rate为${(w * h) / AREA}`);
    //console.log(`设备像素比为${ratio}`);
    //console.log(`设备像素比倒数为${1 / ratio}`);
    let rate = (w * h) / AREA;
    //console.log(`转化比为${Math.pow(rate, 1 / ratio)}`);
    let change =
      rate < 1
        ? 1 / Math.pow(rate, 1 / ratio)
        : 1 / Math.pow(rate, ratio * 0.2);
    //Engine是引擎，Render是渲染器，World是表演环境，Bodies可以用来创建各种形状的物体。
    let box = this.$refs.matter;

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Composites = Matter.Composites,
      Bodies = Matter.Bodies;

    var engine = Engine.create(),
      world = engine.world;
    //初始化引擎
    let width = (46.267 / 100) * w;
    let height = (67.467 / 100) * w;
    //console.log(height, width);
    var render = Render.create({
      element: box,
      engine: engine,
      options: {
        height: height,
        width: width,
        wireframes: false,
        background: 'rgba(255, 255, 255, 0)',
      },
    });

    this.controlX = engine.world.gravity;

    Engine.run(engine);
    Render.run(render);
    //挂载引擎
    //生成墙壁
    World.add(engine.world, [
      Bodies.rectangle(0, 0, 1600, 1, {
        isStatic: true,
        render: {
          fillStyle: 'rgba(255, 255, 255, 0)',
          strokeStyle: 'rgba(255, 255, 255, 0)',
        },
      }),
      Bodies.rectangle(0, 0, 1, 1600, {
        isStatic: true,
        render: {
          fillStyle: 'rgba(255, 255, 255, 0)',
          strokeStyle: 'rgba(255, 255, 255, 0)',
        },
      }),
      Bodies.rectangle(
        0,
        height * (1 / Math.pow(rate, 1 / 2)) * 2,
        1600,
        1,
        {
          isStatic: true,
          render: {
            fillStyle: 'rgba(255, 255, 255, 0)',
            strokeStyle: 'rgba(255, 255, 255, 0)',
          },
        },
      ),
      Bodies.rectangle(
        width * (1 / Math.pow(rate, 1 / 2)) * 2,
        0,
        1,
        1600,
        {
          isStatic: true,
          render: {
            fillStyle: 'rgba(255, 255, 255, 0)',
            strokeStyle: 'rgba(255, 255, 255, 0)',
          },
        },
      ),
    ]);
    //生成正方体
    let that = this;
    var stack = Composites.stack(30, 0, 1, 1, 0, 0, function (x, y) {
      return Bodies.rectangle(
        x,
        y,
        that.img.width * 2 * 1.1 + 30,
        that.img.height * 2 * 1.1 + 40,
        {
          friction: 0.1,
          restitution: 0.2,
          frictionAir: 0.15,
          render: {
            sprite: {
              texture: that.img.src,
            },
          },
        },
      );
    });
    World.add(world, [stack]);

    //解决canvas的图片模糊问题
    let myCanvas = document.getElementsByTagName('canvas')[this.img.id];
    myCanvas.style.width = myCanvas.width + 'px';
    myCanvas.style.height = myCanvas.height + 'px';
    myCanvas.width = myCanvas.width * 2 * change;
    myCanvas.height = myCanvas.height * 2 * change;
    //console.log(1 / Math.pow(rate, 1 / ratio));
    this.start(engine.world.gravity);
  },
  /**
   * @description: 组件销毁时销毁重力感应事件
   */
  destroyed () {
    //console.log(this.orienter);
    this.orienter.off();
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 347px;
  height: 502px;
  z-index: 111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
}
.mask {
  width: 347px;
  height: 506px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
}
.on {
  width: 360px;
  height: 520px;
  z-index: 999;
  position: absolute;
}
.tip {
  width: 87px;
  height: 87px;
  z-index: 998;
  background-size: cover;
  position: absolute;
  transform: translateX(103px) translateY(176px);
}
.clip {
  position: absolute;
  width: 76px;
  height: 103px;
  z-index: 996;
  background-size: cover;
  transform: translateX(130px) translateY(-220px);
}
.sign {
}
</style>
