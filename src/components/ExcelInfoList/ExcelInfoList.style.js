import styled from "styled-components";
import palette from "../../util/styles/palette";

const FileListHeader = styled.div`
  background: ${palette.blue[7]};
  display: flex;
  color: white;
  border: 1px solid blue;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const FileListBody = styled.div`
  border: 1px solid blue;
  font-size: 2rem;
  width: 20%;
  min-height: 500px;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;

const FileItemBox = styled.div`
  border: 1px solid red;
  position: relative;
`;
const ExcelName = styled.div`
  color: black;
  font-size: 2rem;
  position: relative;

  &:hover {
    color: coral;
    cursor: pointer;
  }
`;

const ExcelDate = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const RemoveBtn = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: coral;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  &:hover {
    color: sandybrown;
  }
`;

export {
  FileListHeader,
  FileListBody,
  RemoveBtn,
  ExcelDate,
  FileItemBox,
  ExcelName,
};
