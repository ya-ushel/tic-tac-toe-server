<template>
  <div id="app">
    <Lobby />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lobby from "./pages/Lobby.vue";
import { checkAuthState, createUser } from "./firebase";

export default {
  name: "App",

  components: { Lobby },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    getterUser() {
      let login = localStorage.getItem("login");

      if (login === null) {
        createUser();
        checkAuthState("qwe");
      }

      let user = {
        login: localStorage.getItem("login"),
        id: localStorage.getItem("id"),
      };

      this.$store.commit("setUser", user);
    },
  },
  beforeMount() {
    this.getterUser();
  },
  mounted() {},
};
</script>

<style>
#app,
body {
  margin: 0;
  padding: 0;
}
</style>
