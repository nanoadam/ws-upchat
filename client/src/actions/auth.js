import axios from "axios";
import ENDPOINT from "../config/ENDPOINT";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(ENDPOINT + "/api/auth/login", {
      email: email,
      password: password,
    });

    await console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
