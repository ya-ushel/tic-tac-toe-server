<template>
  <div class="field">
    <div class="box" :style="`width: ${52 * size}px`">
      <div
        class="cell"
        v-for="(item, i) in data"
        :key="i"
        :class="{ matched: item.matched }"
      >
        <BaseIcon :name="item.value" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "../base/BaseIcon.vue";

export default {
  name: "Field",
  props: {
    data: {
      type: Array,
    },
    size: {
      type: Number,
    },
  },
  components: { BaseIcon },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.field {
  width: calc(100vw - 200px);
  display: flex;
  flex-direction: column;
}
.box {
  flex-wrap: wrap;
  display: flex;
}
.cell {
  width: 50px;
  height: 50px;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  svg {
    margin: auto;
  }
}
</style>
