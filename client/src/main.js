import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { addDoc, initFirebase } from "../../shared/firebase";
import { createUser } from "./firebase";
import router from "./router";

Vue.config.productionTip = false;

// initFirebase();
// createUser();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
