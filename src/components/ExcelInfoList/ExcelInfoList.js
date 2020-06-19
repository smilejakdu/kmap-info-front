import React, { Component } from "react";
import "./ExcelInfoList.scss";
import SheetTable from "../SheetTable/SheetTable";
import request from "../../util/request";
import { MdRemoveCircleOutline } from "react-icons/md";

class ExcelInfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheet_data: [],
      sheet_table: [],
      dataLoaded: false,
      cols: [],
      rows: [],
      excel_name: "",
    };
  }

  static defaultProps = {
    data: [],
  };

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

  removeClick = (itemId, itemName) => async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await request.delete(`/excel/${itemName}`);
      await this.props.handleChangeExcelData(itemId);
      this.setState({
        sheet_data: [],
        cols: [],
        rows: [],
      });
    } catch (e) {
      console.error("error", e);
    }
  };

  render() {
    const { data } = this.props;
    const { sheet_data, cols, rows, dataLoaded } = this.state;

    return (
      <div>
        <table className="table table_size">
          <thead className="thead-dark">
            <tr>
              <th scope="col">excel list</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <div className="excel_data_list" key={item.id}>
                <div
                  className="text"
                  onClick={(e) => this.ExcelNameClick(item.name)}
                >
                  {item.name}
                </div>
                <div className="date">{item.create_at}</div>
                <div
                  className="remove"
                  onClick={this.removeClick(item.id, item.name)}
                >
                  <MdRemoveCircleOutline />
                </div>
              </div>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              {sheet_data.map((sheet) => (
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
        {dataLoaded && (
          <div>
            <SheetTable cols={cols} rows={rows} />
          </div>
        )}
      </div>
    );
  }
}
export default ExcelInfoList;
