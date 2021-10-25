<template>
  <div class="header">
    <!-- <h1>{{ getUser.user.login }}</h1>
    <h1>{{ getUser.user.id }}</h1> -->
    <div class="logo">
      <img src="../assets/img/logo.jpg" alt="" />
    </div>
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
  mounted() {
    console.log(this.getUser, "getUser");
  },
  methods: {},
};
</script>

<style>
.header {
  width: 100%;
  height: 100px;
}
h1 {
  padding: 0;
  margin: 0;
}
.logo {
  height: 100px;
  width: 100px;
  display: flex;
  margin: 0 auto;
}
</style>
