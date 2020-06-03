import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
