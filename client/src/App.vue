<template>
  <div id="app"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {},
  computed: {
    ...mapGetters(["getUser"]),
  },
  mounted() {
    // !this.getUser ? this.$router.push("/lobby") : this.$router.push("/");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
