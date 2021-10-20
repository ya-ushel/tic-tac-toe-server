import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import Auth from "./pages/Auth";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

const routes = [{ path: "/auth", component: Auth }];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
