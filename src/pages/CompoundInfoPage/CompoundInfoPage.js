import React from "react";
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
      <CompoundPageTotalBorder>
        <CompoundInfo />
      </CompoundPageTotalBorder>
    </>
  );
};

export default CompoundInfoPage;
