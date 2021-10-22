<template>
  <div class="room-info">
    <div v-if="getUserRoom">
      <h1>{{ getUserRoom.name }}</h1>
      <h5>{{ getUserRoom.id }}</h5>
      <h3>Player list</h3>
      <div
        class="player-list"
        v-for="(item, i) in getUserRoom.playerList"
        :key="i"
      >
        <b>{{ i }}</b>
        <p>{{ item }}</p>
      </div>
    </div>
    <div class="button-wrap">
      <button class="join-btn" @click="joinRoom">Join</button>
      <button class="leave-btn" @click="leaveRoom">Leave</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RoomInfo",
  props: {},
  computed: {
    ...mapGetters(["getUserRoom"]),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async joinRoom() {
      // await this.$store.dispatch("createUserRooms");
    },
    async leaveRoom() {
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
  justify-content: space-between;
  width: 260px;
  height: calc(100vh - 140px);
  padding: 20px;
  background: #787878;
}

.room-info .button-wrap {
  display: flex;
  justify-content: center;
}

.room-info button {
  margin: 0 10px;
  padding: 10px;
  color: aliceblue;
}

.room-info .join-btn {
  background: rgb(28, 77, 0);
}

.room-info .leave-btn {
  background: rgb(110, 0, 0);
}

.room-info h1 {
  font-size: 24px;
}

.player-list {
  display: flex;
  font-size: 14px;
}

.player-list b {
  margin-right: 10px;
}

.player-list p {
  background: white;
  padding: 0 5px;
}

.room-info h3 {
  font-size: 14px;
  margin: 0 0 2px 0;
}
</style>
