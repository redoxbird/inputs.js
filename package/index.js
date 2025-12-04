import InputNumberBase from "./inputs/input-number-base";
import InputTextBase from "./inputs/input-text-base";
import InputPhone from "./inputs/input-phone";

// ---------------------------------------------------------------
// 14. Register Component
// ---------------------------------------------------------------


// Extensions for specific text-based inputs
class InputText extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'text';
  }
}

class InputEmail extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'email';
    this.format = 'email';
  }
}

class InputUrl extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'url';
    this.url = true;
  }
}

class InputPassword extends InputTextBase {
  constructor() {
    super();
    this.inputType = 'password';
  }
}

class InputNumber extends InputNumberBase {
  constructor() {
    super();
    this.inputType = 'number';
  }
}

// Register components
customElements.define('input-text', InputText);
customElements.define('input-email', InputEmail);
customElements.define('input-url', InputUrl);
customElements.define('input-password', InputPassword);
customElements.define('input-number', InputNumber);
customElements.define('input-phone', InputPhone);
