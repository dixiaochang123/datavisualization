<template>
  <div class="content13">
        <div class="chart13child">
          <img src="../../../assets/img/组585.png" alt="">
          <div class="pos pos1">
            <p>网络延迟</p>
            <p style="color:#4da3ff"><span class="val7" :data-target="data[0].endNum">{{data[0].firstNum}}</span><span>ms</span> </p>
          </div>
          <div class="pos pos2">
            <p>带宽大小</p>
            <p style="color:#ffe100"><span class="val2" :data-target="data[2].endNum">{{data[2].firstNum}}</span><span>MBPS</span> </p>
          </div>
          <div class="pos pos3">
            <p>丢包率</p>
            <p style="color:#e7525f"><span class="val7" :data-target="data[1].endNum">{{data[1].firstNum}}</span><span>%</span> </p>
          </div>
          <div class="pos pos4">
            <p>实时流量</p>
            <p style="color:#00d1dd"><span class="val2" :data-target="data[3].endNum">{{data[3].firstNum}}</span><span>MB/S</span> </p>
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
        if(val && val.includes('CDN内容分发')) {
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
    // this.animateAll();
  },
  methods: {
    animateAll() {
      let val7 = document.getElementsByClassName("val7");
      for (let i = 0; i < val7.length; i++) {
        let targetDomCount = val7[i].getAttribute("data-target");
        this.animateNum(val7[i], targetDomCount, 4);
      }
      let val2 = document.getElementsByClassName("val2");
      for (let i = 0; i < val2.length; i++) {
        let targetDomCount = val2[i].getAttribute("data-target");
        this.animateNum(val2[i], targetDomCount, 0);
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
  width: 488px;
  height: 197px;
  padding-bottom: 5px;
  position: relative;
  margin: 0 auto;
  img {
    width: 268px;
    height: 150px;
    position: absolute;
    top: 5px;
    left: 133px;
  }
  .pos {
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    text-align: right;
    p {
      line-height: 35px;
      font-size: 20px;
    }
  }
  .pos2 {
    left: 403px;
  }
  .pos3 {
    top: 131px;
    left: 47px;
  }
  .pos4 {
    top: 135px;
    left: 403px;
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
