import axios from "axios";
import ENDPOINT from "../config/ENDPOINT";

export const login = (email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    const res = await axios.post(ENDPOINT + "/api/auth/login", {
      email: email,
      password: password,
    });

    dispatch();

    await console.log(res);
  } catch (err) {
    console.log(err);
  }
};
