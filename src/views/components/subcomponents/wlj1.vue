<template>
  <div class="content13">
        <div class="chart13child">
          <img src="../../../assets/index/组581.png" alt="">
          <div class="pos pos1">
            <p style="color:#c3db04"><span class="val25123gjk" :data-target="data[2].endNum">{{data[2].firstNum}}</span><span style="color:#ffffff;"> %</span> </p>
          </div>
          <div class="pos pos2">
            <p style="color:#c3db04"><span class="val25123gjk" :data-target="data[3].endNum">{{data[3].firstNum}}</span><span style="color:#ffffff;"> %</span> </p>
          </div>
          <div class="pos pos3">
            <p style="color:#c3db04"><span class="val25123gjk" :data-target="data[4].endNum">{{data[4].firstNum}}</span><span style="color:#ffffff;"> MBPS</span> </p>
          </div>
          <div class="pos pos4">
            <p style="color:#c3db04"><span class="val25123gjk" :data-target="data[5].endNum">{{data[5].firstNum}}</span><span style="color:#ffffff;"> ms</span> </p>
          </div>
          <div class="pos pos5">
            <p style="color:#c3db04"><span class="val25123gjk" :data-target="data[6].endNum">{{data[6].firstNum}}</span><span style="color:#ffffff;"> </span> </p>
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
    // this.animateAll();
  },
  methods: {
    animateAll() {
      let val25123gjk = document.getElementsByClassName("val25123gjk");
      for (let i = 0; i < val25123gjk.length; i++) {
        let targetDomCount = val25123gjk[i].getAttribute("data-target");
        this.animateNum(val25123gjk[i], targetDomCount, 0);
      }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[2].aniTime, {
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
  width: 528px;
  height: 213px;
  padding-bottom: 5px;
  position: relative;
  margin: 0 auto;
  img {
    width: 510;
    height: 180px;
    // position: absolute;
    // top: 5px;
    // left: 133px;
  }
  .pos {
    position: absolute;
    top: 145px;
    left: 87px;
    color: #ffffff;
    text-align: right;
    p {
      line-height: 35px;
      font-size: 14px;
    }
  }
  .pos2 {
    top: 171px;
    left: 164px;
  }
  .pos3 {
    top: 134px;
    left: 235px;
  }
  .pos4 {
        top: 173px;
    left: 297px;
  }
  .pos5 {
    top: 168rem;
    left: 392rem;
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
