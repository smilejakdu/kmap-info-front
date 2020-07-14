import styled from "styled-components";
import palette from "../../util/styles/palette";

const NavBox = styled.div`
  border: 40px solid white;
`;

const CompoundPageTotalBorder = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
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

    h6 {
      font-size: 20px;
      padding: 8px;

      &:hover {
        cursor: pointer;
        color: coral;
      }
    }
  }
`;

const KaiChemIdTH = styled.th`
  background: coral;
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border: 1px solid black;
`;

const KaiChemIdTD = styled.td`
  border: 1px solid black;
  font-size: 20px;
  padding-left: 80px;
  padding-right: 80px;
`;
export { NavBox, CompoundPageTotalBorder, SearchBox, KaiChemIdTH, KaiChemIdTD };
