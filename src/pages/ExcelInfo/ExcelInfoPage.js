import React, { useState, useEffect } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import { ExcelInfoPageBody } from "./ExcelInfoPage.style";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <div className="nav">
        <Navigation />
      </div>
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
