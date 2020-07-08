import React, { useState, useEffect } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import "./ExcelInfoPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import request from "../../util/request";

const ExcelInfoPage = () => {
  const [excelData, setExcelData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

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
      <div className="main">
        <div className="search_box">
          <input
            className="search_input"
            value={keyword}
            onChange={handleChange}
            placeholder="검색"
            type="text"
          />
        </div>
        <ExcelInfoList
          data={excelData.filter((info) => info.name.indexOf(keyword) > -1)}
          handleChangeExcelData={handleChangeExcelData}
        />
      </div>
    </div>
  );
};

export default ExcelInfoPage;
