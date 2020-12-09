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
  const [bar_data, setBarData] = useState();
  const [bar_data2, setBarData2] = useState();
  const [svg_data, setSvgData] = useState([]);
  const [svg_data2, setSvgData2] = useState([]);
  const [svg_weeks_list, setSvgWeeksList] = useState([]);

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

        console.log('columns_data :', columns_data);
        console.log('columns_data2 : ', columns_data2);
        console.log('svg_data :', svg_data);
        console.log('svg_data2 :', svg_data2);
        console.log(svg_weeks_list);

        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);
        setColumnsLabels(columns_labels);

        setSvgData(svg_data);
        setSvgData2(svg_data2);
        setSvgWeeksList(svg_weeks_list);
        setBarData(columns_data);
        setBarData2(columns_data2);
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
          <ColumnChart
            labels={columns_labels}
            bardata={bar_data}
            bardata2={bar_data2}
          />
        </ColumnBorder>
      </CircleColumnBorder>
      <SvgBorder>
        <SvgChart
          labels={svg_weeks_list}
          svgdata={svg_data}
          svgdata2={svg_data2}
        />
      </SvgBorder>
    </>
  );
};

export default Statistics;
