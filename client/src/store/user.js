import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export default {
  state: {
    user: {
      name: "",
      id: "",
    },
    users: [],
  },

  getters: {
    getUser(state) {
      console.log(state, "dljnashkjdhbajln");
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
    getAllUsers({ commit }) {
      axios
        .get("https://tic-tac-toe-1337.herokuapp.com/users/list")
        .then((response) => {
          commit("setUsers", response.data);
        });
    },
  },
};
