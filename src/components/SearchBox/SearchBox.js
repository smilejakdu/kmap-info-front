import React, { useState, useEffect } from "react";
import { SearchBorder } from "./SearchBox.style";
import { Link, useHistory } from "react-router-dom";
import request from "../../util/request";
import axios from "axios";

const SearchBox = ({ search, searchData }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [compoundinfo, setCompoundinfo] = useState([]);

  const history = useHistory();

  const searchDataClick = (search_data) => {
    setQuery(search_data); // input 데이터
    setCompoundinfo(search_data);
    setResult([]);
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

  const searchResultBtn = () => {
    searchData(compoundinfo);
    history.push("compoundinfo");
  };

  return (
    <SearchBorder>
      <input type="text" value={query} onChange={handleOnInputChange} />
      <button className="search-btn" onClick={searchResultBtn}>
        Compound Search
      </button>
      {renderSearchResults()}
    </SearchBorder>
  );
};

export default SearchBox;
