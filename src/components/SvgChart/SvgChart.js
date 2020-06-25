import React, { PureComponent, useState } from "react";
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

const data = [
  {
    name: "6month",
    value: 4000,
  },
  {
    name: "7month",
    value: 3000,
  },
  {
    name: "8month",
    value: 3500,
  },
  {
    name: "9month",
    value: 2780,
  },
];

const SvgChart = () => {
  return (
    <div className="border">
      <LineChart
        width={440}
        height={475}
        data={data}
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
