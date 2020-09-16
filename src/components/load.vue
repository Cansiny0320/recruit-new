<!-- 加载工具 -->
<template>
  <div class="load"></div>
</template>

<script>

export default {
  props: {
    imgs: Array
  },
  components: {},
  data () {
    return {

    };
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.imgs.forEach(e => {
      let img = new Image()
      img.src = e
    })
  },
}
</script>
<style lang='scss' scoped>
.load {
}
</style>