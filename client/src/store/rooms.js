import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export default {
  state: {
    rooms: [],
    userRoom: null,
  },
  getters: {
    getRooms(state) {
      return state.rooms;
    },
    getUserRoom(state) {
      return state.userRoom;
    },
  },
  mutations: {
    setRooms(state, payload) {
      state.rooms = payload;
    },
    setUserRoom(state, payload) {
      state.userRoom = payload;
    },
  },
  actions: {
    getAllRooms({ commit }) {
      axios.get("/rooms/list").then((response) => {
        console.log(response.data, "response.data");
        commit("setRooms", response.data);
        response.data.forEach((room) => {
          console.log(room, "room");
          room.users.forEach((player) => {
            if (player.id === this.state.user.user.id) {
              commit("setUserRoom", room);
            }
          });
        });
        // commit("setUserRoom", response.data);
      });
    },
    createUserRooms({ commit }) {
      axios
        .post("https://tic-tac-toe-1337.herokuapp.com/rooms/create", null, {
          headers: { userId: this.state.user.user.id },
        })
        .then((response) => {
          // commit("setUserRoom", response.data);
        });
    },
    leaveUserRooms({ commit }) {
      axios
        .post(
          "https://tic-tac-toe-1337.herokuapp.com/rooms/leave",
          {},
          {
            params: {
              roomId: this.state.rooms.userRoom.id,
            },
            headers: { userId: this.state.user.user.id },
          }
        )
        .then((response) => {
          console.log(response, "response dell");
          commit("setUserRoom", {});
        });
    },
  },
};
