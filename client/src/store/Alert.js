import { v4 } from 'uuid';

const state = {
  alerts: [],
};

const getters = {
  allAlerts: (state) => state.alerts,
};

const actions = {
  async setAlert({ commit }, payload) {
    payload.id = v4();
    commit('SET_ALERT', payload);

    setTimeout(() => {
      commit('REMOVE_ALERT', payload);
    }, 3000);
  },
};

const mutations = {
  SET_ALERT: (state, payload) => state.alerts.push(payload),
  REMOVE_ALERT: (state, payload) =>
    (state.alerts = state.alerts.filter((item) => item.id !== payload.id)),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
