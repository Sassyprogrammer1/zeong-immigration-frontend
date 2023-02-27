import React, { useRef } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { getElementAtEvent, Pie } from 'react-chartjs-2';
import { useHistory } from 'react-router';
import { LabelPluginProvider } from './LabelsPluginProvider';
import plugin from 'chartjs-plugin-datalabels';
import "./styles.css"

ChartJS.register(ArcElement, Tooltip, Legend,

);


export const data = {
  labels: ['Ranking', 'Employement', 'Location', 'Not Working', 'Intrests', 'Budget', 'Programs', 'imigration'],
  datasets: [
    {
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



const options = {
  responsive: true,
  aspectRatio: 1 | 2,

  plugins: {
    tooltip: {
      enabled: false
    },
    legend: {
      display: false
    },
    labels: {
      render: (args) => {
        return args.label
      }
    }
  }

};

const ConsultantDashboard = () => {

  const history = useHistory();

  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      const dataSetIndexNum = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      history.push(data.datasets[dataSetIndexNum].link[dataPoint]);
    }
  };
  return (

    <div className='pie-chart-container'>
      <LabelPluginProvider>
        <Pie data={data} options={options}
          onClick={onClick}
          ref={chartRef}
        />
      </LabelPluginProvider>

    </div>
  );
};

export default ConsultantDashboard;
