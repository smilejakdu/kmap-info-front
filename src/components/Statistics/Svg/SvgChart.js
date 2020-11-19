import React, { useState, useEffect } from "react";
import "./SvgChart.scss";
import { Line } from "react-chartjs-2";

const SvgChart = ({ svg_date, svg_number }) => {
  console.log("svg_date :", svg_date);
  console.log("svg_number : ", svg_number);

  // const [widthState, setWidthState] = useState(800);
  // const [heightState, setHeightState] = useState(350);
  // const [marginState, setMarginState] = useState({});

  // const updateDimesions = () => {
  //   if (window.innerWidth < 2000 && window.innerWidth > 1550) {
  //     setWidthState(750);
  //     setHeightState(350);
  //   } else if (window.innerWidth > 2000 && window.innerWidth < 2200) {
  //     setWidthState(850);
  //     setHeightState(350);
  //   } else if (window.innerWidth < 1550) {
  //     setWidthState(950);
  //     setHeightState(350);
  //   } else if (window.innerWidth > 2200 && window.innerWidth < 2600) {
  //     let update_width = window.innerWidth - 1200;
  //     let update_height = Math.round(update_width / 3.4);
  //     setWidthState(update_width); // 1250
  //     setHeightState(update_height); // 350
  //   } else if (window.innerWidth > 2600) {
  //     setWidthState(1300); // 1250
  //     setHeightState(350); // 350
  //   }
  // };

  // useEffect(() => {
  //   updateDimesions();
  //   window.addEventListener("resize", updateDimesions);
  // });

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
