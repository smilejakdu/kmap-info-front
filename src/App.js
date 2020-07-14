import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import FileUpload from "./pages/FileUpload/FileUploadPage";
import ExcelInfoPage from "./pages/ExcelInfo/ExcelInfoPage";
import CompoundInfoPage from "./pages/CompoundInfoPage/CompoundInfoPage";
import Login from "./components/Login/LoginForm";
import AuthRoute from "./components/Commons/AuthRoute";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ user_id, password }) => setUser({ user_id, password });

  return (
    <div>
      <Switch>
        <AuthRoute
          exact
          authenticated={authenticated}
          path="/kmapinfo/"
          render={() => <FileUpload />}
        ></AuthRoute>
        <Route
          exact
          path="/kmapinfo/excelinfo"
          authenticated={authenticated}
          render={() => <ExcelInfoPage />}
        ></Route>
        <Route
          exact
          path="/kmapinfo/compoundinfo"
          authenticated={authenticated}
          render={() => <CompoundInfoPage />}
        ></Route>
        <AuthRoute
          exact
          path="/kmapinfo/statistics"
          authenticated={authenticated}
          render={() => <StatisticsPage />}
        ></AuthRoute>
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
