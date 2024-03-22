//NORMAL LINE CHART

// import React from 'react';
// import 'devextreme/dist/css/dx.light.css';
// import { Chart, Series, ArgumentAxis, ValueAxis, Title, Legend } from 'devextreme-react/chart';

// function Line() {
//     const dataSource = [
//         { year: 1990, value: 5320816667 },
//         { year: 2000, value: 6127700428 },
//         { year: 2010, value: 6944055583 },
//         { year: 2020, value: 7794798739 }
//     ];

//     return (
//         <Chart
//             id="chart"
//             dataSource={dataSource}
//         >
//             <Series
//                 valueField="value"
//                 argumentField="year"
//                 name="World Population"
//                 type="line"
//             />
//             <ArgumentAxis
//                 title="Year"
//             />
//             <ValueAxis
//                 title="Population"
//             />
//             <Title
//                 text="World Population Over Time"
//             />
//             <Legend visible={true} />
//         </Chart>
//     );
// }

// export default Line;























//STACKED LINE CHART

import 'devextreme/dist/css/dx.light.css';
import React, { useCallback, useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Grid,
} from 'devextreme-react/chart';
import service from './data.jsx';

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();
//const types = ['line', 'stackedline', 'fullstackedline'];
//const seriesTypeLabel = { 'aria-label': 'Series Type' };
function App() {
  const [type, setType] = useState('stackedline');
//   const handleChange = useCallback((e) => {
//     setType(e.value);
//   }, []);
  return (
    <React.Fragment>
      <Chart
        palette="Violet"
        dataSource={countriesInfo}
      >
        <CommonSeriesSettings
          argumentField="country"
          type={type}
        />
        {energySources.map((item) => (
          <Series
            key={item.value}
            valueField={item.value}
            name={item.name}
          />
        ))}
        <Margin bottom={20} />
        <ArgumentAxis
          valueMarginsEnabled={false}
          discreteAxisDivisionMode="crossLabels"
        >
          <Grid visible={true} />
        </ArgumentAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="bottom"
        />
        <Export enabled={true} />
        <Title text="Energy Consumption in 2004">
          <Subtitle text="(Millions of Tons, Oil Equivalent)" />
        </Title>
        <Tooltip enabled={true} />
      </Chart>
      {/* <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Series Type </span>
          <SelectBox
            dataSource={types}
            inputAttr={seriesTypeLabel}
            value={type}
            onValueChanged={handleChange}
          />
        </div>
      </div> */}
    </React.Fragment>
  );
}
export default App;



