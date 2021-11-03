import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { initFirebase } from "../../shared/firebase";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.config.productionTip = false;

console.log(localStorage.getItem("id"), "store.state.user.id");

Vue.use(
  new VueSocketIO({
    connection: SocketIO("https://tic-tac-toe-1337.herokuapp.com/", {
      secure: true,
      transports: ["websocket"],
      query: { userId: "UlCjtIGuKHZkU7NjWvrGSY03IH33" },
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
