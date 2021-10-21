<template>
  <div class="header">
    <h1>{{ getUser.login }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  props: {},
  computed: {
    ...mapGetters(["getUser"]),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.header {
  width: 100%;
  height: 100px;
  background: rebeccapurple;
}
h1 {
  padding: 0;
  margin: 0;
}
</style>
