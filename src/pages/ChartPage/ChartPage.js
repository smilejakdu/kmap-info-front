import React, { useState, useEffect } from "react";
import "./ChartPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import Chart from "../../components/Chart/Chart";

const ChartPage = () => {
  return (
    <>
      <Navigation />
      <Chart />
    </>
  );
};

export default ChartPage;
