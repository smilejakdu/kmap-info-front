import React from "react";

import { createContext, useContext } from "react";
import useReducerWithSideEffects, {
  UpdateWithSideEffect,
} from "use-reducer-with-side-effects";

import { getStorageItem, setStorageItem } from "utils/localstorage";

const AppContext = createContext();

const SET_TOKEN = "app/set_token";
const DEL_TOKEN = "app/del_token";

export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const delToken = () => ({ type: DEL_TOKEN });

const reducer = (prevState, action) => {
  const { type } = action; // 1 토큰을 저장해라 . 2 . 토큰을 삭제해라
  if (type === SET_TOKEN) {
    const { payload: jwtToken } = action;
    const newState = { ...prevState, jwtToken, isAuthenticated: true };
    return UpdateWithSideEffect(newState, (state, dispatch) => {
      setStorageItem("jwtToken", jwtToken);
    });
  } else if (type === DEL_TOKEN) {
    const newState = { ...prevState, jwtToken: "", isAuthenticated: false };
    return UpdateWithSideEffect(newState, (state, dispatch) => {
      setStorageItem("jwtToken", "");
    });
  }
  return prevState;
};

export const AppProvider = ({ children }) => {
  const jwtToken = getStorageItem("jwtToken", "");
  const [store, dispatch] = useReducerWithSideEffects(reducer, {
    jwtToken,
    isAuthenticated: jwtToken.length > 0,
  });
  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
