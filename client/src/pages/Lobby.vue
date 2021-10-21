<template>
  <div>
    <Header />
    <div class="content">
      <Rooms />
      <RoomInfo />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import RoomInfo from "../components/RoomInfo.vue";
import Rooms from "../components/Rooms.vue";

export default {
  name: "Lobby",
  components: {
    Header,
    RoomInfo,
    Rooms,
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
  height: 300px;
  min-height: 600px;
  width: 100%;
  display: flex;
}
</style>
