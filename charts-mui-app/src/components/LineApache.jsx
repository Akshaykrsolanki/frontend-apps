// import React, { useEffect, useRef } from 'react';
// import * as echarts from "echarts";

// function LineChart() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = echarts.init(chartRef.current);

//     // Sample data for the line chart
//     const data = [
//       { year: 2000, value: 6127700428 },
//       { year: 2005, value: 6550142943 },
//       { year: 2010, value: 6944055583 },
//       { year: 2015, value: 7400438173 },
//       { year: 2020, value: 7794798739 }
//     ];

//     const options = {
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'cross'
//         }
//       },
//       xAxis: {
//         type: 'category',
//         data: data.map(item => item.year)
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           name: 'Line Chart',
//           data: data.map(item => item.value),
//           type: 'line'
//         }
//       ]
//     };

//     chart.setOption(options);

//     return () => {
//       chart.dispose();
//     };
//   }, []);

//   return (
//     <div>
//         <h3> APACHE LINE CHART </h3>
//         <div ref={chartRef} style={{ width: '100%', height: 400 }} />
//     </div>
//   )
// }

// export default LineChart;

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function LineApache() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Sample data for the stacked line chart
    const data = [
      { year: 2000, value1: 100, value2: 200, value3: 300 },
      { year: 2005, value1: 150, value2: 190, value3: 350 },
      { year: 2010, value1: 89, value2: 300, value3: 200 },
      { year: 2015, value1: 270, value2: 750, value3: 350 },
      { year: 2020, value1: 900, value2: 500, value3: 200 },
    ];

    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["Category 1", "Category 2", "Category 3"],
      },
      xAxis: {
        type: "category",
        data: data.map((item) => item.year),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Category 1",
          data: data.map((item) => item.value1),
          type: "line",
          stack: "total",
        },
        {
          name: "Category 2",
          data: data.map((item) => item.value2),
          type: "line",
          stack: "total",
        },
        {
          name: "Category 3",
          data: data.map((item) => item.value3),
          type: "line",
          stack: "total",
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <h3>APACHE STACKED LINE CHART</h3>
      <div ref={chartRef} style={{ width: "25rem", height: 400 }} />
    </div>
  );
}

export default LineApache;
