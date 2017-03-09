<template>
  <div class="board">
    <div class="boardTopIntro">
        <h2>数据统计</h2>
        <p>数据统计，是互联网传媒行业或其他操作流程的数据统计的统称，用于历史资料、科学实验、检验、统计等领域。以便精准快速的查找与分类。</p>
    </div>
    <div class="boardForm">
        <div class="formLine">
          <div class="formLineTit">购买数量:</div>
          <count class="baseLine"></count>
        </div>
        <div class="formLine">
            <div class="formLineTit">产品类型:</div>
            <selection :selections="productionType" class="baseLine"></selection>
        </div>
        <div class="formLine">
          <div class="formLineTit">有效时间:</div>
          <choose :choices="years" class="baseLine"></choose>
        </div>
        <div class="formLine">
          <div class="formLineTit">产品版本:</div>
          <multiChoose :multiChoices="multiChoices" class="baseLine"></multiChoose>
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
import count from '@/components/base/count'
import multiChoose from '@/components/base/multiChoose'
import choose from '@/components/base/choose'
import selection from '@/components/base/selection'
export default {
  components: {
    count,
    multiChoose,
    choose,
    selection
  },
  data () {
    return {
      productionType: [
        {
          text: '类型1'
        },
        {
          text: '类型2'
        },
        {
          text: '类型3'
        }
      ],
      years: [
        {
          text: '半年'
        },
        {
          text: '一年'
        },
        {
          text: '一年半'
        }
      ],
      multiChoices: [
        {
          text: '客户版'
        },
        {
          text: '代理商版'
        },
        {
          text: '专家版'
        }
      ]
    }
  }
}
</script>
<style>
    
</style>
