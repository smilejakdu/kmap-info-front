import React, { useState, useEffect } from 'react';
import './ColumnChart.scss';
import { Bar } from 'react-chartjs-2';

const ColumnChart = ({ labels, datasets }) => {
  console.log(labels);
  console.log(datasets);

  const options = {
    responsive: false,
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
    type: 'bar',
  };

  const data = {
    labels,
    datasets,
  };

  // 어차피 최근 8개가 나와야하니깐 yarchangebtn 은 필요없지 않을까 ?
  return (
    <div>
      <Bar
        className="test"
        data={data}
        width={900}
        height={470}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;
