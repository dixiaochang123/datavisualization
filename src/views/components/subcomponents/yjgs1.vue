<template>
  <div class="content13">
       <div class="chart1_1">
           <div class="fill">
                <Chart :id='"chart25"' width="100%" height="100%" ref="chart25" :echartsOption="option25" />
           </div>
           <div class="number number1">
               <p class="p1"><span class="val2" :data-target="data[0].endNum">{{data[0].firstNum}}</span><span>MB/S</span></p>
               <p>实时流量</p>
           </div>
           <div class="number number2">
               <p class="p1"><span class="val2" :data-target="data[2].endNum">{{data[2].firstNum}}</span><span> ms</span></p>
               <p>网络延迟</p>
           </div>
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
const echarts = require("echarts");
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
  components: {
    Chart
  },
  data() {
    return {
        option25: {
    title: {
        text: '960',
        textStyle: {
            fontSize: 20,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#04ffd6',
        },
        subtext: '            MBPS',
        subtextStyle: {
            color: '#fff',
            fontSize: 12
        },
        itemGap: 5,
        x: 'center',
        y: '25%'
    },

    graphic: [{
        type: 'group',
        left: 'center',
        // top: '40%',
        bottom:'30%',
        children: [{
            type: 'text',
            z: 100,
            // left: '10',
            style: {
                fill: '#fff',
                text: '带宽大小',
                fontSize: 12
            }
        }]
    }],
    series: [{
        type: 'liquidFill',
        radius: '54%',
        center: ['50%', '50%'],
        data: [0.5, 0.5, 0.5], // data个数代表波浪数
        animationDuration: 20000,
        animationEasing: "cubicInOut",
        backgroundStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0)'
                }, {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255, .25)'
                }, {
                    offset: 0,
                    color: 'rgba(255, 255, 255, 1)'
                }],
                globalCoord: false
            },
        },
        label: {
            normal: {
                formatter: '',
            }
        },
        outline: {
            show: false,
        }
    }, ]
}

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('云间高速')) {
          this.$nextTick(()=>{

            this.animateAll();
            let data25 = this.data[1].endNum;
            this.option25.title.text= data25;
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
      let val2 = document.getElementsByClassName("val2");
      for (let i = 0; i < val2.length; i++) {
        let targetDomCount = val2[i].getAttribute("data-target");
        this.animateNum(val2[i], targetDomCount, 0);
      }

    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dog);
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
      width: 80%;
      margin: 0 auto;
      background: url(../../../assets/index/光晕.png) no-repeat center bottom;
      background-size: contain;
      position: relative;
}
.fill {
    width: 200px;
    height: 200px;
    background: url(../../../assets/index/球外.png) no-repeat center center;
    background-size: 200px 200px;
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    margin:auto;

}
.number {
    width: 84px;
    height: 77px;
    color: #ffffff;
    font-size: 12px;
    background: url(../../../assets/index/球.png) no-repeat center center;
    background-size: 84px 77px;
    position: absolute;
    .p1 {
        padding-top: 19px;
    }
}
.number1 {
    left: -19px;
    top: 71px;
}
.number2 {
    right: -35rem;
    top: 61rem;
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
