import styled from 'styled-components';
import palette from '../../util/styles/palette';

const CircleBarBorder = styled.div`
  display: inline-flex;
  margin: 0 auto;
`;

const CircleBorder = styled.div`
  border-right: 1px solid black;
  ::after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    height: 100%;
    width: 1px;
    background: #000;
  }
  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    margin-top: 3rem;
    justify-content: center;
  }
`;

const BarBorder = styled.div`
  margin-left: 20px;
  @media (max-width: 1500px) {
    width: 100%;
    display: block;
    border: none;
    float: none;
    margin: auto;
  }
`;

const LineBorder = styled.div`
  border-top: 1px solid black;
  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    float: none;
  }
`;

export { CircleBorder, BarBorder, LineBorder, CircleBarBorder };
