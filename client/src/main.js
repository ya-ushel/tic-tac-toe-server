import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { initFirebase } from "../../shared/firebase";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.config.productionTip = false;

initFirebase();

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://tic-tac-toe-1337.herokuapp.com/"), //options object is Optional
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
