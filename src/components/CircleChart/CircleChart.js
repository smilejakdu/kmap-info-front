import React, { useState, useEffect } from "react";
import "./CircleChart.scss";

const CircleChart = (data) => {
  return (
    <div className="circle_parent">
      <div className="circle_chart">{data.children}</div>
      <div className="compound_circle_count">
        <h1>{data.label}</h1>
      </div>
    </div>
  );
};

export default CircleChart;
