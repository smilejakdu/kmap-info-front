import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <div className="kmap_nav_title">KMAP</div>
          <Link className="link" to="/">
            업로드
          </Link>
          <Link className="link" to="/excelinfo">
            데이터 조회
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
