import React, { useState, useEffect } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import {
  ExcelInfoPageBody,
  SearchBox,
  ExcelInfoPageHeader,
} from "./ExcelInfoPage.style";
import axios from "axios";
import request from "../../util/request";
import CompoundInfo from "../../components/Compound/CompoundInfo";
import { Link, NavLink } from "react-router-dom";

const ExcelInfoPage = () => {
  const [excelData, setExcelData] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
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

  const handleChangeExcelData = (id) => {
    this.setState((prevState) => ({
      exceldata: prevState.exceldata.filter((excel) => excel.id !== id),
    }));
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
      .get("/excel/upload")
      .then((res) => {
        let {
          data: {
            data: { excel_data },
          },
        } = res;
        setExcelData(excel_data);
        console.log(1);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log(compoundinfo);
  // }, [compoundinfo]);

  return (
    <div>
      <Navigation />
      <ExcelInfoPageHeader>
        <SearchBox>
          <input type="text" value={query} onChange={handleOnInputChange} />
          <button>Compound Search</button>
          {renderSearchResults()}
        </SearchBox>
      </ExcelInfoPageHeader>
      <ExcelInfoPageBody>
        <ExcelInfoList
          data={excelData}
          handleChangeExcelData={handleChangeExcelData}
        />
      </ExcelInfoPageBody>
    </div>
  );
};

export default ExcelInfoPage;
