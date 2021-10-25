<template>
  <div class="room-active">
    <h3>Wait players</h3>
    <div class="active-room" v-if="getUserRoom">
      <div class="active-room-header">{{ getUserRoom.name }}</div>
      <div class="active-room-content">
        <div
          v-for="(item, i) in 10"
          :key="i"
          :class="{ is: i < getUserRoom.playerList.length }"
          class="circle"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActiveRoom from "./Rooms.vue";

export default {
  name: "RoomInfo",
  props: {},
  components: { ActiveRoom },
  computed: {
    ...mapGetters(["getUserRoom", "getUser"]),
    isUser() {
      // this.userInRoom = false;
    },
  },
  watch: {
    getUserRoom(data) {
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
  methods: {
    async joinRoom() {
      // await this.$store.dispatch("createUserRooms");
    },
    async leaveRoom() {
      this.userInRoom = true;
      await this.$store.dispatch("leaveUserRooms");
      await this.$store.dispatch("getAllRooms");
    },
  },
};
</script>

<style>
.room-active h3 {
  margin: 0;
  text-align: center;
}

.room-active {
  color: #274482;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 80px;
  background: #d5da35;
  border: 2px solid #d5da35;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin: 16px 0 0 0;
}

.active-room-header {
  margin-bottom: 10px;
  text-align: center;
}

.active-room-content {
  display: flex;
  position: relative;
  justify-content: space-between;
}

.active-room-content .circle {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  border: 2px solid #274482;
}

.active-room-content .circle.is {
  background: #274482;
}
</style>
