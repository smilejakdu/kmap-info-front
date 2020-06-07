import React, { Component } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import "./ExcelInfoPage.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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

  componentDidMount = () => {
    return axios
      .get("http://localhost:8000/excel/upload")
      .then((res) => {
        let {
          data: {
            data: { excel_data },
          },
        } = res;

        this.setState({ exceldata: excel_data });
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  render() {
    return (
      <div className="main">
        <Navigation />
        데이터 조회 페이지 입니다.
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
        />
      </div>
    );
  }
}

export default ExcelInfoPage;
