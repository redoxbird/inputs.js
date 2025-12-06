import InputTextBase from "./input-text-base";

class InputPassword extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'password';
  }
}

customElements.define('input-password', InputPassword);
