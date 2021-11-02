<template>
  <div id="app">
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lobby from "./pages/Lobby.vue";
import { checkAuthState } from "./firebase";

export default {
  name: "App",

  components: { Lobby },
  computed: {
    ...mapGetters(["getUser", "getStateGame"]),
  },
  methods: {
    getterUser() {
      let login = localStorage.getItem("login");
      if (login === null) {
        checkAuthState(Date.now());
      }
      let user = {
        login: localStorage.getItem("login"),
        id: localStorage.getItem("id"),
      };
      this.$store.commit("setUser", user);

      this.getStateGame
        ? this.$router.push({ name: "Board" }).catch((err) => {})
        : this.$router.push({ name: "Lobby" }).catch((err) => {});
      // this.$socket.emit("userJoined", user);
    },
  },
  // sockets: {
  //   connect: function() {
  //     console.log("socket connected");
  //   },
  //   customEmit: function(data) {
  //     console.log(
  //       'this method was fired by the socket server. eg: io.emit("customEmit", data)'
  //     );
  //   },
  // },
  mounted() {
    this.getterUser();
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
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

body {
  display: flex;
  justify-content: center;
  padding: 10px;
  width: calc(100vw - 20px);
}
</style>
