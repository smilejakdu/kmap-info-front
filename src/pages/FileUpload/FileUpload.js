import React from "react";
import ExcelForm from "../../components/ExcelForm/ExcelForm";
import Navigation from "../../components/Navigation/Navigation";
import { MainPageBody } from "./FileUpload.style";

const FileUpload = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <MainPageBody>
        <ExcelForm />
      </MainPageBody>
    </div>
  );
};

export default FileUpload;
