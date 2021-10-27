import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import rooms from "./rooms";
import game from "./game";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    rooms,
    game,
  },
});
