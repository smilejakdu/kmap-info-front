import React, { useState, useEffect } from "react";
import CircleChart from "../CircleChart/CircleChart";
import { CircularProgressbar } from "react-circular-progressbar";
import ColumnChart from "../ColumnChart/ColumnChart";
import SvgChart from "../SvgChart/SvgChart";
import request from "../../util/request";
import { CircleBorder, ColumnBorder, SvgBorder } from "./Statistics.style";

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
      <CircleBorder>
        <CircleChart label={`${circlechemnum} compound`}>
          <CircularProgressbar
            value={circlepercent}
            text={`${circlepercent}%`}
          />
        </CircleChart>
      </CircleBorder>
      <div>
        <SvgBorder>
          <SvgChart data={svgdata} />
        </SvgBorder>

        <ColumnBorder>
          <ColumnChart data={column} />
        </ColumnBorder>
      </div>
    </>
  );
};

export default Statistics;
