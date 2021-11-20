import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";

Vue.use(Vuex);

export default {
  state: {
    isGame: false,
    gameId: "",
    game: null,
  },
  getters: {
    getStateGame(state) {
      return state.isGame;
    },
    getGame(state) {
      return state.game;
    },
    getGameId(state) {
      return state.gameId;
    },
  },
  mutations: {
    setStateGame(state, payload) {
      state.isGame = payload;
    },
    setGame(state, payload) {
      state.game = payload;
    },
    setGameId(state, payload) {
      state.gameId = payload;
    },
  },
  actions: {
    async getGameStats({ commit }, gameId) {
      try {
        const res = await axios.get("games/get", {
          params: { gameId: gameId },
        });
        commit("setGame", res.data);
        console.log("setGame", this);
        return res.data;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
