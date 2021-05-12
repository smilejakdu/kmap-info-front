import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CircleChart from './Circle/CircleChart';
import BarChart from './Bar/BarChart';
import LineChart from './Line/LineChart';
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

  // chart 에 뿌려줄 데이터를 불러오는 함수 
  useEffect(() => {
    request
      .get('/excel/statistics')
      .then(({ data }) => {
        const { circle_number, kaichem_number, bar_data, bar_data2, bar_labels, line_data, line_data2, line_weeks_list } = data;


        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);

        setBarData(bar_data);
        setBarData2(bar_data2);
        setBarLabels(bar_labels);

        setLineData(line_data);
        setLineData2(line_data2);
        setLineLabelList(line_weeks_list);
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
          <BarChart
            labels={bar_labels}
            bardata={bar_data}
            bardata2={bar_data2}
          />
        </BarBorder>
      </CircleBarBorder>
      <LineBorder>
        <LineChart
          labels={line_label_list}
          line_data={line_data}
          line_data2={line_data2}
        />
      </LineBorder>
    </>
  );
};

export default Statistics;
