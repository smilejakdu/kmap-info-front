import React, { useState, useEffect } from "react";
import "./SvgChart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SvgChart = (data) => {
  const [widthState, setWidthState] = useState(800);
  const [heightState, setHeightState] = useState(350);
  const [marginState, setMarginState] = useState({});

  const updateDimesions = () => {
    if (window.innerWidth < 2000 && window.innerWidth > 1550) {
      setWidthState(750);
      setHeightState(350);
    } else if (window.innerWidth > 2000 && window.innerWidth < 2200) {
      setWidthState(850);
      setHeightState(350);
    } else if (window.innerWidth < 1550) {
      setWidthState(950);
      setHeightState(350);
    } else {
      let update_width = window.innerWidth - 1200;
      let update_height = Math.round(update_width / 3.4);
      setWidthState(update_width);
      setHeightState(update_height);
    }
  };

  useEffect(() => {
    updateDimesions();
    window.addEventListener("resize", updateDimesions);
  });

  return (
    <div className="border">
      <LineChart
        width={widthState}
        height={heightState}
        data={data.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="orange" />
      </LineChart>
    </div>
  );
};
export default SvgChart;
