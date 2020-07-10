import React, { Component } from "react";
import "./ExcelInfoList.scss";
import {
  FileListHeader,
  FileListBody,
  RemoveBtn,
  ExcelDate,
  FileItemBox,
  ExcelName,
  LeftBody,
  RightBody,
  RightFileName,
  RightSheetClick,
} from "./ExcelInfoList.style";
import SheetTable from "../SheetTable/SheetTable";
import request from "../../util/request";
import { MdRemoveCircleOutline } from "react-icons/md";

class ExcelInfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheet_data: [],
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

  ExcelNameClick = (itemName) => (event) => {
    return request
      .get(`/excel/${itemName}`)
      .then((res) => {
        let {
          data: { sheet_data },
        } = res;
        let sheet = sheet_data.map(({ name }) => name);
        this.setState({
          sheet_data: sheet,
          excel_name: itemName,
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
    return (
      <div>
        <LeftBody>
          <FileListHeader>File List</FileListHeader>
          <FileListBody>
            {data.map((item) => (
              <FileItemBox key={item.id}>
                <ExcelName onClick={this.ExcelNameClick(item.name)}>
                  {item.name}
                </ExcelName>
                <ExcelDate>{item.create_at}</ExcelDate>
                <RemoveBtn onClick={this.removeClick(item.id, item.name)}>
                  <MdRemoveCircleOutline />
                </RemoveBtn>
              </FileItemBox>
            ))}
          </FileListBody>
        </LeftBody>
        <RightBody>
          {this.state.excel_name ? (
            <RightFileName>{this.state.excel_name}</RightFileName>
          ) : (
            <RightFileName>File Name.xlsx</RightFileName>
          )}
          <RightSheetClick>dsadfa</RightSheetClick>
        </RightBody>
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

export default React.memo(ExcelInfoList);
