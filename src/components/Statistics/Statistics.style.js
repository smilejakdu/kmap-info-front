import styled from "styled-components";
import palette from "../../util/styles/palette";

const CircleBorder = styled.div`
  border-right: 1px solid ${palette.base_clor[0]};
  display: flex;
  float: left;
  margin-left: 20px;

  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    text-align: center;
    margin-top: 3rem;
    justify-content: center;
  }
`;

const SvgBorder = styled.div`
  display: flex;
  border-bottom: 1px solid ${palette.base_clor[0]};

  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    float: none;
    margin: auto;
  }
`;

const ColumnBorder = styled.div`
  display: flex;
  float: left;

  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    float: none;
    margin: auto;
  }
`;

export { CircleBorder, ColumnBorder, SvgBorder };
