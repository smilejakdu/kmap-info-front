import React, { useState, useEffect } from "react";
import "./CompoundInfoPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import CompoundInfo from "../../components/Compound/CompoundInfo";
import image from "../../util/image/logo.png";
import request from "../../util/request";
import axios from "axios";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const CompoundInfoPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [chemindex, setChemindex] = useState(1);
  const [compoundinfo, setCompoundinfo] = useState([]);

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

  const previousBtn = () => {
    console.log("previousBtn : ", chemindex);
    if (chemindex === 1) {
      return;
    }
    setChemindex(chemindex - 1);
  };
  const nextBtn = () => {
    setChemindex(chemindex + 1);
  };

  const searchDataClick = (search_data) => {
    return request
      .get(`/compound/search/${search_data}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setCompoundinfo({
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
        setQuery("");
        setChemindex(data[0].kaipharm_chem_index);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  const renderSearchResults = () => {
    if (Object.keys(result).length && result.length) {
      return (
        <div className="test_div">
          {result.map((res) => {
            return (
              <h6
                className="search_font"
                onClick={() => searchDataClick(res.compound)}
              >
                {res.compound}
              </h6>
            );
          })}
        </div>
      );
    }
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

  useEffect(() => {
    request
      .get(`/compound/${chemindex}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setCompoundinfo({
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
        setChemindex(data[0].id);
        setResult([]);
      })
      .catch((error) => {
        console.log(error);
        alert("데이터가 없습니다.");
        previousBtn();
      });
  }, [chemindex]);

  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div className="div_border">
        <div>
          <input
            type="text"
            value={query}
            placeholder="검색"
            className="search_input"
            onChange={handleOnInputChange}
          />
        </div>
        <div>{renderSearchResults()}</div>

        <div className="compound_info_header">
          {/* KaiChem ID  */}
          <div className="kaichem_id_border">
            <table>
              <tr>
                <th className="kaichem_id">KaiChem ID</th>
                <td className="kaichem_id_value">{compoundinfo.kaichem_id}</td>
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
              <div className="kaipharm_chem_index_body">
                {compoundinfo.kaipharm_chem_index}
              </div>
            </div>
            <div className="kaipharm_chem_index_button">
              <BsChevronCompactRight onClick={nextBtn}>
                오른쪽
              </BsChevronCompactRight>
            </div>
          </div>
        </div>
        <CompoundInfo data={compoundinfo} />
      </div>
    </>
  );
};

export default CompoundInfoPage;
