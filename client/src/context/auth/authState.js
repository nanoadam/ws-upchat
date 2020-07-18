import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import axios from "axios";
import ENDPOINT from "../../config/ENDPOINT";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    const res = await axios.post(
      ENDPOINT + "/api/auth/login",
      { email: email, password: password },
      { "content-type": "application/json" }
    );

    console.log(res);
  };

  return (
    <AuthContext.Provider value={{ login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
