<template>
  <div class="slide" @mouseout="runInv" @mouseover="clearInv">
    <a :href="slides[nowIndex].href">
       <transition name="transSlide">
          <img v-if="isShow" :src="slides[nowIndex].src">
       </transition>
       <transition name="transSlideOld">
          <img v-if="!isShow" :src="slides[nowIndex].src">
       </transition>
    </a>
    <ul class="slidePage">
      <li @click="goto(prevIndex)" class="slidePageLi">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)" class="slidePageLi">
          <a :class="{on: index === nowIndex}">{{index+1}}</a>
      </li>
      <li @click="goto(nextIndex)" class="slidePageLi">&gt;</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    props: {
      slides: {
        type: Array,
        default: []
      },
      invTime: {
        type: Number,
        default: 1000
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      },
      runInv: function () {
        this.inv = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.invTime)
      },
      clearInv () {
        clearInterval(this.inv)
      }
    },
    mounted () {
      this.runInv()
    }
  }
</script>
<style>
 .slide {
     width: 100%;
     height: 3rem;
     position: relative;
     overflow: hidden;
 }
 .slide img {
    position: absolute;
    width: 100%;
    height: 100%;
 }
 .transSlide-enter {
   transform: translateX(100%);
 }
 .transSlide-enter-active {
   transition: all 1s;
 }
 .transSlideOld-leave-active{
   transition: all 1s;
   transform: translateX(-100%);
 }
 .slidePage {
    position: absolute;
    right: .06rem;
    bottom: .02rem;   
 }
 .slidePageLi {
    width: .3rem;
    height: .3rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
 }
 .slidePageLi .on {
    color: red;
 }
</style>
