import React, { useState } from 'react';

// connect
import { connect } from 'react-redux';
import { searchAdd } from '../modules/search_input';
import SearchBox from '../components/SearchBox/SearchBox';


// SearchBox 컴포넌트와 searchData 연동 
const SearchDataContainer = ({ searchData }) => {
  return <SearchBox searchData={searchData} />;
};


// 데이터 전달하는 함
const mapStateToProps = (state) => ({
  search: state.search,
});

// 추가한 데이터 store 에 저장하는 함수 
const mapDispatchToProps = (dispatch) => ({
  searchData: (search) => dispatch(searchAdd(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDataContainer);
