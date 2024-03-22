//NORMAL PIE CHART

import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { PieChart } from 'devextreme-react/pie-chart';

function Pie() {
    const dataSource = [
        { region: 'Asia', val: 4119626293 },
        { region: 'Africa', val: 1012956064 },
        { region: 'Northern America', val: 344124520 },
        { region: 'Latin America and the Caribbean', val: 590946440 },
        { region: 'Europe', val: 727082222 },
        { region: 'Oceania', val: 35104756 }
    ];

    const palette = [
        '#ff9f00', '#ffbf00', '#ffd400', '#ffc700', '#ffb300', '#ff9700'
    ];

    const title = 'Population by Region';

    return (
        <PieChart
            id="pie"
            dataSource={dataSource}
            palette={palette}
            title={title}
        >
        </PieChart>
    );
}

export default Pie;

















