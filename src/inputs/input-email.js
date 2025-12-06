import InputTextBase from "./input-text-base";

class InputEmail extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'email';
    this.format = 'email';
  }
}

customElements.define('input-email', InputEmail);
