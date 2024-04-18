import React from 'react';

import ReactECharts from 'echarts-for-react';

function RainfallEvaporationLineChart(props: any) {

  const option = {
      // title: {
      //   text: 'Rainfall vs Evaporation',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      legend: {
        data: ['Evaporation', 'Rainfall'],
        left: 10
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      axisPointer: {
        link: [
          {
            xAxisIndex: 'all'
          }
        ]
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
        },
        {
          type: 'inside',
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
        }
      ],
      grid: [
        {
          left: 60,
          right: 50,
          height: '35%'
        },
        {
          left: 60,
          right: 50,
          top: '55%',
          height: '35%'
        }
      ],
      xAxis: [
        {
          type: 'category',
          boundaryGap: "false",
          axisLine: { onZero: true },
          data: props.data.time,
          offset: 0
        },
        {
          gridIndex: 1,
          type: 'category',
          boundaryGap: false,
          axisLine: { onZero: true },
          data: props.data.time,
          position: 'top',
          offset: 0
        }
      ],
      yAxis: [
        {
          name: 'Evaporation(m³/s)',
          type: 'value',
          max: 500
        },
        {
          gridIndex: 1,
          name: 'Rainfall(mm)',
          type: 'value',
          inverse: true
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'line',
          symbolSize: 8,
          // prettier-ignore
          data: props.data.evaporation
        },
        {
          name: 'Rainfall',
          type: 'line',
          xAxisIndex: 1,
          yAxisIndex: 1,
          symbolSize: 8,
          // prettier-ignore
          data: props.data.rainfall
        }
      ]
    };

  
    return (
        <ReactECharts option={option}  className='echarts-for-echarts' onChartReady={props.onChartReady}/> //style={{ width: '500px', height: '300px'}}/>  // theme='dark' /> minWidth: '400px', minHeight: '250px',
    );
}

export default RainfallEvaporationLineChart;
