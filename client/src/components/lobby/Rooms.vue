<template>
  <div class="rooms">
    <div class="filters-wrap">
      <div class="filter-name">
        <input type="text" />
      </div>
      <div class="filter-select">
        <v-select
          readonly
          v-model="filterPlayers"
          multiple
          attach
          chips
          :options="['foo', 'bar', 'sad', 'ad']"
        ></v-select>
      </div>
      <div class="filter-select">
        <v-select
          readonly
          v-model="filterField"
          multiple
          :options="['foo', 'bar', 'sad', 'ad']"
        ></v-select>
      </div>
      <div class="filter-select">
        <v-select
          readonly
          v-model="filterTime"
          multiple
          :options="['foo', 'bar', 'sad', 'ad']"
        ></v-select>
      </div>
    </div>

    <div class="rooms-wrap">
      <div class="rooms-container">
        <div class="header-string">
          <div class="header-string-number">№</div>
          <div class="header-string-name">Name</div>
          <div class="header-string-players">Players</div>
          <div class="header-string-size">Size field</div>
          <div class="header-string-time">Time round</div>
          <div class="header-string-lock"></div>
        </div>
        <div class="scroll">
          <div>
            <Room
              v-for="(item, i) in getRooms"
              :key="i"
              :index="i"
              :data="item"
            ></Room>
          </div>
        </div>
      </div>
    </div>
    <CreateRoom />
  </div>
</template>

<script>
import Room from "./Room.vue";
import CreateRoom from "./CreateRoom.vue";
import { mapGetters } from "vuex";
import { socket } from "../../sockets";
import vSelect from "vue-select";

export default {
  name: "Rooms",
  components: { Room, CreateRoom, vSelect },
  computed: {
    ...mapGetters(["getRooms"]),
  },
  props: {},
  data() {
    return {
      filterPlayers: null,
      filterField: null,
      filterTime: null,
    };
  },
  async beforeMount() {
    await this.$store.dispatch("getAllRooms");
    socket.on("room.created", async (data) => {
      console.log("room.created");
      await this.$store.dispatch("getAllRooms");
    });
    socket.on("room.user-joined", async (data) => {
      console.log("joined");
      await this.$store.dispatch("getAllRooms");
    });
    socket.on("room.user-left", async (data) => {
      console.log("left");
      await this.$store.dispatch("getAllRooms");
    });
  },
  methods: {
    async createRoom() {
      await this.$store.dispatch("createUserRooms");
      await this.$store.dispatch("getAllRooms");
    },
  },
};
</script>

<style lang="scss">
@import "@/style/style";
.filters-wrap {
  width: calc(100% - 32px);
  padding: 7px 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #414c6b;
  border-radius: 10px 10px 0 0;
}

.filter-select {
  width: calc(30% - 15px);
  cursor: pointer;
}

.filter-name {
  width: 100%;
  margin-bottom: 7px;
  input {
    width: 300px;
    height: 26px;
    display: flex;
    padding: 0;
    background: none;
    border: 1px solid rgba(60, 60, 60, 0.26);
    border-radius: 4px;
    white-space: normal;
    background: #fffffff0;
  }
}

.rooms {
  width: calc(100% - 300px);
  height: 100%;
  padding: 0 5px 0 50px;
  margin: 0 auto;
}

h3 {
  margin: 0px;
  text-align: start;
  font-weight: 500;
  font-size: 15px;
}

.header-string {
  display: flex;
  height: 15px;
  padding: 5px 10px 7px 10px;
  margin: 0;
  background: #1e80c1;
  width: calc(100% - 26px);
  direction: ltr;
  margin-left: 10px;
}

.header-string div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: white;
  text-align: center;
}

.header-string-number {
  width: 40px;
}

.header-string-name {
  width: calc(100% - 305px);
  padding: 0 5px;
}

.header-string-players,
.header-string-size,
.header-string-time {
  width: 85px;
  padding: 0 5px;
}

.header-string-lock {
  width: 20px;
}

.rooms-wrap {
  height: calc(100% - 293px);
  border: 3px solid #414c6b;
  width: calc(100% - 6px);
  border-radius: 0 0 10px 10px;
  background: #414c6b;
}

.rooms-container {
  width: calc(100% - 4px);
  margin-left: 2px;
  height: calc(100% - 2px);
  overflow-y: scroll;
  overflow-x: hidden;
  direction: rtl;
  border-radius: 0 0 5px 0;
}

.scroll {
  height: fit-content;
  direction: ltr;
  padding: 0;
  background: white;
  margin-left: 6px;
  min-height: calc(100% - 27px);
  border-radius: 0 0 4px 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.create-btn {
  display: flex;
  color: rgb(0, 22, 31);
}

.create-btn p {
  font-size: 15px;
  line-height: 25px;
  color: rgb(0, 22, 31);
  margin: 0 4px 0;
}

.create-btn b {
  font-size: 30px;
  line-height: 28px;
  color: rgb(0, 22, 31);
}

button {
  border: none;
  background: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
}
</style>
