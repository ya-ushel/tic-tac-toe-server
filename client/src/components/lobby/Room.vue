<template>
  <div class="room-wrap">
    <div
      class="room"
      @click="selectRoom"
      :class="{ active: getInfoRoom && getInfoRoom.id === data.id }"
    >
      <div class="room-number">{{ index }}</div>
      <div class="room-name">{{ data.name }}</div>
      <div class="room-players">
        {{ data.users.length + "/" + data.options.players }}
      </div>
      <div class="room-size">{{ data.options.boardSize }}</div>
      <div class="room-timer">{{ data.options.timer }}</div>
      <div class="room-lock"></div>
    </div>
    <!-- <div
      v-if="getInfoRoom && getInfoRoom.id === data.id"
      class="right-arrow"
    ></div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getInfoRoom"]),
  },
  name: "Room",
  props: {
    data: {},
    index: 0,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async selectRoom(e) {
      await this.$store.commit("setInfoRoom", this.data);
    },
  },
};
</script>

<style>
.room-wrap {
  display: flex;
  position: relative;
}
.room {
  display: flex;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 3px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.room-wrap:nth-child(even) .room {
  background: #a5def23b;
}

.room.active {
  background: #a5def2 !important;
}

.room div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  text-align: center;
}

.room-number {
  width: 40px;
}

.room-name {
  width: calc(100% - 320px);
}

.room-players,
.room-timer,
.room-size {
  width: 85px;
}

.room-lock {
  width: 20px;
}

.right-arrow {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  bottom: calc(50% - 10px);
}

p {
  margin: 0 10px 0 0;
  overflow: hidden;
  padding: 0;
}

b {
  overflow: hidden;
}
</style>
