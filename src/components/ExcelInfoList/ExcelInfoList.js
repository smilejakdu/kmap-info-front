import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ExcelInfoList.css";
import Pagination from "../../components/Pagination";
import axios from "axios";

class ExcelInfoList extends Component {
  constructor() {
    super();

    var exampleItems = [...Array(150).keys()].map((i) => ({
      id: i + 1,
      name: "test " + (i + 1),
    }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  static defaultProps = {
    data: [],
  };
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    const { data } = this.props;
    console.log(data);
    const list = data.map((info) => (
      <div className="excel_click_btn" key={info.id}>
        {info.name}
      </div>
    ));
    return (
      <div>
        {this.state.pageOfItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <Pagination
          items={this.state.exampleItems}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}
export default ExcelInfoList;
