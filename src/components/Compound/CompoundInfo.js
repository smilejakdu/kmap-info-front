import React from "react";

import {
  CompoundInfoBody,
  LeftImage,
  LeftBody,
  KmapCompoundName,
  RightBody,
  KmapTwokSubset,
  RightBodyMiddle,
  RightBodyFooter,
  CheckBox,
  CountryCheckBox,
  IpkExpasionCheckBox,
  PubBox,
  PubBoxCID,
  InChiKey,
  PubChemName,
} from "./CompoundInfo.style";

const CompoundInfo = (compoundinfo) => {
  console.log(compoundinfo.data.compound);
  console.log(compoundinfo.data.cid);
  return (
    <CompoundInfoBody>
      <LeftBody>
        <LeftImage>
          <img
            src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${compoundinfo.data.cid}&t=l`}
          />
        </LeftImage>
      </LeftBody>
      <RightBody>
        <KmapCompoundName>
          <th>KMAP Compound Name</th>
          <td>{compoundinfo.data.compound}</td>
        </KmapCompoundName>

        <RightBodyMiddle>
          <KmapTwokSubset>
            <th>
              <p>KMAP-2K</p>
              <p>Subset</p>
            </th>
            <td>{compoundinfo.data.subset}</td>
          </KmapTwokSubset>
          <CheckBox>
            <CountryCheckBox>
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
            </CountryCheckBox>
            <IpkExpasionCheckBox>
              <table>
                <tr>
                  <td>
                    {compoundinfo.data.ipk === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>IPK Expansion</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo.data.prestwick === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>Prestwick</td>
                </tr>
                <tr>
                  <td>
                    {compoundinfo.data.selleckchem === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <span type="checkbox" />
                    )}
                  </td>
                  <td>SelleckChem</td>
                </tr>
              </table>
            </IpkExpasionCheckBox>
          </CheckBox>
          <PubBox>
            <PubBoxCID>
              <tr>
                <th>pubchem CID</th>
                <td>{compoundinfo.data.cid}</td>
              </tr>
            </PubBoxCID>
            <InChiKey>
              <tr>
                <th>InChIKey</th>
                <td>{compoundinfo.data.inchikey}</td>
              </tr>
            </InChiKey>
            <PubChemName>
              <tr>
                <th>PubChem NAME</th>
                <td colSpan="3">{compoundinfo.data.pubchem_name}</td>
              </tr>
            </PubChemName>
          </PubBox>
        </RightBodyMiddle>
      </RightBody>
    </CompoundInfoBody>

    //   <div className="compound_info_body">
    //     <div className="pubchem_body_right">
    //       <div className="right_body_footer">
    //         <div className="right_body_footer_header">
    //           <table className="table-bordered">
    //             <tr className="pubchem_cid_tr_border">
    //               <td className="pubchem_cid" rowSpan="2">
    //                 Known Target
    //               </td>
    //               <td className="right_body_footer_header_target" rowSpan="2">
    //                 {compoundinfo.data.known_target}
    //               </td>
    //               <td className="right_body_footer_header_gray_border_chem">
    //                 Chem Group
    //               </td>
    //               <td className="right_body_footer_header_gray_border_cid">
    //                 CID
    //               </td>
    //             </tr>
    //             <tr className="pubchem_cid_tr_border">
    //               <td>{compoundinfo.data.chem_series}</td>
    //               <td>{compoundinfo.data.chem_series_cid}</td>
    //             </tr>
    //           </table>
    //           <div></div>
    //           <table className="right_body_footer_body">
    //             <tr>
    //               <td className="information">information</td>
    //               <td>
    //                 {compoundinfo.data.information ? (
    //                   <textarea name="" cols="150" rows="4">
    //                     {compoundinfo.data.information}
    //                   </textarea>
    //                 ) : (
    //                   <textarea name="" cols="150" rows="4">
    //                     NA
    //                   </textarea>
    //                 )}
    //                 {/* 공란일 경우 NA */}
    //               </td>
    //             </tr>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //     {/* right end */}
    //   </div>
    // </CompoundInfoBody>
  );
};

export default CompoundInfo;
