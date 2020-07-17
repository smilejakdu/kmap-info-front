import React, { Component } from "react";
import XLSX from "xlsx";
import {
  SheetListHeader,
  SheetListBody,
  SheetListBox,
  SheetListItem,
  Button,
  FileUploadPageHeader,
  FileUploadPageBodyMiddle,
  FileUploadPageBodyFooter,
  SearchBox,
} from "./ExcelForm.style";
import request from "../../util/request";
import SheetTable from "../SheetTable/SheetTable";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ExcelRenderer = (file, callback, index = 0) => {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    var rABS = !!reader.readAsBinaryString;

    reader.onload = function (e) {
      var bstr = e.target.result;
      var wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      var sheetArr = [];
      const len = wb.SheetNames.length;
      for (let i = 0; i < len; i++) {
        sheetArr.push(wb.SheetNames[i]);
      }

      var wsname = wb.SheetNames[index];
      var ws = wb.Sheets[wsname];

      var json = XLSX.utils.sheet_to_json(ws, { header: 1 });
      var jsonData = [];
      for (let i = 1; i < json.length; i++) {
        jsonData.push(json[i]);
      }

      var cols = make_cols(json[0]);
      var data = { rows: jsonData, cols: cols, sheetArr: sheetArr };

      resolve(data);
      return callback(null, data);
    };
    if (file && rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
};

const make_cols = (refstr) => {
  refstr.unshift("id");
  var o = [];
  for (var i = 0; i < refstr.length; ++i) {
    o[i] = { name: refstr[i], key: i };
  }
  return o;
};

class ExcelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      uploadName: [],
      rows: null,
      cols: null,
      fileObj: null,
      excelFileName: "",
      sheetName: "",
      query: "",
      result: "",
      compoundinfo: [],
    };

    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.fileInput = React.createRef();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //  return true!; 구현하지 않을때는 기본적으로 true 입니다.
    if (this.state !== nextState) {
      return true;
    }
    return this.props.info !== nextProps.info;
  }
  openFileBrowser = () => {
    this.fileInput.current.click();
  };

  fileHandler = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf(".") + 1) === "xlsx") {
        this.setState({
          excelFileName: fileName,
          isFormInvalid: false,
          fileObj: fileObj,
        });
        this.renderFile(fileObj);
      } else {
        this.setState({
          isFormInvalid: true,
          excelFileName: "",
        });
      }
    }
  };

  renderFile = (fileObj, index = 0) => {
    ExcelRenderer(
      fileObj,
      (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows,
            uploadName: resp.sheetArr,
            excelFileName: fileObj.name,
          });
        }
      },
      index
    );
  };

  sheetDataClick = (index) => {
    this.setState({
      sheetName: this.state.uploadName[index],
    });
    this.renderFile(this.state.fileObj, index);
  };

  ExcelData = (e) => {
    e.preventDefault();
    return request
      .get("/excel/upload")
      .then((res) => {
        let {
          data: {
            data: { excel_data },
          },
        } = res;
        let uploadNames = excel_data.map(({ name }) => name);
        this.setState({ uploadName: uploadNames });
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  uploadClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.fileObj);
    formData.entries();

    request
      .post("/excel/upload", formData)
      .then((res) => {
        this.setState({
          isOpen: false,
          dataLoaded: false,
          isFormInvalid: false,
          uploadName: [],
          rows: null,
          cols: null,
          fileObj: null,
          excelFileName: "",
        });
      })
      .catch((err) => {
        console.log("err : ", err);
        alert("파일이름이 존재합니다.");
      });
  };

  searchDataClick = (search_data) => {
    return request
      .get(`/compound/search/${search_data}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        this.setState({
          compoundinfo: {
            id: data[0].id,
            chem_series: data[0].chem_series,
            chem_series_cid: data[0].chem_series_cid,
            cid: data[0].cid,
            compound: data[0].compound,
            europe: data[0].europe,
            inchikey: data[0].inchikey,
            information: data[0].information,
            ipk: data[0].ipk,
            japan: data[0].japan,
            kaichem_id: data[0].kaichem_id,
            kaipharm_chem_index: data[0].kaipharm_chem_index,
            known_target: data[0].known_target,
            nci_cancer: data[0].nci_cancer,
            prestwick: data[0].prestwick,
            pubchem_name: data[0].pubchem_name,
            selleckchem: data[0].selleckchem,
            subset: data[0].subset,
            usa: data[0].usa,
          },
          result: [],
          query: "",
        });
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  handleOnInputChange = (event) => {
    const q = event.target.value;
    if (!q) {
      this.setState({
        query: q,
        result: [],
      });
    } else {
      this.setState({
        query: q,
      });
      this.fetchSearchResults(q);
    }
  };

  renderSearchResults = () => {
    if (Object.keys(this.state.result).length && this.state.result.length) {
      return (
        <div>
          {this.state.result.map((res, i) => {
            return (
              <h6 key={i} onClick={() => this.searchDataClick(res.compound)}>
                {res.compound}
              </h6>
            );
          })}
        </div>
      );
    }
  };

  fetchSearchResults = (query) => {
    const searchUrl = `/compound/search?query=${query}`;
    request
      .get(searchUrl)
      .then((res) => {
        let {
          data: { data },
        } = res;
        this.setState({
          result: data,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log("error : ", error);
        }
      });
  };

  render() {
    return (
      <div>
        <FileUploadPageHeader>
          <form>
            <SheetListBox>
              <SheetListHeader>Sheet List</SheetListHeader>
              <SheetListBody>
                {this.state.uploadName.map((sheet, i) => (
                  <SheetListItem key={i} onClick={() => this.sheetDataClick(i)}>
                    {sheet}
                  </SheetListItem>
                ))}
              </SheetListBody>
            </SheetListBox>
            <p className="ms-office-excel">
              MS Office Excel 파일 (xlsx) 만 가능합니다.
            </p>
            <SearchBox>
              <input
                type="text"
                value={this.state.query}
                onChange={this.handleOnInputChange}
              />
              <button>Compound Search</button>
              {this.renderSearchResults()}
            </SearchBox>
            <input
              type="file"
              hidden
              onChange={this.fileHandler.bind(this)}
              ref={this.fileInput}
              onClick={(event) => {
                event.target.value = null;
              }}
              style={{ padding: "10px" }}
            />
          </form>
          <Button onClick={this.openFileBrowser.bind(this)}>파일찾기</Button>
          <Button type="submit" onClick={this.uploadClick}>
            업로드
          </Button>
        </FileUploadPageHeader>
        <FileUploadPageBodyMiddle>
          {this.state.excelFileName ? (
            <div className="excelname">{this.state.excelFileName}</div>
          ) : (
            <div className="excelname">FILE NAME.xlsx</div>
          )}
          {this.state.sheetName ? (
            <div className="sheetname">{this.state.sheetName}</div>
          ) : (
            <div className="sheetname">Sheet</div>
          )}
        </FileUploadPageBodyMiddle>
        <FileUploadPageBodyFooter>
          {this.state.dataLoaded && (
            <div>
              <SheetTable cols={this.state.cols} rows={this.state.rows} />
            </div>
          )}
        </FileUploadPageBodyFooter>
      </div>
    );
  }
}

export default ExcelForm;
