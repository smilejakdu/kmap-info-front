import styled from "styled-components";
import palette from "../../util/styles/palette";

const LeftBody = styled.div`
  width: 15%;
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
  font-size: 1rem;
  min-height: 700px;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  border: 1px solid ${palette.blue[7]};
`;

const FileItemBox = styled.div`
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
  padding-right: 30px;
  justify-content: center;
  @media (max-width: 1500px) {
    margin: 0;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid ${palette.blue[7]};
  }
`;
const FileItemBoxRight = styled.div`
  float: left;
`;
const ExcelName = styled.div`
  color: black;
  font-size: 12px;
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
  margin: 0 auto;
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

  @media (max-width: 1500px) {
    position: relative;
    width: 100%;
  }
`;

const RightBody = styled.div`
  border-right: 1px solid ${palette.blue[7]};
  border-top: 1px solid ${palette.blue[7]};
  border-bottom: 1px solid ${palette.blue[7]};
  margin-top: 4.5rem;
  width: 85%;
  height: 700px;
  float: right;
`;

const RightFileName = styled.div`
  background: ${palette.blue[1]};
  display: flex;
  justify-content: center;
  border-right: 1px solid ${palette.blue[7]};
  color: black;
  width: 50%;
  height: 10%;
  float: left;
  overflow: scroll;
  border-bottom: 1px solid ${palette.blue[7]};
`;

const RightSheetClick = styled.div`
  background: ${palette.blue[1]};
  color: black;
  width: 50%;
  height: 10%;
  float: left;
  font-size: 10px;
  display: flex;
  overflow-x: scroll;
  justify-content: center;
  border-bottom: 1px solid ${palette.blue[7]};
  padding-left: 2rem;

  div {
    padding: 0.5rem;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: black;

    &:hover {
      color: ${palette.orange[4]};
      cursor: pointer;
    }
  }
  .active {
    color: coral;
  }
`;

const SheetTableData = styled.div`
  border: 1px solid white;
  min-height: 650px;
  max-height: 700px;
  overflow: auto;
`;

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.16);
`;
const ModalBody = styled.div`
  position: fixed;
  z-index: 3;
  margin: 5rem auto;
  left: 0;
  right: 0;
  width: 320px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }

  p.title {
    font-size: 16pt;
    font-weight: bold;
    color: #333;
  }

  .content {
    border-top: 1px solid #bebebe;
    margin-top: 16px;

    p {
      padding: 8px;
      font-size: 12pt;
      color: #999;
    }
  }
`;

const ModalButtonWrap = styled.div`
  margin: 0;
  margin-top: 8px;

  button {
    width: 100%;
    padding: 12px 0;
    background-color: ${palette.orange[7]};
    font-size: 13pt;
    color: white;
    border: 0;
    cursor: pointer;

    &:hover {
      background: ${palette.orange[4]};
    }

    &:active {
      background: coral;
    }
  }
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
  ModalOverlay,
  ModalBody,
  ModalButtonWrap,
  FileItemBoxRight,
};
