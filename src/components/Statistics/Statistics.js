import React, { useState, useEffect } from "react";
import CircleChart from "./Circle/CircleChart";
import { CircularProgressbar } from "react-circular-progressbar";
import ColumnChart from "./Column/ColumnChart";
import SvgChart from "./Svg/SvgChart";
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
      .then(({ data }) => {
        console.log(data);
        const {
          circle_number,
          columns_list,
          kaichem_number,
          svg_data_list,
        } = data;
        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);
        setColumn(columns_list);
        setSvgdata(svg_data_list);

        console.log(columns_list);
        console.log(columns_list["2020"]);
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
