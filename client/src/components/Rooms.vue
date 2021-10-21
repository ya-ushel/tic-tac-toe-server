<template>
  <div class="rooms">
    <button @click="createRoom">Создать комнату</button>
    <Room v-for="(item, i) in getRooms" :key="i" :data="item" />
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
  watch: {
    getRooms(data) {
      console.log(data, "data");
      this.rooms = data;
    },
  },
  props: {},
  data() {
    return {
      rooms: [],
    };
  },
  async beforeMount() {
    await this.$store.dispatch("getAllRooms");
  },
  async mounted() {
    console.log(this.rooms, "rooms");
  },
  methods: {
    async createRoom() {
      console.log("join");
      await this.$store.dispatch("createUserRooms");
    },
  },
};
</script>

<style>
.rooms {
  width: calc(100% - 340px);
  height: calc(100% - 40px);
  background: palegreen;
  padding: 20px;
}

button {
  background: yellow;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
}
</style>
