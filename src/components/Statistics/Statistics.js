import React, { useState, useEffect } from "react";
import CircleChart from "./Circle/CircleChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ColumnChart from "./Column/ColumnChart";
import SvgChart from "./Svg/SvgChart";
import request from "../../util/request";
import { CircleBorder, ColumnBorder, SvgBorder } from "./Statistics.style";

const Statistics = () => {
  const [circlepercent, setCirclepercent] = useState(0);
  const [circlechemnum, setCirclechemnum] = useState(0);
  const [column, setColumn] = useState();
  const [year_list, setYearList] = useState([]);
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState();
  const [svglabels, setSvgLabels] = useState([]);
  const [svgnumber, setSvgNumber] = useState([]);

  useEffect(() => {
    request
      .get("/excel/statistics")
      .then(({ data }) => {
        const {
          circle_number,
          columns_list,
          kaichem_number,
          svg_labels,
          svg_number,
        } = data;

        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);
        setColumn(columns_list);
        setSvgLabels(svg_labels);
        setSvgNumber(svg_number);

        let yearData = [];
        for (const year in columns_list) {
          yearData.push(year);
        }
        const reverseyearData = yearData.reverse();
        setYearList(reverseyearData);
      })
      .catch((err) => {
        err && console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(year_list);
    console.log(column);
    console.log(year_list);

    const year_month_list = [];
    for (const year of year_list) {
      for (const month in column[`${year}`]) {
        year_month_list.push(Number(year + month));
      }
    }

    // month sort 정렬 [202012, 202011, 202010, 202008, 201911, 201910]
    const number_sort = year_month_list.sort(function (a, b) {
      return a - b;
    });

    console.log(number_sort);

    // labels month input
    setLabels(number_sort);

    const one_list = [];
    const two_list = [];
    const three_list = [];
    const four_list = [];
    const five_list = [];
    const six_list = [];
    console.log(column);

    for (const number of number_sort) {
      console.log(number);
      one_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][0]
        )
      );
      two_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][1]
        )
      );
      three_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][2]
        )
      );
      four_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][3]
        )
      );
      five_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][4]
        )
      );
      six_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][5]
        )
      );
    }
    console.log(one_list);

    setDatasets([
      {
        label: "1week",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: one_list,
      },
      {
        label: "2week",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: two_list,
      },
      {
        label: "3week",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: three_list,
      },
      {
        label: "4week",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: four_list,
      },
      {
        label: "5week",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: five_list,
      },
      {
        label: "5week",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: six_list,
      },
    ]);
  }, [year_list]);

  return (
    <>
      <CircleBorder>
        <CircleChart label={`${circlechemnum} compound`}>
          <CircularProgressbar
            value={circlepercent}
            text={`${circlepercent} %`}
            circleRatio={0.9} // 사이즈
            styles={buildStyles({
              rotation: 0 / 1 / 9,
              strokeLinecap: "butt",
              trailColor: "#e7e4de",
            })}
          />
        </CircleChart>
      </CircleBorder>
      <div>
        <ColumnBorder>
          <ColumnChart labels={labels} datasets={datasets} />
        </ColumnBorder>
        <SvgBorder>
          <SvgChart labels={svglabels} svgnumber={svgnumber} />
        </SvgBorder>
      </div>
    </>
  );
};

export default Statistics;
