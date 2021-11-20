<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lobby from "./pages/Lobby.vue";
import { checkAuthState } from "./firebase";
import { initSockets } from "./sockets";
import Menu from "./components/Menu.vue";
import { socket } from "./sockets";

export default {
  name: "App",
  components: { Lobby, Menu },
  computed: {
    ...mapGetters(["getUser", "getStateGame"]),
  },
  data() {
    return {};
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getterUser() {
      let nickname = localStorage.getItem("nickname");
      if (nickname === null) {
        checkAuthState({
          nickname: "Player" + this.getRandomArbitrary(1000, 9999),
          avatarColor: "#15f3b8",
          gameHistory: [],
          coins: 500,
          experience: 0,
          rating: 1000,
        });
      }
      let user = {
        nickname: localStorage.getItem("nickname"),
        id: localStorage.getItem("id"),
        avatarColor: "#15f3b8",
        gameHistory: [],
        coins: 500,
        experience: 0,
        rating: 1000,
      };
      this.$store.commit("setUser", user);
      this.getStateGame
        ? this.$router.push({ name: "board" }).catch((err) => {})
        : this.$router.push({ name: "lobby" }).catch((err) => {});

      initSockets();
    },
  },
  async beforeMount() {
    this.getterUser();
    socket.on("room.started", async (gameId) => {
      this.$store.commit("setGameId", gameId);
      localStorage.setItem("gameId", gameId);
      await this.$store.dispatch("getGameStats", gameId);
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap");
#app,
body {
  font-family: "Roboto Slab", serif;
  display: flex;
}

#app {
  width: 100%;
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
}

body {
  margin: 5px;
  padding: 0;
  width: calc(100vw - 10px);
  height: calc(100vh - 10px);
  overflow: hidden;
}
</style>
