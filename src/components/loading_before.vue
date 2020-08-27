<!-- 加载前置动画 -->
<template>
  <div class="loadingbefore">
    <img class="loading_tv" src="../assets/images/loading/Texteffects@2x.png" />
    <div class="loading_txt">
      <type1
        :typetxt="loadingtxt[0].txt"
        :time="time"
        v-if="index == loadingtxt[0].id"
      ></type1>
      <type2
        :typetxt="loadingtxt[1].txt"
        :time="time"
        v-if="index == loadingtxt[1].id"
      ></type2>
      <type3
        :typetxt="loadingtxt[2].txt"
        :time="time"
        v-if="index == loadingtxt[2].id"
      ></type3>
    </div>
  </div>
</template>

<script>
import type1 from '@components/type.vue';
import type2 from '@components/type.vue';
import type3 from '@components/type.vue';
import jump from '../utils/jump';
export default {
  components: { type1, type2, type3 },
  data() {
    return {
      loadingtxt: [
        {
          txt: '20年前，互联网时代的大幕徐徐拉开，诞生了一个又一个神话',
          id: 0,
        },
        { txt: '同时，一个名不见经传的小组织“红岩网校工作站“诞生。', id: 1 },
        { txt: '今天，互联网蓬勃发展，深刻地触入在我们的生活中。', id: 2 },
      ],
      index: -1,
      time: 100,
    };
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let loading = setInterval(() => {
      this.index++;
      if (this.index == 2) {
        clearInterval(loading);
        setTimeout(() => {
          jump('/prelude', this);
        }, 4000);
      }
      console.log(this.index);
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
.loadingbefore {
  display: flex;
  align-items: center;
  flex-direction: column;
  .loading_tv {
    display: block;
    width: 182px;
    height: 161px;
    margin-top: 346px;
    margin-bottom: 51px;
    background-image: url('../assets/images/loading/Texteffects@2x.png');
    background-size: cover;
  }
  .loading_txt {
    height: 76px;
    width: 427px;
  }
}
</style>
