import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function PieApache() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Sample data for the pie chart
    const data = [
      { value: 335, name: "Category A" },
      { value: 310, name: "Category B" },
      { value: 234, name: "Category C" },
      { value: 135, name: "Category D" },
      { value: 548, name: "Category E" },
    ];

    const options = {
      title: {
        text: "All the Categories",
        subtext: "Dummy Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: 10,
        data: data.map((item) => item.name),
      },
      series: [
        {
          name: "Pie Chart",
          type: "pie",
          radius: "50%",
          center: ["50%", "50%"],
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
      <h3> APACHE PIE CHART </h3>
      <div ref={chartRef} style={{ width: "40rem", height: 400 }} />
    </div>
  );
}

export default PieApache;
