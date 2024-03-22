//STACKED LINE CHART DEVEX

import React from "react";
import "devextreme/dist/css/dx.light.css";
import {
  Chart,
  Series,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  Title,
} from "devextreme-react/chart";

function Line() {
  const dataSource = [
    {
      year: 2000,
      population: 6075111111,
      malePopulation: 3033000000,
      femalePopulation: 3042000000,
    },
    {
      year: 2005,
      population: 6075111111,
      malePopulation: 3033000000,
      femalePopulation: 3042000000,
    },
    {
      year: 2010,
      population: 6898000000,
      malePopulation: 3442000000,
      femalePopulation: 6456000000,
    },
    {
      year: 2015,
      population: 6075111111,
      malePopulation: 3033000000,
      femalePopulation: 3042000000,
    },
    {
      year: 2020,
      population: 9795000000,
      malePopulation: 7897000000,
      femalePopulation: 3898000000,
    },
  ];

  return (
    <div style={{width:"33rem"}}>
      <h3>DEVEX STACKED LINE CHART</h3>
      <Chart
        palette="Violet"
        id="chart"
        dataSource={dataSource}>
        <Series
          argumentField="year"
          valueField="population"
          name="Total Population"
          type="line"
        />
        <Series
          argumentField="year"
          valueField="malePopulation"
          name="Male Population"
          type="line"
        />
        <Series
          argumentField="year"
          valueField="femalePopulation"
          name="Female Population"
          type="line"
        />
        <ArgumentAxis title="Year" />
        <ValueAxis title="Population" />
        <Title text="Population by Gender" />
        <Tooltip enabled={true} />
      </Chart>
    </div>
  );
}

export default Line;
