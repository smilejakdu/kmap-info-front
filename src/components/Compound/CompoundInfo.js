/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./CompoundInfo.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import request from "../../util/request";

const CompoundInfo = (search_data) => {
  console.log("CompoundInfo :", search_data);
  console.log("CompoundInfo :", search_data.data);
  console.log("CompoundInfo :", search_data.data[0]);
  const [chemindex, setChemindex] = useState(1);
  const [compoundinfo, setCompoundinfo] = useState([]);

  const previousBtn = () => {
    if (chemindex === 1) {
      return;
    }
    setChemindex(chemindex - 1);
  };

  const nextBtn = () => {
    setChemindex(chemindex + 1);
  };

  useEffect(() => {
    request
      .get(`/compound/${chemindex}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        if (data.length === 0) {
          alert("데이터가 없습니다.");
          previousBtn();
        }
        console.log(data[0]);
        setCompoundinfo({
          chem_series: data[0].chem_series,
          chem_series_cid: data[0].chem_series_cid,
          cid: data[0].cid,
          compound: data[0].compound,
          europe: data[0].europe,
          inchikey: data[0].inchikey,
          information: data[0].information,
          ipk: data[0].ipk,
          japan: data[0].japan,
          kaichem_id: data[0].kaichem_id,
          kaipharm_chem_index: data[0].kaipharm_chem_index,
          known_target: data[0].known_target,
          nci_cancer: data[0].nci_cancer,
          prestwick: data[0].prestwick,
          pubchem_name: data[0].pubchem_name,
          selleckchem: data[0].selleckchem,
          subset: data[0].subset,
          usa: data[0].usa,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [chemindex]);

  return (
    <>
      <h1 className="test_title">Compound page.</h1>
      <div className="compound_info_header">
        {/* KaiChem ID  */}
        <div className="kaichem_id_border">
          <table>
            <tr>
              <th className="kaichem_id">KaiChem ID</th>
              <td className="kaichem_id_value">{compoundinfo["kaichem_id"]}</td>
            </tr>
          </table>
        </div>
        {/* KaiPHarm Chem Index */}
        <div className="kaipharm_chem_index_div">
          <div className="kaipharm_chem_index_button">
            <BsChevronCompactLeft onClick={previousBtn}>
              왼쪽
            </BsChevronCompactLeft>
          </div>
          <div className="kaipharm_chem_index">
            <div className="kaipharm_chem_index_header">
              KaiPharm Chem Index
            </div>
            <div className="kaipharm_chem_index_body">{chemindex}</div>
          </div>
          <div className="kaipharm_chem_index_button">
            <BsChevronCompactRight onClick={nextBtn}>
              오른쪽
            </BsChevronCompactRight>
          </div>
        </div>
      </div>
      <div className="compound_info_hydrochloride">
        {compoundinfo["compound"]}
      </div>
      <div className="compound_info_body">
        {/* left start */}
        <img
          src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${compoundinfo["cid"]}&t=l`}
          className="pubchem_body_left"
        />
        {/* right start */}
        <div className="pubchem_body_right">
          <div className="right_body_header">
            <div className="pubchem_cid_table_border">
              <table className="table-bordered">
                <tr className="pubchem_cid_tr_border">
                  <td className="pubchem_cid">pubchem CID</td>
                  <td className="pubchem_cid_value">{compoundinfo["cid"]}</td>
                  <td className="pubchem_cid">InChIKey</td>
                  <td className="inchikey_value">{compoundinfo["inchikey"]}</td>
                </tr>
                <tr>
                  <td className="pubchem_cid">PubChem NAME</td>
                  <td colSpan="3" className="pubchem_cid_value">
                    {compoundinfo["pubchem_name"]}
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
                  {compoundinfo["subset"]}
                </td>
              </tr>
            </table>
            <table className="ipk_border">
              <tr>
                <td>
                  {compoundinfo["ipk"] === 1 ? (
                    <span className="dot_active" />
                  ) : (
                    <span className="dot" />
                  )}
                </td>
                <td>IPK Expansion</td>
              </tr>
              <tr>
                <td>
                  {compoundinfo["prestwick"] === 1 ? (
                    <span className="dot_active" />
                  ) : (
                    <span className="dot" />
                  )}
                </td>
                <td>Prestwick</td>
              </tr>
              <tr>
                <td>
                  {compoundinfo["selleckchem"] === 1 ? (
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
                    {compoundinfo["usa"] === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>US FDA approved</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo["europe"] === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>EUROPE approved</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo["japan"] === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>JAPAN approved</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo["nci_cancer"] === 1 ? (
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
              src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${compoundinfo["chem_series_cid"]}&t=l`}
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
                    {compoundinfo["known_target"]}
                  </td>
                  <td className="right_body_footer_header_gray_border_chem">
                    Chem Group
                  </td>
                  <td className="right_body_footer_header_gray_border_cid">
                    CID
                  </td>
                </tr>
                <tr className="pubchem_cid_tr_border">
                  <td>{compoundinfo["chem_series"]}</td>
                  <td>{compoundinfo["chem_series_cid"]}</td>
                </tr>
              </table>
              <div></div>
              <table className="right_body_footer_body">
                <tr>
                  <td className="information">information</td>
                  <td>
                    {compoundinfo["information"] ? (
                      <textarea name="" cols="150" rows="4">
                        {compoundinfo["information"]}
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
