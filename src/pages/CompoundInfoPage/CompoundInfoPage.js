import React from "react";
import "./CompoundInfoPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import CompoundInfo from "../../components/Compound/CompoundInfo";
import image from "./logo.png";

const CompoundInfoPage = () => {
  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div>
        <div className="kai_logo">
          <img src={"/kmapinfo" + image} width="250" height="100" />
          {/* <img src={image} width="250" height="100" /> */}
        </div>
      </div>
      <div className="div_border">
        <CompoundInfo />
      </div>
    </>
  );
};

export default CompoundInfoPage;
