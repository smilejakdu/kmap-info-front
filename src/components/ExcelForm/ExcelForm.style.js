import styled from "styled-components";
import palette from "../../util/styles/palette";

const FileUploadPageHeader = styled.div`
  position: relative;
  min-height: 18rem;

  .ms-office-excel {
    font-size: 2rem;
    @media (max-width: 1150px) {
      position: absolute;
      bottom: 0;
      right: 0;
      border: 1px solid red;
    }
  }
`;

const SheetListBox = styled.div`
  float: left;
  width: 30%;
  margin-right: 3rem;
`;

const SheetListHeader = styled.div`
  background: ${palette.blue[6]};
  color: white;
  justify-content: center;
  width: 100%;
  min-height: 5rem;
  display: flex;
  border: 1px solid ${palette.blue[6]};
  padding: 5px;
`;

const SheetListBody = styled.div`
  border: 1px solid ${palette.blue[6]};
  color: black;
  min-height: 13rem;
  max-height: 20rem;
  overflow-y: scroll;
  width: 100%;
`;

const SheetListItem = styled.ul`
  list-style: none;
  margin: 5px;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    color: coral;
    cursor: pointer;
  }
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 2rem;
  background: ${palette.blue[6]};
  border: 1px solid ${palette.blue[6]};

  &:hover {
    color: coral;
    background: white;
  }

  @media (max-width: 1150px) {
    margin-top: 7rem;
  }
`;

const FileUploadPageBodyMiddle = styled.div`
  width: 70%;
  float: right;
  border: 1px solid ${palette.blue[7]};
  display: flex;
  background: ${palette.blue[1]};
  min-height: 5rem;

  .excelname {
    border-right: 1px solid ${palette.blue[7]};
    display: flex;
    float: left;
    justify-content: center;
    width: 70%;
  }

  .sheetname {
    width: 30%;
    display: flex;
    justify-content: center;
    color: coral;
  }
`;

const FileUploadPageBodyFooter = styled.div`
  border: 1px solid ${palette.blue[7]};
  margin-top: 5.3rem;
  width: 100%;
  min-height: 650px;
  overflow: scroll;
  max-height: 700px;
`;

export {
  SheetListHeader,
  SheetListBody,
  Button,
  SheetListItem,
  SheetListBox,
  FileUploadPageHeader,
  FileUploadPageBodyMiddle,
  FileUploadPageBodyFooter,
};
