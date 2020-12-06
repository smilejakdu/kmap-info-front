import React, { useState, useEffect } from 'react';
import CircleChart from './Circle/CircleChart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ColumnChart from './Column/ColumnChart';
import SvgChart from './Svg/SvgChart';
import request from '../../util/request';
import {
  CircleBorder,
  ColumnBorder,
  SvgBorder,
  CircleColumnBorder,
} from './Statistics.style';

const Statistics = () => {
  const [circlepercent, setCirclepercent] = useState(0);
  const [circlechemnum, setCirclechemnum] = useState(0);
  const [columns_labels, setColumnsLabels] = useState([]);
  const [datasets, setDatasets] = useState();
  const [svg_data, setSvgData] = useState([]);
  const [svg_weeks_list, setSvgWeeksList] = useState([]);
  const [svg_year_month_list, setSvgYearMonthList] = useState([]);

  useEffect(() => {
    request
      .get('/excel/statistics')
      .then(({ data }) => {
        const {
          circle_number,
          kaichem_number,
          columns_data,
          columns_labels,
          svg_data,
          svg_weeks_list,
          svg_year_month_list,
        } = data;

        console.log(svg_data);
        console.log(svg_weeks_list);

        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);
        setColumnsLabels(columns_labels);

        setSvgData(svg_data);
        setSvgWeeksList(svg_weeks_list);
        setSvgYearMonthList(svg_year_month_list);

        setDatasets([
          {
            label: 'data',
            backgroundColor: 'coral',
            borderColor: 'coral',
            borderWidth: 0.1,
            hoverBackgroundColor: 'coral',
            hoverBorderColor: 'coral',
            data: columns_data,
          },
        ]);
      })
      .catch((err) => {
        err && console.log(err);
      });
  }, []);

  return (
    <>
      <CircleColumnBorder>
        <CircleBorder>
          <CircleChart label={`${circlechemnum} compound`}>
            <CircularProgressbar
              value={circlepercent}
              text={`${circlepercent} %`}
              circleRatio={0.9} // 사이즈
              styles={buildStyles({
                rotation: 0 / 1 / 9,
                strokeLinecap: 'butt',
                trailColor: '#e7e4de',
              })}
            />
          </CircleChart>
        </CircleBorder>
        <ColumnBorder>
          <ColumnChart labels={columns_labels} datasets={datasets} />
        </ColumnBorder>
      </CircleColumnBorder>
      <SvgBorder>
        <SvgChart
          labels={svg_weeks_list}
          svgdata={svg_data}
          svg_year_month_list={svg_year_month_list}
        />
      </SvgBorder>
    </>
  );
};

export default Statistics;
