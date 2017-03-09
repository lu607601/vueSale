<template>
    <div class="board">
        <div class="boardTopIntro">
            <h2>数据统计</h2>
            <p>数据统计，是互联网传媒行业或其他操作流程的数据统计的统称，用于历史资料、科学实验、检验、统计等领域。以便精准快速的查找与分类。</p>
        </div>
        <div class="boardForm">
            <div class="formLine">
                <div class="formLineTit">产品类型:</div>
                <choose :choices="choices" class="baseLine"></choose>
            </div>
            <div class="formLine">
                <div class="formLineTit">适用地区:</div>
                <selection :selections="citys" class="baseLine"></selection>
            </div>
            <div class="formLine">
                <div class="formLineTit">
                  有效时间:
                  <span class="activeTime">半年</span>
                </div>
            </div>
            <div class="formLine">
                <div class="formLineTit">
                  总价:
                  <span class="activeTime">500元</span>
                </div>
            </div>
            <div class="boardButton">
                立即购买
            </div>
        </div>
        <div class="boardBottomIntro">    
           <h2>产品说明</h2>
           <p>产品说明书制作，是以文体的方式对某产品进行相对的详细表述，使人认识、了解到某产品。产品说明书制作要实事求是，制作产品说明书时不可为达到某种目的而夸大产品的作用和性能，这是制作产品说明书的职业操守。产品说明书是一种常见的说明文，是生产者向消费者全面、明确地介绍产品名称、用途、性质、性能、原理、构造、规格、使用方法、保养维护、注意事项等内容而写的准确、简明的文字材料。</p>
        </div>
    </div>
</template>
<script>
  import choose from '@/components/base/choose'
  import selection from '@/components/base/selection'
  export default {
    components: {
      choose,
      selection
    },
    data () {
      return {
        choices: [
          {
            text: '红色版'
          },
          {
            text: '蓝色版'
          },
          {
            text: '绿色版'
          }
        ],
        citys: [
          {
            text: '上海'
          },
          {
            text: '北京'
          },
          {
            text: '深圳'
          }
        ]
      }
    }
  }
</script>
<style>

</style>
