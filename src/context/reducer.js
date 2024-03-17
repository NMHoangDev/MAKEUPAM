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
const reducer = (states, action) => {
  switch (action.type) {
    case REGISTER_USER_BEGIN:
      return {
        ...states,
        isLoading: true,
      };
      break;
    case REGISTER_USER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        user: action.data.user,
        showALert: true,
        alertText: "Register User Success",
      };
      break;
    case REGISTER_USER_ERROR:
      return {
        ...states,
        showALert: true,
        alertText: "Register User Error",
      };
      break;
    case LOGIN_USER_BEGIN:
      return {
        ...states,
        isLoading: true,
      };
      break;
    case SHOW_PRODUCT_PAGE:
      return {
        ...states,
        showComponent: true,
      };
      break;
    case HIDE_PRODUCT_PAGE:
      return {
        ...states,
        showComponent: false,
      };
      break;
  }
};
export default reducer;
