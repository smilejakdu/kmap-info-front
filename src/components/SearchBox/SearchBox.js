import React, { useState } from 'react';
import { SearchBorder } from './SearchBox.style';
import { useHistory } from 'react-router-dom';
import request from '../../util/request';
import axios from 'axios';

const SearchBox = ({ searchData }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [compoundinfo, setCompoundinfo] = useState('');
  const history = useHistory();

  // 데이터 요청 후 받은 데이터 리스트 중에 하나를 클릭했을때 실행하는 함수 
  const searchDataClick = (search_data) => {
    setQuery(search_data); // input 데이터
    setCompoundinfo(search_data);
    setResult([]);
  };

  // input 에 입력한것을 받는다 
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

  // 데이터 요청후 받은 데이터를 화면에 보여주는 함수 
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

  // input 에 전달받은 데이터를 서버에 요청 
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
          console.log('error : ', error);
        }
      });
  };

  // 검색 결과값 button 전달 함수
  const searchResultBtn = () => {
    searchData(compoundinfo);
    history.push('compoundinfo');
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
