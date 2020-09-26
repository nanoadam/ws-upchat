import axios from "../config/axios";
import router from "../router";

const state = {
  email: "",
  token: localStorage.getItem("auth-token"),
  user: null,
  isAuth: false,
};

const getters = {
  userName: (state) => state.name,
  user: (state) => state.user,
  isAuth: (state) => state.isAuth,
};

const actions = {
  login: async ({ commit, dispatch, state }, payload) => {
    console.log(payload);
    try {
      const res = await axios.post("/api/auth/login", {
        email: payload.email,
        password: payload.password,
      });

      localStorage.setItem("auth-token", res.data.token);

      router.push({ name: "Dashboard" });

      dispatch(
        "alert/setAlert",
        { msg: res.data.msg, type: "success" },
        { root: true }
      );

      state.isAuth = true;

      // console.log(res.data);
    } catch (err) {
      console.log(err);
      state.isAuth = false;
    }
  },
  getCurrentUser: async ({ commit, state }) => {
    if (!state.token) return (state.isAuth = false);
    try {
      const res = await axios.get("/api/auth", {
        headers: {
          "x-auth-token": state.token,
        },
      });

      state.user = res.data.user;

      state.isAuth = true;
    } catch (err) {
      state.isAuth = false;
      console.log(err);
    }
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
