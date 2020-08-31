<!-- 详情 -->
<template>
  <div class="detail">
    <img class="add" src="../assets/images/detail/add.png" alt />
    <button @click="getGrant" v-if="allow">可</button>
    <p id="tip"></p>
  </div>
</template>
<script>
import Orienter from "../utils/orienter";
let img = document.getElementsByClassName("add")
export default {
  components: {},
  data () {
    return {
      allow: true
    };
  },
  methods: {
    is_ios () {
      if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return true
      } else {
        return false;
      }
    },

    //ios授权
    getGrant () {
      if (this.is_ios()) {
        window.DeviceOrientationEvent.requestPermission()
          .then(state => {
            alert(state)
            switch (state) {
              case "granted":
                this.start();
                break;
              case "denied":
                alert("你拒绝了使用陀螺仪");
                break;
              case "prompt":
                alert("其他行为");
                break;
            }
          });
      } else {
        this.start();
      }
      this.allow = false
    },

    //捕捉行为动作
    start () {
      var o = new Orienter();
      var tip = document.getElementById('tip');

      o.onOrient = function (obj) {

        var a, b;

        a = obj.lon < 180 ? obj.lon : obj.lon - 360;
        b = obj.lat;

        a = a > 0 ? a > 360 ? 360 : a : a < -360 ? -360 : a;
        b = b > 0 ? b > 50 ? 50 : b : b < -50 ? -50 : b;
        console.log(obj.a, obj.b, obj.g);
        //img[0].style.transform = `translate3d(${a}px,${b}px,${0}px)`
        let cosA = Math.cos(a)
        let cosB = Math.cos(obj.b)
        let cosG = Math.cos(obj.g)
        let n = [0, 0, 1] //初始法向量
        let h = Math.sqrt(Math.pow(n[0] - cosB, 2) + Math.pow(n[1] - cosA, 2) + Math.pow(n[2] - cosG, 2));
        let theta = Math.acos((1 + 1 + h * h) / 2) * 180 / Math.PI
        img[0].style.transform = `rotate3d(${cosB},${cosA},${cosG},${theta}deg)`
        console.log(cosB, cosA, cosG);
        console.log(theta);
        tip.innerHTML =

          'alpha[左右]:' + obj.a +
          '<br>' + 'beta[前后]:' + obj.b +
          '<br>' + 'gamma[扭转]:' + obj.g +
          '<br>' + 'longitude[纬度]:' + obj.lon +
          '<br>' + 'latitude[经度]:' + obj.lat +
          // '<br>' + 'direction:' + obj.dir + 
          '<br>' + 'a:' + a +
          '<br>' + 'b:' + b;

      };

      o.on();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {


    console.log(img[0].style);
  },
}
</script>
<style lang='scss' scoped>
.detail {
  width: 750px;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    transform: translate3d(0px, 0px, 0px);
    transform: rotate3d(0, 0, 0, 30deg);
  }
  button {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    z-index: 2;
  }
}
</style>