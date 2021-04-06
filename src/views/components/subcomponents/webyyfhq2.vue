<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart19"' width="100%" height="100%" ref="chart19" :echartsOption="option19" />
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
// import all from "./ddos1Data"
const echarts = require("echarts");
import { indexInfo } from "@/utils/data/indexData.js";
var xData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
var line = ["10300", "20050", "8040","46008","20809","45087","50000","30809","27809","16809","26809","46809"];
var attr ={
    'name':'月平均单价',
    'unit':'元/单'
}

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
  components: {
    Chart
  },
  data() {
    return {
        option19: {
    legend: {
        data: ['xss 跨站攻击数', '恶意爬虫攻击数'],
        icon: "rect",
        itemWidth:25,
        itemHeight:5,
        orient: 'vertical' ,
        top: 0,
        right: 30,
        textStyle: {
            color: "#55698e",
            fontSize: "11px",
        }
    },
    grid: {
          top: 30,
          bottom: 30,
          left: 75,
          right:35
        },
    xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#122e47",
            },
          },
          axisLabel: {
            color: "#55698e",
            fontSize: "11px",
            interval:0
          },
        },
        // #55698e
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#122e47",
            },
          },
          axisLabel: {
            color: "#55698e",
            fontSize: "11px",
          },
        },
    series: [
        {
            name: 'xss 跨站攻击数',
            type: 'line',
            itemStyle: {
		        normal: {
					color:'#3A84FF',
		            lineStyle: {
						color: "#3A84FF",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(55,125,194,0)'
						}, {
							offset: 1,
							color: 'rgba(58,132,255,0.35)'
						}]),
		            }
		        }
            
			},
            // data: ["20300", "10050", "7040","36008","10809","35087","50000","20809","17809","46809","36809","26809"]
            data: indexInfo[6].data.filter(item=>item.indexNum==2).map(item=>item.firstNum),
            animationDuration: 20000,
            animationEasing: "cubicInOut",
        },
        {
            name: '恶意爬虫攻击数',
            type: 'line',
            itemStyle: {
		        normal: {
		            color:'#05efa0',
		            lineStyle: {
						color: "#05efa0",
						width:1
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(15,188,191,0)'
						}, {
							offset: 1,
							color: 'rgba(14,50,69,1)'
						}]),
		            }
		        }
			},
            // data: ["10300", "20050", "8040","46008","20809","45087","50000","30809","27809","16809","26809","46809"]
            data: indexInfo[6].data.filter(item=>item.indexNum==3).map(item=>item.firstNum),
            animationDuration: 20000,
            animationEasing: "cubicInOut",
        }
    ]
}

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('web应用防火墙')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data19 = indexInfo[6].data.filter(item=>item.indexNum==2).map(item=>item.endNum);
            let data20 = indexInfo[6].data.filter(item=>item.indexNum==3).map(item=>item.endNum);
            this.option19.series[0].data = data19;
            this.option19.series[1].data = data20;
            this.option19.series[0].animationDuration = indexInfo[6].data[14].aniTime * 1000;
            this.option19.series[1].animationDuration = indexInfo[6].data[14].aniTime * 1000;
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
