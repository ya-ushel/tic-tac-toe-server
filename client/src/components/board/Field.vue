<template>
  <div class="field">
    <div class="string" v-for="(item, i) in getBoard.size" :key="i">
      <div class="cell" v-for="(cell, j) in getBoard.size" :key="`${i} ${j}`">
        {{ `${i} ${j}` }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Field",
  props: {},
  computed: {
    ...mapGetters(["getBoard"]),
  },
  watch: {
    getUserRoom(data) {
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
.field {
  display: flex;
  flex-direction: column;
}
.string {
  display: flex;
}
.cell {
  width: 50px;
  height: 50px;
  border: 1px solid;
  border-radius: 5px;
}
</style>
