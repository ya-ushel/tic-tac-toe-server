<template>
  <div>
    <Header />
    <div class="content">
      <UserList />
      <Rooms />
      <RoomInfo />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import RoomInfo from "../components/lobby/RoomInfo.vue";
import Rooms from "../components/lobby/Rooms.vue";
import UserList from "../components/lobby/UserList.vue";

export default {
  name: "Lobby",
  components: {
    Header,
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
  height: 100vh;
  width: 100%;
  display: flex;
}
</style>
