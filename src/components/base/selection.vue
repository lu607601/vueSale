<template>
   <div class="selectionBoard">
     <select class="selection">
         <option v-for="(item, index) in selections">{{item.text}}</option>
     </select>
   </div>
</template>
<script>
  export default {
    props: {
      selections: {
        type: Array,
        default: []
      }
    }
  }
</script>
<style>
  .selectionBoard .selection {
    width: .7rem;
    height: .24rem;
    font-size: .16rem;
    background: none;
  }

</style>
