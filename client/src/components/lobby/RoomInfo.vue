<template>
  <div class="room-info">
    <h3>Select room</h3>
    <div class="select-room" v-if="getUserRoom">
      <div class="select-room-header">{{ getUserRoom.name }}</div>
      <div class="select-room-content">
        <h5>{{ getUserRoom.id }}</h5>
        <h3>Player list</h3>
        <div
          class="player-list"
          v-for="(item, i) in getUserRoom.playerList"
          :key="i"
        >
          <b>{{ i + 1 }}</b>
          <p>{{ item }}</p>
        </div>
        <div class="button-wrap">
          <button v-if="!userInRoom" class="join-btn" @click="joinRoom">
            Join
          </button>
          <button v-else class="leave-btn" @click="leaveRoom">Leave</button>
          <button class="start-btn" @click="startGame">Start</button>
        </div>
      </div>
    </div>
    <ActiveRoom />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActiveRoom from "./ActiveRoom.vue";

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
    async startGame() {
      await this.$store.commit("setGameState", true);
      this.$router.push({ name: "Board" }).catch((err) => {});
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
.room-info {
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: calc(100vh - 125px);
}

.select-room-header {
  padding: 10px 0;
  border-radius: 10px 10px 0 0;
  text-align: center;
  background: #d5da35;
  color: black;
}

.select-room-content {
  height: calc(100% - 65px);
  padding: 10px;
  border-radius: 0 0 10px 10px;
  border: 2px solid #d5da35;
  position: relative;
}

.select-room {
  height: calc(100% - 160px);
}

.room-info .button-wrap {
  position: absolute;
  left: calc(50% - 6vw);
  bottom: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.room-info button {
  width: 12vw;
  margin: 0;
  padding: 10px 0;
  color: aliceblue;
  font-weight: 900;
}

.room-info .join-btn {
  color: #274482;
  background: #d5da35;
}

.room-info .start-btn {
  bottom: 50px;

  background: lightblue;
}

.room-info .leave-btn {
  background: rgb(219 68 68);
}

.room-info h1 {
  font-size: 24px;
}

.player-list {
  display: flex;
  font-size: 14px;
  border-radius: 5px;
  border: 2px solid #274482;
}

.player-list b {
  text-align: end;
  width: 20px;
  padding-right: 3px;
  color: white;
  background: #274482;
}

.player-list p {
  background: white;
  width: calc(100% - 30px);
  padding-left: 3px;
  margin: 0;
}
</style>
