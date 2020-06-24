import React from "react";
import "./Statistics.scss";
import CircleChart from "../CircleChart/CircleChart";
import { CircularProgressbar } from "react-circular-progressbar";
// 원차트 id /1366 * 100 계산을 여기서 해야함 => <CircleChart 에 props 로 보내줘야함
const percentage = 65;
const Statistics = () => {
  return (
    <>
      <div className="statistics_border">
        <CircleChart label="xx compound">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </CircleChart>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default Statistics;
