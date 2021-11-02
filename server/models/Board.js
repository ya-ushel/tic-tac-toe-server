const { Model } = require("./Model");

const defaultProps = {
  size: 15,
};

class Board extends Model {
  constructor(props) {
    const gameProps = props || defaultProps;
    super(gameProps);

    const data = new Array(gameProps.size * gameProps.size);

    for (let index = 0; index < data.length; index++) {
      const ceil = {
        index,
        value: "",
      };
      data[index] = ceil;
    }

    this.data = data;
    this.add("data", this.data);
  }
}

module.exports = { Board };
