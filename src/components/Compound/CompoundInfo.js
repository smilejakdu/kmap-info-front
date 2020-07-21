import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  KnownTargets,
  InformationHeader,
  InformationBody,
  KaiChemIdTH,
  KaiChemIdTD,
  SearchBox,
  Header,
  KaiPharmChemIndex,
  ChemIndexSearchBox,
  KaiChemIndexNumber,
  KaiChemIndexUpDown,
} from "./CompoundInfo.style";
import request from "../../util/request";
import axios from "axios";
import { useEffect } from "react";

const CompoundInfo = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  let { search } = useParams();
  if (search === undefined) {
    search = "Abacavir";
  }

  useEffect(() => {
    request
      .get(`/compound/search/${search}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setData({
          id: data[0].id,
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
        alert("데이터가 없습니다.");
      });
  }, []);

  const fetchSearchResults = (query) => {
    const searchUrl = `/compound/search?query=${query}`;
    request
      .get(searchUrl)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setResult(data);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log("error : ", error);
        }
      });
  };

  const searchDataClick = (search_data) => {
    return request
      .get(`/compound/search/${search_data}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setData({
          id: data[0].id,
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
        setResult([]);
        setQuery(data[0].compound);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  const handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      setQuery(query);
      setResult([]);
    } else {
      setQuery(query);
      fetchSearchResults(query);
    }
  };

  const renderSearchResults = () => {
    if (Object.keys(result).length && result.length) {
      return (
        <div>
          {result.map((res) => {
            return (
              <h6 onClick={() => searchDataClick(res.compound)}>
                {res.compound}
              </h6>
            );
          })}
        </div>
      );
    }
  };

  return (
    <CompoundInfoBody>
      <Header>
        <KaiChemIdTH>KaiChem ID</KaiChemIdTH>
        <KaiChemIdTD>{data.kaichem_id}</KaiChemIdTD>
        <ChemIndexSearchBox>
          <KaiPharmChemIndex>
            Kaipharm
            <div></div>
            Chem Index
          </KaiPharmChemIndex>
          <KaiChemIndexNumber>1</KaiChemIndexNumber>
          <KaiChemIndexUpDown>&lt;</KaiChemIndexUpDown>
          <KaiChemIndexUpDown>&gt;</KaiChemIndexUpDown>
          <SearchBox>
            <input type="text" value={query} onChange={handleOnInputChange} />
            {renderSearchResults()}
          </SearchBox>
        </ChemIndexSearchBox>
      </Header>
      <LeftBody>
        <LeftImage>
          <img
            src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${data.cid}&t=l`}
          />
        </LeftImage>
      </LeftBody>
      <RightBody>
        <KmapCompoundName>
          <th>KMAP Compound Name</th>
          <td>{data.compound}</td>
        </KmapCompoundName>

        <RightBodyMiddle>
          <KmapTwokSubset>
            <th>
              <p>KMAP-2K</p>
              <p>Subset</p>
            </th>
            <td>{data.subset}</td>
          </KmapTwokSubset>
          <CheckBox>
            <CountryCheckBox>
              <table>
                <tr>
                  <td>
                    {data.usa === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>US FDA approved</td>
                </tr>
                <tr>
                  <td>
                    {data.europe === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>EUROPE approved</td>
                </tr>
                <tr>
                  <td>
                    {data.japan === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>JAPAN approved</td>
                </tr>
                <tr>
                  <td>
                    {data.nci_cancer === 1 ? (
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
                    {data.ipk === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>IPK Expansion</td>
                </tr>
                <tr>
                  <td>
                    {data.prestwick === 1 ? (
                      <input type="checkbox" checked="checked" />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td>Prestwick</td>
                </tr>
                <tr>
                  <td>
                    {data.selleckchem === 1 ? (
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
                <td>{data.cid}</td>
              </tr>
            </PubBoxCID>
            <InChiKey>
              <tr>
                <th>InChIKey</th>
                <td>{data.inchikey}</td>
              </tr>
            </InChiKey>
            <PubChemName>
              <tr>
                <th>PubChem NAME</th>
                <td colSpan="3">{data.pubchem_name}</td>
              </tr>
            </PubChemName>
          </PubBox>
        </RightBodyMiddle>
        <RightBodyFooter>
          <KnownTargets>
            <tr>
              <th>Known Targets</th>
              <td colSpan="3">{data.known_target}</td>
            </tr>
          </KnownTargets>
          <InformationHeader>Information</InformationHeader>
          {data.information ? (
            <InformationBody>{data.information}</InformationBody>
          ) : (
            <InformationBody>NA</InformationBody>
          )}
          {/* 공란일 경우 NA */}
        </RightBodyFooter>
      </RightBody>
    </CompoundInfoBody>
  );
};

export default CompoundInfo;
