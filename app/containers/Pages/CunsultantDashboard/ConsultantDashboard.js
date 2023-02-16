import React, { useRef } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { getElementAtEvent, Pie } from 'react-chartjs-2';
import { useHistory } from 'react-router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend,
  // ChartDataLabels,

);

console.log(ChartDataLabels, 'ChartDataLabels');

export const data = {
  labels: ['Ranking', 'Employement', 'Location', 'Not Working', 'Intrests', 'Budget', 'Programs', 'imigration'],
  datasets: [
    {
      // label: '# of Votes',
      data: [60, 60, 60, 60, 60, 60],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      link: ['/app/consultant/ranking', '/app/consultant/employment', '/app/consultant/location']
    },
  ],
};

// console.log(ChartDataLabels, "ChartDataLabels")

const options = {
  responsive: true,
  // aspectRatio: 1 | 2,
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
