<template>
   <div class="detail">
       <ul class="detailLeft">
           <router-link :to="{ path: item.path }" :key="item.id" v-for="item in detailList" class="detailLeftLi" tag="li" active-class="active">{{item.text}}</router-link>
       </ul>
       <div class="detailRight">
          <keep-alive>
             <router-view></router-view>
          </keep-alive>
       </div>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        detailList: [
          {
            text: '数据预测',
            path: 'forecast',
            active: false,
            id: 1
          },
          {
            text: '数据统计',
            path: 'dataStatis',
            active: false,
            id: 2
          },
          {
            text: '流量分析',
            path: 'analysis',
            active: false,
            id: 3
          },
          {
            text: '广告发布',
            path: 'publish',
            active: false,
            id: 4
          }
        ]
      }
    }
  }
</script>
<style>
.detail {
  overflow: hidden;
}
.detailLeft {
  border: .01rem solid #ddd;
  border-radius: .05rem;
  box-sizing: border-box;
  float: left;
  width: 18%;
}
.detailLeft .detailLeftLi {
  color: #000;
  font-size: .2rem;
  height: .38rem;
  line-height: .38rem;
  border-radius: .05rem .05rem 0 0;
  cursor: pointer;
}
.detailLeft .active {
  background-color: #000;
  color: #fff;
}
.detailRight {
  float: left;
  width: 80%;
  margin-left: 2%;
}
 .boardTopIntro,
 .boardForm {
    background-color: rgba(242, 238, 238, 0.44);
    padding: .2rem;
 }
 .boardForm {
    padding-top: 0;
 }
 .boardTopIntro h2,
 .boardBottomIntro h2{
    font-size: .2rem;
 }
 .boardTopIntro p,
 .boardBottomIntro p {
    font-size: .18rem;
    text-indent: .4rem;
    padding: .2rem .04rem;
 }
 .boardForm {
    font-size: .16rem;
 }
 .boardForm .formLine {
    margin-bottom: .1rem;
 }
 .boardForm .formLineTit,
 .boardForm .baseLine {
    display: inline-block;
 }
 .boardForm .boardButton {
    width: .8rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    margin-left: 1rem;
    background-color: #000;
    color: #fff;
 }
.boardBottomIntro {
   background-color: rgba(242, 238, 238, 0.44);
   margin-top: .1rem;
   padding: .2rem;
 }
</style>
