// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
  title: {
    text: '能力雷达'
  },
  tooltip: {},
  radar: {
      indicator: [
        { text: '静态页面' ,max:100},
        { text: 'React 全家桶' ,max:100},
        { text: '项目能力' ,max:100},
        { text: '沟通能力' ,max:100},
        { text: 'Vue 全家桶' ,max:100},
        { text: '编程基础' ,max:100},
      ],

      center: ['50%', '50%'],
      radius: 100,
      startAngle: 30,
      splitNumber: 4,
      shape: 'circle',
      name: {
        textStyle: {
          color: 'rgba(0, 174, 227)'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(0, 174, 227, 0.2)',
            'rgba(0, 174, 227, 0.4)', 'rgba(0, 174, 227, 0.6)',
            'rgba(0, 174, 227, 0.8)', 'rgba(0, 174, 227, 1)'],
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },


  series: [
    {
      name: '能力雷达',
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [100,80,85,75,90,80],
          areaStyle: {
            color: 'rgba(255, 255, 255, 0.5)'
          },
          // label: {
          //   show: true,
          //   formatter: function(params) {
          //     return params.value;
          //   }
          // }
        }
      ]
    },

  ]
}


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);