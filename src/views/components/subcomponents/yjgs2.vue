<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart22"' width="100%" height="100%" ref="chart22" :echartsOption="option22" />
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import Chart from "@/components/Chart";
const echarts = require("echarts");
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        console.log(shape)
        const c0 = [shape.x + 9, shape.y]
        const c1 = [shape.x - 12, shape.y - 3]
        const c2 = [xAxisPoint[0] - 12, xAxisPoint[1] - 6]
        const c3 = [xAxisPoint[0] + 9, xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x + 9, shape.y]
        const c2 = [xAxisPoint[0] + 9, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 7]
        const c4 = [shape.x + 18, shape.y - 7]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const c1 = [shape.x + 9, shape.y]
        const c2 = [shape.x + 16, shape.y - 7] //右点
        const c3 = [shape.x - 5, shape.y - 10]
        const c4 = [shape.x - 11, shape.y - 3]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)


// const VALUE = [0.23, 0.5, 0.1,0.12,0.05,0.13,0.4,0.35,0.45,0.32,0.15,0.28]
const VALUE = indexInfo[7].data.filter(item=>item.indexNum==2).map(item=>item.firstNum);

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
        option22: {
    // backgroundColor: "#012366",
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     },
    //     formatter: function(params, ticket, callback) {
    //         const item = params[1]
    //         return item.name + ' : ' + item.value;
    //     }
    // },
    title:{
                text:'丢包率',
                right:35,
                textStyle:{
                    color:'#55698e',
                    fontSize:16
                }
            },
    grid: {
          top: 30,
          bottom: 30,
          left: 75,
          right:55
        },
    xAxis: {
          type: "category",
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '10月', '12月'],
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
            margin:30,
            formatter: '{value}%'
          },
        },
    series: [{
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1BC9F1'
                            },
                            {
                                offset: 1,
                                color: '#1C7084'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1C7287'
                            },
                            {
                                offset: 1,
                                color: '#1BC3EB'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#06728A'
                            },
                            {
                                offset: 1,
                                color: '#06728A'
                            }
                        ])
                    }
                }]
            }
        },
        data: VALUE,
        animationDuration: 20000,
            animationEasing: "cubicInOut",
    }, {
        type: 'bar',
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {

        },
        data: VALUE,
        animationDuration: 20000,
            animationEasing: "cubicInOut",
    }]
}

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('云间高速')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data22 = indexInfo[7].data.filter(item=>item.indexNum==2).map(item=>item.endNum);
            this.option22.series[0].data = data22;
            this.option22.series[0].data = data22;
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
