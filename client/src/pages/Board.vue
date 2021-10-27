<template>
  <div class="board">
    <Header />
    <button @click="toLobby">go to lobby</button>

    <div class="container">
      <Field />
      <Score />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Field from "../components/board/Field.vue";
import Score from "../components/board/Score.vue";

export default {
  name: "Board",
  components: {
    Header,
    Field,
    Score,
  },
  props: {
    count: Number,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async toLobby() {
      await this.$store.commit("setGameState", false);
      this.$router.push({ name: "Lobby" }).catch((err) => {});
    },
  },
};
</script>

<style>
.board .container {
  display: flex;
  justify-content: space-between;
}
</style>
