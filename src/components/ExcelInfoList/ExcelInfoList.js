import React, { Component } from "react";
import "./ExcelInfoList.scss";
import Pagination from "../../components/Pagination";
import SheetTable from "../SheetTable/SheetTable";
import request from "../../util/request";

class ExcelInfoList extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      sheet_data: [],
      sheet_table: [],
      dataLoaded: false,
      cols: [],
      rows: [],
      excel_name: "",
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  static defaultProps = {
    data: [],
  };
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  getSheets = (excel, sheet) => {
    return request
      .get(`/excel/${excel}/${sheet}`)
      .then((res) => {
        let {
          data: { sheet_table },
        } = res;
        this.setState({
          dataLoaded: true,
          cols: sheet_table.cols,
          rows: sheet_table.rows,
        });
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  ExcelNameClick = (e) => {
    return request
      .get(`/excel/${e}`)
      .then((res) => {
        let {
          data: { sheet_data },
        } = res;
        let sheet = sheet_data.map(({ name }) => name);
        this.setState({
          sheet_data: sheet,
          excel_name: e,
          cols: [],
          rows: [],
        });
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <Pagination
          className="paging_position"
          items={data}
          onChangePage={this.onChangePage}
        />
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
                <td
                  key={sheet.id}
                  className="sheet_data"
                  onClick={() => this.getSheets(this.state.excel_name, sheet)}
                >
                  {sheet}
                </td>
              ))}
            </tr>
          </thead>
        </table>
        {this.state.dataLoaded && (
          <div>
            <SheetTable cols={this.state.cols} rows={this.state.rows} />
          </div>
        )}
      </div>
    );
  }
}
export default ExcelInfoList;
