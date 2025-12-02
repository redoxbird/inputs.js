import InputEmail from "./inputs/input-email";
import InputText from "./inputs/input-text";

// ---------------------------------------------------------------
// 14. Register Component
// ---------------------------------------------------------------

customElements.define("input-email", InputEmail);
customElements.define("input-text", InputText);

export { InputEmail, InputText };
