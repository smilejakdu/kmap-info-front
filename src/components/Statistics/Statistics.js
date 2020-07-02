import React, { useState, useEffect } from "react";
import "./Statistics.scss";
import CircleChart from "../CircleChart/CircleChart";
import { CircularProgressbar } from "react-circular-progressbar";
import ColumnChart from "../ColumnChart/ColumnChart";
import SvgChart from "../SvgChart/SvgChart";
import request from "../../util/request";

const Statistics = () => {
  const [circlepercent, setCirclepercent] = useState(0);
  const [circlechemnum, setCirclechemnum] = useState(0);
  const [column, setColumn] = useState([]);
  const [svgdata, setSvgdata] = useState();

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
        setSvgdata(data.svg_data_list);
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
        <SvgChart data={svgdata} />
      </div>
    </>
  );
};

export default Statistics;
