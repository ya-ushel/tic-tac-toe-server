class Model {
  constructor(props) {
    this._fields = Object.keys(props);

    for (let key in props) {
      this[key] = props[key];
    }
  }

  get() {
    const instance = {};

    this._fields.forEach((key) => {
      instance[key] = this[key];
    });

    return instance;
  }

  add(fieldName, value) {
    this[fieldName] = value;
    this._fields.push(fieldName);
  }
}

module.exports = { Model };
