import styled from "styled-components";
import palette from "../../util/styles/palette";

const StatisticsPageHeader = styled.div`
  position: relative;
  margin-top: 10rem;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
`;

const StatisticsPageBody = styled.div`
  border: 1px solid blue;
  border-radius: 50px;
  margin-top: 5rem;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  width: 80%;
  min-height: 80rem;

  @media (max-width: 1500px) {
    border: none;
    display: block;
  }
`;

const KmapTwokProject = styled.div`
  margin-top: 15rem;
  font-size: 28px;
  font-weight: bold;
`;
export { StatisticsPageBody, StatisticsPageHeader, KmapTwokProject };
