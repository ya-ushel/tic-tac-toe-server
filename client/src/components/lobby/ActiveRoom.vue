<template>
  <div class="room-active">
    <h3>Waiting for players</h3>
    <div class="active-room" v-if="getCurrentRoom">
      <div class="active-room-content">
        <div
          v-for="(item, i) in 10"
          :key="i"
          :class="{ is: i < getCurrentRoom.length }"
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
    ...mapGetters(["getCurrentRoom", "getUser"]),
    isUser() {
      // this.userInRoom = false;
    },
  },
  watch: {
    getInfoRoom(data) {
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
  methods: {},
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
  height: 55px;
  background: #1e80c1;
  border-radius: 10px;
  padding: 0 5px 5px;
  margin: 5px 0;
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
  width: 19px;
  height: 19px;
  border-radius: 3px;
  background: white;
}

.active-room-content .circle.is {
  background: #274482;
}
</style>
