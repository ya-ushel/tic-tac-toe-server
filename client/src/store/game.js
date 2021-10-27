import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export default {
  state: {
    isGame: false,
    board: {
      size: 10,
      players: [
        { name: "Tolik", icon: "®", score: 0 },
        { name: "Volodya", icon: "∑", score: 0 },
        { name: "Pavluha", icon: "≤", score: 0 },
        { name: "Diablo228", icon: "˚", score: 0 },
        { name: "Patricio", icon: "¬", score: 0 },
        { name: "Valentina", icon: "√", score: 0 },
        { name: "Oxana", icon: "å", score: 0 },
        { name: "Kizaru", icon: "ß", score: 0 },
      ],
    },
  },
  getters: {
    getStateGame(state) {
      return state.isGame;
    },
    getBoard(state) {
      return state.board;
    },
  },
  mutations: {
    setStateGame(state, payload) {
      state.isGame = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
  },
  actions: {},
};
