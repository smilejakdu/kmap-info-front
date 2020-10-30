import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Statistics from "../../components/Statistics/Statistics";
import {
  StatisticsPageHeader,
  StatisticsPageBody,
  KmapTwokProject,
} from "./StatisticsPage.style";
import SearchDataContainer from "../../containers/SearchDataContainer";

const StatisticsPage = () => {
  return (
    <div>
      <Navigation />
      <StatisticsPageHeader>
        <SearchDataContainer></SearchDataContainer>
        <KmapTwokProject>KMAP-2K Project Progress</KmapTwokProject>
      </StatisticsPageHeader>
      <StatisticsPageBody>
        <Statistics />
      </StatisticsPageBody>
    </div>
  );
};

export default StatisticsPage;
