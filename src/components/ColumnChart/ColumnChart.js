import React, { PureComponent, useState, useEffect } from "react";
import "./ColumnChart.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./ColumnChart.scss";

const ColumnChart = (data) => {
  const [widthState, setWidthState] = useState(800);
  const [heightState, setHeightState] = useState(350);

  const updateDimesions = () => {
    if (window.innerWidth < 1700 && window.innerWidth > 1550) {
      setWidthState(750);
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
    <div className="columns_border">
      <BarChart
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
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ColumnChart;
