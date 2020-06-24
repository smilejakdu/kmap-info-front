import React, { useState, useEffect } from "react";
import "./CompoundInfoPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import CompoundInfo from "../../components/Compound/CompoundInfo";

const CompoundInfoPage = () => {
  return (
    <>
      <Navigation />
      <CompoundInfo />
    </>
  );
};

export default CompoundInfoPage;
