//NORMAL BAR CHART

// import React from 'react';
// import 'devextreme/dist/css/dx.light.css';
// import { Chart, Series, ArgumentAxis, ValueAxis, Title } from 'devextreme-react/chart';

// function Bar() {
//     const dataSource = [
//         { country: 'China', population: 1439323776 },
//         { country: 'India', population: 1380004385 },
//         { country: 'United States', population: 331002651 },
//         { country: 'Indonesia', population: 273523615 },
//         { country: 'Pakistan', population: 220892340 },
//         { country: 'Brazil', population: 212559417 },
//         { country: 'Nigeria', population: 206139589 },
//         { country: 'Bangladesh', population: 164689383 },
//         { country: 'Russia', population: 145934462 },
//         { country: 'Mexico', population: 128932753 }
//     ]

//     return (
//         <Chart
//             id="chart"
//             dataSource={dataSource}
//         >
//             <Series
//                 valueField="population"
//                 argumentField="country"
//                 type="bar"
//             />
//             <ArgumentAxis
//                 title="Country"
//             />
//             <ValueAxis
//                 title="Population"
//             />
//             <Title
//                 text="Top 10 Most Populous Countries"
//             />
//         </Chart>
//     );
// }

// export default Bar;


















// Stacked Bar Chart
import React from 'react';
// import 'devextreme/dist/css/dx.light.css';
import { Chart, Series, ArgumentAxis, ValueAxis, Title } from 'devextreme-react/chart';

function Bar() {
    const dataSource = [
        { country: 'China', malePopulation: 723419497, femalePopulation: 715904279 },
        { country: 'India', malePopulation: 718713971, femalePopulation: 661290414 },
        { country: 'United States', malePopulation: 166746135, femalePopulation: 164256516 },
        { country: 'Indonesia', malePopulation: 137960283, femalePopulation: 135563332 },
        { country: 'Pakistan', malePopulation: 112372494, femalePopulation: 108519846 },
        { country: 'Brazil', malePopulation: 109580051, femalePopulation: 102979366 },
        { country: 'Nigeria', malePopulation: 106738993, femalePopulation: 99300596 },
        { country: 'Bangladesh', malePopulation: 84359885, femalePopulation: 80329598 },
        { country: 'Russia', malePopulation: 74245194, femalePopulation: 71689323 },
        { country: 'Mexico', malePopulation: 65548604, femalePopulation: 63384095 }
    ]

    return (
        <Chart
            id="chart"
            dataSource={dataSource}
        >
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
            <ArgumentAxis
                title="Country"
            />
            <ValueAxis
                title="Population"
            />
            <Title
                text="Male and Female Population by Country"
            />
        </Chart>
    );
}

export default Bar;


