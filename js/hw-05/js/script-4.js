class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this.value + str;
    return this.value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this.value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
    return this.value;
  }
}

const builder = new StringBuilder(".");

console.log(builder.value);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
