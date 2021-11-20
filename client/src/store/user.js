import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export default {
  state: {
    user: {},
    users: [],
  },

  getters: {
    getUser(state) {
      return state.user;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getAllUsers({ commit }) {},
  },
};
