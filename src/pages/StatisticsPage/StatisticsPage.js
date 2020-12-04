import React, { useState, useEffect } from 'react';
import Statistics from '../../components/Statistics/Statistics';
import {
  StatisticsPageHeader,
  StatisticsPageBody,
  KmapTwokProject,
} from './StatisticsPage.style';
import SearchDataContainer from '../../containers/SearchDataContainer';

const StatisticsPage = () => {
  return (
    <div>
      <StatisticsPageHeader>
        <SearchDataContainer></SearchDataContainer>
        <KmapTwokProject>KMAP-2K Project Progress</KmapTwokProject>
      </StatisticsPageHeader>
      <center>
        <StatisticsPageBody>
          <Statistics />
        </StatisticsPageBody>
      </center>
    </div>
  );
};

export default StatisticsPage;
