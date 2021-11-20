<template>
  <div class="score">
    <h3>Score</h3>
    <div class="player" v-for="(player, i) in players" :key="i">
      {{ player.nickname + " - " + player.score }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Field",
  props: {
    players: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters([, "getGame"]),
  },
  watch: {
    getInfoRoom(data) {
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
