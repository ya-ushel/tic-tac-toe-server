import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { addDoc, initFirebase } from "../../shared/firebase";
import router from "./router";

Vue.config.productionTip = false;

initFirebase();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
