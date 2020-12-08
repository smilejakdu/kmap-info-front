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

  // updateDimensions() {
  //   if (window.innerWidth < 500) {
  //     this.setState({ width: 450, height: 102 });
  //   } else {
  //     let update_width = window.innerWidth - 100;
  //     let update_height = Math.round(update_width / 4.4);
  //     this.setState({ width: update_width, height: update_height });
  //   }
  // }

  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener('resize', this.updateDimensions.bind(this));
  // }

  // /**
  //  * Remove event listener
  //  */
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions.bind(this));
  // }

  render() {
    // 여기서 ,
    const { labels, svgdata } = this.props;
    console.log(labels);
    console.log(svgdata);

    const labels_plus_none = ['', ...labels, ''];
    const svg_plus_none = [NaN, ...svgdata, NaN];
    // console.log(svg_plus_none);

    const data = {
      labels: labels_plus_none,
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          borderColor: '#ff8000',
          borderCapStyle: 'butt',
          borderDashOffset: 0.1,
          borderJoinStyle: 'miter',
          pointBackgroundColor: '#ff8000',
          backgroundColor: 'rgba(1,1,1,0.1)',
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
      <div className="border">
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
