<template>
  <div class="rooms">
    <!-- <button class="create-btn" @click="createRoom">
        <p>new room</p>
        <b>+</b>
      </button> -->
    <h3>Rooms list</h3>
    <div class="header-string">
      <div class="header-string-number"></div>
      <div class="header-string-name">Name</div>
      <div class="header-string-players">Count players</div>
      <div class="header-string-size">Size field</div>
      <div class="header-string-lock"></div>
    </div>
    <div class="rooms-container">
      <div class="scroll">
        <Room v-for="(item, i) in getRooms" :key="i" :index="i" :data="item" />
      </div>
    </div>
    <CreateRoom />
  </div>
</template>

<script>
import Room from "../components/Room.vue";
import CreateRoom from "../components/CreateRoom.vue";
import { mapGetters } from "vuex";

export default {
  name: "Rooms",
  components: { Room, CreateRoom },
  computed: {
    ...mapGetters(["getRooms"]),
  },
  props: {},
  data() {
    return {};
  },
  async beforeMount() {
    await this.$store.dispatch("getAllRooms");
  },
  methods: {
    async createRoom() {
      await this.$store.dispatch("createUserRooms");
      await this.$store.dispatch("getAllRooms");
    },
  },
};
</script>

<style>
.rooms {
  width: 50vw;
  height: calc(100vh - 100px);
  padding: 0 20px;
  margin: 0 auto;
}

h3 {
  margin: 0px auto 10px auto;
  text-align: center;
}

.header-string {
  display: flex;
  height: 40px;
  padding: 0 30px;
  margin: 0;
  background: #d5da35;
  box-shadow: 0px 15px 8px -13px #b2b718;
  border-radius: 10px;
}

.header-string div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  text-align: center;
}

.header-string-number {
  width: 40px;
}

.header-string-name {
  width: calc(50% - 40px);
}

.header-string-players {
  width: calc(25% - 20px);
}

.header-string-size {
  width: 25%;
}

.header-string-lock {
  width: 20px;
}

.rooms-container {
  border-radius: 0 3px 3px 3px;
  height: calc(100% - 260px);
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
  overflow-x: hidden;
  direction: rtl;
}

.scroll {
  height: fit-content;
  direction: ltr;
  padding: 0 20px;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #d5da358c;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #d5da358c;
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
