const { Model } = require("./Model");

const defaultShapes = ["cross", "circle", "triangle"];
const defaultColors = ["#e63946", "#457b9d", "#52b788"];
class Player extends Model {
  constructor(props) {
    super(props);

    this.add("score", 0);
    this.add("status", "created");
    this.add("shape", defaultShapes[props.position]);
    this.add("color", defaultColors[props.position]);
  }
}

module.exports = { Player };
