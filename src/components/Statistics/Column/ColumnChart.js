import React, { useState, useEffect } from "react";
import "./ColumnChart.scss";
import { Bar } from "react-chartjs-2";

const ColumnChart = ({
  labels,
  datasets,
  year_list,
  year_data,
  YearChangeBtn,
}) => {
  console.log("datasets : ", datasets);
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };

  const data = {
    labels,
    datasets,
  };

  return (
    <div>
      <div>
        {year_list.map((year) =>
          year_data === year ? (
            <button
              onClick={() => YearChangeBtn(year)}
              className="year_yello_btn"
            >
              {year}
            </button>
          ) : (
            <button onClick={() => YearChangeBtn(year)} className="year_btn">
              {year}
            </button>
          )
        )}
      </div>
      <Bar data={data} width={900} height={500} options={options} />
    </div>
  );
};

export default ColumnChart;
