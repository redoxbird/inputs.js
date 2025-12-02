// components/text.js
// Implements <input-text> strictly per Inputs.js spec [1]

class InputsText extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals = this.attachInternals();
    this._uid = `text-${Math.random().toString(36).substr(2, 9)}`;
    this._valid = true;
    this._debounceTimeout = null;
  }

  connectedCallback() {
    this.init();
    this.onBeforeRender?.();
    this.render();
    this.updateAria();
    this.onAfterRender?.();
    this.attachEvents();
    this.dispatchEvent(new CustomEvent('input:init', { detail: this, bubbles: true, composed: true }));
  }

  init() {
    this.name = this.getAttribute('name') || '';
    this.value = this.getAttribute('value') || '';
    this.label = this.getAttribute('label') || '';
    this.placeholder = this.getAttribute('placeholder') || '';
    this.description = this.getAttribute('description') || '';
    this.required = this.hasAttribute('required');
    this.disabled = this.hasAttribute('disabled');
    this.readonly = this.hasAttribute('readonly');
    this.shadowMode = this.hasAttribute('shadow');
    this.inline = this.hasAttribute('inline');
    this.validateOn = this.getAttribute('validate-on') || 'blur';
    this.actionButton = this.getAttribute('action-button') || '';
    this.prefixIcon = this.getAttribute('prefix-icon') || '';
    this.errorMsg = this.getAttribute('error') || '';
    this.onInit?.(this);
  }

  render() {
    const escape = this.escapeHtml;
    let html = `<div class="input-wrapper${this.inline ? ' inline' : ''}">`;
    html += `<label class="input-label" for="input-${this._uid}">${escape(this.label)}</label>`;
    if (this.prefixIcon) {
      html += `<span class="input-prefix-icon" data-icon="${escape(this.prefixIcon)}" aria-hidden="true"></span>`;
    }
    html += `<input
      class="input-input"
      id="input-${this._uid}"
      type="text"
      name="${escape(this.name)}"
      placeholder="${escape(this.placeholder)}"
      value="${escape(this.value)}"
      ${this.required ? 'required' : ''}
      ${this.disabled ? 'disabled' : ''}
      ${this.readonly ? 'readonly' : ''}
    />`;
    if (this.actionButton) {
      const ariaLabel = this.actionButton === 'copy' ? 'Copy value' : 'Clear value';
      html += `<button class="input-action" type="button" data-action="${escape(this.actionButton)}" aria-label="${ariaLabel}"></button>`;
    }
    html += `<p class="input-description"></p>`;
    html += `<p class="input-error" role="alert" aria-live="polite"></p>`;
    html += `</div>`;

    if (this.shadowMode) {
      this._shadowRoot = this.attachShadow({ mode: 'open', delegatesFocus: true });
      this._shadowRoot.innerHTML = html;
    } else {
      this.innerHTML = html;
    }
  }

  getElement(selector) {
    return this._shadowRoot?.querySelector(selector) || this.querySelector(selector);
  }

  updateProps() {
    const input = this.getElement('.input-input');
    if (!input) return;
    input.value = this.value;
    input.placeholder = this.escapeHtml(this.placeholder);
    input.disabled = this.disabled;
    input.readonly = this.readonly;
    input.required = this.required;
    input.name = this.escapeHtml(this.name);

    const labelEl = this.getElement('.input-label');
    if (labelEl) labelEl.textContent = this.escapeHtml(this.label);

    const descEl = this.getElement('.input-description');
    if (descEl) descEl.textContent = this.escapeHtml(this.description);

    this.updateAria();
  }

  updateAria() {
    const input = this.getElement('.input-input');
    if (!input) return;
    const descEl = this.getElement('.input-description');
    const errorEl = this.getElement('.input-error');
    const ids = [];
    if (this.description && descEl) {
      descEl.id = `desc-${this._uid}`;
      ids.push(descEl.id);
    }
    if (errorEl) {
      errorEl.id = `error-${this._uid}`;
      ids.push(errorEl.id);
    }
    input.setAttribute('aria-describedby', ids.join(' ') || '');
  }

  updateValue(val) {
    const input = this.getElement('.input-input');
    if (input) {
      input.value = val;
      this.internals.setFormValue(val);
    }
  }

  attachEvents() {
    const input = this.getElement('.input-input');
    const validateEvents = this.validateOn.split(/[,|]/).map(s => s.trim()).filter(Boolean);
    const actionBtn = this.getElement('.input-action');

    const handleInput = (e) => {
      this.onInput?.(e);
      this.dispatchEvent(new CustomEvent('input:input', { detail: { value: input.value, event: e }, bubbles: true, composed: true }));
      if (validateEvents.includes('input')) {
        if (this._debounceTimeout) clearTimeout(this._debounceTimeout);
        this._debounceTimeout = setTimeout(() => this.validate(), 300);
      }
    };

    const handleChange = (e) => {
      this.onChange?.(e);
      this.dispatchEvent(new CustomEvent('input:change', { detail: { value: input.value, event: e }, bubbles: true, composed: true }));
      if (validateEvents.includes('change')) this.validate();
    };

    const handleBlur = () => {
      if (validateEvents.includes('blur')) this.validate();
    };

    input.addEventListener('input', handleInput);
    input.addEventListener('change', handleChange);
    input.addEventListener('blur', handleBlur);

    if (actionBtn && this.actionButton === 'copy') {
      actionBtn.textContent = 'Copy';
      actionBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(input.value);
        } catch {
          const ta = document.createElement('textarea');
          ta.value = input.value;
          ta.style.position = 'fixed';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
      });
    } else if (actionBtn && this.actionButton === 'hide') {
      actionBtn.textContent = 'Clear';
      actionBtn.addEventListener('click', () => {
        this.reset();
        input.focus();
      });
    }
  }

  _validateValue(value) {
    const input = this.getElement('.input-input');
    const trimmed = value.trim();

    // Required [1]
    if (this.required && !trimmed) {
      return { valid: false, error: this.getAttribute('required-message') || 'This field is required' };
    }
    if (!trimmed) return { valid: true };

    // Length
    const min = this.getAttribute('min');
    if (min !== null && trimmed.length < parseInt(min, 10)) {
      return { valid: false, error: this.getAttribute('min-message') || `Minimum length is ${min} characters` };
    }
    const max = this.getAttribute('max');
    if (max !== null && trimmed.length > parseInt(max, 10)) {
      return { valid: false, error: this.getAttribute('max-message') || `Maximum length is ${max} characters` };
    }

    // Email [1]
    if (this.hasAttribute('email') && !this.isValidEmail(trimmed)) {
      return { valid: false, error: this.getAttribute('email-message') || 'Invalid email address' };
    }

    // URL
    if (this.hasAttribute('url') && !this.isValidUrl(trimmed)) {
      return { valid: false, error: this.getAttribute('url-message') || 'Invalid URL' };
    }

    // String patterns
    const startsWith = this.getAttribute('starts-with');
    if (startsWith !== null && !trimmed.startsWith(startsWith)) {
      return { valid: false, error: this.getAttribute('starts-with-message') || `Must start with "${startsWith}"` };
    }
    const endsWith = this.getAttribute('ends-with');
    if (endsWith !== null && !trimmed.endsWith(endsWith)) {
      return { valid: false, error: this.getAttribute('ends-with-message') || `Must end with "${endsWith}"` };
    }
    const regexStr = this.getAttribute('regex');
    if (regexStr !== null) {
      try {
        if (!new RegExp(regexStr).test(trimmed)) {
          return { valid: false, error: this.getAttribute('regex-message') || 'Invalid format' };
        }
      } catch {
        return { valid: false, error: 'Invalid regex pattern' };
      }
    }

    // Numeric (if parsable)
    const numVal = parseFloat(trimmed);
    if (!isNaN(numVal)) {
      const gt = this.getAttribute('gt');
      if (gt !== null && numVal <= parseFloat(gt)) {
        return { valid: false, error: this.getAttribute('gt-message') || `Must be greater than ${gt}` };
      }
      const lt = this.getAttribute('lt');
      if (lt !== null && numVal >= parseFloat(lt)) {
        return { valid: false, error: this.getAttribute('lt-message') || `Must be less than ${lt}` };
      }
      if (this.hasAttribute('positive') && numVal <= 0) {
        return { valid: false, error: this.getAttribute('positive-message') || 'Value must be positive' };
      }
    }

    // Custom error
    if (this.errorMsg) {
      return { valid: false, error: this.errorMsg };
    }

    // Native [1]
    if (input && !input.checkValidity()) {
      return { valid: false, error: input.validationMessage || 'Enter a valid value' };
    }

    return { valid: true };
  }

  validate() {
    try {
      const input = this.getElement('.input-input');
      const value = input ? input.value : '';
      this.dispatchEvent(new CustomEvent('input:validate', { detail: { value }, bubbles: true, composed: true }));

      const result = this._validateValue(value);
      this._valid = result.valid;

      const inputEl = this.getElement('.input-input');
      const errorEl = this.getElement('.input-error');

      if (!result.valid) {
        this.internals.setValidity({ customError: true }, result.error, inputEl);
        if (errorEl) {
          errorEl.textContent = result.error;
          errorEl.classList.add('input-error-visible');
        }
        if (inputEl) {
          inputEl.classList.add('input-input-error');
          inputEl.setAttribute('aria-invalid', 'true');
        }
        this.onError?.(result);
        this.dispatchEvent(new CustomEvent('input:error', { detail: result, bubbles: true, composed: true }));
      } else {
        this.internals.setValidity({});
        if (errorEl) {
          errorEl.textContent = '';
          errorEl.classList.remove('input-error-visible');
        }
        if (inputEl) {
          inputEl.classList.remove('input-input-error');
          inputEl.removeAttribute('aria-invalid');
        }
        this.onSuccess?.({ value });
        this.dispatchEvent(new CustomEvent('input:success', { detail: { value }, bubbles: true, composed: true }));
      }

      this.onValidate?.(result);
      return result;
    } catch (e) {
      console.error(e);
      return { valid: false, error: 'Validation error' };
    }
  }

  get value() {
    const input = this.getElement('.input-input');
    return input ? input.value : '';
  }

  set value(newValue) {
    this.setAttribute('value', newValue || '');
  }

  get valid() {
    return this._valid;
  }

  get error() {
    const errorEl = this.getElement('.input-error');
    return errorEl ? errorEl.textContent : null;
  }

  reset() {
    const input = this.getElement('.input-input');
    if (input) {
      input.value = '';
      this.updateValue('');
    }
    const errorEl = this.getElement('.input-error');
    if (errorEl) errorEl.textContent = '';
    errorEl?.classList.remove('input-error-visible');
    this.getElement('.input-input')?.classList.remove('input-input-error');
    this._valid = true;
    this.internals.setValidity({});
    this.internals.setFormValue('');
  }

  focus() {
    this.getElement('.input-input')?.focus();
  }

  debounce(fn, delay) {
    return (...args) => {
      clearTimeout(this._debounceTimeout);
      this._debounceTimeout = setTimeout(() => fn(...args), delay);
    };
  }

  isValidEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(email);
  }

  isValidUrl(url) {
    const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return re.test(url);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.isConnected) return;
    switch (name) {
      case 'name':
        this.name = newValue || '';
        break;
      case 'value':
        this.value = newValue || '';
        this.updateValue(this.value);
        if (this.isConnected) this.validate();
        break;
      case 'label':
        this.label = newValue || '';
        break;
      case 'placeholder':
        this.placeholder = newValue || '';
        break;
      case 'description':
        this.description = newValue || '';
        break;
      case 'required':
        this.required = this.hasAttribute('required');
        break;
      case 'disabled':
        this.disabled = this.hasAttribute('disabled');
        break;
      case 'readonly':
        this.readonly = this.hasAttribute('readonly');
        break;
      case 'error':
        this.errorMsg = newValue || '';
        if (this.isConnected) this.validate();
        break;
    }
    this.updateProps();
  }

  static get observedAttributes() {
    return ['name', 'value', 'label', 'placeholder', 'description', 'required', 'disabled', 'readonly', 'error'];
  }

  disconnectedCallback() {
    if (this._debounceTimeout) clearTimeout(this._debounceTimeout);
  }

  formResetCallback() {
    this.reset();
  }

  formStateRestoreCallback(state) {
    this.value = state;
  }

  // Lifecycle hooks
  onInit() { }
  onBeforeRender() { }
  onAfterRender() { }
  onInput() { }
  onChange() { }
  onValidate() { }
  onError() { }
  onSuccess() { }
}


export default InputsText;
