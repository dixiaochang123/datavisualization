<template>
  <div class="content13">
        <div class="chart13child">
          <img src="../../../assets/index/组580.png" alt="">
          <div class="pos pos1">
            <p><span class="val2hhfhfjf" :data-target="data[0].endNum">{{data[0].firstNum}}</span><span> %</span> </p>
          </div>
          <div class="pos pos2">
            <p><span class="val2hhfhfjf" :data-target="data[1].endNum">{{data[1].firstNum}}</span><span> %</span> </p>
          </div>
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";

export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    productseleted: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
        val99999:0,
        val10000:0
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('物理机')) {
          this.$nextTick(()=>{

            this.animateAll();
          })
        }
        
      },
      deep:true,
      immediate: true
    }
  },
  mounted() {
    this.animateAll();
  },
  methods: {
    animateAll() {
      let val2hhfhfjf = document.getElementsByClassName("val2hhfhfjf");
      for (let i = 0; i < val2hhfhfjf.length; i++) {
        let targetDomCount = val2hhfhfjf[i].getAttribute("data-target");
        this.animateNum(val2hhfhfjf[i], targetDomCount, 0);
      }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dog);
        },
        delay: 3,
        repeat:10000000,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  height: 100%;
}
.chart13child {
  width: 511px;
  height: 213px;
  padding-bottom: 5px;
  position: relative;
  margin: 0 auto;
  img {
    width: 510;
    height: 213px;
    // position: absolute;
    // top: 5px;
    // left: 133px;
  }
  .pos {
    position: absolute;
    top: 39px;
    left: 74px;
    color: $myColor;
    text-align: right;
    p {
      line-height: 35px;
      font-size: 16px;
    }
  }
  .pos2 {
    left: 416px;
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
