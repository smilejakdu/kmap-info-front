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

const SearchBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  input {
    border: 1px solid ${palette.blue[7]};
    font-size: 1.5rem;
    padding: 10px;
    width: 25rem;
  }

  button {
    border: 1px solid ${palette.blue[7]};
    background: ${palette.blue[7]};
    font-size: 1.5rem;
    padding: 10px;
    color: white;
  }

  div {
    width: 63%;
    border: 1px solid ${palette.blue[2]};
    overflow-y: scroll;
    overflow: hidden;
    padding: 12px;
    z-index: 1;
    background: white;
    position: absolute;
  }

  h6 {
    font-size: 20px;
    padding: 8px;

    &:hover {
      cursor: pointer;
      color: coral;
    }
  }
`;

const KmapTwokProject = styled.div`
  margin-top: 15rem;
  font-size: 28px;
  font-weight: bold;
`;
export { StatisticsPageBody, StatisticsPageHeader, KmapTwokProject, SearchBox };
