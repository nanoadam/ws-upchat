import axios from '../config/axios';

const state = {
  email: '',
  token: localStorage.getItem('auth-token'),
};

const getters = {
  userName: (state) => state.name,
};

const actions = {
  login: async ({ commit, dispatch }, payload) => {
    console.log(payload);
    try {
      const res = await axios.post('/api/auth/login', {
        email: payload.email,
        password: payload.password,
      });

      localStorage.setItem('auth-token', res.data.token);

      dispatch(
        'alert/setAlert',
        { msg: res.data.msg, type: 'success' },
        { root: true }
      );

      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
