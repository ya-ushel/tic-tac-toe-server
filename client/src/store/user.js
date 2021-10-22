import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    qwe: "kjnj",
  },
  getters: {
    getQwe(state) {
      return state.qwe;
    },
  },
  mutations: {},
  actions: {},
};
