<template>
    <div class="indexWrap">
      <div class="indexLeft">
         <div class="product">
            <h2>全部产品</h2>
            <template v-for="product in productList">
              <h3>{{product.title}}</h3>
              <ul>
                <li v-for="item in product.list" class="item">
                  <a :href="item.url">{{item.text}}</a>
                </li>
              </ul>
              <div v-if="!product.last" class="hr"></div>
            </template>
         </div>
         <div class="news">
           <h2>最新消息</h2>
           <ul>
             <li v-for="item in newList" class="item">
               <a :href="item.url">{{item.text}}</a>
             </li>
           </ul>
         </div>
      </div>
      <div class="indexRight">
          <slideShow :slides="slides" :invTime="invTime"></slideShow>
          <div class="indexBroadList">
             <div v-for="(item, index) in broadList" class="broadItem">
               <p class="title">{{item.title}}</p>
               <div class="content">{{item.content}}</div>
               <router-link :to="{path: 'detail/'+item.tokey}" class="buy">立即购买</router-link>
             </div>
          </div>
      </div>
    </div>
</template>
<script>
  import slideShow from '@/components/SlideShow'
  export default {
    components: {
      slideShow
    },
    data () {
      return {
        productList: {
          pc: {
            title: 'PC产品',
            last: false,
            list: [
              {
                text: '数据统计',
                url: 'http://www.baidu.com'
              },
              {
                text: '数据预测',
                url: 'http://www.baidu.com'
              },
              {
                text: '流量分析',
                url: 'http://www.baidu.com'
              },
              {
                text: '广告发布',
                url: 'http://www.baidu.com'
              }
            ]
          },
          phone: {
            title: '手机产品',
            last: true,
            list: [
              {
                text: '数据统计',
                url: 'http://www.baidu.com'
              },
              {
                text: '数据预测',
                url: 'http://www.baidu.com'
              },
              {
                text: '流量分析',
                url: 'http://www.baidu.com'
              },
              {
                text: '广告发布',
                url: 'http://www.baidu.com'
              }
            ]
          }
        },
        newList: [
          {
            text: '新聞條目1',
            url: 'http://www.baidu.com'
          },
          {
            text: '新聞條目1',
            url: 'http://www.baidu.com'
          },
          {
            text: '新聞條目1',
            url: 'http://www.baidu.com'
          }
        ],
        invTime: 2000,
        slides: [
          {
            text: '111111',
            href: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=282&txtclr=ffffff&w=900&h=900',
            src: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=282&txtclr=ffffff&w=900&h=600'
          },
          {
            text: '2222',
            href: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=1bf&txtclr=ffffff&w=900&h=900',
            src: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=1bf&txtclr=ffffff&w=900&h=600'
          },
          {
            text: '3333',
            href: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=f82&txtclr=ffffff&w=900&h=900',
            src: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=f82&txtclr=ffffff&w=900&h=600'
          },
          {
            text: '4444',
            href: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=a82&txtclr=ffffff&w=900&h=900',
            src: 'https://placeholdit.imgix.net/~text?txtsize=75&bg=a82&txtclr=ffffff&w=900&h=600'
          }
        ],
        broadList: [
          {
            title: '开放产品',
            content: '开放产品开放产品',
            tokey: 'forecast'
          },
          {
            title: '开放产品',
            content: '开放产品开放产品',
            tokey: 'dataStatis'
          },
          {
            title: '开放产品',
            content: '开放产品开放产品',
            tokey: 'analysis'
          },
          {
            title: '开放产品',
            content: '开放产品开放产品',
            tokey: 'publish'
          }
        ]
      }
    }
  }
</script>
<style>
 h2, h3 {
 	margin: 0;
 	padding: 0;
 }
 a {
 	text-decoration: none;
 }
 .hr {
 	width: 100%;
 	height: 0.01rem;
 	background-color: #ddf;
 }
 .indexWrap {
    overflow: hidden;
 }
 .indexLeft {
 	width: 18%;
 	float: left;
 }
 .indexLeft h2 {
   font-size: .2rem;
   padding: .1rem 0;
   background-color: #000;
   color: #fff;
 }
 .indexLeft h3 {
   font-size: .18rem;
   font-weight: bold;
   margin-top: .12rem;
   margin-bottom: .12rem;
 }
 .indexLeft .product,
 .indexLeft .news {
   border: .01rem solid #ddd;
   border-radius: .05rem;
   overflow: hidden;
 }
 .indexLeft .news {
 	margin-top: .1rem;
 	height: 3rem;
 }
 .indexLeft .item {
   font-size: .16rem;
   margin-bottom: .08rem;
   margin-left: .08rem;
 }
 .news .item:first-child {
 	margin-top: .08rem;
 }
 .indexRight {
  float: left;
 	font-size: .14rem;
 	width: 80%;
 	margin-left: 2%;
 }
 .indexBroadList .broadItem {
    display: inline-block;
    width: 49%;
    height: 1.5rem;
    padding-left: 1rem;
    padding-top: .3rem;
    margin-right: 1%;
    margin-top: 2%;  
    background-color: #f4f2fa;
    border: 1px solid #f4f2f2;
    box-sizing: border-box;
 }
 .indexBroadList .broadItem:nth-child(2n) {
 	margin-right: 0;
 	margin-left: 1%;
 }
 .indexBroadList .title {
 }
.indexBroadList .content {
 }
.indexBroadList .buy {
  display: block;
  width: .8rem;
  height: .3rem;
  text-align: center;
  line-height: .3rem;
  margin-top: .14rem;
  background: #000;
  color: #fff;
}
</style>
