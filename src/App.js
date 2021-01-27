import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileUpload from './pages/FileUpload/FileUploadPage';
import ExcelInfoPage from './pages/ExcelInfo/ExcelInfoPage';
import CompoundInfoPage from './pages/CompoundInfoPage/CompoundInfoPage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import Layout from './Layouts/Layout';

const App = () => {
  // Routering 하기위한 Component

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route
              exact="exact"
              path={['/kmapinfo/', '/kmapinfo/statistics']}
              component={StatisticsPage}
            />
            <Route
              exact="exact"
              path="/kmapinfo/upload"
              component={FileUpload}
            />
            <Route
              exact="exact"
              path="/kmapinfo/excelinfo"
              component={ExcelInfoPage}
            />
            <Route
              exact="exact"
              path="/kmapinfo/compoundinfo/"
              component={CompoundInfoPage}
            />
            <Route
              render={({ location }) => (
                <div>
                  <h2>존재하지 않는 페이지 입니다.</h2>
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
