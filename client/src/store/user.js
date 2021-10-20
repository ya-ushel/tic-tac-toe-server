import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: "ss",
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {},
  actions: {},
});
