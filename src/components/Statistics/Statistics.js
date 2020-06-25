import React from "react";
import "./Statistics.scss";
import CircleChart from "../CircleChart/CircleChart";
import { CircularProgressbar } from "react-circular-progressbar";
import ColumnChart from "../ColumnChart/ColumnChart";
import SvgChart from "../SvgChart/SvgChart";
// 원차트 id /1366 * 100 계산을 여기서 해야함 => <CircleChart 에 props 로 보내줘야함
const percentage = 65;
// bar chart 여기서 데이터를 넘겨서 줘야함
const data = [
  ["", "", { role: "style" }],
  ["6월", 8.94, "#434b62"], // RGB value
  ["7월", 10.49, "#b87333"], // English color name
  ["8월", 25.3, "#722f37"],
];

const options = {
  animationEnabled: false,
  theme: "light2",
  title: {
    text: "Growth of Photovoltaics",
  },
  axisY: {
    title: "Capacity (in MWp)",
    logarithmic: true,
    includeZero: false,
  },
  data: [
    {
      type: "spline",
      showInLegend: true,
      legendText: "MWp = one megawatt peak",
      dataPoints: [
        { x: new Date(2001, 0), y: 1615 },
        { x: new Date(2002, 0), y: 2069 },
        { x: new Date(2003, 0), y: 2635 },
        { x: new Date(2004, 0), y: 3723 },
        { x: new Date(2005, 0), y: 5112 },
        { x: new Date(2006, 0), y: 6660 },
      ],
    },
  ],
};
// svg chart data
const Statistics = () => {
  return (
    <>
      <div className="circle_border">
        <CircleChart label="xx compound">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </CircleChart>
      </div>
      <div className="column_border">
        <ColumnChart data={data} />
      </div>
      <div className="svg_border">
        <SvgChart data={options} />
      </div>
    </>
  );
};

export default Statistics;
