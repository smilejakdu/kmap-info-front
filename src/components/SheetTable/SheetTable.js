import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./SheetTable.scss";

const SheetTable = (props) => {
  return (
    <div className="sheet_body container">
      <table className="table">
        <thead className="thead-dark fixed_top">
          <tr>
            {props.cols.map((col) => (
              <th scope="col" className="cols_header fixedHeader" key={col.key}>
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((r, i) => (
            <tr key={i}>
              <td key={i} className="row_border">
                {i}
              </td>
              {props.cols.map((c) => (
                <td key={c.key} className="row_border">
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SheetTable;
