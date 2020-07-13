import React from "react";
import ExcelForm from "../../components/ExcelForm/ExcelForm";
import Navigation from "../../components/Navigation/Navigation";
import { FileUploadPageBody } from "./FileUploadPage.style";

const FileUploadPage = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <FileUploadPageBody>
        <ExcelForm />
      </FileUploadPageBody>
    </div>
  );
};

export default FileUploadPage;
