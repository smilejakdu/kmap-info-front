import React, { useState } from 'react';
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
} from './ExcelInfoList.style';

import SheetTable from '../SheetTable/SheetTable';
import request from '../../util/request';
import { MdRemoveCircleOutline } from 'react-icons/md';

const ExcelInfoList = ({ excel_file_name, handleChangeExcelData }) => {
  const [sheetData, setSheetData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const [excelName, setExcelName] = useState('');
  const [sheetStyle, setSheetStyle] = useState([]);

// 클릭했을때 , sheet 리스트 데이터를 불러오게 함수 
  const getSheets = (excel, sheet) => () => {
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

// 엑셀 클릭시 sheet 데이터 불러오게 된다.
  const ExcelNameClick = (itemName) => () => {
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

// remove Button 클릭시 삭제를 하고 다시 배열을 하게된다.
  const removeBtnClick = (itemId, itemName) => async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await request.delete(`/excel/${itemName}`);
      await handleChangeExcelData(itemId);
      setSheetData([]);
      setCols([]);
      setRows([]);
    } catch (e) {
      console.error('error', e);
    }
  };

  return (
    <div>
      <LeftBody>
        <FileListHeader>File List</FileListHeader>
        <FileListBody>
          {excel_file_name.map((item) => (
            <FileItemBox key={item.id}>
              <ExcelName onClick={ExcelNameClick(item.name)}>
                {item.name}
              </ExcelName>
              <ExcelDate>{item.create_at}</ExcelDate>
              <RemoveBtn onClick={removeBtnClick(item.id, item.name)}>
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
