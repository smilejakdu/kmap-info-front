import styled from "styled-components";
import palette from "../../util/styles/palette";

const FileListHeader = styled.div`
  background: ${palette.blue[7]};
  display: flex;
  color: white;
  border: 1px solid ${palette.blue[7]};
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
`;
const ExcelName = styled.div``;

const ExcelDate = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
  float: left;
`;

const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: coral;
  cursor: pointer;
  &:hover {
    color: sandybrown;
  }
`;

export { FileListHeader, FileListBody, RemoveBtn, ExcelDate, FileItemBox };
