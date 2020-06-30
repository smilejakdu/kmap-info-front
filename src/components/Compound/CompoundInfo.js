import React, { useState, useEffect } from "react";
import "./CompoundInfo.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const CompoundInfo = () => {
  return (
    <>
      <h1 className="test_title">Compound page.</h1>
      <div className="compound_info_header">
        {/* KaiChem ID  */}
        <div className="kaichem_id_border">
          <table className="table-size">
            <tr>
              <th className="kaichem_id">KaiChem ID</th>
              <td className="kaichem_id_value">KC0006</td>
            </tr>
          </table>
        </div>
        {/* KaiPHarm Chem Index */}
        <div className="kaipharm_chem_index_div">
          <div className="kaipharm_chem_index_button">
            <BsChevronCompactLeft>왼쪽</BsChevronCompactLeft>
          </div>
          <div className="kaipharm_chem_index">
            <div className="kaipharm_chem_index_header">
              KaiPharm Chem Index
            </div>
            <div className="kaipharm_chem_index_body">6</div>
          </div>
          <div className="kaipharm_chem_index_button">
            <BsChevronCompactRight>오른쪽</BsChevronCompactRight>
          </div>
        </div>
      </div>
      <div className="compound_info_hydrochloride">
        Acebutolol hydrochloride
      </div>
    </>
  );
};

export default CompoundInfo;
