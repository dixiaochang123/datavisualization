<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart18"' width="100%" height="100%" ref="chart18" :echartsOption="option18" />
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import { indexInfo } from "@/utils/data/indexData.js";
const echarts = require("echarts");
var xData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
// var line = ["10300", "20050", "8040","46008","20809","45087","50000","30809","27809","16809","26809","46809"];
var line = indexInfo[6].data.filter(item=>item.indexNum==1).map(item=>item.firstNum);
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
        option18: {
            title:{
                text:'sql 注入攻击数',
                right:35,
                textStyle:{
                    color:'#55698e',
                    fontSize:16
                }
            },
    grid: {
         top: 30,
          bottom: 50,
          left: 75,
          right:35
    },
    xAxis: [{
        data: xData,
        axisLabel: {
            textStyle: {
                 color: "#55698e",
                fontSize:14
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: false //不显示x轴
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#122e47",
            }
        }
    }],
    yAxis: [{
        name:"次              ",
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eee',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#55698e",
            fontSize: "11px",
        }
    }],
    series: [
        {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [20, 15],//调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
                    "normal": {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(89,211,255,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(23,237,194,1)"
                            }
                        ])
                    }
                },
            data: line,
            animationDuration: 20000,
            animationEasing: "cubicInOut",
        }, 
        
        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 20,
            barGap: '0%',
            itemStyle: {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }]
                        }
                    }
                },
           
            data: line,
            animationDuration: 20000,
            animationEasing: "cubicInOut",
        }, 
        
        //柱顶圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [20, 15],//调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
                "itemStyle": {
                    "normal": {
                         color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [{
                                    offset: 0,
                                    color: "rgba(89,211,255,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(23,237,194,1)"
                                }
                            ],
                            false
                        ),
                    }
                },
            data: line,
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
            let data18 = indexInfo[6].data.filter(item=>item.indexNum==1).map(item=>item.endNum);
            this.option18.series[0].data = data18;
            this.option18.series[1].data = data18;
            this.option18.series[2].data = data18;
            this.option18.series[0].animationDuration = indexInfo[6].data[0].aniTime * 1000;
            this.option18.series[1].animationDuration = indexInfo[6].data[0].aniTime * 1000;
            this.option18.series[2].animationDuration = indexInfo[6].data[0].aniTime * 1000;
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
