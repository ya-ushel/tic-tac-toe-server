import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      id: "",
    },
    rooms: {},
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getRooms(state) {
      return state.rooms;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setRooms(state, payload) {
      state.user = payload;
      console.log(state.user, "state.user");
    },
  },
  actions: {
    // getRooms({ commit }) {
    //   axios.get("https://restcountries.com/v3.1/all").then((response) => {
    //     commit("setRooms", response.data);
    //   });
    // },
  },
});
