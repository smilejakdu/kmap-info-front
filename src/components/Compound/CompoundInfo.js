/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./CompoundInfo.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoIosRadioButtonOff } from "react-icons/io";
import image from "./test.png";
const CompoundInfo = () => {
  return (
    <>
      <h1 className="test_title">Compound page.</h1>
      <div className="compound_info_header">
        {/* KaiChem ID  */}
        <div className="kaichem_id_border">
          <table>
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
      <div className="compound_info_body">
        {/* left start */}
        {/* <img src={image} className="pubchem_body_left" /> */}
        <img src={"/kmapinfo" + image} className="pubchem_body_left" />
        {/* right start */}
        <div className="pubchem_body_right">
          <div className="right_body_header">
            <div className="pubchem_cid_table_border">
              <table className="table-bordered">
                <tr className="pubchem_cid_tr_border">
                  <td className="pubchem_cid">pubchem CID</td>
                  <td className="pubchem_cid_value">441307</td>
                  <td className="pubchem_cid">InChIKey</td>
                  <td className="inchikey_value">KDSFLKJDLFKJSDFk</td>
                </tr>
                <tr>
                  <td className="pubchem_cid">PubChem NAME</td>
                  <td colSpan="3" className="pubchem_cid_value">
                    Acebutolol hydrochioride
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="right_body_body">
            <table className="table-bordered kmap-2k-subset-border">
              <tr>
                <td className="kmap-2k-subset">KMAP-2K Subset</td>
                <td className="kmap-2k-subset-value">P09</td>
              </tr>
            </table>
            <table className="ipk_border">
              <tr>
                <td className="ipk-library">
                  <IoIosRadioButtonOff />
                </td>
                <td>IPK Expansion</td>
              </tr>
              <tr>
                <td>
                  <IoIosRadioButtonOff />
                </td>
                <td>Prestwick</td>
              </tr>
              <tr>
                <td>
                  <IoIosRadioButtonOff />
                </td>
                <td>SelleckChem</td>
              </tr>
            </table>
            <div className="right_body_left">
              <table>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>US FDA approved</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>EUROPE approved</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>JAPAN approved</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>NCI Cancer Drug</td>
                </tr>
              </table>
            </div>
            {/* <img
            src={image}
            width="200px"
            height="200px"
            className="pubchem-right-image"
          /> */}
            <img
              src={"/kmapinfo" + image}
              width="200px"
              height="250px"
              className="pubchem-right-image"
            />
          </div>
          <div className="right_body_footer">
            <div className="right_body_footer_header">
              <table className="table-bordered">
                <tr className="pubchem_cid_tr_border">
                  <td className="pubchem_cid" rowSpan="2">
                    Known Target
                  </td>
                  <td className="right_body_footer_header_target" rowSpan="2">
                    Adrenergic Receptor
                  </td>
                  <td className="right_body_footer_header_gray_border_chem">
                    Chem Group
                  </td>
                  <td className="right_body_footer_header_gray_border_cid">
                    CID
                  </td>
                </tr>
                <tr className="pubchem_cid_tr_border">
                  <td>Acebutolo</td>
                  <td>1978</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {/* right end */}
      </div>
    </>
  );
};

export default CompoundInfo;
