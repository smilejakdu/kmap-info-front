import styled from 'styled-components';
import palette from '../../util/styles/palette';

const CircleColumnBorder = styled.div`
  display: inline-flex;
  margin: 0 auto;
`;

const CircleBorder = styled.div`
  height: 30%;

  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    text-align: center;
    margin-top: 3rem;
    justify-content: center;
  }
`;

const ColumnBorder = styled.div`
  margin-left: 20px;
  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    float: none;
    margin: auto;
  }
`;

const SvgBorder = styled.div`
  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    float: none;
  }
`;

export { CircleBorder, ColumnBorder, SvgBorder, CircleColumnBorder };
