import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import * as z from 'zod'; // ~1KB, per validation spec [1]

@customElement('base-text-input')
export class BaseTextInput extends LitElement {
  static formAssociated = true; // Form-associated per spec [1]

  static get properties() {
    return {
      name: { type: String },
      value: { type: String },
      label: { type: String },
      placeholder: { type: String },
      required: { type: Boolean },
      disabled: { type: Boolean },
      readonly: { type: Boolean },
      inline: { type: Boolean },
      error: { type: String },
      description: { type: String },
      validateOn: { type: String },
      actionButton: { type: String },
      prefixIcon: { type: String },
      inputType: { type: String },
      // Zod validators [1]
      min: { type: String },
      max: { type: String },
      email: { type: Boolean },
      url: { type: Boolean },
      regex: { type: String },
      startsWith: { attribute: 'starts-with', type: String },
      endsWith: { attribute: 'ends-with', type: String },
      gt: { type: String },
      lt: { type: String },
      positive: { type: Boolean },
      minMessage: { attribute: 'min-message', type: String },
      maxMessage: { attribute: 'max-message', type: String },
      emailMessage: { attribute: 'email-message', type: String },
      urlMessage: { attribute: 'url-message', type: String },
      // States
      internalError: { type: String, state: true },
      isValid: { type: Boolean, state: true }
    };
  }

  static get styles() {
    return css`
        /* Minimal defaults per exact structure [1] */
        .input-wrapper { display: block; }
        .input-label { display: block; font-weight: bold; margin-bottom: 0.25rem; }
        .input-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #ccc;
          padding: 0.5rem;
          border-radius: 4px;
        }
        .input-description { font-size: 0.875rem; color: #666; margin-top: 0.25rem; }
        .input-error { display: none; color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem; }
        .input-error-visible { display: block; } /* Required [1] */
        .input-input-error {
          border-color: #dc2626;
          box-shadow: 0 0 0 1px #dc2626; /* Error states [1] */
        }
        .input-wrapper.input-inline { display: inline-block; width: auto; } /* inline attr [1] */
        .input-prefix, .input-action { /* External styling [1] */ }
      `;
  }

  constructor() {
    super();
    this.internals = this.attachInternals(); // Required constructor [1]
    this.name = '';
    this.value = '';
    this.label = '';
    this.placeholder = '';
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.inline = false;
    this.error = '';
    this.description = '';
    this.validateOn = 'blur';
    this.actionButton = '';
    this.prefixIcon = '';
    this.inputType = 'text';
    this.min = '';
    this.max = '';
    this.email = false;
    this.url = false;
    this.regex = '';
    this.startsWith = '';
    this.endsWith = '';
    this.gt = '';
    this.lt = '';
    this.positive = false;
    this.minMessage = '';
    this.maxMessage = '';
    this.emailMessage = '';
    this.internalError = null;
    this.isValid = true;
    this.debounceTimer = null;
    this.inputId = '';

    // Hooks per spec [1]
    this.onInit = () => { };
    this.onBeforeRender = () => { };
    this.onAfterRender = () => { };
    this.onInput = (value) => { };
    this.onChange = (value) => { };
    this.onValidate = () => { };
    this.onError = (errorMsg) => { };
    this.onSuccess = (value) => { };

    // Elements
    this.inputEl = this.querySelector('input');
  }

  generateIds() {
    const baseId = `input-${Math.random().toString(36).substr(2, 9)}`;
    this.inputId = baseId;
    return {
      input: baseId,
      label: `${baseId}-label`,
      desc: `${baseId}-desc`,
      err: `${baseId}-err`
    };
  }

  render() {
    this.onBeforeRender();
    const ids = this.generateIds();
    const hasDesc = !!this.description && this.description.trim();
    const hasError = !!this.internalError;
    const ariaDescribedBy = [hasDesc ? ids.desc : '', hasError ? ids.err : ''].filter(Boolean).join(' ') || undefined;

    return html`
      <div class="input-wrapper ${this.inline ? 'input-inline' : ''}">
        <label class="input-label" id="${ids.label}" for="${ids.input}">${this.label}</label>
        ${this.prefixIcon ? html`<span class="input-prefix" aria-hidden="true">${this.prefixIcon}</span>` : ''}
        <input
          class="input-input ${hasError ? 'input-input-error' : ''}"
          type="${this.inputType}"
          id="${ids.input}"
          .value="${this.value}"
          @input="${this.handleInput}"
          @change="${this.handleChange}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          placeholder="${this.placeholder}"
          aria-labelledby="${ids.label}"
          aria-describedby="${ariaDescribedBy}"
          aria-invalid="${hasError}"
        />
        ${this.actionButton ? html`<button type="button" class="input-action" @click="${this.handleAction}" aria-label="${this.actionButton} value"></button>` : ''}
        ${hasDesc ? html`<p class="input-description" id="${ids.desc}">${this.description}</p>` : ''}
        <p class="input-error ${hasError ? 'input-error-visible' : ''}" id="${ids.err}">${this.internalError || ''}</p>
      </div>
    `;

    this.onAfterRender();
  }

