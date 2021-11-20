<template>
  <div class="board">
    <div class="container">
      <Field
        :data="game === null ? [] : game.state.board.data"
        :size="game === null ? 0 : game.settings.boardSize"
      />
      <Score :players="game === null ? [] : game.players" />
    </div>
  </div>
</template>

<script>
import Field from "../components/board/Field.vue";
import Score from "../components/board/Score.vue";
import { mapGetters } from "vuex";
import { socket } from "../sockets";

export default {
  name: "Board",
  computed: {
    ...mapGetters(["getGameId, 'getGame", "getUser"]),
  },
  components: {
    Field,
    Score,
  },
  data() {
    return {
      game: null,
      myPlayer: 0,
    };
  },
  watch: {
    getGame() {
      console.log("GAMEEESTATE");
    },
  },
  async beforeMount() {
    this.$store.commit("setGameId", localStorage.getItem("gameId"));
    this.game = await this.$store.dispatch(
      "getGameStats",
      localStorage.getItem("gameId")
    );

    this.game.players.forEach((player) => {
      if (player.id === this.getUser.id) {
        this.myPlayer = player;
      }
    });

    console.log(this.game, "game");

    if (this.myPlayer.status !== "joined") {
      socket.emit("player.join", {
        id: this.myPlayer.id,
        gameId: this.game.id,
      });
    }

    socket.on("room.started", async (gameId) => {
      this.$store.commit("setGameId", gameId);
      await this.$store.dispatch("getGame", gameId);
    });

    const updateGame = ({ game }) => {
      console.log("updateGame", game);
      this.$store.commit("setGame", game);
    };

    socket.on("player.joined", updateGame);
    socket.on("player.leaved", updateGame);
    socket.on("game.started", updateGame);
    socket.on("game.updated", updateGame);
  },
  methods: {},
};
</script>

<style>
.board .container {
  /* display: flex;
  justify-content: space-between; */
}
</style>
