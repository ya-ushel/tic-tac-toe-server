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
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap");

#app,
body {
  font-family: "Roboto Slab", serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
