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
  const [column, setColumn] = useState();
  const [svgdata, setSvgdata] = useState();
  const [year, setYear] = useState();
  const [year_list, setYearList] = useState([]);
  const [labels, setLabels] = useState([]);

  const [datasets, setDatasets] = useState();

  useEffect(() => {
    request
      .get("/excel/statistics")
      .then(({ data }) => {
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
    const month_list = [];
    for (const data in column) {
      // console.log(data, column[`${data}`]);
      if (year === data) {
        console.log(data, column[`${data}`]);

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

        console.log(one_list);
        console.log(three_list);
        console.log(six_list);

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
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "coral",
            borderWidth: 1,
            data: two_list,
          },
          {
            label: "3week",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "green",
            borderWidth: 1,
            data: three_list,
          },
          {
            label: "4week",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "black",
            borderWidth: 1,
            data: four_list,
          },
          {
            label: "5week",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "black",
            borderWidth: 1,
            data: five_list,
          },
          {
            label: "6week",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "black",
            borderWidth: 1,
            data: six_list,
          },
        ]);
      }
    }
  }, [year]);

  const YearChangeBtn = (year) => {
    setYear(year);
  };

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
          <ColumnChart
            labels={labels}
            datasets={datasets}
            year_list={year_list}
            YearChangeBtn={YearChangeBtn}
          />
        </ColumnBorder>
      </div>
    </>
  );
};

export default Statistics;
