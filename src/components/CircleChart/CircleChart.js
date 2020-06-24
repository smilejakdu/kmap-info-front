import React, { useState, useEffect } from "react";
import "./CircleChart.scss";

const CircleChart = (data) => {
  console.log("data : ", data);
  console.log("data.label : ", data.label);
  console.log("data.children : ", data.children);
  return (
    <div className="circle_parent">
      <div className="compound-title">
        <h1>Compound Numbers</h1>
      </div>
      <div className="circle_chart">{data.children}</div>
      <div className="compound_circle_count">
        <h1>{data.label}</h1>
      </div>
    </div>
  );
};

export default CircleChart;
