<template>
  <div class="content14564563">
    <div class="chart16child">
          <img class="img1" src="../../../assets/img/组583.png" alt=""> 
          <span class="valTxt valTxtzsy" :data-target="data[2].endNum">{{data[2].firstNum}}</span>
          <img class="img2" src="../../../assets/img/组586.png" alt="">
        </div>
  </div>
</template>

<script>
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
    },
  },
  data() {
    return {

    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("专属云")) {
            this.animateAll();

        }
      },
      deep: true,
    //   immediate: true,
    },
  },
  mounted() {
    // this.animateAll();
  },
  methods: {
      animateAll() {
         let valTxtzsy = document.getElementsByClassName("valTxtzsy")[0];
            let targetDomCount = valTxtzsy.getAttribute("data-target");
            this.animateNum(valTxtzsy, targetDomCount, 0);
      },
      animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 1,
        repeat:10000000,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content14564563 {
  width: 100%;
  height: 100%;
}
.chart16child {
  height: calc(100% - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .img1 {
    width: 150px;
    height: 190px;
    margin:0 50px;
  }
  .valTxt{
    color: yellow;
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
    height: 70px;
    line-height: 70px;
    position: absolute;
    left: 271px;
    top: 60px;
    &::after {
      content: "MBPS";
    }
  }
  .img2 {
    width: 210px;
    height: 70px;
  }
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
