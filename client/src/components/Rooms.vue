<template>
  <div class="rooms">
    <div class="rooms-header">
      <div class="rooms-header-title">
        <p>List rooms</p>
      </div>
      <button class="create-btn" @click="createRoom">
        <p>new room</p>
        <b>+</b>
      </button>
    </div>

    <div class="rooms-container">
      <div class="scroll">
        <Room v-for="(item, i) in getRooms" :key="i" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Room from "../components/Room.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: { Room },
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
  width: calc(100% - 340px);
  height: calc(100vh - 100px);
  padding: 20px;
  background: #c9c9c9;
}

.rooms-header {
  display: flex;
  justify-content: space-between;
}

.rooms-header-title {
  height: 40px;
  width: 200px;
  background: rgb(0, 22, 31);
  position: relative;
  border-radius: 3px 0 0;
}

.rooms-header-title:after {
  content: "";
  position: absolute;
  right: -20px;
  top: 0;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid rgb(0, 22, 31);
  clear: both;
}

.rooms-header p {
  margin-left: 10px;
  line-height: 40px;
  font-size: 25px;
  color: white;
}

.rooms-container {
  padding: 5px;
  border: 3px solid rgb(0, 22, 31);
  border-radius: 0 3px 3px 3px;
  background: linear-gradient(to bottom, #555555 0%, #464646 100%);
  box-shadow: 0px 0px 6px 2px #161616 inset;
  height: calc(100vh - 186px);
  overflow: scroll;
}

.scroll {
  height: fit-content;
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
}
</style>
