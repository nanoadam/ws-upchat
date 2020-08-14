import axios from 'axios';
import ENDPOINT from '../config/ENDPOINT';
import { AUTH_SUCCESS, AUTH_ERROR } from './types';
import { useHistory } from 'react-router-dom';

export const login = (email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    const res = await axios.post(ENDPOINT + '/api/auth/login', {
      email: email,
      password: password,
    });

    await dispatch({ type: AUTH_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
  }
};
