import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import ExcelInfoPage from "./pages/ExcelInfo/ExcelInfoPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/kmapinfo/" component={Main}></Route>
          <Route
            exact
            path="/kmapinfo/excelinfo"
            component={ExcelInfoPage}
          ></Route>
          <Route
            render={({ location }) => (
              <div>
                <h2>이페이지는 존재하지 않습니다.</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
