<!-- matter.js -->
<template>
  <div class="card">
    <div class="mask">
      <div class="box"></div>
      <div class="on"></div>
      <div class="tip"></div>
      <div class="clip"></div>
    </div>
  </div>
</template>
<script>
import Matter from '../../node_modules/matter-js/build/matter.js';
import Orienter from "../utils/orienter";
export default {
  props: {
    img: Object
  },
  components: {},
  data () {
    return {
      controlX: {},
    };
  },
  methods: {
    //ios授权
    //捕捉行为动作
    start (e) {
      var o = new Orienter();
      o.onOrient = function (obj) {
        let tofix = num => num ? Math.abs(num) / num : 0;
        let GY = (Math.abs(obj.b) < 10 || Math.abs(obj.b) > 170) ? 0 : obj.b
        let GX = Math.abs(obj.g) < 10 ? 0 : obj.g
        console.log('GX' + -tofix(GX) + 'GY' + tofix(GY));
        e.x = tofix(GX)
        e.y = tofix(GY)
      };
      o.on();
    },
    getDevicePixelRatio () {
      var mediaQuery;
      var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      if (window.devicePixelRatio !== undefined && !is_firefox) {
        return window.devicePixelRatio;
      } else if (window.matchMedia) {
        mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
          (min--moz-device-pixel-ratio: 1.5),\
          (-o-min-device-pixel-ratio: 3/2),\
          (min-resolution: 1.5dppx)";
        if (window.matchMedia(mediaQuery).matches) {
          return 1.5;
        }
        mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
          (min--moz-device-pixel-ratio: 2),\
          (-o-min-device-pixel-ratio: 2/1),\
          (min-resolution: 2dppx)";
        if (window.matchMedia(mediaQuery).matches) {
          return 2;
        }
        mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
          (min--moz-device-pixel-ratio: 0.75),\
          (-o-min-device-pixel-ratio: 3/4),\
          (min-resolution: 0.75dppx)";
        if (window.matchMedia(mediaQuery).matches) {
          return 0.7;
        }
      } else {
        return 1;
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    let ratio = this.getDevicePixelRatio()
    console.log(w, h);
    //Engine是引擎，Render是渲染器，World是表演环境，Bodies可以用来创建各种形状的物体。
    let box = document.querySelectorAll('.box');
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
    console.log(height, width);
    var render = Render.create({
      element: box[this.img.id],
      engine: engine,
      options: {
        height: height,
        width: width,
        wireframes: false,
        background: 'rgba(255, 255, 255, 0)'
      },
    });


    this.controlX = engine.world.gravity;

    Engine.run(engine);
    Render.run(render);
    //挂载引擎
    //生成墙壁
    World.add(engine.world, [
      Bodies.rectangle(0, 0, 1600, 1, { isStatic: true }),
      Bodies.rectangle(0, 0, 1, 1600, { isStatic: true }),
      Bodies.rectangle(0, height * ratio, 1600, 1, { isStatic: true }),
      Bodies.rectangle(width * ratio, 0, 1, 1600, { isStatic: true }),
    ]);
    //生成正方体
    let that = this
    var stack = Composites.stack(30, 0, 1, 1, 0, 0, function (x, y) {
      return Bodies.rectangle(x, y, that.img.width * ratio + 28, that.img.height * ratio + 40, {
        friction: 0.1,
        restitution: 0,
        frictionAir: 0.15,
        render: {
          sprite: {
            texture:
              that.img.src,
          },
        },
      });
    });
    World.add(world, [stack]);

    let myCanvas = document.getElementsByTagName('canvas')[this.img.id]
    myCanvas.style.width = myCanvas.width + 'px';
    myCanvas.style.height = myCanvas.height + 'px';

    myCanvas.width = myCanvas.width * ratio;
    myCanvas.height = myCanvas.height * ratio;
    console.log(myCanvas.style.width);
    this.start(engine.world.gravity);
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
  background-image: url('../assets/images/detail/design/FW_Plastik_Bags_08 拷贝@2x.png');
  background-size: cover;
  position: absolute;
}
.tip {
  width: 87px;
  height: 87px;
  z-index: 998;
  background-image: url('../assets/images/detail/product/组 12@2x.png');
  background-size: cover;
  position: absolute;
  transform: translateX(103px) translateY(176px);
}
.clip {
  position: absolute;
  width: 76px;
  height: 103px;
  z-index: 1000;
  background-image: url('../assets/images/detail/图层 677@2x.png');
  background-size: cover;
  transform: translateX(130px) translateY(-220px);
}
</style>
