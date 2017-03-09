<template>
   <div class="choiceBoard">
     <ul>
       <li v-for="(item, index) in choices" :class="{active: index==nowIndex}" class="choiceLi" @click="choice(index)">
           {{item.text}}
       </li>
     </ul>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        nowIndex: 0
      }
    },
    props: {
      choices: {
        type: Array,
        default: []
      }
    },
    methods: {
      choice (index) {
        this.nowIndex = index
      }
    }
  }
</script>
<style>
.choiceBoard {
  font-size: .16rem;
}
.choiceBoard .choiceLi {
  display: inline-block;
  padding: .02rem .08rem;
  cursor: pointer;
}
.choiceBoard .active {
    background: #000;
    color: #fff;
}
</style>
