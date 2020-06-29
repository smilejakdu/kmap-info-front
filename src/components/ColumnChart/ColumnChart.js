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
  console.log(data);
  return (
    <div className="columns_border">
      <BarChart
        width={400}
        height={460}
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
