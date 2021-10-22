import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    user: {
      name: "",
      id: "",
    },
  },

  getters: {
    getUser(state) {
      return state;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {},
};
