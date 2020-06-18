import React, { Component } from "react";
import "./ExcelForm.scss";
import { OutTable } from "react-excel-renderer";
import XLSX from "xlsx";
import {
  Col,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Button,
  Container,
  Card,
} from "reactstrap";
import request from "../../util/request";

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
          console.log("resp.cols : ", resp.cols);
          console.log("resp.rows : ", resp.rows);
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

    for (var pair of formData.entries()) {
      console.log(pair[0] + " , " + pair[1]);
    }

    request
      .post("/excel/upload", formData)
      .then((res) => {
        console.log(res);
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

  render() {
    const {
      isOpen,
      dataLoaded,
      isFormInvalid,
      uploadName,
      rows,
      cols,
      name,
    } = this.state;
    // const { sheetDataClick } = this;

    const sheets = uploadName.map((sheet, i) => (
      <li
        className="sheet_click_btn"
        key={i}
        onClick={() => this.sheetDataClick(i)}
      >
        {sheet}
      </li>
    ));
    return (
      <div>
        <Container>
          <div className="form_box">
            <form>
              <FormGroup row>
                <Col xs={4} sm={8} lg={10}>
                  <div className="sheet_box">
                    <li className="ul_style">{sheets}</li>
                  </div>
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
                </Col>
              </FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <div className="test">
                    <Button
                      className="file_search_btn"
                      onClick={this.openFileBrowser.bind(this)}
                    >
                      파일찾기
                    </Button>
                    <Button
                      className="file_search_btn"
                      type="submit"
                      onClick={this.uploadClick}
                    >
                      업로드 시작
                    </Button>
                  </div>
                </InputGroupAddon>
                <p>.xlsx 파일만 가능합니다.</p>
              </InputGroup>
            </form>
          </div>
          {this.state.excelFileName}
          {this.state.dataLoaded && (
            <div>
              <Card className="restrict-card">
                <OutTable
                  data={this.state.rows}
                  columns={this.state.cols}
                  tableClassName="ExcelTable"
                  tableHeaderRowClass="heading"
                />
              </Card>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default ExcelForm;
