import React from 'react';
import './SvgChart.scss';
import { Line } from 'react-chartjs-2';

const SvgChart = ({ labels, svgdata, svgdata2 }) => {
  const labels_plus_none = ['', ...labels, ''];

  for (const data of svgdata) {
    if (data === 0) {
      svgdata.splice(svgdata.indexOf(0), 1, NaN);
    }
  }

  for (const data of svgdata2) {
    if (data === 0) {
      svgdata2.splice(svgdata2.indexOf(0), 1, NaN);
    }
  }

  const data = {
    labels: labels_plus_none,
    datasets: [
      {
        label: 1,
        fill: false,
        lineTension: 0.1,
        borderColor: '#ff8000',
        borderCapStyle: 'butt',
        borderDashOffset: 0.1,
        borderJoinStyle: 'miter',
        pointBackgroundColor: '#ff8000',
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#ff8000',
        pointHoverBorderColor: '#ff8000',
        pointRadius: 5,
        pointHitRadius: 5,
        data: svgdata,
      },
      {
        label: 2,
        fill: false,
        lineTension: 0.1,
        borderColor: '#304d91',
        borderCapStyle: 'butt',
        borderDashOffset: 0.1,
        borderJoinStyle: 'miter',
        pointBackgroundColor: '#304d91',
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#304d91',
        pointHoverBorderColor: '#304d91',
        pointRadius: 5,
        pointHitRadius: 5,
        data: svgdata2,
      },
    ],
  };
  const lineOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };

  return (
    <div>
      <Line data={data} options={lineOptions} />
    </div>
  );
};

export default SvgChart;
