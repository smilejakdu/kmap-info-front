import styled from "styled-components";
import palette from "../../util/styles/palette";

const LeftBody = styled.div`
  width: 20%;
  float: left;
`;

const FileListHeader = styled.div`
  background: ${palette.blue[7]};
  display: flex;
  color: white;
  border: 1px solid blue;
  align-items: center;
  justify-content: center;
`;

const FileListBody = styled.div`
  border: 1px solid blue;
  font-size: 2rem;
  min-height: 500px;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;

const FileItemBox = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  border-top: 1px solid ${palette.blue[2]};
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

const RightBody = styled.div`
  border-right: 1px solid ${palette.blue[7]};
  border-top: 1px solid ${palette.blue[7]};
  border-bottom: 1px solid ${palette.blue[7]};
  margin-top: 4.5rem;
  width: 80%;
  height: 500px;
  float: right;
`;

const RightFileName = styled.div`
  background: ${palette.blue[1]};
  display: flex;
  justify-content: center;
  border-right: 1px solid ${palette.blue[7]};
  color: black;
  width: 50%;
  float: left;
  border-bottom: 1px solid ${palette.blue[7]};
`;

const RightSheetClick = styled.div`
  background: ${palette.blue[1]};
  color: black;
  width: 50%;
  float: left;
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${palette.blue[7]};
  padding-left: 2rem;

  div {
    padding: 0.5rem;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: black;

    &:hover {
      color: coral;
      cursor: pointer;
    }
  }
  .active {
    color: blue;
  }
`;

const SheetTableData = styled.div`
  border: 1px solid white;
  max-height: 450px;
  overflow: auto;
`;

export {
  FileListHeader,
  FileListBody,
  RemoveBtn,
  ExcelDate,
  FileItemBox,
  ExcelName,
  LeftBody,
  RightBody,
  RightFileName,
  RightSheetClick,
  SheetTableData,
};
