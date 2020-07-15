import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Statistics from "../../components/Statistics/Statistics";
import image from "../../util/image/logo.png";
import { StatisticsPageBody } from "./StatisticsPage.style";

const StatisticsPage = () => {
  return (
    <div>
      <Navigation />
      <StatisticsPageBody>
        <Statistics />
      </StatisticsPageBody>
    </div>
  );
};

export default StatisticsPage;
