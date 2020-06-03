import React, { Component } from "react";
import "./ExcelForm.css";
import { OutTable } from "react-excel-renderer";
import XLSX from "xlsx";
import {
  Jumbotron,
  Col,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Button,
  Container,
  Card,
} from "reactstrap";

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
      //var wsname = wb.SheetNames[0]; 가 index 에 따라서 무슨 sheet 가 보여지는지 갈림
      var wsname = wb.SheetNames[index];
      var ws = wb.Sheets[wsname];

      var json = XLSX.utils.sheet_to_json(ws, { header: 1 });
      var jsonData = [];
      for (let i = 1; i < json.length; i++) {
        jsonData.push(json[i]);
      }
      // var cols = make_cols(ws["!ref"]);
      var cols = make_cols(json[0]);
      console.log("cols", cols);
      console.log("jsonData : ", jsonData);
      var data = { rows: jsonData, cols: cols, sheetArr: sheetArr };

      resolve(data);
      return callback(null, data);
    };
    if (file && rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
};

const make_cols = (refstr) => {
  console.log("refstr : ", refstr);
  // 여기다가 id 를 추가
  refstr.unshift("id");
  console.log("refstr.length : ", refstr.length);
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
      uploadedSheetName: [],
      rows: null,
      cols: null,
      fileObj: null,
      name: "",
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

  openFileBrowser = () => {
    this.fileInput.current.click();
  };

  fileHandler = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf(".") + 1) === "xlsx") {
        this.setState({
          name: fileName,
          isFormInvalid: false,
          fileObj: fileObj,
        });
        this.renderFile(fileObj);
      } else {
        this.setState({
          isFormInvalid: true,
          name: "",
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
            uploadedSheetName: resp.sheetArr,
            name: fileObj.name,
          });
        }
      },
      index
    );
  };

  sheetDataClick = (index) => {
    console.log(index);
    this.renderFile(this.state.fileObj, index);
  };

  uploadClick = (e) => {
    alert("업로드 버튼 클릭");
    console.log("업로드 버튼 클릭 ");
    fetch("http://127.0.0.1:8000/blog/board", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
      }),
    }).then((res) => {
      console.log("boardform" + res);
      return res.json();
    });
  };

  render() {
    const {
      isOpen,
      dataLoaded,
      isFormInvalid,
      uploadedSheetName,
      rows,
      cols,
      name,
    } = this.state;
    const { sheetDataClick } = this;

    const sheets = uploadedSheetName.map((sheet, i) => (
      <li className="sheet_btn" key={i} onClick={() => this.sheetDataClick(i)}>
        {sheet}
      </li>
    ));
    return (
      <div>
        <div>
          <Jumbotron className="jumbotron-background">
            <div className="header_color">
              <h1 className="kmap_header_title">Kmap</h1>
            </div>
            <p style={{ color: "white" }}>Kmap Excel</p>
          </Jumbotron>
        </div>
        <Container>
          <form className="form_box">
            <FormGroup row>
              <button className="upload_btn">업로드</button>
              <button className="upload_btn">데이터 조회</button>
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
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div className="test">
                      <Button
                        className="file_search_btn"
                        onClick={this.openFileBrowser.bind(this)}
                      >
                        파일찾기
                      </Button>
                      <button
                        className="file_search_btn"
                        type="submit"
                        onClick={this.uploadClick}
                      >
                        업로드 시작
                      </button>
                    </div>
                  </InputGroupAddon>
                  <p>.xlsx 파일만 가능합니다.</p>
                </InputGroup>
              </Col>
            </FormGroup>
          </form>
          {this.state.name}
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
