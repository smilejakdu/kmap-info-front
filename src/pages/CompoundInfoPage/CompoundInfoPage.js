import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import CompoundInfo from "../../components/Compound/CompoundInfo";

import {
  CompoundPageTotalBorder,
  SearchBox,
  KaiChemIdTH,
  KaiChemIdTD,
} from "./CompoundInfoPage.style";

const CompoundInfoPage = () => {
  return (
    <>
      <Navigation />
      <CompoundPageTotalBorder>
        <CompoundInfo />
      </CompoundPageTotalBorder>
    </>
  );
};

export default CompoundInfoPage;
