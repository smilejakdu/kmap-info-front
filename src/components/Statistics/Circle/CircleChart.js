import React, { useState, useEffect } from 'react';
import './CircleChart.scss';

const CircleChart = (props) => {
  return (
    <div className="circle_parent">
      <div className="circle_chart">{props.children}</div>
      <div className="compound_circle_count">
        <h1>{props.label}</h1>
      </div>
    </div>
  );
};

export default CircleChart;
