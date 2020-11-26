import React, { useState, useEffect, Component } from "react";
import "./SvgChart.scss";
import { Line } from "react-chartjs-2";

export default class LineDemo extends Component {
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
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#e7e4de",
          borderColor: "#e7e4de",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#ff8000",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#ff8000",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: svgnumber,
        },
      ],
    };
    return (
      <div>
        <h2>Kmap 데이터 누적량</h2>
        <Line
          ref="chart"
          data={data}
          style={this.styles}
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}
