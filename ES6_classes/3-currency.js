export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newcode;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = newname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
