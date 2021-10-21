import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      id: "",
    },
    rooms: [],
    userRoom: {},
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
      state.rooms = payload;
    },
    setUserRoom(state, payload) {
      state.userRoom = payload;
    },
  },
  actions: {
    getAllRooms({ commit }) {
      axios
        .get("https://tic-tac-toe-1337.herokuapp.com/rooms/list")
        .then((response) => {
          commit("setRooms", response.data);
        });
    },
    createUserRooms({ commit }) {
      console.log(this.state.user.id, "axios id");
      axios
        .get("https://tic-tac-toe-1337.herokuapp.com/rooms/create", {
          id: this.state.user.id,
        })
        .then((response) => {
          console.log(response, "response");
          commit("setUserRoom", response.data);
        });
    },
  },
});
