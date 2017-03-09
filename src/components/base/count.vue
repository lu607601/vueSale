<template>
  <div class="countBoard">
    <div @click="minus" class="countBtn">-</div>
    <div class="count">
      <input v-model="buyNum" type="text" @keyup="fixNum" class="countInput">
    </div>
    <div @click="add" class="countBtn">+</div>
  </div>
</template>
<script>
export default {
  props: {
    max: {
      type: Number,
      default: 6
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      buyNum: this.min
    }
  },
  methods: {
    fixNum: function () {
      let fix
      if (typeof this.buyNum === 'string') {
        fix = Number(this.buyNum.replace(/\D/, ''))
      } else {
        fix = this.buyNum
      }
      if (this.buyNum > this.max) {
        fix = this.max
      } else if (this.buyNum < this.min) {
        fix = this.min
      }
      this.buyNum = fix
    },
    add: function () {
      this.buyNum ++
      if (this.buyNum > this.max) {
        this.buyNum = this.max
      }
    },
    minus: function () {
      this.buyNum --
      if (this.buyNum < this.min) {
        this.buyNum = this.min
      }
    }
  }
}
</script>
<style>
.countBoard {
  font-size: .2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: -.02rem;
}

.countBoard .count,
.countBoard .countBtn { 
  float: left;
  width: .3rem;
  height: .21rem;
  text-align: center;
  line-height: .21rem;
  border: .01rem solid grey;
  position: relative;
}
.countBoard .countBtn {
  cursor: pointer;
}
.countBoard .countBtn:hover {
  background-color: #000;
  color: #fff;
}
.countBoard .count {
  border-right: none;
  border-left: none;
}
.countBoard .countInput {
  position: absolute;
  text-align: left;
  width: 50%;
  height: 100%;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
}
</style>
