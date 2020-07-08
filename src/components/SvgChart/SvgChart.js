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

const SvgChart = (data) => {
  return (
    <div className="border">
      <LineChart
        width={440}
        height={475}
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
