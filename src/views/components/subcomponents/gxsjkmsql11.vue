<template>
  <div class="content13">
       <div class="chart1_1">
          <div style="width:50%;height:100%;">
            <Chart :id='"chart12"' width="100%" height="100%" ref="chart12" :echartsOption="option12" />
          </div>
          <div class="chart_bar chart_bar12">
            <div class="flex">
              <img src="../../../assets/img/组578.png" alt="">
              <div>
                <p class="p1 valmsql11" style="color:#43fdff" :data-target="data[14].endNum">{{data[14].firstNum}}</p>
                <p class="p2">文件句柄数</p>
              </div>
            </div>
            <div class="flex">
              <img src="../../../assets/img/组579.png" alt="">
              <div>
                <p class="p1 valmsql11" style="color:#ffe100" :data-target="data[15].endNum">{{data[15].firstNum}}</p>
                <p class="p2">每秒I/O</p>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";
import "echarts-liquidfill";
import Chart from "@/components/Chart";

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
  components: {
    Chart
  },
  data() {
    return {
        option12: {
        title: {
          text: "",
          textStyle: {
            fontWeight: "normal",
            fontSize: 25,
            color: "rgb(97, 142, 205)",
          },
        },
        series: [
          {
            type: "liquidFill",
            radius: "70%",
            center: ["50%", "50%"],
            // data: [0.96, 0.96, 0.96], // data个数代表波浪数
            data: [0,0,0], // data个数代表波浪数
            backgroundStyle: {
              borderWidth: 1,
              color: "rgb(255,0,255,0.1)",
            },
            label: {
              normal: {
                formatter: (0 * 100).toFixed() + "分",
                textStyle: {
                  fontSize: 30,
                },
              },
            },
            outline: {
              show: false,
            },
            animationDuration: 20000,
            animationEasing: "cubicInOut",
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["88%", "89%"],
            // hoverAnimation: false,
            animationDuration: 20000,
            animationEasing: "cubicInOut",
            data: [
              {
                name: "",
                value: 500,
                labelLine: {
                  show: false,
                },
                itemStyle: {
                  color: "#5886f0",
                },
                emphasis: {
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#5886f0",
                  },
                },
              },
            ],
          },
        ],
      },
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
          if(val && val.includes('关系数据库MySQL')) {
            this.$nextTick(()=>{
                  
                this.animateAll();
                let data11 = indexInfo[2].data[13].endNum
                console.log('watch11',val,data11)
                this.option12.series[0].data = [data11/100,data11/100,data11/100];
                this.option12.series[0].label.normal.formatter = data11.toFixed() + "分";
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
          let valmsql11 = document.getElementsByClassName("valmsql11");
            for (let i = 0; i < valmsql11.length; i++) {
                let targetDomCount = valmsql11[i].getAttribute("data-target");
                this.animateNum(valmsql11[i], targetDomCount, 0);
            }
      },
      // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[14].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 3,
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
  height: 100%;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .chart_bar12 {
        width: 300px;
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        height: 85% !important;
        color: #c6dcff;
        .flex {
            display: flex;
            img {
            margin-right: 16px;
            }
            .p1 {
            font-size: 21px;
            }
            .p2 {
            font-size: 14px;
            padding-top: 11px;
            }
        }
        }
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
