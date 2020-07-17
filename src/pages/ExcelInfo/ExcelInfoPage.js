import React, { useState, useEffect } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import {
  ExcelInfoPageBody,
  SearchBox,
  ExcelInfoPageHeader,
} from "./ExcelInfoPage.style";
import request from "../../util/request";

const ExcelInfoPage = () => {
  const [excelData, setExcelData] = useState([]);

  const handleChangeExcelData = (id) => {
    this.setState((prevState) => ({
      exceldata: prevState.exceldata.filter((excel) => excel.id !== id),
    }));
  };

  useEffect(() => {
    request
      .get("/excel/upload")
      .then((res) => {
        let {
          data: {
            data: { excel_data },
          },
        } = res;
        setExcelData(excel_data);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <ExcelInfoPageHeader>
        <SearchBox>
          <input type="text" />
          <button>Compound Search</button>
        </SearchBox>
      </ExcelInfoPageHeader>
      <ExcelInfoPageBody>
        <ExcelInfoList
          data={excelData}
          handleChangeExcelData={handleChangeExcelData}
        />
      </ExcelInfoPageBody>
    </div>
  );
};

export default ExcelInfoPage;
