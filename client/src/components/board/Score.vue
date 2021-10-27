<template>
  <div class="score">
    <h3>Score</h3>
    <div class="player" v-for="(player, i) in getBoard.players" :key="i">
      {{ player.name + " - " + player.score }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Field",
  props: {},
  computed: {
    ...mapGetters(["getBoard"]),
  },
  watch: {
    getUserRoom(data) {
      data?.playerList?.forEach((element) => {
        if (element === this.getUser.id) {
          this.userInRoom = true;
          return;
        } else this.userInRoom = false;
      });
    },
  },
  data() {
    return {
      userInRoom: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.player {
  padding: 20px;
  border-radius: 5px;
  border: 1px solid;
}
</style>
