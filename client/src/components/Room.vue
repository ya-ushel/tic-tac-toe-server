<template>
  <div class="room" @click="selectRoom">
    <p>name</p>
    <b>{{ data.name }}</b>
    <p>playerList</p>
    <b>{{ data.id }}</b>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: {},
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
.room {
  width: calc(100% - 20px);
  display: flex;
  padding: 10px;
  color: white;
  cursor: pointer;
}

.room:hover {
  background: #464646;
}

p {
  margin: 0 10px 0 0;
  padding: 0;
}
</style>
