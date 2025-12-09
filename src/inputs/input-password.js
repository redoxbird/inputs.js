import InputTextBase from "./input-text-base";

class InputPassword extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'password';
    this.actionButton = 'show'
  }
}

customElements.define('input-password', InputPassword);
