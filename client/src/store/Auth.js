import axios from '../config/axios';

const state = {
  name: 'Nano Adam',
};

const getters = {
  userName: (state) => state.name,
};

const actions = {
  login: async (payload) => {
    try {
      const res = await axios.post('/api/auth/login', {
        email: payload.email,
        password: payload.password,
      });

      console.log(res);
    } catch (err) {
      console.log(err.message);
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
