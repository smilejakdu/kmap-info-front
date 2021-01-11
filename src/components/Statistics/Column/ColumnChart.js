import React from 'react';
import './ColumnChart.scss';
import { Bar } from 'react-chartjs-2';

const ColumnChart = ({ labels, bardata, bardata2 }) => {

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Library_Prep_date',
        backgroundColor: '#304d91',
        borderColor: '#304d91',
        borderWidth: 0.1,
        hoverBackgroundColor: '#304d91',
        hoverBorderColor: '#304d91',
        data: bardata,
      },
      {
        label: 'Sequencing_Completed',
        backgroundColor: '#ff8000',
        borderColor: '#ff8000',
        borderWidth: 0.1,
        hoverBackgroundColor: '#ff8000',
        hoverBorderColor: '#ff8000',
        data: bardata2,
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 50,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Bar
        className='test'
        data={data}
        width={900}
        height={470}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;
