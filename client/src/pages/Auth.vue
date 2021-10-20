<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="field">
      <div
        v-for="item in field"
        :key="item.number"
        class="item"
        :style="
          `width:calc((100% / ${count}) - 10px); 
        height:calc((100% / ${count}) - 10px)`
        "
        @click="selectItem(item)"
        @mouseover="item.hover = 'w'"
        @mouseleave="item.hover = ''"
      >
        {{ item.value }}
        <p v-if="item.value === ''">{{ item.hover }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  props: {
    count: Number,
  },
  data() {
    return {
      field: [],
      title: "",
    };
  },
  mounted() {
    let numCell = 0;
    for (let i = 0; i < this.count; i++) {
      for (let j = 0; j < this.count; j++) {
        this.field.push({
          number: numCell,
          value: "",
          hover: "",
          cord: [i, j],
        });
        numCell++;
      }
    }
  },
  methods: {
    selectItem(i) {
      if (this.title === "") i.value = "†";
      this.checkWin(i.value);
    },
    checkWin(val) {
      let winCounts = 0;
      if (this.title === "") {
        for (let k = 0; k <= this.field.length; k++) {
          if (winCounts === 3) {
            return (this.title = `Победа ${val}`);
          } else if (this.field[k].value === val) {
            winCounts++;
          }
        }
      }
    },
  },
};
</script>

<style>
.field {
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}

.item {
  background: aquamarine;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 40px;
  font-weight: 900;
  cursor: pointer;
  transition: all ease 0.3s;
}

.item:active {
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.item p {
  color: #65d9b2;
}
</style>
