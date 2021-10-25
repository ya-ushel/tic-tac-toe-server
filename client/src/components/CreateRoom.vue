<template>
  <div class="create-room">
    <h3>Create room</h3>
    <label for="room-name"></label>
    <input
      class="room-name-input"
      placeholder="Room name"
      name="room-name"
      type="text"
    />
    <div class="select-wrap">
      <div class="select-count">
        <label for="select-count">Count player</label>
        <select name="select-count" v-model="selectCoun">
          <option v-for="(item, i) in countPlayers" :key="i">{{ item }}</option>
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
    <button>Create room</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CreateRoom",
  props: {},
  computed: {
    ...mapGetters(["getUser"]),
  },
  data() {
    return {
      selectCoun: null,
      countPlayers: [5, 6, 7, 8, 9],
      selectSize: null,
      sizeField: [5, 6, 7, 8, 9],
      selectTime: null,
      timeRound: [5, 10, 20, 30, 60],
    };
  },
  mounted() {
    console.log(this.getUser, "getUser");
  },
  methods: {},
};
</script>

<style>
.select-wrap {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.create-room button {
  margin-top: 20px;
  font-size: 16px;
  background: #d5da35;
  bottom: 10px;
  position: absolute;
  right: 20px;
  padding: 5px 20px;
  color: #274482;
}

.select-wrap div {
  display: flex;
  justify-content: center;
  width: fit-content;
  max-width: 33%;
}

.select-wrap label {
  font-size: 15px;
  margin-right: 6px;
}

.select-wrap select {
  border-radius: 5px;
  border: 2px solid#d5da35;
  background: #d5da35;
  cursor: pointer;
  color: #274482;
  font-weight: 700;
}

.room-name-input {
  border: none;
  border-bottom: 3px solid#d5da35;
  width: calc(100% - 8px);
  font-size: 15px;
  background: none;
  color: white;
}

.room-name-input::placeholder {
  color: rgba(255, 255, 255, 0.514);
}

.room-name-input:focus,
input:focus,
.select-wrap select:focus {
  outline: none;
}

.create-room {
  position: relative;
  color: white;
  height: 125px;
  background: #274482;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin: 10px 0;
}
</style>
