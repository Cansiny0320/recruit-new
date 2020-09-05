<!-- matter.js -->
<template>
  <div>
    <div class="mask">
      <div class="box"></div>
      <div class="on"></div>
    </div>
  </div>
</template>
<script>
import Matter from '../../node_modules/matter-js/build/matter.js';
import Orienter from "../utils/orienter";
export default {
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
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log(w, h);
    //Engine是引擎，Render是渲染器，World是表演环境，Bodies可以用来创建各种形状的物体。
    let box = document.querySelector('.box');

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Composites = Matter.Composites,
      Bodies = Matter.Bodies;

    var engine = Engine.create(),
      world = engine.world;
    //初始化引擎
    //render(渲染器)将要渲染的物理引擎是之前所创建的engine，而渲染的对象是html网页的body
    let height = 253;
    let width = 187;
    var render = Render.create({
      element: box,
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
      Bodies.rectangle(0, 0, 800, 1, { isStatic: true }),
      Bodies.rectangle(0, 0, 1, 1000, { isStatic: true }),
      Bodies.rectangle(0, height, 800, 1, { isStatic: true }),
      Bodies.rectangle(width, 0, 1, 1000, { isStatic: true }),
    ]);
    //生成正方体
    var stack = Composites.stack(30, 0, 1, 1, 0, 0, function (x, y) {
      return Bodies.rectangle(x, y, 146, 206, {
        friction: 0.1,
        restitution: 0,
        render: {
          sprite: {
            texture:
              "https://s1.ax1x.com/2020/09/04/wAkd4H.png",
          },
        },
      });
    });
    // var ground = Bodies.rectangle(500, 500, 1000, 100, { isStatic: true });
    World.add(world, [stack]);

    this.start(engine.world.gravity)
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 345px;
  height: 501px;
  z-index: 111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.mask {
  margin-left: 30px;
  margin-top: 40px;
  width: 347px;
  height: 506px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/images/detail/design/Overlay Effect - Change Opacity_1@2x.png');
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
.contorl {
  transform: translateY(1200px);
}
</style>
