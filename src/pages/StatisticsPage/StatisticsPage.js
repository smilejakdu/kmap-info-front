import React from "react";
import "./StatisticsPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import Statistics from "../../components/Statistics/Statistics";
import image from "./logo.png";
import "./StatisticsPage.scss";
// 여기서 백엔드에 데이터를 요청해서
// 원 차트
// 막대기 차트
// 거미줄 차트
// 에 맞게 데이터를 뿌려주면 됨.

const StatisticsPage = () => {
  return (
    <div>
      <div className="nav">
        <Navigation />
      </div>
      <div>
        <div className="statistics_logo">
          <img src={"/kmapinfo" + image} width="250" height="100" />
          {/* <img src={image} width="250" height="100" /> */}
        </div>
      </div>
      <div>
        <div>
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
