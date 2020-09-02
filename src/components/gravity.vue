<!--
 * @Description: 重力感应组件
 * @Version: 0.0
 * @Author: 林其星
 * @Date: 2020-08-30 10:52:41
 * @LastEditors: 代码是写出来给人看的，附带能在机器上运行
 * @LastEditTime: 2020-09-01 13:00:25
-->

<template>
  <div class="detail">
    <img class="add" :src="require(`../assets/images/detail/${img}`)" alt />
    <!-- <p id="tip"></p> -->
  </div>
</template>
<script>
import Orienter from "../utils/orienter";
export default {
  props: {
    img: String,
    id: Number
  },
  components: {},
  data () {
    return {
    };
  },
  methods: {

    //ios授权
    //捕捉行为动作
    start (e) {
      var o = new Orienter();
      //var tip = document.getElementById('tip');

      o.onOrient = function (obj) {

        var a, b;

        a = obj.lon < 180 ? obj.lon : obj.lon - 360;
        b = obj.lat;

        a = a > 0 ? a > 50 ? 50 : a : a < -50 ? -50 : a;
        b = b > 0 ? b > 50 ? 50 : b : b < -50 ? -50 : b;
        console.log(a, b);
        //console.log(obj.a, obj.b, obj.g);
        //img[0].style.transform = `translate3d(${a}px,${b}px,${0}px)`

        e.style.transform = `rotateX(${b}deg) rotateY(${a}deg)`

        //   tip.innerHTML =

        //     'alpha[左右]:' + obj.a +
        //     '<br>' + 'beta[前后]:' + obj.b +
        //     '<br>' + 'gamma[扭转]:' + obj.g +
        //     '<br>' + 'longitude[纬度]:' + obj.lon +
        //     '<br>' + 'latitude[经度]:' + obj.lat +
        //     // '<br>' + 'direction:' + obj.dir + 
        //     '<br>' + 'a:' + a +
        //     '<br>' + 'b:' + b;

      };

      o.on();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    console.log("这里是重力组件");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    let img = document.querySelectorAll(".add")
    console.log(img[this.id]);
    this.start(img[this.id])
  },
}
</script>
<style lang='scss' scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
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
