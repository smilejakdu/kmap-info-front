import React, { useState, useEffect } from "react";
import "./Statistics.scss";
import CircleChart from "../CircleChart/CircleChart";
import { CircularProgressbar } from "react-circular-progressbar";
import ColumnChart from "../ColumnChart/ColumnChart";
import SvgChart from "../SvgChart/SvgChart";
import request from "../../util/request";

// 원차트 id /1366 * 100 계산을 여기서 해야함 => <CircleChart 에 props 로 보내줘야함
const percentage = 65;
const KaiChemnum = 23;
// bar chart 여기서 데이터를 넘겨서 줘야함

const Statistics = () => {
  const [circlepercent, setCirclepercent] = useState(0);
  const [circlechemnum, setCirclechemnum] = useState(0);
  const [column, setColumn] = useState([]);

  useEffect(() => {
    request
      .get("/excel/statistics")
      .then((res) => {
        let {
          data: { data },
        } = res;
        setCirclepercent(data.circle_number);
        setCirclechemnum(data.kaichem_number);
        setColumn(data.columns_list);
      })
      .catch((err) => {
        err && console.log(err);
      });
  }, []);

  return (
    <>
      <div className="circle_border">
        <CircleChart label={`${circlechemnum} compound`}>
          <CircularProgressbar
            value={circlepercent}
            text={`${circlepercent}%`}
          />
        </CircleChart>
      </div>
      <div className="column_border">
        <ColumnChart data={column} />
      </div>
      <div className="svg_border">
        <SvgChart />
      </div>
    </>
  );
};

export default Statistics;
