<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart10"' width="100%" height="100%" ref="chart10" :echartsOption="option10" />
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";
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
        option10: {
        grid: {
          left: 35,
          right: 35,
          bottom: 30,
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#10264d",
            },
          },
          axisLabel: {
            color: "#55698e",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#10264d",
            },
          },
          axisLabel: {
            color: "#55698e",
          },
        },
        // color: ["#e54035"],
        series: [
          {
            name: "hill",
            barMinHeight: 10,
            type: "pictorialBar",
            barCategoryGap: "60%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              // color:'#4da3ff',
              color: function (params) {
                if (params.value < 2000) {
                  return "#02ffa4";
                } else if (params.value < 3000) {
                  return "#4cbefa";
                } else if (params.value < 4000) {
                  return "#fad709";
                } else {
                  return "#ff4452";
                }
              },
            },
            data: [],
            z: 10,
            animationDuration: 20000,
            animationEasing: "cubicInOut",
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

            // this.animateAll();
            let data10 = indexInfo[2].data.filter(item=>item.indexNum==1).map(item=>item.endNum)
			console.log(data10)
            this.option10.series[0].data = data10;
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
.content13 {
  width: 100%;
  height: 100%;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
