import styled from "styled-components";
import palette from "../../util/styles/palette";

const ExcelInfoPageHeader = styled.div`
  position: relative;
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
`;
const ExcelInfoPageBody = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  font-size: 28px;
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
`;

export { ExcelInfoPageBody, SearchBox, ExcelInfoPageHeader };
