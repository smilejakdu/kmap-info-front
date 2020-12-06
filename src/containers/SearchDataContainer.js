import React, { useState } from 'react';

// connect
import { connect } from 'react-redux';

import * as searchInputActions from '../modules/search_input';
import { searchAdd } from '../modules/search_input';
import SearchBox from '../components/SearchBox/SearchBox';

const SearchDataContainer = ({ searchData }) => {
  return <SearchBox searchData={searchData} />;
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  searchData: (search) => dispatch(searchAdd(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDataContainer);
