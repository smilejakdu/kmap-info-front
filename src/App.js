import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import ExcelInfoPage from "./pages/ExcelInfo/ExcelInfoPage";
import CompoundInfoPage from "./pages/CompoundInfoPage/CompoundInfoPage";
import Login from "./components/Login/LoginForm";
import signIn from "./components/Commons/signIn";
import AuthRoute from "./components/Commons/AuthRoute";

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ status }) => setUser(signIn({ status }));
  return (
    <div>
      <Switch>
        <AuthRoute
          exact
          authenticated={authenticated}
          path="/kmapinfo/"
          component={Main}
        ></AuthRoute>
        <AuthRoute
          exact
          path="/kmapinfo/excelinfo"
          authenticated={authenticated}
          component={ExcelInfoPage}
        ></AuthRoute>
        <Route
          exact
          path="/kmapinfo/compoundinfo"
          // authenticated={authenticated}
          component={CompoundInfoPage}
        ></Route>
        <Route
          exact
          path="/kmapinfo/login"
          render={(props) => (
            <Login authenticated={authenticated} login={login} {...props} />
          )}
        />
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
};
export default App;
