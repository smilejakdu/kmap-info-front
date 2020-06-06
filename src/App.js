import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import ExcelInfoPage from "./pages/ExcelInfo/ExcelInfoPage";
import PaginationPage from "./pages/PaginationPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/excelinfo" component={ExcelInfoPage}></Route>
          <Route exact path="/pagetest" component={PaginationPage}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
