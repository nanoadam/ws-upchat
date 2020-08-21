import axios from '../config/axios';

const state = {
  email: '',
  token: localStorage.getItem('auth-token'),
};

const getters = {
  userName: (state) => state.name,
};

const actions = {
  login: async ({ commit }, payload) => {
    console.log(payload);
    try {
      const res = await axios.post('/api/auth/login', {
        email: payload.email,
        password: payload.password,
      });

      localStorage.setItem('auth-token', res.data.token);

      console.log(res.data);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
