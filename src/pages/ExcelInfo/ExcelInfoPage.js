import React, { useState, useEffect } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import { ExcelInfoPageBody, ExcelInfoPageHeader } from "./ExcelInfoPage.style";
import request from "../../util/request";
import SearchDataContainer from "../../containers/SearchDataContainer";

const ExcelInfoPage = () => {
  const [excelData, setExcelData] = useState([]);

  const handleChangeExcelData = (id) => {
    setExcelData(() => excelData.filter((excel) => excel.id !== id));
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
  // excelData

  return (
    <div>
      <Navigation />
      <ExcelInfoPageHeader>
        <SearchDataContainer></SearchDataContainer>
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
