import React, { useCallback } from "react";
import Compound from "../components/Compound";
import { useSelector, useDispatch } from "react-redux";
import { search_data } from "../modules/searchdata";

const SearchContainer = () => {
  const data = useSelector((state) => state);
  // useDispatch() 함수는 increase 와 decrease 액션을 발생시킨다
  const dispatch = useDispatch();
  const search_result = useCallback(() => dispatch(search_data()), [dispatch]);

  return <Compound data={data} searchResult={search_result} />;
};

export default SearchContainer;
