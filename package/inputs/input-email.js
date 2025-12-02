/**
 * Inputs.js <input-email> Component
 * Progressive enhancement for email inputs with Zod-mini validation [1].
 * @element input-email
 * Specification: v0.2 compliant – Validation exclusively via zod-mini [1].
 * Requires: <script src="https://unpkg.com/zod-mini@latest/dist/index.umd.js"></script>
 *           Then: window.z = zodMini;
 */
/**
 * Inputs.js <input-email> Component (Bugfix)
 * Fixed: ElementInternals.setValidity anchor param must be HTMLElement (not array) [1].
 * Zod-mini only for validation. Spec v0.2 compliant.
 * Requires: <script src="https://unpkg.com/zod-mini@latest/dist/index.umd.js"></script>
 *           window.z = zodMini;
 */

import * as z from "zod";

class InputEmail extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return [
      'name', 'value', 'label', 'placeholder', 'required', 'disabled', 'readonly',
      'pattern', 'minlength', 'maxlength', 'description', 'error', 'validate-on',
      'shadow', 'inline'
    ];
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.inputId = `ij-email-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    this._value = '';
    this._valid = true;
    this._error = null;
    this.validateOn = 'blur';
    this.validateTimer = null;
    // Hooks
    this.onInit = null;
    this.onInput = null;
    this.onChange = null;
    this.onValidate = null;
    this.onError = null;
    this.onSuccess = null;
    // Refs
    this.input = null;
    this.labelEl = null;
    this.descEl = null;
    this.errorEl = null;
    this.shadowRootContainer = null;
  }

  connectedCallback() {
    const useShadow = this.hasAttribute('shadow');
    if (useShadow && !this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
    this.shadowRootContainer = this.shadowRoot || this;
    this.init();
    this.render();
    this.attachEvents();
    const initDetail = { value: this.value, valid: this.valid };
    this.dispatchEvent(new CustomEvent('input:init', { bubbles: true, composed: true, detail: initDetail }));
    if (this.onInit) this.onInit(initDetail);
  }

  init() {
    this.validateOn = this.getAttribute('validate-on') || 'blur';
    this._value = this.getAttribute('value') || '';
    this._valid = true;
    this._error = this.getAttribute('error') || null;
  }

  render() {
    const container = this.shadowRootContainer;
    if (!container?.querySelector('.input-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'input-wrapper';
      if (this.hasAttribute('inline')) wrapper.classList.add('inline');

      this.labelEl = document.createElement('label');
      this.labelEl.className = 'input-label';
      this.labelEl.htmlFor = this.inputId;
      this.labelEl.textContent = this.getAttribute('label') || '';

      this.input = document.createElement('input');
      this.input.id = this.inputId;
      this.input.className = 'input-input';
      this.input.type = 'email';

      this.descEl = document.createElement('p');
      this.descEl.id = `${this.inputId}-desc`;
      this.descEl.className = 'input-description';
      this.descEl.textContent = this.getAttribute('description') || '';

      this.errorEl = document.createElement('p');
      this.errorEl.id = `${this.inputId}-error`;
      this.errorEl.className = 'input-error';
      this.errorEl.setAttribute('aria-live', 'polite');

      wrapper.append(this.labelEl, this.input, this.descEl, this.errorEl);
      container.appendChild(wrapper);
    }
    // Sync attrs
    this.#syncAttributes();
    this.updateErrorState();
  }

  #syncAttributes() {
    this.input.name = this.getAttribute('name') || '';
    this.input.placeholder = this.getAttribute('placeholder') || '';
    this.input.required = this.hasAttribute('required');
    this.input.disabled = this.hasAttribute('disabled');
    this.input.readOnly = this.hasAttribute('readonly');
    if (this.hasAttribute('pattern')) this.input.pattern = this.getAttribute('pattern');
    if (this.hasAttribute('minlength')) this.input.minLength = parseInt(this.getAttribute('minlength'), 10) || 0;
    if (this.hasAttribute('maxlength')) this.input.maxLength = parseInt(this.getAttribute('maxlength'), 10) || 0;
    this.input.value = this._value;
    this.labelEl.textContent = this.getAttribute('label') || '';
    this.descEl.textContent = this.getAttribute('description') || '';
    this.input.setAttribute('aria-required', this.hasAttribute('required') ? 'true' : 'false');
  }

  attachEvents() {
    if (!this.input) return;
    const input = this.input;

    input.addEventListener('input', (e) => {
      this.value = e.target.value;
      const detail = { value: this.value };
      this.dispatchEvent(new CustomEvent('input:input', { bubbles: true, composed: true, detail }));
      if (this.onInput) this.onInput(detail);
      if (this.validateOn === 'input') {
        if (this.validateTimer) clearTimeout(this.validateTimer);
        this.validateTimer = setTimeout(() => {
          this.handleValidation();
          this.validateTimer = null;
        }, 300); // Fixed debounce [1]
      }
    });

    input.addEventListener('change', (e) => {
      this.value = e.target.value;
      const detail = { value: this.value };
      this.dispatchEvent(new CustomEvent('input:change', { bubbles: true, composed: true, detail }));
      if (this.onChange) this.onChange(detail);
      if (this.validateOn === 'change') this.handleValidation();
    });

    input.addEventListener('blur', () => {
      if (this.validateOn === 'blur') this.handleValidation();
    });
  }

  handleValidation() {
    const result = this._validate();
    this._valid = result.valid;
    this._error = result.error;
    const detail = { ...result, value: this.value };
    this.dispatchEvent(new CustomEvent('input:validate', { bubbles: true, composed: true, detail }));
    if (this.onValidate) this.onValidate(detail);
    if (result.valid) {
      this.dispatchEvent(new CustomEvent('input:success', { bubbles: true, composed: true, detail: { value: this.value } }));
      if (this.onSuccess) this.onSuccess({ value: this.value });
    } else {
      this.dispatchEvent(new CustomEvent('input:error', { bubbles: true, composed: true, detail: { error: result.error } }));
      if (this.onError) this.onError({ error: result.error });
    }
    this.updateErrorState();
  }

  buildEmailSchema() {
    if (typeof z === 'undefined') {
      throw new Error('zod-mini (global `z`) required.');
    }
    let schema = z.string().email('Invalid email address.'); // Zod email [1]

    if (this.input?.hasAttribute('required')) {
      schema = schema.min(1, 'This field is required.'); // Required [1]
    }
    if (this.input?.minLength > 0) {
      schema = schema.min(this.input.minLength, `At least ${this.input.minLength} chars.`);
    }
    if (this.input?.maxLength > 0) {
      schema = schema.max(this.input.maxLength, `At most ${this.input.maxLength} chars.`);
    }
    if (this.input?.pattern) {
      try {
        schema = schema.regex(new RegExp(this.input.pattern), 'Invalid format.');
      } catch { }
    }
    return schema;
  }

  _validate() {
    if (!this.input) return { valid: true, error: null };
    const manualError = this.getAttribute('error');
    if (manualError) return { valid: false, error: manualError };

    // try {
    const schema = this.buildEmailSchema();
    const result = schema.safeParse(this.value);
    if (result.success) return { valid: true, error: null };
    return { valid: false, error: result.error.errors[0]?.message || 'Invalid email.' };
    // } catch {
    //   return { valid: false, error: 'Validation failed.' };
    // }
  }

  updateErrorState() {
    if (!this.input || !this.errorEl) return;
    const hasError = !this.valid && !!this.error;
    this.errorEl.classList.toggle('input-error-visible', hasError);
    this.errorEl.textContent = this.error || '';
    this.input.classList.toggle('input-input-error', hasError);
    this.input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    // ARIA-describedby [1]
    const descId = this.descEl.textContent.trim() ? `${this.inputId}-desc` : null;
    const errorId = hasError ? `${this.inputId}-error` : null;
    const ariaDescribedby = [descId, errorId].filter(Boolean).join(' ');
    if (ariaDescribedby) {
      this.input.setAttribute('aria-describedby', ariaDescribedby);
    } else {
      this.input.removeAttribute('aria-describedby');
    }
    // FIXED: setValidity anchor is single HTMLElement [1]
    if (this.valid) {
      this.internals.setValidity({});
    } else {
      this.internals.setValidity({ customError: true }, this.error, this.errorEl);
    }
    this.internals.setFormValue(this.value);
  }

  get value() {
    return this._value ?? this.input?.value ?? '';
  }

  set value(newValue) {
    this._value = newValue ?? '';
    if (this.input) this.input.value = newValue;
    this.internals.setFormValue(newValue);
    this.updateErrorState();
  }

  get valid() {
    return this._valid !== false;
  }

  get error() {
    return this._error ?? null;
  }

  set error(newError) {
    this._error = newError || null;
    this._valid = !newError;
    if (newError) this.setAttribute('error', newError);
    else this.removeAttribute('error');
    this.updateErrorState();
  }

  validate() {
    return this._validate(); // Public API [1]
  }

  reset() {
    this.value = '';
    this._valid = true;
    this._error = null;
    this.removeAttribute('error');
    if (this.validateTimer) {
      clearTimeout(this.validateTimer);
      this.validateTimer = null;
    }
    this.updateErrorState();
  }

  focus() {
    this.input?.focus();
  }

  formResetCallback() {
    this.reset();
  }

  formStateRestoreCallback(state) {
    if (state !== undefined) this.value = state;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (!this.isConnected) return;
    switch (name) {
      case 'label':
      case 'description':
      case 'placeholder':
      case 'name':
      case 'value':
      case 'error':
      case 'validate-on':
      case 'inline':
      case 'required':
      case 'disabled':
      case 'readonly':
      case 'pattern':
      case 'minlength':
      case 'maxlength':
        this.render(); // Re-render syncs all
        break;
    }
  }
}

// Register the custom element
export default InputEmail;
