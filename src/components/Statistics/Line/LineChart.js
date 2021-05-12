import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ labels, line_data, line_data2 }) => {
    console.log('svgdata : ', line_data);
    console.log('svgdata2 : ', line_data2);
    console.log('labels : ', labels);
    for (const data of line_data) {
        if (data === 0) {
            line_data.splice(line_data.indexOf(0), 1, NaN);
        }
    }

    for (const data of line_data2) {
        if (data === 0) {
            line_data2.splice(line_data2.indexOf(0), 1, NaN);
        }
    }

    const data = {
        labels: ['', ...labels, ''],
        datasets: [
            {
                label: 1,
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
                data: line_data,
            },
            {
                label: 2,
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
                data: line_data2,
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

export default LineChart;
