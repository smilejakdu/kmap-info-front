import React, { Component } from "react";
import axios from "axios";
import "./ExcelInfo.css";
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

class ExcelInfo extends Component {
  state = {};
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default ExcelInfo;
