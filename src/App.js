import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import ExcelInfoPage from "./pages/ExcelInfo/ExcelInfoPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/kmapinfo/" component={Main}></Route>
          <Route
            exact
            path="/kmapinfo/excelinfo"
            component={ExcelInfoPage}
          ></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
