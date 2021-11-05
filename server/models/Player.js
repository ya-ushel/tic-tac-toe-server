const { Model } = require("./Model");

const defaultShapes = [
  "cross",
  "circle",
  "triangle",
  "square",
  "hexagon",
  "romb",
  "triangle-down",
  "plus",
];
const defaultColors = [
  "#e63946",
  "#457b9d",
  "#52b788",
  "#f07167",
  "#a01a58",
  "#15616d",
  "#fca311",
  "#9d4edd",
];
class Player extends Model {
  constructor(props) {
    super(props);

    this.add("score", 0);
    this.add("status", props.local ? "joined" : "created");
    this.add("shape", defaultShapes[props.position] || defaultShapes[0]);
    this.add("color", defaultColors[props.position] || defaultColors[0]);
  }
}

module.exports = { Player };
