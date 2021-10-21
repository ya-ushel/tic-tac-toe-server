import Vue from "vue";
import VueRouter from "vue-router";
import Lobby from "../pages/Lobby.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/lobby",
    name: "Lobby",
    component: Lobby,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
