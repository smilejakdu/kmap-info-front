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
        <ExcelForm />
      </div>
    </div>
  );
};

export default Main;
