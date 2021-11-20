<template>
  <div class="create-room-wrap">
    <div class="create-room">
      <div class="input-wrap">
        <label for="room-name">Room name</label>
        <input
          class="room-name-input"
          placeholder="Room name"
          name="room-name"
          type="text"
          v-model="nameRoom"
        />
        <div class="password-wrap">
          <BaseIcon :name="pass ? 'lock' : 'unlock'" />
          <input v-model="pass" type="text" maxlength="4" />
        </div>
      </div>
      <div class="select-wrap">
        <div class="select-count">
          <label for="select-count">Count player</label>
          <select name="select-count" v-model="selectCoun">
            <option v-for="(item, i) in countPlayers" :key="i">{{
              item
            }}</option>
          </select>
        </div>
        <div class="select-size">
          <label for="select-size">Size field</label>
          <select name="select-size" v-model="selectSize">
            <option v-for="(item, i) in sizeField" :key="i">{{
              item + "x" + item
            }}</option>
          </select>
        </div>
        <div class="select-time">
          <label for="select-time">Time round</label>
          <select name="select-time" v-model="selectTime">
            <option v-for="(item, i) in timeRound" :key="i">{{
              item + "sec"
            }}</option>
          </select>
        </div>
      </div>
      <button @click="createRoom">Create room</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { socket } from "../../sockets";
import BaseIcon from "../base/BaseIcon.vue";

export default {
  name: "CreateRoom",
  props: {},
  components: { BaseIcon },
  computed: {
    ...mapGetters(["getUser"]),
  },
  data() {
    return {
      nameRoom: "",
      selectCoun: 5,
      countPlayers: [5, 6, 7, 8, 9],
      selectSize: "5x5",
      sizeField: [5, 6, 7, 8, 9],
      selectTime: "5sec",
      timeRound: [5, 10, 20, 30, 60],
      pass: "",
    };
  },
  methods: {
    async createRoom() {
      await this.$store.dispatch("createRoom", {
        name: this.nameRoom,
        options: {
          boardSize: this.selectSize,
          players: this.selectCoun,
          timer: this.selectTime,
        },
      });
      socket.emit("room.created");
    },
  },
  beforeMount() {
    this.nameRoom = `${this.getUser.nickname}'s room`;
  },
};
</script>

<style>
.select-wrap {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.create-room button {
  font-size: 18px;
  background: #f6d55c;
  right: 20px;
  padding: 8px 0 0px;
  color: #ed553b;
  border-radius: 100px 100px 0 0;
  width: 200px;
  margin: 0 auto;
}

.select-wrap div {
  display: flex;
  justify-content: center;
  width: fit-content;
  max-width: 33%;
}

.select-wrap label {
  font-size: 16px;
  margin-right: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.select-wrap select {
  border-radius: 5px;
  background: #20649c;
  cursor: pointer;
  color: #f6d55c;
  font-weight: 700;
  width: 65px;
  height: 50px;
  text-align: center;
}

.room-name-input {
  border: none;
  border-bottom: 3px solid #20649c;
  width: 300px;
  font-size: 18px;
  font-weight: 600;
  background: none;
  color: #ed553b;
  margin-bottom: 3px;
}

.password-wrap {
  margin-left: 26px;
  display: flex;
}

.password-wrap svg {
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.password-wrap svg path {
  fill: #20649c;
}

.password-wrap input {
  border: none;
  border-bottom: 3px solid #20649c;
  width: 40px;
  font-size: 18px;
  font-weight: 600;
  background: none;
  color: #ed553b;
  margin-bottom: 3px;
}

.room-name-input::placeholder {
  color: rgba(255, 255, 255, 0.514);
}

.room-name-input:focus,
input:focus,
.select-wrap select:focus {
  outline: none;
}

.create-room-wrap {
  margin-top: 5px;
}

.create-room-wrap .input-wrap {
  margin-top: 20px;
  display: flex;
  padding: 0 10px;
}

.create-room-wrap .input-wrap label {
  font-size: 16px;
  font-weight: 600;
  color: #20649c;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 5px;
}

.create-room {
  position: relative;
  color: #20649c;
  font-size: 16px;
  font-weight: 600;
  height: 193px;
  border: 5px solid #f6d55c;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
