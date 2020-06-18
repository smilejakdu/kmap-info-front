import React, { Component } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import "./ExcelInfoPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import request from "../../util/request";

class ExcelInfoPage extends Component {
  state = {
    exceldata: [],
    keyword: "",
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
    console.log(e);
  };

  handleChangeExcelData = (id) => {
    this.setState((prevState) => ({
      exceldata: prevState.exceldata.filter((excel) => excel.id !== id),
    }));
  };

  componentDidMount = () => {
    return request
      .get("/excel/upload")
      .then((res) => {
        let {
          data: {
            data: { excel_data },
          },
        } = res;

        this.setState({ exceldata: excel_data }, () => {
          console.log(this.state.exceldata);
        });
        console.log(this.state.exceldata);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  render() {
    console.log(this.state.exceldata);
    return (
      <div className="main">
        <Navigation />
        <div className="search_box">
          <input
            className="search_input"
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder="검색"
            type="text"
          />
        </div>
        <ExcelInfoList
          data={this.state.exceldata.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          handleChangeExcelData={this.handleChangeExcelData}
        />
      </div>
    );
  }
}

export default ExcelInfoPage;
