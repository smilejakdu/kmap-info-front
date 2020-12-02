import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FileUpload from "./pages/FileUpload/FileUploadPage";
import ExcelInfoPage from "./pages/ExcelInfo/ExcelInfoPage";
import CompoundInfoPage from "./pages/CompoundInfoPage/CompoundInfoPage";
import Login from "./components/Login/LoginForm";
import AuthRoute from "./components/Commons/AuthRoute";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import Layout from "./Layouts/Layout";

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ user_id, password }) => setUser({ user_id, password });

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              authenticated={authenticated}
              path="/kmapinfo/"
              component={FileUpload}
            ></Route>
            <Route
              exact
              path="/kmapinfo/excelinfo"
              authenticated={authenticated}
              component={ExcelInfoPage}
            ></Route>
            <Route
              exact
              path="/kmapinfo/compoundinfo/"
              authenticated={authenticated}
              component={CompoundInfoPage}
            ></Route>
            <Route
              exact
              path="/kmapinfo/statistics"
              authenticated={authenticated}
              component={StatisticsPage}
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
        </Layout>
      </Router>
    </div>
  );
};
export default App;
