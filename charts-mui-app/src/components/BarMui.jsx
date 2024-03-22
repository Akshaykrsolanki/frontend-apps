// import { BarChart } from "@mui/x-charts";
// import * as React from "react";

// export default function BarMui() {
//   const xAxisData = ["2020", "2021", "2022"];
//   const seriesData = [
//     { data: [2, 3, 5], name: "TCS" },
//     { data: [3, 6, 5], name: "GOOGLE" },
//     { data: [2, 3, 5], name: "MICROSOFT" },
//   ];

//   return (
//     <div>
//       <h3>MUI BAR CHART</h3>
//     <BarChart
//       xAxis={[{ scaleType: "band", data: xAxisData }]}
//       series={seriesData.map((item) => ({ data: item.data, label: item.name }))}
//       width={500}
//       height={300}
//     />
//     </div>

//   );
// }


























import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const aData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const bData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const cData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E'
];

export default function StackedBarChart() {
  return (
  <div style={{ width: "30rem", height: 400 }} >
<div>
  <h3>MUI STACKED BAR CHART</h3>
  <BarChart
      // width={540}
      height={375}
      
      series={[
        { data: aData, label: 'av', id: 'avId', stack: 'total' },
        { data: bData, label: 'bv', id: 'bvId', stack: 'total' },
        { data: cData, label: 'cv', id: 'cvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
</div>
</div>
  );
}
