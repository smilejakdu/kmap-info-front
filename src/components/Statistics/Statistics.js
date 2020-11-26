import React, { useState, useEffect } from "react";
import CircleChart from "./Circle/CircleChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ColumnChart from "./Column/ColumnChart";
import SvgChart from "./Svg/SvgChart";
import request from "../../util/request";
import { CircleBorder, ColumnBorder, SvgBorder } from "./Statistics.style";
import ChangingProgressProvider from "./ChangingProgressProvider";

const Statistics = () => {
  const [circlepercent, setCirclepercent] = useState(0);
  const [circlechemnum, setCirclechemnum] = useState(0);
  const [column, setColumn] = useState();
  const [year, setYear] = useState();
  const [year_list, setYearList] = useState([]);
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState();
  const [svgdate, setSvgDate] = useState([]);
  const [svgnumber, setSvgNumber] = useState([]);

  const yearChange = (year) => {
    const month_list = [];

    for (const data in column) {
      if (year === data) {
        const month_list = [];
        for (const month in column[`${data}`]) {
          month_list.push(month);
        }
        // month sort
        const number_sort = month_list.sort(function (a, b) {
          return a - b;
        });
        // labels month input
        const test = [];

        for (const number_month of number_sort) {
          test.push(`${number_month}month`);
        }
        setLabels(test);
        const one_list = [];
        const two_list = [];
        const three_list = [];
        const four_list = [];
        const five_list = [];
        const six_list = [];

        for (const number of number_sort) {
          one_list.push(column[year][number][0]);
          two_list.push(column[year][number][1]);
          three_list.push(column[year][number][2]);
          four_list.push(column[year][number][3]);
          five_list.push(column[year][number][4]);
          six_list.push(column[year][number][5]);
        }

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
            backgroundColor: "#e7e4de",
            borderColor: "#ff8000",
            borderWidth: 1,
            data: two_list,
          },
          {
            label: "3week",
            backgroundColor: "#e7e4de",
            borderColor: "#ff8000",
            borderWidth: 1,
            data: three_list,
          },
          {
            label: "4week",
            backgroundColor: "#e7e4de",
            borderColor: "#ff8000",
            borderWidth: 1,
            data: four_list,
          },
          {
            label: "5week",
            backgroundColor: "#e7e4de",
            borderColor: "#ff8000",
            borderWidth: 1,
            data: five_list,
          },
          {
            label: "6week",
            backgroundColor: "#e7e4de",
            borderColor: "#ff8000",
            borderWidth: 1,
            data: six_list,
          },
        ]);
      }
    }
  };

  useEffect(() => {
    request
      .get("/excel/statistics")
      .then(({ data }) => {
        const {
          circle_number,
          columns_list,
          kaichem_number,
          svg_date,
          svg_number,
        } = data;

        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);
        setColumn(columns_list);
        setSvgDate(svg_date);
        setSvgNumber(svg_number);

        let yearData = [];
        for (const year in columns_list) {
          yearData.push(year);
        }
        setYearList(yearData);
      })

      .catch((err) => {
        err && console.log(err);
      });
  }, []);

  useEffect(() => {
    yearChange("2020");
    setYear("2020");
  }, [column, svgnumber, svgdate]);

  const YearChangeBtn = (year) => {
    yearChange(year);
    setYear(year);
  };

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
        <SvgBorder>
          <SvgChart labels={svgdate} svgnumber={svgnumber} />
        </SvgBorder>
        <ColumnBorder>
          <ColumnChart
            labels={labels}
            datasets={datasets}
            year_list={year_list}
            year_data={year}
            YearChangeBtn={YearChangeBtn}
          />
        </ColumnBorder>
      </div>
    </>
  );
};

export default Statistics;
