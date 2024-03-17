import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import axios from "axios";

import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SHOW_PRODUCT_PAGE,
  HIDE_PRODUCT_PAGE,
} from "./actions.js";

//  Init Inittial State

const initialState = {
  isLoadinng: false,
  showAlert: false,
  alertText: "",
  user: null,
  alertType: "SUCCESS",
  showComponent: false,
};
// Create Context

const AppContext = React.createContext();

// Create Provider

const AppProvider = ({ children }) => {
  const [states, dispatch] = useReducer(reducer, initialState);
  const addUsertoLocalSpace = (user) => {
    localStorage.setItem("user", user);
  };
  const showProductComponent = () => {
    dispatch({ type: SHOW_PRODUCT_PAGE });
  };
  const hideProductComponent = () => {
    dispatch({ type: HIDE_PRODUCT_PAGE });
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/sign-up",
        currentUser
      );
      const { user } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        data: { user: user },
      });
      addUsertoLocalSpace(user);
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
      });
    }
    console.log(states.user);
  };

  // Login User
  const loginUser = async () => {};

  // Export data from Pareent Component to Children Component

  return (
    <AppContext.Provider
      value={{
        ...states,
        registerUser,
        showProductComponent,
        hideProductComponent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState };
