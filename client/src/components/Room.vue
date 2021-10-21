<template>
  <div class="room">
    <p>name</p>
    <b>{{ data.name }}</b>
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
  methods: {},
};
</script>

<style>
.room {
  width: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
}

p {
  margin: 0 10px 0 0;
  padding: 0;
}
</style>
