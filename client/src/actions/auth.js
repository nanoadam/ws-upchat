import axios from "axios";
import ENDPOINT from "../config/ENDPOINT";

export const login = async (email, password) => (dispatch) => {
  const res = await axios.post(ENDPOINT + "/api/auth/login", {
    email: email,
    password: password,
  });

  console.log(res.data)
};
