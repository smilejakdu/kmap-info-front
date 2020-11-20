import { Navigation } from ".";
import React, { Component } from "react";

const Layout = ({ children, match, location, history }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
