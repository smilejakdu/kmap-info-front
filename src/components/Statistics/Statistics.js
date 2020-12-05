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
  const [columns_data, setColumnsData] = useState([]);
  const [columns_labels, setColumnsLabels] = useState([]);
  const [year_list, setYearList] = useState([]);
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState();
  const [svglabels, setSvgLabels] = useState([]);
  const [svgdata, setSvgData] = useState([]);

  useEffect(() => {
    request
      .get('/excel/statistics')
      .then(({ data }) => {
        const {
          circle_number,
          columns_data,
          columns_labels,
          kaichem_number,
          svg_labels,
          svg_data,
        } = data;

        setCirclepercent(circle_number);
        setCirclechemnum(kaichem_number);
        setColumnsLabels(columns_labels);
        setSvgLabels(svg_labels);

        console.log(columns_data);
        console.log(svg_labels);

        const empty_label = [];
        for (const label of svg_labels) {
          if (label !== '') {
            empty_label.push(label);
          }
        }

        setSvgData(empty_label);

        for (const data in svg_data) {
          if (svg_data[data] === 0) {
            svg_data[data] = NaN;
          }
        }

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

        setSvgData(svg_data);
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
        <SvgChart labels={svglabels} svgdata={svgdata} />
      </SvgBorder>
    </>
  );
};

export default Statistics;
