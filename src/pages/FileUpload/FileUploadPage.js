import React from "react";
import ExcelForm from "../../components/ExcelForm/ExcelForm";
import { FileUploadPageBody } from "./FileUploadPage.style";

const FileUploadPage = () => {
  return (
    <div>
      <FileUploadPageBody>
        <ExcelForm />
      </FileUploadPageBody>
    </div>
  );
};

export default FileUploadPage;
