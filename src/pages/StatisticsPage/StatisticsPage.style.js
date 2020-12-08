import styled from 'styled-components';
import palette from '../../util/styles/palette';

const StatisticsPageHeader = styled.div`
  position: relative;
  margin-top: 10rem;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 1600px;
`;

const StatisticsPageBody = styled.div`
  border: 1px solid ${palette.base_clor[0]};
  border-radius: 50px;
  margin-top: 5rem;
  margin: 0 auto;
  /* display: inline-block; */
  display: inline-block;
  margin-bottom: 10rem;
  padding: 0.5rem;
  font-size: 28px;
  min-height: 80rem;

  @media (max-width: 1500px) {
    display: block;
  }
`;

const KmapTwokProject = styled.div`
  margin-bottom: 2rem;
  font-size: 28px;
  width: 30%;
  font-weight: bold;
  color: ${palette.base_clor[3]};

  @media (max-width: 1500px) {
    display: block;
  }
`;

export { StatisticsPageBody, StatisticsPageHeader, KmapTwokProject };
