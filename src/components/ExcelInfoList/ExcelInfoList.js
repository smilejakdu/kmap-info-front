import React, { useState } from "react";
import {
  FileListHeader,
  FileListBody,
  RemoveBtn,
  ExcelDate,
  FileItemBox,
  ExcelName,
  LeftBody,
  RightBody,
  RightFileName,
  RightSheetClick,
  SheetTableData,
} from "./ExcelInfoList.style";
import SheetTable from "../SheetTable/SheetTable";
import request from "../../util/request";
import { MdRemoveCircleOutline } from "react-icons/md";

const ExcelInfoList = ({ data, handleChangeExcelData }) => {
  console.log(data);
  const [sheetData, setSheetData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const [excelName, setExcelName] = useState("");
  const [sheetStyle, setSheetStyle] = useState([]);

  const getSheets = (excel, sheet) => (event) => {
    return request
      .get(`/excel/${excel}/${sheet}`)
      .then((res) => {
        let {
          data: { sheet_table },
        } = res;
        setDataLoaded(true);
        setCols(sheet_table.cols);
        setRows(sheet_table.rows);
        setSheetStyle(`${sheet}`);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  const ExcelNameClick = (itemName) => (event) => {
    return request
      .get(`/excel/${itemName}`)
      .then((res) => {
        let {
          data: { sheet_data },
        } = res;
        let sheet = sheet_data.map(({ name }) => name);
        setSheetData(sheet);
        setExcelName(itemName);
        setCols([]);
        setRows([]);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  const removeClick = (itemId, itemName) => async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await request.delete(`/excel/${itemName}`);
      await handleChangeExcelData(itemId);
      setSheetData([]);
      setCols([]);
      setRows([]);
    } catch (e) {
      console.error("error", e);
    }
  };

  return (
    <div>
      <LeftBody>
        <FileListHeader>File List</FileListHeader>
        <FileListBody>
          {data.map((item) => (
            <FileItemBox key={item.id}>
              <ExcelName onClick={ExcelNameClick(item.name)}>
                {item.name}
              </ExcelName>
              <ExcelDate>{item.create_at}</ExcelDate>
              <RemoveBtn onClick={removeClick(item.id, item.name)}>
                <MdRemoveCircleOutline />
              </RemoveBtn>
            </FileItemBox>
          ))}
        </FileListBody>
      </LeftBody>
      <RightBody>
        {excelName ? (
          <RightFileName>{excelName}</RightFileName>
        ) : (
          <RightFileName>File Name.xlsx</RightFileName>
        )}
        {sheetData.length > 0 ? (
          <RightSheetClick>
            {sheetData.map((sheet, i) => (
              <div>
                {sheetStyle === sheet ? (
                  <div
                    key={i}
                    className="active"
                    onClick={getSheets(excelName, sheet)}
                  >
                    {sheet}
                  </div>
                ) : (
                  <div key={i} onClick={getSheets(excelName, sheet)}>
                    {sheet}
                  </div>
                )}
              </div>
            ))}
          </RightSheetClick>
        ) : (
          <RightSheetClick>Sheet Table</RightSheetClick>
        )}
        <SheetTableData>
          {dataLoaded && <SheetTable cols={cols} rows={rows} />}
        </SheetTableData>
      </RightBody>
    </div>
  );
};

export default React.memo(ExcelInfoList);
