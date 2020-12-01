<template>
  <div id="main" style="width: 22rem; height: 8rem"></div>
</template>
<style scoped>
#main {
  border: 0.08rem solid rgb(204, 204, 204);
  border-radius: 0.2rem;
  margin: 0 0.5rem;
  padding: 0;
  background: white;
}
</style>
<script>
var max = 50;
var min = 45;
var num = Math.round(Math.random() * (max - min + 1) + min);
var num1 = Math.round(Math.random() * (max - min + 1) + min);
var num2 = Math.round(Math.random() * (max - min + 1) + min);
export default {
  methods: {
    init: function () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        grid: {
          top: "8%",
          left: "3%",
          right: "3%",
          bottom: "8%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#66c0cb",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#66c0cb",
            },
          },
        },
        series: [
          {
            data: [num, num1, num2],
            itemStyle: {
              width: 10,
              color: "#66c0cb",
            },
            lineStyle: {
              width: 5,
            },
            symbolSize: 10, //设定实心点的大小
            type: "line",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.init();
  },
};
</script>