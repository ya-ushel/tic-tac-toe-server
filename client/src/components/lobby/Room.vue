<template>
  <div class="room-wrap">
    <div class="room" @click="selectRoom">
      <div class="room-number">{{ index }}</div>
      <div class="room-name">{{ data.name }}</div>
      <div class="room-players">{{ data.playerList.length }}</div>
      <div class="room-size">{{ data.index }}</div>
      <div class="room-lock">{{ data.index }}</div>
    </div>
    <div v-if="getUserRoom.id === data.id" class="right-arrow"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUserRoom"]),
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
      await this.$store.commit("setUserRoom", this.data);
      // console.log(this.data, "item");
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
  box-shadow: 0px 15px 10px -15px #274482;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

/* .room:hover {
  font-size: 18px; 
  padding: 15px 10px;
} */

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
  width: calc(50% - 40px);
}

.room-players {
  width: calc(25% - 20px);
}

.room-size {
  width: 25%;
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

.right-arrow::after {
  content: "";
  position: absolute;
  left: 25px;
  border: 10px solid transparent;
  border-left: 15px solid #d5da35;
  border-radius: 5px;
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
