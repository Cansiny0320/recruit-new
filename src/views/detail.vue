<!-- 网校介绍页 -->
<template>
  <div class="detail">
    <gravity1></gravity1>
    <button @click="getGrant">可</button>
  </div>
</template>

<script>
import gravity1 from "@components/gravity"
export default {
  components: { gravity1 },
  data () {
    return {

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
.detail {
}
</style>
