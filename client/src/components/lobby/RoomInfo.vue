<template>
  <div class="room-info">
    <div class="select-room" v-if="getInfoRoom">
      <div class="select-room-content">
        <div class="select-room-header">
          {{ getInfoRoom.name }}
        </div>
        <h3>Players</h3>
        <div
          class="player-list"
          v-for="(item, i) in getInfoRoom.users"
          :key="i"
        >
          <div class="text">
            <b>{{ i + 1 }}</b>
            <p>{{ item.nickname }}</p>
          </div>

          <div class="figure-wrap" :style="`background: ${playersColor[i]}`">
            <BaseIcon :name="'lobby'" />
          </div>
        </div>
        <div class="button-wrap">
          <button v-if="!isUser" class="join-btn" @click="joinRoom">
            Join
          </button>
          <button v-else class="leave-btn" @click="leaveRoom">
            Leave
          </button>
          <button
            class="start-btn"
            v-if="getUser.id === getInfoRoom.hostId"
            @click="startGame"
          >
            Start
          </button>
        </div>
      </div>
      <div class="room-chat"></div>
    </div>
    <p v-else class="not-selected">Room didn't selected</p>
    <ActiveRoom />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActiveRoom from "./ActiveRoom.vue";
import { socket } from "../../sockets";
import BaseIcon from "../base/BaseIcon.vue";
import { leaveRoom, joinRoom } from "../../firebase";

export default {
  name: "RoomInfo",
  props: {},
  components: { ActiveRoom, BaseIcon },
  computed: {
    ...mapGetters(["getInfoRoom", "getUser", "getCurrentRoom"]),
    isUser() {
      for (let i = 0; i < this.getInfoRoom?.users?.length; i++) {
        if (this.getInfoRoom.users[i].id === this.getUser.id) {
          return true;
        }
      }
    },
  },
  watch: {
    getInfoRoom(val) {},
    room(data) {},
    userInRoom(data) {},
  },
  data() {
    return {
      playersColor: [
        "#e13030",
        "#3ac540",
        "#0057ff",
        "#e5e252",
        "##ff81cb",
        "##30e9d1",
        "##ff7530",
        "##c36cf7",
        "#0057ff",
        "#e5e252",
      ],
      room: [],
      userInRoom: false,
    };
  },
  methods: {
    async joinRoom() {
      await joinRoom(this.getInfoRoom.id, this.getUser.id);
      socket.emit("room.user-join");
      this.$store.commit("setCurrentRoom", this.getInfoRoom);
    },
    async startGame() {
      await this.$store.commit("setGameState", true);
      this.$router.push({ name: "Board" }).catch((err) => {});
    },
    async leaveRoom() {
      await leaveRoom(this.getCurrentRoom.id, this.getUser.id);
      socket.emit("room.leave", { roomId: this.getCurrentRoom.id });
      this.$store.commit("setCurrentRoom", []);
    },
  },
};
</script>

<style lang="scss">
.room-info {
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 100vh;

  .qwe {
    color: aliceblue;
  }
}

.select-room-header {
  padding: 10px 0;
  text-align: center;
  color: #173f5f;
  font-size: 18px;
  font-weight: 600;
}

.select-room-content {
  height: calc(100% - 200px);
  padding: 0 10px;
  border-radius: 0 0 10px 10px;
  position: relative;
}

.select-room-content h3 {
  font-weight: 400;
  font-size: 9px;
  background: #284483;
  color: white;
  width: fit-content;
  padding: 0px 7px;
  margin-left: 32px;
  border-radius: 20px 20px 0 0;
}

.select-room {
  height: calc(100% - 89px);
  background: #a6def3;
  border-radius: 10px;
  border: 5px solid #1f80c1;
}

.room-info .button-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
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
  justify-content: space-between;
  font-size: 14px;
  border-radius: 5px;
  border: 2px solid #274482;
  margin-bottom: 4px;
  background: #ffffffb3;
}

.player-list .text {
  display: flex;
  margin: 2px;
}

.player-list b {
  text-align: end;
  width: 15px;
  color: white;
  background: #274482;
  border-radius: 5px;
  height: 15px;
  font-size: 14px;
  padding: 3px;
  line-height: 15px;
}

.player-list p {
  width: 100px;
  padding-left: 3px;
  margin: 0 5px;
}

.figure-wrap {
  height: 25px;
  width: 25px;
  border-radius: 0 2px 2px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    width: 21px;
    height: 21px;
    margin: auto;

    path {
      fill: white;
      border: 1px solid black;
    }
  }
}

.not-selected {
  width: fit-content;
  height: fit-content;
  margin: auto;
  display: block;
}
</style>