  firstUpdated() {
    this.dispatchEvent(new CustomEvent('input:init', { bubbles: true, composed: true, detail: { value: this.value } })); // Required event [1]
    this.onInit();
    this.attachValidation();
  }

  updated(changedProps) {
    if (changedProps.has('value')) {
      this.internals.setFormValue(this.value); // Mapping values to form [1]
    }
    super.updated(changedProps);
  }

  attachValidation() {
    const debouncedValidate = this.debounce(this.doValidate.bind(this), 300); // 300ms debounce per spec [1]
    this.inputEl.addEventListener(this.validateOn, debouncedValidate);
  }

  debounce(fn, delay) {
    return (...args) => {
      if (this.debounceTimer) clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => fn(...args), delay);
    };
  }

  handleInput(e) {
    const target = e.target;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('input:input', { bubbles: true, composed: true, detail: { value: this.value } })); // Required [1]
    this.onInput(this.value);
  }

  handleChange(e) {
    const target = e.target;
    this.dispatchEvent(new CustomEvent('input:change', { bubbles: true, composed: true, detail: { value: target.value } })); // Required [1]
    this.onChange(target.value);
  }

  buildSchema() {
    let schema = z.string();
    if (this.error) {
      return schema.refine(() => false, { message: this.error });
    }
    if (this.required) {
      schema = schema.min(1, { message: 'This field is required' }); // Default [1]
    }
    if (this.min) schema = schema.min(Number(this.min), { message: this.minMessage });
    if (this.max) schema = schema.max(Number(this.max), { message: this.maxMessage });
    if (this.email) schema = schema.email({ message: this.emailMessage || 'Invalid email address' }); // Default [1]
    if (this.url) schema = schema.url({ message: this.urlMessage || 'Invalid URL' });
    if (this.regex) {
      try {
        schema = schema.regex(new RegExp(this.regex), { message: this.regexMessage || 'Invalid format' });
      } catch { }
    }
    if (this.startsWith) schema = schema.startsWith(this.startsWith, { message: `Must start with "${this.startsWith}"` });
    if (this.endsWith) schema = schema.endsWith(this.endsWith, { message: `Must end with "${this.endsWith}"` });
    if (this.gt) {
      const num = Number(this.gt);
      schema = schema.refine(v => Number(v) > num, { message: `Must be > ${num}` });
    }
    if (this.lt) {
      const num = Number(this.lt);
      schema = schema.refine(v => Number(v) < num, { message: `Must be < ${num}` });
    }
    if (this.positive) {
      schema = schema.refine(v => {
        const n = Number(v);
        return !isNaN(n) && n > 0;
      }, { message: this.positiveMessage || 'Must be positive' });
    }
    return schema;
  }

  validate() { // Required method, returns {valid, error} [1]
    return this.doValidate();
  }

  doValidate() {
    try {
      this.onValidate();
      this.dispatchEvent(new CustomEvent('input:validate', { bubbles: true, composed: true, detail: { value: this.value } })); // Required [1]
      const schema = this.buildSchema();
      const result = schema.safeParse(this.value);

      if (result.success) {
        this.internalError = null;
        this.isValid = true;
        this.internals.setValidity({}); // Valid [1]
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('input:success', { bubbles: true, composed: true, detail: { value: this.value } })); // Required [1]
        this.onSuccess(this.value);
        return { valid: true, error: null };
      } else {
        const msg = result.error.errors[0].message || 'Enter a valid value'; // Default [1]
        this.internalError = msg;
        this.isValid = false;
        this.internals.setValidity({ customError: true }, msg, this.inputEl); // Setting validity [1]
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('input:error', { bubbles: true, composed: true, detail: { value: this.value, error: msg } })); // Required [1]
        this.onError(msg);
        return { valid: false, error: msg };
      }
    } catch (e) {
      const msg = 'Validation error'; // Never crash, dispatch input:error [1]
      this.internalError = msg;
      this.internals.setValidity({ customError: true }, msg, this.inputEl);
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('input:error', { bubbles: true, composed: true, detail: { value: this.value, error: msg } }));
      return { valid: false, error: msg };
    }
  }

  handleAction(e) {
    e.stopPropagation();
    if (this.actionButton === 'copy') {
      navigator.clipboard.writeText(this.value).catch(() => { });
    } else if (this.actionButton === 'hide') {
      const isHidden = this.inputEl.type === 'password';
      this.inputEl.type = isHidden ? this.inputType : 'password';
      if (this.actionEl) {
        this.actionEl.textContent = isHidden ? 'Hide' : 'Show';
        this.actionEl.setAttribute('aria-label', isHidden ? 'Hide value' : 'Show value');
      }
    }
  }

  reset() { // Required [1]
    this.value = '';
    this.internalError = null;
    this.isValid = true;
    this.requestUpdate();
  }

  focus() { // Required [1]
    this.inputEl.focus();
  }

  formResetCallback() { // Required form callback [1]
    this.reset();
  }

  formStateRestoreCallback(state) { // Required form callback [1]
    this.value = state.get(this) || '';
  }
}

export default BaseTextInput;
