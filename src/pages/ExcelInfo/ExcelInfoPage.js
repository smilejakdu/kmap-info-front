import React, { useState, useEffect } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import { ExcelInfoPageBody, ExcelInfoPageHeader } from "./ExcelInfoPage.style";
import axios from "axios";
import request from "../../util/request";
import CompoundInfo from "../../components/Compound/CompoundInfo";
import SearchBox from "../../components/SearchBox/SearchBox";

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
        console.log(1);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <ExcelInfoPageHeader>
        <SearchBox></SearchBox>
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
