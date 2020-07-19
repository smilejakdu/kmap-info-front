import { createAction, handleActions } from "redux-actions";

const SEARCH = "search/data";

export const search_data = createAction(SEARCH);

const initialState = {
  search_data: [],
};

const searchdata = handleActions(
  {
    [SEARCH]: (state, action) => ({ search_data: state }),
  },
  initialState
);

export default searchdata;
