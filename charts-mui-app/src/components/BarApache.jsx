// import React, { useEffect, useRef } from 'react';
// import * as echarts from "echarts";

// function BarApache() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = echarts.init(chartRef.current);

//     // Sample data for the bar chart
//     const data = [
//       { name: 'Category A', value: 210 },
//       { name: 'Category B', value: 280 },
//       { name: 'Category C', value: 350 },
//       { name: 'Category D', value: 420 },
//       { name: 'Category E', value: 490 }
//     ];

//     const options = {
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow'
//         }
//       },
//       xAxis: {
//         type: 'category',
//         data: data.map(item => item.name)
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           name: 'Bar Chart',
//           data: data.map(item => item.value),
//           type: 'bar'
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
//         <h3>APACHE BAR CHART</h3>
// <div ref={chartRef} style={{ width: '100%', height: 400 }} />
//     </div>
//   )
// }

// export default BarApache;

















import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function BarApache() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Sample data for the stacked bar chart
    const data = [
      { year: 2000, category1: 100, category2: 200, category3: 300 },
      { year: 2005, category1: 150, category2: 250, category3: 350 },
      { year: 2010, category1: 200, category2: 300, category3: 400 },
      { year: 2015, category1: 250, category2: 350, category3: 450 },
      { year: 2020, category1: 300, category2: 400, category3: 900 },
    ];

    const categories = Object.keys(data[0]).filter((key) => key !== "year");

    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: categories,
      },
      xAxis: {
        type: "category",
        data: data.map((item) => item.year),
      },
      yAxis: {
        type: "value",
      },
      series: categories.map((category) => ({
        name: category,
        data: data.map((item) => item[category]),
        type: "bar",
        stack: "stack",
        emphasis: {
          focus: "series",
        },
        markLine: {
          data: [{ type: "average", name: "Average" }],
        },
      })),
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <h3>APACHE STACKED BAR CHART</h3>
      <div ref={chartRef} style={{ width: "30rem", height: 400 }} />
    </div>
  );
}

export default BarApache;
