<template>
  <div class="settings">
    <h3>Settings</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Settings",
  computed: {
    ...mapGetters(["getRooms"]),
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    async createRoom() {
      await this.$store.dispatch("createUserRooms");
      await this.$store.dispatch("getAllRooms");
    },
  },
};
</script>

<style>
.settings {
  color: #274482;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 180px;
  background: #d5da35;
  border: 2px solid #d5da35;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin: 16px 0 0 0;
}
</style>
