import InputTextBase from "./input-text-base";

class InputUrl extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'url';
    this.url = true;
  }
}

customElements.define('input-url', InputUrl);
