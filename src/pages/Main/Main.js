import React from "react";
import ExcelForm from "../../components/ExcelForm/ExcelForm";
import Navigation from "../../components/Navigation/Navigation";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="nav">
        <Navigation />
      </div>
      <div className="main">
        <ExcelForm />
      </div>
    </div>
  );
};

export default Main;
