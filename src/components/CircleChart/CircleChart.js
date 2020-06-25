import React, { useState, useEffect } from "react";
import "./CircleChart.scss";

const CircleChart = (data) => {
  return (
    <div className="circle_parent">
      <div className="compound-title">
        <h1>Compound Numbers</h1>
      </div>
      <div className="circle_chart">{data.children}</div>
      <div className="compound_circle_count">
        <h3>{data.label}</h3>
      </div>
    </div>
  );
};

export default CircleChart;
