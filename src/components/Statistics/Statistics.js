import React, { useState, useEffect } from 'react';
import CircleChart from './Circle/CircleChart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ColumnChart from './Bar/BarChart';
import SvgChart from './Line/LineChart';
import request from '../../util/request';
import {
  CircleBorder,
  BarBorder,
  LineBorder,
  CircleBarBorder,
} from './Statistics.style';

const Statistics = () => {
  const [circlepercent, setCirclepercent] = useState(0);
  const [circlechemnum, setCirclechemnum] = useState(0);
  const [bar_labels, setBarLabels] = useState([]);
  const [bar_data, setBarData] = useState();
  const [bar_data2, setBarData2] = useState();
  const [line_data, setLineData] = useState([]);
  const [line_data2, setLineData2] = useState([]);
  const [line_label_list, setLineLabelList] = useState([]);

  // chart 에 뿌려줄 데이터를 불러오 된다.
  useEffect(() => {
    request
      .get('/excel/statistics')
      .then(({ data }) => {
        const {
          circle_number,
          kaichem_number,
          columns_data,
          columns_data2,
          columns_labels,
          svg_data,
          svg_data2,
          svg_weeks_list,
        } = data;


        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);

        setBarData(columns_data);
        setBarData2(columns_data2);
        setBarLabels(columns_labels);

        setLineData(svg_data);
        setLineData2(svg_data2);
        setLineLabelList(svg_weeks_list);
      })
      .catch((err) => {
        err && console.log(err);
      });
  }, []);

  return (
    <>
      <CircleBarBorder>
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
        <BarBorder>
          <ColumnChart
            labels={bar_labels}
            bardata={bar_data}
            bardata2={bar_data2}
          />
        </BarBorder>
      </CircleBarBorder>
      <LineBorder>
        <SvgChart
          labels={line_label_list}
          svgdata={line_data}
          svgdata2={line_data2}
        />
      </LineBorder>
    </>
  );
};

export default Statistics;
