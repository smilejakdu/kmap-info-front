import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Statistics from "../../components/Statistics/Statistics";
import {
  StatisticsPageHeader,
  StatisticsPageBody,
  SearchBox,
  KmapTwokProject,
} from "./StatisticsPage.style";

const StatisticsPage = () => {
  return (
    <div>
      <Navigation />
      <StatisticsPageHeader>
        <SearchBox>
          <input type="text" />
          <button>Compound Search</button>
        </SearchBox>
        <KmapTwokProject>KMAP-2K Project Progress</KmapTwokProject>
      </StatisticsPageHeader>
      <StatisticsPageBody>
        <Statistics />
      </StatisticsPageBody>
    </div>
  );
};

export default StatisticsPage;
