import axios from '../config/axios';
import router from '../router';

const state = {
  email: '',
  token: localStorage.getItem('auth-token'),
};

const getters = {
  userName: (state) => state.name,
  user: (state) => state,
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

      await router.push('/dashboard');

      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
  getCurrentUser: async ({ commit }) => {
    const res = await axios.get('/api/auth', {
      headers: {
        'x-auth-token': state.token,
      },
    });
  },
};

const mutations = {
  setUser: (state, payload) => (state.email = payload.email),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
