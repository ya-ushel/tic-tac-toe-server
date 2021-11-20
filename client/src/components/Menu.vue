<template>
  <div class="menu">
    <div class="profile">
      <div class="img">
        <img src="../assets/img/logo.jpg" alt="" />
      </div>
      <div class="name">
        <h1>{{ getUser.nickname }}</h1>
      </div>
      <!-- <h1>{{ getUser.id }}</h1> -->
    </div>
    <div class="items">
      <div
        class="item"
        :class="{ active: item == $route.name }"
        v-for="(item, i) in menuItems"
        :key="i"
      >
        <div class="svg-wrap" @click="changeRoute(item)">
          <BaseIcon :name="item" />
        </div>
        <div class="border-radius-top">
          <div class="content"></div>
        </div>
        <div class="border-radius-bottom">
          <div class="content"></div>
        </div>
      </div>
    </div>
    <div class="figure">
      <div class="img">
        <BaseIcon :name="'help'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "./base/BaseIcon.vue";

export default {
  name: "Menu",
  props: {},
  components: {
    BaseIcon,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  data() {
    return {
      menuItems: ["best", "lobby", "board", "help"],
    };
  },
  mounted() {},
  methods: {
    changeRoute(route) {
      console.log(route, "roure");
      this.$router.push({ name: route }).catch((err) => {});
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/style";
</style>
