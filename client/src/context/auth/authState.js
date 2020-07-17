import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("x-auth-token"),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthState;
