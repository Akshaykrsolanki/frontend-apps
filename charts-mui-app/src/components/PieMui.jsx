import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";


export default function PieMui() {
  const data = {
    id: [1, 2, 3],
    label: ["TCS", "GOOGLE", "MICROSOFT"],
    value: [30, 20, 50],
  };

  const seriesData = data.id.map((id, index) => ({
    id,
    value: data.value[index],
    label: data.label[index],
  }));
  return (
    <div>
      <h3>MUI PIE CHART</h3>
      <PieChart series={[{ data: seriesData }]} width={400} height={200} />
    </div>
  )
}
