<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
const echarts = require("echarts")

export default {
  props: {
    echartsOption: Object,
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch:{
    id(val) {
      console.log(val)
      if(val=='chart33' || val=='chart29') {
        this.initChart()
      }
    }
  },
  mounted() {
    this.initChart()
    setInterval(()=>{
      if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
      this.initChart()

    },20000)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart(events) {
      // 新建一个promise对象
      let newPromise = new Promise((resolve) => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        //	此dom为echarts图标展示dom
        setTimeout(()=>{

          this.chart = echarts.init(document.getElementById(this.id))
    
          this.chart.setOption(this.echartsOption)
          
        },500)
      })

      // this.$nextTick( () => {
      //   setTimeout(()=>{

      //     this.chart = echarts.init(document.getElementById(this.id))
  
      //     this.chart.setOption(this.echartsOption)
      //   },500)
      // })
    }
  }
}
</script>
