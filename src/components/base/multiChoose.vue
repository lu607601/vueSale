<template>
  <div class="multiChooseBoard">
      <ul>
        <li v-for="(item, index) in multiChoices" class="multiChoiceLi" @click="multiChoice(index)" :class="{active: nowIndexes[index]}">{{item.text}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nowIndexes: {
        0: true,
        1: false,
        2: false
      }
    }
  },
  props: {
    multiChoices: {
      type: Array,
      default: []
    }
  },
  methods: {
    multiChoice: function (index) {
      if (this.nowIndexes['' + index] === undefined || this.nowIndexes['' + index] === false) {
        this.nowIndexes['' + index] = true
      } else {
        this.nowIndexes['' + index] = false
      }
    }
  }
}
</script>
<style>
.multiChooseBoard {
    font-size: .2rem;
}
.multiChooseBoard .multiChoiceLi {
  font-size: .16rem;
  display: inline-block;
  border: .01rem solid #000;
  padding: .01rem;
  margin-right: .04rem;
  cursor: pointer;
}
.multiChooseBoard .active {
  background-color: #000;
  color: #fff;
}
</style>
