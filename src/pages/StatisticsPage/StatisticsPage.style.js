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
  border: 1px solid ${palette.base_clor[0]};
  border-radius: 50px;
  margin-top: 5rem;
  display: inline-flex;
  height: 50%;
  margin: 0 auto;
  margin-bottom: 10rem;
  padding: 3rem;
  font-size: 28px;
  min-height: 80rem;

  @media (max-width: 1500px) {
    border: 1px solid ${palette.base_clor[0]};
    padding: 3rem;
    display: inline-block;
  }
`;

const KmapTwokProject = styled.div`
  margin-top: 15rem;
  margin-bottom: 2rem;
  font-size: 28px;
  font-weight: bold;
  color: ${palette.base_clor[3]};
`;

export { StatisticsPageBody, StatisticsPageHeader, KmapTwokProject };
