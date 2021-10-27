import Vue from "vue";
import VueRouter from "vue-router";
import Lobby from "../pages/Lobby.vue";
import Board from "../pages/Board.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/lobby",
    name: "Lobby",
    component: Lobby,
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
