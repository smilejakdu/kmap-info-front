import React, { useState, useEffect, Component } from 'react';
import './SvgChart.scss';
import { Line } from 'react-chartjs-2';

// LineDemo
export default class SvgChart extends Component {
  state = {
    width: 1550,
    height: 500,
  };

  styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  render() {
    // 여기서 ,
    const { labels, svgdata } = this.props;
    const labels_plus_none = ['', ...labels, ''];
    console.log(svgdata);
    const svg_plus_none = [NaN, ...svgdata, NaN];
    console.log(svg_plus_none);

    const data = {
      labels: labels_plus_none,
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#ff8000',
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
          data: svg_plus_none,
        },
      ],
    };

    return (
      <div>
        <Line
          ref="chart"
          data={data}
          options={{
            responsive: false,
            tooltips: {
              xPadding: 10,
            },
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: this.props.maxY,
                    min: 0,
                    stepSize: 100,
                  },
                },
              ],
            },
          }}
          style={this.styles}
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}
