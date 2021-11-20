<template>
  <div class="user-list">
    <h3>User list</h3>
    <div class="user-list-wrap">
      <div class="scroll">
        <div v-for="(item, i) in 100" :key="i" class="user">{{ i }}</div>
      </div>
    </div>
    <Settings />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Settings from "./Settings.vue";

export default {
  name: "UserList",
  props: {},
  components: { Settings },
  computed: {
    ...mapGetters(["getUsers"]),
    isUser() {
      // this.userInRoom = false;
    },
  },
  watch: {},
  data() {
    return {
      userInRoom: false,
    };
  },
  async beforeMount() {
    await this.$store.dispatch("getAllUsers");
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.user-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20vw;
  height: calc(100vh - 130px);
}

.user-list-wrap {
  overflow: scroll;
  height: calc(100% - 180px);
}

.user {
  color: white;
  background: #274482;
  margin-bottom: 5px;
}

.user-list ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

.user-list ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #274482;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.user-list ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

.user-list ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #274482;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.user-list .scroll {
  padding: 0 5px 0 0;
}
</style>
