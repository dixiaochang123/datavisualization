<template>
  <div class="content13">
    <div class="list">
      <div class="list_nth1">
        <h3><img src="../../../assets/img/案例.png" alt=""> 产品信息<span>Product Information</span></h3>
        <div style="height: 30px"></div>
        <div class="case_box">
          <div class="case_list">
            <div class="case" v-for="(item,index) in caselist" :key="index">
              <div class="title">
                <span> ▎{{ item.name }}</span>
                <div class="select">
                  <!-- <span @click="seleted">选择</span>
                  <span @click="expansion">扩容</span> -->
                  <el-checkbox class="select1" v-model="item.checked1" label="选择" border></el-checkbox>
                  <el-radio class="select2" v-model="item.checked2" :label="item.name" border @change.once="checked2click(item,index)">扩容</el-radio>
                </div>
              </div>
              <div class="case_content">
                <div class="nth">
                  <img :class="[item.name=='DDoS高防IP'?'ddos':'','txyzjimg']" :src="imgsrc[item.name]" alt="">
                  <div style="text-align: left;">
                    <p class="p1">用户数量</p>
                    <p class="p2"><span class="val22" :data-target='item.value1'>0</span><span>%</span></p>
                    <div class="p3 bar">
                      <div class="bar_color bar_color2 val4_bar" :data-target='item.value1'></div>
                    </div>
                    <p class="p4"><span class="val22" :data-target='item.value2'>0</span>%</p>
                  </div>
                  <div style="text-align: left;">
                    <p class="p1">云主机占比</p>
                    <p class="p2"><span class="val22" :data-target='item.value3'>0</span><span>%</span></p>
                    <div class="p3 bar">
                      <div class="bar_color bar_color1 val4_bar" :data-target='item.value3'></div>
                    </div>
                    <p class="p4"><span class="val22" :data-target='item.value4'>0</span>%</p>
                  </div>
                  <div style="text-align: left;">
                    <p class="p1">网络带宽占比</p>
                    <p class="p2"><span class="val22" :data-target='item.value5'>0</span><span>%</span></p>
                    <div class="p3 bar">
                      <div class="bar_color bar_color3 val4_bar" :data-target='item.value5'></div>
                    </div>
                    <p class="p4"><span class="val22" :data-target='item.value6'>0</span>%</p>
                  </div>
                </div>
              </div>
              <p class="foot">{{item.describe}}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { product } from "./data.js";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    caselist: {
      type: Array,
      default: function () {
        return [];
      },
    },
    isAdd: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  computed: {
    // a computed getter
    max() {
      //最大长度 430px
      //最大时长 result
      let result = Math.max(...this.caselist.map((x) => x.value));
      // let multiple = result/x;
      return result;
    },
  },
  watch: {
    caselist: {
      handler: function (val) {
        let productseleted = val
          .filter((item) => item.checked1 == true)
          .map((item) => item.name);
        this.setproductseleted(productseleted);
        if(this.isAdd==true) {
          let productAdd = val
            .filter((item) => !!item.checked2)
            .map((item) => item.name);
          this.setproductAdd(productAdd);

        } else {
          this.setproductAdd([]);
        }
        console.log(3434,productseleted,val)
        this.$emit('productInfocab',val)
      },
      immediate: true,
      deep: true, //对象内部的属性监听，也叫深度监听
    },
  },
  data() {
    return {
      width: 0,
      product: product.slice(0, 6),
      imgsrc:{
        '弹性云主机':require('../../../assets/left/弹性云主机.png'),
        'GPU云主机':require('../../../assets/left/GPU云主机.png'),
        '弹性负载均衡ELB':require('../../../assets/left/弹性负载均衡ELB.png'),
        '对象存储OOS':require('../../../assets/left/对象存储OOS.png'),
        '关系数据库MySQL':require('../../../assets/left/关系数据库MySQL.png'),
        'CDN内容分发':require('../../../assets/left/CDN内容分发.png'),
        '物理机':require('../../../assets/left/物理机.png'),
        '专属云':require('../../../assets/left/专属云.png'),
        '云直播':require('../../../assets/left/云直播.png'),
        'DDoS高防IP':require('../../../assets/left/DDoS高防IP.png'),
        'web应用防火墙':require('../../../assets/left/web应用防火墙.png'),
        '云间高速':require('../../../assets/left/云间高速.png'),
      }

    };
  },
  created() {

  },
  mounted() {
    this.animate();
    this.animate4();
  },
  methods: {
    ...mapActions(["setproductseleted","setproductAdd"]),
    checked2click(val,index) {
      console.log(222,val)
    },
    
    animate() {
      let val22 = document.getElementsByClassName("val22");
      for (let i = 0; i < val22.length; i++) {
        let targetDomCount = val22[i].getAttribute("data-target");
        this.animateNum(val22[i], targetDomCount, 2);
      }
    },
    animate_add(start,index) {
      let val22 = document.getElementsByClassName("val22")[index];
      // for (let i = 0; i < val22.length; i++) {
        let targetDomCount = val22.getAttribute("data-target");
        this.animateNum(val22, start, 2,targetDomCount);
      // }
    },
    animate4() {
      let val4_bar = document.getElementsByClassName("val4_bar");
      for (let i = 0; i < val4_bar.length; i++) {
        let targetDomCount = val4_bar[i].getAttribute("data-target");
        this.animateNumBarColor(val4_bar[i], targetDomCount);
      }
    },
    animate4_add(start,index) {
      let val4_bar = document.getElementsByClassName("val4_bar")[index];
      // for (let i = 0; i < val4_bar.length; i++) {
        let targetDomCount = val4_bar.getAttribute("data-target");
        this.animateNumBarColor(val4_bar, start,targetDomCount);
      // }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val, dot,start) {
      let obj = { num1: start || dom.innerHTML };
      // console.log(val, 999);
      TweenMax.to(obj, 20, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
        },
        delay: 1,
        repeat:10000000,
      });
    },
    // 初始值 结束值
    animateNumBar(dom, val) {
      let obj = { num1: 0 };
      let val1 = (430 / (this.max / val)).toFixed();
      TweenMax.to(obj, 20, {
        num1: val1,
        onUpdate: function () {
          dom.style.width = obj.num1 + "px";
        },
        delay: 1,
        repeat:10000000,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val,start) {
      let obj = { num1: start || 0 };
      let val1 = val;
      TweenMax.to(obj, 20, {
        num1: val1,
        onUpdate: function () {
          dom.style.width = obj.num1 + "%";
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
.content13 {
  width: 100%;
  // height: 100%;
  // padding-left: 60px;
  // padding-right: 60px;
  h3 {
    font-size: 40px;
    padding-bottom: 20px;
    text-align: left;
    color: $myColor;
    // border-bottom: solid 1px #12366b;
    position: relative;
    img {
      width: 44px;
      height: 44px;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      padding-left: 30px;
      font-size: 20px;
      // color: #7789b2;
    }
    // &::before {
    //   content: "";
    //   width: 14px;
    //   height: 1px;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   background-color: #3483f8;
    // }
    // &::after {
    //   content: "";
    //   width: 14px;
    //   height: 1px;
    //   position: absolute;
    //   bottom: 0;
    //   right: 0;
    //   background-color: #3483f8;
    // }
  }
  .list {
    display: flex;
    justify-content: space-between;
  }
  .list_nth1 {
    width: 100%;
  }
  .case_box {
    width: 100%;
    display: flex;
    .case_list {
      width: 100%;
      // display: flex;
      // justify-content: space-between;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 14px;
      grid-column-gap: 11px;
      height: 815px;
      // grid-template-columns: repeat(6, 1fr);
      .case {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        // border: solid 1px #2d4a5f;
        // box-shadow: 0px 0px 30px #11304b inset;
        // background: url("../../../assets/left/组23.png") no-repeat center center;
        // background-size: 100% 100%;
        background-image: url("../../../assets/img/案例拓扑图框.png"),
          url("../../../assets/left/组23.png");
        // url("../../../assets/left/板子.png");
        background-repeat: no-repeat, no-repeat;
        background-position: bottom left, center center;
        background-size: 100% 150%, 100% 100%;

        // margin-bottom: 30px;
        //  animation: updown 2s 1s linear infinite;
        //   animation-iteration-count:1;/*动画只执行一次*/
        -webkit-animation: FadeIn 0.5s linear;
        -webkit-animation-fill-mode: both;
        &:nth-of-type(1) {
          -webkit-animation-delay: 0.1s;
        }
        &:nth-of-type(2) {
          -webkit-animation-delay: 0.3s;
        }
        &:nth-of-type(3) {
          -webkit-animation-delay: 0.5s;
        }
        &:nth-of-type(4) {
          -webkit-animation-delay: 0.7s;
        }
        &:nth-of-type(5) {
          -webkit-animation-delay: 0.9s;
        }
        &:nth-of-type(6) {
          -webkit-animation-delay: 1s;
        }
      }
      @-webkit-keyframes FadeIn {
        0% {
          opacity: 0;
          -webkit-transform: scale(0.5);
        }
        85% {
          opacity: 1;
          -webkit-transform: scale(1.05);
        }
        100% {
          -webkit-transform: scale(1);
        }
      }
      .title {
        font-size: 28px;
        text-align: left;
        color: #4cd1ff;
        // padding-top: 15px;
        padding-left: 30px;
        padding-right: 26px;
        padding-bottom: 45px;
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        .select {
          .el-checkbox {
            color: $myColor;
          }
          /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #dbba6a;
          }
          /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: none !important;
            border-color: none !important;
          }
          /deep/ .el-checkbox.is-bordered {
              border: 1rem solid #205878;
          }
          /deep/ .el-checkbox.is-bordered.is-checked {
            border-color: none !important;
          }
          span {
            display: inline-block;
            width: 96px;
            height: 36px;
            line-height: 36px;
            border: solid 1px #1f5473;
            border-radius: 2px;
            font-size: 19px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
          }
        }
      }
      .case_content {
        .nth {
          height: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          .txyzjimg {
            width: 79px;
            height: 74px;
          }
          .ddos {
            width: 118px;
            height: 76px;
          }
          .p1 {
            font-size: 16px;
            color: $myColor;
            padding-bottom: 24px;
          }
          .p2 {
            font-size: 24px;
            color: #ffffff;
            span {
              &:last-of-type {
                font-size: 15px;
              }
            }
          }
          .bar {
            width: 126px;
            height: 7px;
            border-radius: 3.5px;
            margin: 15px auto;
            // margin-top: 22px;
            margin-left: auto;
            margin-right: auto;
            background-color: #9b9ba7;
            // background-image: linear-gradient(to right, #45e4ff, #ebb736);
            .bar_color {
              width: 0px;
              height: 100%;
              border-radius: 3.5px;
              background-image: linear-gradient(to right, #9ee354, #61dee7);
            }
            .bar_color2 {
              background-image:none;
              background-color: #ff94b4;
            }
            .bar_color3 {
              background-image: linear-gradient(to right, #45e4ff, #ebb736) !important;
            }
          }
          .p4 {
            color: $myColor;
            font-size: 15px;
          }
        }
      }
      .foot {
        font-size: 22px;
        color: $myColor;
        line-height: 40px;
        text-indent: 2em;
        padding-left: 30px;
        padding-right: 60px;
        padding-top: 60px;
        text-align: left;
      }
    }
  }
}

.select1 {
  &.is-checked {
    border-color:#dbba6a !important;
  }
  /deep/ .el-checkbox__inner {
    visibility: hidden!important;
  }
  /deep/ .el-checkbox__input {
    position: relative;
    &::after {
      content: "";
      width: 17px;
      height: 22px;
      background: url("../../../assets/home/选择(2)-未选中.png") no-repeat center !important;
      background-size: 17px 22px !important;
      position: absolute !important;
      left: 0 !important;
      top: 0 !important;
    }
  }
  /deep/ .el-checkbox__input.is-checked {
    &::after {
      content: "";
      width: 17px;
      height: 22px;
      background: url("../../../assets/home/选择(2).png") no-repeat center !important;
      background-size: 17px 22px !important;
      position: absolute !important;
      left: 0 !important;
      top: 0 !important;
    }
  }
}
.select2 {
  /deep/ .el-radio__label {
    color: $myColor;
  }
  /deep/ .el-radio__input.is-checked+.el-radio__label {
   color: #dbba6a !important;
  }
  &.is-checked {
    border-color:#dbba6a !important;
    .el-radio__label {
      color: #dbba6a !important;
    }
  }
  /deep/ .el-radio__inner {
    visibility: hidden!important;
  }
  /deep/ .el-radio__input{
    position: relative;
    &::after {
      content: "";
      width: 23px;
      height: 20px;
      background: url("../../../assets/home/扩容-选中.png") no-repeat center !important;
      background-size: 23px 20px !important;
      position: absolute !important;
      left: -3px !important;
      top: 0 !important;
    }
  }
  /deep/ .el-radio__input.is-checked {
    &::after {
      content: "";
      width: 23px;
      height: 20px;
      background: url("../../../assets/home/扩容.png") no-repeat center !important;
      background-size: 23px 20px !important;
      position: absolute !important;
      left: -3px !important;
      top: 0 !important;
    }
  }
}
  /deep/ .el-radio.is-bordered {
    border: 1px solid #205878;
  }
</style>
