<template>
  <div id="container" />
</template>

<!--使用echart时要引用插件cnpm i echarts-liquidfill -S-->
<!--使用v-chart时不需要-->
<script>
import 'echarts-liquidfill'
export default {
  name: 'LiquidFill',
  mounted() {
    const data = [0.67, 0.4, 0.3]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data,
        color: ['yellow', 'red', 'green'],
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9 // 选中时的透明度
          }
        },
        outline: {
          show: false
        }

      }]
    })
  }
}
</script>

<style scoped lang="scss">
#container{
  height: 100%;
  width: 100%;
}
</style>
