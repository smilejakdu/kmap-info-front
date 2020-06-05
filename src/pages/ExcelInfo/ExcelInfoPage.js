import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ExcelInfo from "../../components/ExcelInfo/ExcelInfo";
import Navigation from "../../components/Navigation/Navigation";
import "./ExcelInfoPage.css";
class ExcelInfoPage extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <ExcelInfo />
      </div>
    );
  }
}

export default ExcelInfoPage;
