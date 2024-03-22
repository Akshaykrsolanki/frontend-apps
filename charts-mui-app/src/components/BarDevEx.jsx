//STACKED BAR CHART DEVEX

import React from "react";
import "devextreme/dist/css/dx.light.css";
import {
  Chart,
  Series,
  ArgumentAxis,
  ValueAxis,
  Title,
  Tooltip,
} from "devextreme-react/chart";



function customizeTooltip(arg) {
  return {
    text: `${arg.seriesName} ${arg.valueText}`,
  };
}



function Bar() {
  const dataSource = [
    {
      country: "China",
      malePopulation: 761900561,
      femalePopulation: 705600688,
      totalPopulation: 1467501248,
    },
    {
      country: "United States",
      malePopulation: 168066766,
      femalePopulation: 172374402,
      totalPopulation: 340441169,
    },
    {
      country: "Russia",
      malePopulation: 67693433,
      femalePopulation: 78457851,
      totalPopulation: 146151284,
    },
    {
      country: "Brazil",
      malePopulation: 108181909,
      femalePopulation: 111720085,
      totalPopulation: 219901995,
    },
    {
      country: "India",
      malePopulation: 746719542,
      femalePopulation: 699496531,
      totalPopulation: 1446216073,
    },
    {
      country: "Mexico",
      malePopulation: 66912454,
      femalePopulation: 68766397,
      totalPopulation: 135678853,
    },
  ];

  return (
    <div style={{ width: "43rem" }}>
      <h3>DEVEX STACKED BAR CHART</h3>
      <Chart id="chart" dataSource={dataSource}>
        <Series
          argumentField="country"
          valueField="malePopulation"
          name="Male Population"
          type="stackedBar"
        />
        <Series
          argumentField="country"
          valueField="femalePopulation"
          name="Female Population"
          type="stackedBar"
        />
        <Series
          argumentField="country"
          valueField="totalPopulation"
          name="Total Population"
          type="stackedBar"
        />

        <ArgumentAxis title="Country" />
        <ValueAxis title="Population" />
        <Title text="M / F Population by Country" />

        <Tooltip
        enabled={true}
        location="edge"
        customizeTooltip={customizeTooltip}
      />
      </Chart>
    </div>
  );
}

export default Bar;
