import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export default {
  state: {
    rooms: [],
    infoRoom: null,
    currentRoom: null,
  },
  getters: {
    getRooms(state) {
      return state.rooms;
    },
    getInfoRoom(state) {
      return state.infoRoom;
    },
    getCurrentRoom(state) {
      return state.currentRoom;
    },
  },
  mutations: {
    setRooms(state, payload) {
      state.rooms = payload;
    },
    setInfoRoom(state, payload) {
      state.infoRoom = payload;
    },
    setCurrentRoom(state, payload) {
      state.currentRoom = payload;
    },
  },
  actions: {
    getAllRooms({ commit }) {
      try {
        axios.get("/rooms/list").then((response) => {
          commit("setRooms", response.data);
          response.data.forEach((room) => {
            room.users.forEach((player) => {
              if (player.id === this.state.user.user.id) {
                commit("setInfoRoom", room);
                commit("setCurrentRoom", room);
              }
            });
          });
        });
      } catch (error) {
        console.log(err);
      }
    },
    createRoom({ commit }, data) {
      console.log(this.state.user.user.id, "this.state.user.id");
      try {
        axios
          .post(
            "/rooms/create",
            { name: data.options, options: data.options },
            {
              headers: { userId: this.state.user.user.id },
            }
          )
          .then((response) => {
            console.log(response.data, "response.data");
            commit("setInfoRoom", response.data);
            commit("setCurrentRoom", response.data);
          });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
