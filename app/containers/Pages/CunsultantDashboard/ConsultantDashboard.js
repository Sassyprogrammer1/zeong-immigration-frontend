import React, { useRef } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { getElementAtEvent, Pie } from 'react-chartjs-2';
import { useHistory } from 'react-router';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend,
  // ChartDataLabels,

);

// console.log(ChartDataLabels, 'ChartDataLabels');

export const data = {
  labels: ['Ranking', 'Employement', 'Location', 'Not Working', 'Intrests', 'Budget', 'Programs', 'imigration'],
  datasets: [
    {
      // label: '# of Votes',
      data: [60, 60, 60, 60, 60, 60],
      backgroundColor: [

        '#FF9900 ',
        '#FFCC00 ',
        '#999933',
        '#66CC99',
        '#CC3399',
        '#6666CC',
        '#993399 ',
        '#FF6600 ',
      ],
      borderColor: [
        '#FF9900 ',
        '#FFCC00 ',
        '#999933',
        '#66CC99',
        '#CC3399',
        '#6666CC',
        '#993399 ',
        '#FF6600 ',

      ],
      borderWidth: 1,
      link: ['/app/consultant/ranking', '/app/consultant/employment', '/app/consultant/location']
    },
  ],
};

// console.log(ChartDataLabels, "ChartDataLabels")

const options = {
  responsive: true,
  aspectRatio: 1 | 2,
  plugins: {
    legend: {
      display: false
    },
  }
};

const ConsultantDashboard = () => {
  // console.log(Tooltip)

  const history = useHistory();

  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      const dataSetIndexNum = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      console.log(getElementAtEvent(chartRef.current, event));
      console.log(data.datasets[dataSetIndexNum].link[dataPoint]);

      history.push(data.datasets[dataSetIndexNum].link[dataPoint]);
    }
  };
  return (

    <div className='pie-chart-container'>
      <Pie data={data} options={options}
        onClick={onClick}
        ref={chartRef}
      />

    </div>
  );
};

export default ConsultantDashboard;
