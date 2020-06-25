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
    value: 2000,
  },
];

const ColumnChart = () => {
  return (
    <div className="columns_border">
      <BarChart
        width={400}
        height={400}
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
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ColumnChart;
