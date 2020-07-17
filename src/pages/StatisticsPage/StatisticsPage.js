import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Statistics from "../../components/Statistics/Statistics";
import {
  StatisticsPageHeader,
  StatisticsPageBody,
  SearchBox,
  KmapTwokProject,
} from "./StatisticsPage.style";
import axios from "axios";
import request from "../../util/request";
const StatisticsPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [compoundinfo, setCompoundinfo] = useState([]);

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
        console.log(compoundinfo);
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
          {result.map((res, i) => {
            return (
              <h6 key={i} onClick={() => searchDataClick(res.compound)}>
                {res.compound}
              </h6>
            );
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    console.log(1123123);
    console.log(Object.keys(compoundinfo).length);
    if (Object.keys(compoundinfo).length > 0) {
      console.log("데이터가 들어왔습니다");
    } else {
      console.log("데이터가 없습니다");
    }
  });

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

  return (
    <div>
      <Navigation />
      <StatisticsPageHeader>
        <SearchBox>
          <input type="text" value={query} onChange={handleOnInputChange} />
          <button>Compound Search</button>
          {renderSearchResults()}
        </SearchBox>
        <KmapTwokProject>KMAP-2K Project Progress</KmapTwokProject>
      </StatisticsPageHeader>
      <StatisticsPageBody>
        <Statistics />
      </StatisticsPageBody>
    </div>
  );
};

export default StatisticsPage;
