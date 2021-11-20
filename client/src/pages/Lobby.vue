<template>
  <div class="content">
    <!-- <UserList /> -->
    <Rooms />
    <RoomInfo />
  </div>
</template>

<script>
import RoomInfo from "../components/lobby/RoomInfo.vue";
import Rooms from "../components/lobby/Rooms.vue";
import UserList from "../components/lobby/UserList.vue";

export default {
  name: "Lobby",
  components: {
    RoomInfo,
    Rooms,
    UserList,
  },
  props: {
    count: Number,
  },
  data() {
    return {
      field: [],
      title: "",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.content {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
