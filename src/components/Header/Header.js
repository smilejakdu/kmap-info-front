import React, { Component } from "react";
import "./Header.css";
import { Jumbotron } from "reactstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="jumbotron-background">
            <div className="header_color">
              <h1 className="kmap_header_title">Kmap</h1>
            </div>
            <p style={{ color: "white" }}>Kmap Excel</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
