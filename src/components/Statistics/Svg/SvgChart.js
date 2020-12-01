import React, { useState, useEffect, Component } from "react";
import "./SvgChart.scss";
import { Line } from "react-chartjs-2";

// LineDemo
export default class SvgChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 400,
    };
  }
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
  }
  styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  render() {
    const { labels, svgnumber } = this.props;
    const labels_plus_none = ["", ...labels, ""];
    const svg_plus_none = [NaN, ...svgnumber, NaN];
    const data = {
      labels: labels_plus_none,
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#ff8000",
          borderColor: "#ff8000",
          borderCapStyle: "butt",
          borderDashOffset: 0.1,
          borderJoinStyle: "miter",
          pointBackgroundColor: "#ff8000",
          pointBorderWidth: 10,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "#ff8000",
          pointHoverBorderColor: "#ff8000",
          pointRadius: 5,
          pointHitRadius: 5,
          data: svg_plus_none,
        },
      ],
    };

    return (
      <div>
        <h2>Kmap 데이터 누적량</h2>
        <Line
          ref="chart"
          data={data}
          options={{
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
