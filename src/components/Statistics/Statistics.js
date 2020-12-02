import React, { useState, useEffect } from "react";
import CircleChart from "./Circle/CircleChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ColumnChart from "./Column/ColumnChart";
import SvgChart from "./Svg/SvgChart";
import request from "../../util/request";
import { CircleBorder, ColumnBorder, SvgBorder } from "./Statistics.style";

const Statistics = () => {
  const [circlepercent , setCirclepercent] = useState(0);
  const [circlechemnum , setCirclechemnum] = useState(0);
  const [column        , setColumn] = useState();
  const [year_list     , setYearList] = useState([]);
  const [labels        , setLabels] = useState([]);
  const [datasets     , setDatasets] = useState();
  const [svglabels     , setSvgLabels] = useState([]);
  const [svgnumber     , setSvgNumber] = useState([]);
  
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
        console.log(svg_labels);
        const empty_label = [];
        for (const label of svg_labels){
          if (label !==""){
            empty_label.push(label);
          }
        }
        setSvgLabels(empty_label);

        const first_index_zero = [];
        for (const number of svg_number){
          if (number !==0){
            first_index_zero.push(number);
          }
        }
        setSvgNumber(first_index_zero);

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
        for (const week in column[`${year}`][`${month}`]){
          if (column[`${year}`][`${month}`][`${week}`] !==0){
            if (year_month_list.length === 8){
              break;
            }
            const week_number = Number(week)+1; // 일단 week 에 index 0 부터니깐 +1 
            console.log(week_number);
            year_month_list.push(Number(year + month + week_number));
          }
        }
      }
    }

    // month sort 정렬 [202012, 202011, 202010, 202008, 201911, 201910]
    const number_sort = year_month_list.sort(function (a, b) {
      return a - b; // 정렬함
    });
    
    const year_number_to_string = [];

    for (const number of number_sort){
      year_number_to_string.push(String(number).substring(0,4)+"년"+String(number).substring(4,6)+"월 "+String(number).substring(6)+"주");
    }

    // labels month input
    console.log("year_number_to_string :" , year_number_to_string);
    setLabels(year_number_to_string);

    const column_data_list = [];

    console.log(number_sort);
    // console.log(number_sort.length); 2 

    for (const number of number_sort) {
      column_data_list.push(
        Number(
          column[String(number).substring(0, 4)][
            String(number).substring(4, 6)
          ][String(Number(String(number).substring(6))-1)]
        )
      );
    }

    console.log(column_data_list);

    setDatasets([
      {
        label: "data",
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 0.1,
        hoverBackgroundColor: "coral",
        hoverBorderColor: "coral",
        data: column_data_list,
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
