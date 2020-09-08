<template>
  <div :class="className">
    <div class="title"></div>
    <div class="logo"></div>
    <div class="letter"></div>
    <div class="plus"></div>
    <div class="des">
      <ul class="container">
        <li class="item" v-for="item of words" :key="item">
          <div class="content">
            <span class="icon"></span>
            <span class="text">{{ item }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="apply">
      <div class="apply-btn"></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        className: {
            required: true,
            type: String
        },
        words: {
            type: Array,
            required: true,
        }

    }
}
</script>

<style lang="scss" scoped>
.item {
  transform: translateX(100vw);
  &:nth-child(1) {
    animation: slide 1s ease-in-out forwards;
  }
  &:nth-child(2) {
    animation: slide 1s 0.2s ease-in-out forwards;
  }
  &:nth-child(3) {
    animation: slide 1s 0.4s ease-in-out forwards;
  }
  &:nth-child(4) {
    animation: slide 1s 0.6s ease-in-out forwards;
  }
  &:nth-child(5) {
    animation: slide 1s 0.8s ease-in-out forwards;
  }
}
@keyframes slide {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>