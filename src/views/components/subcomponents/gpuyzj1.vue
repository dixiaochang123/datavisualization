<template>
  <div class="content22222">
    <div class="chart1_1_2 chart2">
          <div class="img">
            <img width="100%" height="100%" src="../../../assets/index/组597.png" alt="">
          </div>
          <div class="chart_bar1 chart_bar2">
            <Chart :id='"chart30"' width="100%" height="100%" ref="chart30" :echartsOption="option30" />
          </div>
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
const echarts = require("echarts");
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
        option30:{
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:0,
        containLabel: true
    },
    xAxis: [{
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //y轴
            show: true
        },
        type: 'value',
        show: true,
        axisLabel: {
            color:"#40dcf8"
        }
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: true
        },
        // type: 'category',
        axisTick: {
            show: false
        },
        data: ['GPU使用率', '内存使用率', '磁盘使用率', '丢包率'],
        axisLabel: {
            color:"#ffffff"
        },
        animationDuration: 20000,
        animationEasing: "cubicInOut",
    }],
    series: [{
        name: '标准化',
        type: 'bar',
        barWidth: 7, // 柱
        itemStyle: {
            
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                '#2FAEF2', '#1CD8A8'
            ].map((color, offset) => ({
                color,
                offset
            }))), // 渐变
        },
        animation:true,
        animationDuration: 20000,
        animationEasing: "cubicInOut",
        data: indexInfo[10].data.filter(item=>item.indexNum==1).map(item=>item.firstNum),
    }, ]
}
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('GPU云主机')) {
          this.$nextTick(()=>{
              this.option30.series[0].data = this.data.filter(item=>item.indexNum==1).map(item=>item.endNum);
              // this.option30.series[0].animationDuration = indexInfo[10].data[0].aniTime;
            // this.animateAll();
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
    
    
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content22222 {
  width: 100%;
  height: 100%;
    .chart1_1_2 {
      height: calc(100% - 60px);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img {
        width: 200px;
        height: 200px;
        // border: solid 1px;
      }
      .chart_bar {
        width: 300px;
        height: 50%;
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        color: #c6dcff;
        // padding-bottom: 5px;
        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding-bottom: 5px;
        }
        .number {
          &::after {
            content: "%";
          }
        }
        > div {
          width: 100%;
          font-size: 12px;
          .number {
            color: #5ecfff;
          }
        }
        .chart_bar1 {
          width: 100%;
          .bar1 {
            background: #123f7a;
            .barcolor {
              width: 0%;
              background: #4cbefa;
            }
          }
          .bar2 {
            background: #0c737c;
            .barcolor {
              width: 0%;
              background: #00fcff;
            }
          }
        }
      }
    }
}
.chart2 {
    .chart_bar2 {
        width: calc(100% - 200px);
        height: 100%;
      position: relative;
      .syl {
        height: 30px;
        color: #7789b2;
      }
    }
    .chart_bar2_2 {
      display: flex;
      justify-content: flex-start;
      .lines {
        width: 235px;
        height: 156px;
        position: relative;
        .line {
          height: 30px;
          width: 100%;
          border-top: solid 1px #203849;
          &.linelast {
            border-bottom: solid 1px #203849;
          }
        }
        .xline {
          width: 100%;
          position: absolute;
          bottom: -23px;
          display: flex;
          justify-content: space-around;
          color: #cce2ff;
        }
        .barcpu {
          height: 156px;
          width: 100%;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-around;
          transform: rotate(180deg);
          & > div {
            // height: calc(100% + 18px);
            height: 100%;
            display: flex;
            align-items: center;
            flex-flow: column;
            position: relative;
            // background-color: #123f7a;
            background-color: none;
            &:nth-of-type(1) {
            //   background-color: #0c737c;
              background-color: none;
            }
            .barcolor {
              width: 23px;
              height: 0%;
              background-color: #4ca4fe;
              color: transparent;
              position: relative;
            }

            .bfb {
              width: 40px;
              height: 18px;
              line-height: 18px;
              border-radius: 3px;
              font-size: 12px;
              text-align: center;
              background-color: #4ca4fe;
              color: #000;
              display: inline-block;
              transform: rotate(180deg);
              position: absolute;
              top: 0;
              left: -9px;
              top: 5%;
              &::after {
                content: "%";
              }
            }
            .barcolor1 {
              background-color: #00ffff;
            }
          }
        }
      }
      .numbers {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .number {
          height: 30px;
          line-height: 0;
          color: #7789b2;
          // border-top: solid 1px #192c54;
          // border-top: solid 1px red;
          // &:last-of-type {
          //   border-bottom: solid 1px red;
          // }
        }
      }
    }
  }
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
