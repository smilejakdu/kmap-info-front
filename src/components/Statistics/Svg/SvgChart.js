import React, { useState, useEffect } from "react";
import "./SvgChart.scss";
import { Line } from "react-chartjs-2";

const SvgChart = ({ svg_date, svg_number }) => {
  console.log("svg_date :", svg_date);
  console.log("svg_number : ", svg_number);

  const data = {
    labels: svg_date,
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: svg_number,
      },
    ],
  };

  return (
    <div className="border">
      <Line ref="chart" data={data} />
    </div>
  );
};
export default SvgChart;
