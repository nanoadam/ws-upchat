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
  login: async ({ commit, dispatch }, payload) => {
    console.log(payload);
    try {
      const res = await axios.post("/api/auth/login", {
        email: payload.email,
        password: payload.password,
      });

      localStorage.setItem("auth-token", res.data.token);

      dispatch(
        "alert/setAlert",
        { msg: res.data.msg, type: "success" },
        { root: true }
      );

      await router.push("/dashboard");

      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
  getCurrentUser: async ({ commit, state }) => {
    try {
      const res = await axios.get("/api/auth", {
        headers: {
          "x-auth-token": state.token,
        },
      });

      state.user = res.data.user;

      state.isAuth = true;
    } catch (err) {
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
