import React, { useState, useEffect } from "react";
import "./CompoundInfo.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import request from "../../util/request";

const CompoundInfo = (compoundinfo) => {
  console.log("CompoundInfo.js :", compoundinfo.data);
  console.log("CompoundInfo.js :", compoundinfo.data.compound);

  return (
    <>
      <div className="compound_info_hydrochloride">
        {compoundinfo.data.compound}
      </div>
      <div className="compound_info_body">
        {/* left start */}
        <img
          src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${compoundinfo.data.cid}&t=l`}
          className="pubchem_body_left"
        />
        {/* right start */}
        <div className="pubchem_body_right">
          <div className="right_body_header">
            <div className="pubchem_cid_table_border">
              <table className="table-bordered">
                <tr className="pubchem_cid_tr_border">
                  <td className="pubchem_cid">pubchem CID</td>
                  <td className="pubchem_cid_value">{compoundinfo.data.cid}</td>
                  <td className="pubchem_cid">InChIKey</td>
                  <td className="inchikey_value">
                    {compoundinfo.data.inchikey}
                  </td>
                </tr>
                <tr>
                  <td className="pubchem_cid">PubChem NAME</td>
                  <td colSpan="3" className="pubchem_cid_value">
                    {compoundinfo.data.pubchem_name}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="right_body_body">
            <table className="table-bordered kmap-2k-subset-border">
              <tr>
                <td className="kmap-2k-subset">KMAP-2K Subset</td>
                <td className="kmap-2k-subset-value">
                  {compoundinfo.data.subset}
                </td>
              </tr>
            </table>
            <table className="ipk_border">
              <tr>
                <td>
                  {compoundinfo.data.ipk === 1 ? (
                    <span className="dot_active" />
                  ) : (
                    <span className="dot" />
                  )}
                </td>
                <td>IPK Expansion</td>
              </tr>
              <tr>
                <td>
                  {compoundinfo.data.prestwick === 1 ? (
                    <span className="dot_active" />
                  ) : (
                    <span className="dot" />
                  )}
                </td>
                <td>Prestwick</td>
              </tr>
              <tr>
                <td>
                  {compoundinfo.data.selleckchem === 1 ? (
                    <span className="dot_active" />
                  ) : (
                    <span className="dot" />
                  )}
                </td>
                <td>SelleckChem</td>
              </tr>
            </table>
            <div className="right_body_left">
              <table>
                <tr>
                  <td>
                    {compoundinfo.data.usa === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>US FDA approved</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo.data.europe === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>EUROPE approved</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo.data.japan === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>JAPAN approved</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo.data.nci_cancer === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>NCI Cancer Drug</td>
                </tr>
              </table>
            </div>
            <img
              src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${compoundinfo.data.chem_series_cid}&t=l`}
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
                    {compoundinfo.data.known_target}
                  </td>
                  <td className="right_body_footer_header_gray_border_chem">
                    Chem Group
                  </td>
                  <td className="right_body_footer_header_gray_border_cid">
                    CID
                  </td>
                </tr>
                <tr className="pubchem_cid_tr_border">
                  <td>{compoundinfo.data.chem_series}</td>
                  <td>{compoundinfo.data.chem_series_cid}</td>
                </tr>
              </table>
              <div></div>
              <table className="right_body_footer_body">
                <tr>
                  <td className="information">information</td>
                  <td>
                    {compoundinfo.data.information ? (
                      <textarea name="" cols="150" rows="4">
                        {compoundinfo.data.information}
                      </textarea>
                    ) : (
                      <textarea name="" cols="150" rows="4">
                        NA
                      </textarea>
                    )}
                    {/* 공란일 경우 NA */}
                  </td>
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
