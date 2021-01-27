import React from "react";
import CompoundInfo from "../../components/Compound/CompoundInfo";

import {
  CompoundPageTotalBorder,
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
