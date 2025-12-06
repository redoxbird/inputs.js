import InputNumberBase from "./input-number-base";

class InputNumber extends InputNumberBase {
  constructor() {
    super();
    this.inputType = 'number';
  }
}

customElements.define('input-number', InputNumber);
