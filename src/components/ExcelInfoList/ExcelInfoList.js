import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ExcelInfoList.css";
import Pagination from "../../components/Pagination";
import axios from "axios";

class ExcelInfoList extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      sheet_data: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  static defaultProps = {
    data: [],
  };
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  ExcelNameClick = (e) => {
    return axios
      .get("http://localhost:8000/excel/" + e)
      .then((res) => {
        let {
          data: { sheet_data },
        } = res;
        let sheet = sheet_data.map(({ name }) => name);
        this.setState({ sheet_data: sheet });
        console.log(this.state.sheet_data);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <table className="table table_size">
          <thead className="thead-dark">
            <tr>
              <th scope="col">name</th>
              <th scope="col">date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pageOfItems.map((item) => (
              <tr key={item.id}>
                <td
                  className="excel_click_btn"
                  style={{ fontSize: "20px" }}
                  onClick={() => this.ExcelNameClick(item.name)}
                >
                  {item.name}
                </td>
                <td className="excel_click_btn" style={{ fontSize: "20px" }}>
                  {item.create_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              {this.state.sheet_data.map((sheet) => (
                <td className="sheet_data">{sheet}</td>
              ))}
            </tr>
          </thead>
        </table>
        <Pagination
          className="paging_position"
          items={data}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}
export default ExcelInfoList;
