<!--
 * @Description: 重力感应组件
 * @Version: 0.0
 * @Author: 林其星
 * @Date: 2020-08-30 10:52:41
 * @LastEditors: 代码是写出来给人看的，附带能在机器上运行
 * @LastEditTime: 2020-09-04 21:14:48
-->

<template>
  <div class="detail">
    <img class="add" :src="require(`../assets/images/detail/${img}`)" alt />
    <p id="tip"></p>
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
      var tip = document.getElementById('tip');

      o.onOrient = function (obj) {

        var a, b;

        a = obj.lon < 180 ? obj.lon : obj.lon - 360;
        b = obj.lat;

        a = a > 0 ? a > 30 ? 30 : a : a < -30 ? -30 : a;
        b = b > 0 ? b > 30 ? 30 : b : b < -30 ? -30 : b;
        console.log(a, b);
        //console.log(obj.a, obj.b, obj.g);
        e.style.transform = `translate3d(${0}px,${0}px,${0}px)`
        let fabA = Math.abs(a)
        let fabB = Math.abs(b)
        console.log(a / fabA, b / fabB);
        //e.style.transform = `rotateX(${b}deg) rotateY(${a}deg)`

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
    transform: rotate3d(0, 0, 0, 0deg);
    transition: all 0.2s;
  }
}
</style>
