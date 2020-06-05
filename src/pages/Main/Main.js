import React from "react";
import ExcelForm from "../../components/ExcelForm/ExcelForm";
import Navigation from "../../components/Navigation/Navigation";
import "./Main.css";
import CSVReader from "react-csv-reader";

const Main = () => {
  return (
    <div>
      <Navigation />
      <div className="main">
        업로드 페이지입니다.
        <ExcelForm />
      </div>
    </div>
  );
};

export default Main;
