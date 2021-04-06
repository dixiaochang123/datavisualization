<template>
  <div class="content13">
      <p class="flex"><span>带宽大小</span><span>实时流量</span></p>
       <div class="chart1_1">
          <Chart :id='"chart27"' width="100%" height="100%" ref="chart27" :echartsOption="option27" />
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import Chart from "@/components/Chart";
let name = ['0-4h','4-8h','8-12h','12-16h','16-20h','20-24h']
var data1 = indexInfo[10].data.filter(item=>item.indexNum==2).map(item=>item.firstNum);
data1 = data1.map((item,index)=>{
    return {
        name: name[index],
        value: item,
    }
})
var data2 = indexInfo[10].data.filter(item=>item.indexNum==3).map(item=>item.firstNum);
data2 = data2.map((item,index)=>{
    return {
        name: name[index],
        value: item,
    }
})

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
        option27: {
    grid: [{
        show: false,
        left: '5%',
        top: '5%',
        bottom: 10,
        width: '40%',

    }, {
        show: false,
        left: '51%',
        top: '5%',
        bottom: 10,
        width: '0%',

    }, {
        show: false,
        right: '5%',
        top: '5%',
        bottom: 10,
        width: '40%',
    }],
    xAxis: [{
        show:false,
            type: 'value',
            inverse: true,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                show: true,
            },
            splitLine: {
                show: false
            }
        }, {
            gridIndex: 1,
            show: false,
        },
        {
            show:false,
            gridIndex: 2,
            // show: true,
            type: 'value',
            inverse: false,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [{
            gridIndex: 0,
            triggerEvent: true,
            show: true,
            inverse: true,
            data: name,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                align: 'auto',
                verticalAlign: 'middle',
                textStyle: {
                    color: '#acc3eb',
                    fontSize: 16,
                    align: 'center',

                },

            },
            data: name,
        },
        {
            gridIndex: 2,
            triggerEvent: true,
            show: true,
            inverse: true,
            data: name,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        }
    ],
    series: [

        {
            name: '',
            type: 'bar',
            gridIndex: 0,
            showBackground: true,
            backgroundStyle: {
                color:'rgba(15,45,71,0.5)'
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data1,
            animationDuration: 20000,
        animationEasing: "cubicInOut",
            barWidth: 13,
            // barCategoryGap: '40%',
            itemStyle: {
                normal: {
                    show: true,
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，分别表示右,下,左,上。例如（0，0，0，1）表示从正上开始向下渐变；如果是（1，0，0，0），则是从正右开始向左渐变。
                    // 相当于在图形包围盒中的百分比，如果最后一个参数传 true，则该四个值是绝对的像素位置
                    color: '#02ffa4'

                },
            }
        },
        {
            name: '',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            gridIndex: 2,
            showBackground: true,
            backgroundStyle: {
                color:'rgba(15,45,71,0.5)'
            },
            data: data2,
            animationDuration: 20000,
        animationEasing: "cubicInOut",
            barWidth: 13,
            // barCategoryGap: '40%',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#02ffa4'

                },
            }
        }
    ]
}

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('GPU云主机')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data27 = indexInfo[10].data.filter(item=>item.indexNum==2).map((item,index)=>{
                return {
                    name: name[index],
                    value: item.endNum,
                }
            });
            let data28 = indexInfo[10].data.filter(item=>item.indexNum==3).map((item,index)=>{
                return {
                    name: name[index],
                    value: item.endNum,
                }
            });
            console.log(data27,data28)
            this.option27.series[0].data = data27;
            this.option27.series[1].data = data28;
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
.flex {
    display: flex;
    justify-content: space-between;
    padding:0 35px;
    color: #acc3eb;
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
