import styled from "styled-components";
import palette from "../../util/styles/palette";

const FileUploadPageHeader = styled.div`
  position: relative;
  min-height: 18rem;

  .ms-office-excel {
    font-size: 2rem;
    @media (max-width: 1400px) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const SheetListBox = styled.div`
  float: left;
  width: 30%;
  margin-right: 3rem;
`;

const SheetListHeader = styled.div`
  background: ${palette.base_clor[2]};
  color: white;
  justify-content: center;
  width: 100%;
  min-height: 5rem;
  display: flex;
  border: 1px solid ${palette.base_clor[2]};
  padding: 5px;
`;

const SheetListBody = styled.div`
  border: 1px solid ${palette.base_clor[0]};
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
  outline: none !important;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 2rem;
  background: ${palette.base_clor[3]};
  border: 1px solid ${palette.base_clor[3]};

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
  border: 1px solid ${palette.base_clor[1]};
  display: flex;
  background: ${palette.base_clor[1]};
  min-height: 5rem;

  .excelname {
    display: flex;
    float: left;
    justify-content: center;
    width: 70%;
    font-size: 20px;
    margin: auto 0;
  }

  .sheetname {
    width: 30%;
    justify-content: center;
    border-left: 1px solid ${palette.base_clor[3]};
    margin: auto 0;
    display: flex;
    color: ${palette.base_clor[5]};
  }
`;

const FileUploadPageBodyFooter = styled.div`
  border: 1px solid ${palette.base_clor[0]};
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
