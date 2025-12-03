import BaseTextInput from "./inputs/input-text";
import { customElement, property } from 'lit/decorators.js';

// ---------------------------------------------------------------
// 14. Register Component
// ---------------------------------------------------------------

// Extend for specifics (override inputType via static or prop)
@customElement('input-text')
export class InputText extends BaseTextInput {
  static get properties() {
    return {
      inputType: { type: String },
    };
  }
}
