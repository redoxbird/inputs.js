import { LitElement, html } from 'lit';
import * as z from 'zod'; // Assume zod-mini is available (lightweight validation lib as per spec)

const COUNTRIES = [
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'CA', dial: '+1', flag: '🇨🇦', name: 'Canada', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom', mask: '0### ######', maxDigits: 10 },
  { code: 'AU', dial: '+61', flag: '🇦🇺', name: 'Australia', mask: '### ### ###', maxDigits: 9 },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Germany', mask: '### ### ####', maxDigits: 11 },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'France', mask: '0# ## ## ## ##', maxDigits: 9 },
  { code: 'IT', dial: '+39', flag: '🇮🇹', name: 'Italy', mask: '### ######', maxDigits: 9 },
  { code: 'ES', dial: '+34', flag: '🇪🇸', name: 'Spain', mask: '### ### ###', maxDigits: 9 },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India', mask: '#### #####', maxDigits: 10 },
  { code: 'BR', dial: '+55', flag: '🇧🇷', name: 'Brazil', mask: '(##) #####-####', maxDigits: 11 },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japan', mask: '0###-####', maxDigits: 8 },
  { code: 'CN', dial: '+86', flag: '🇨🇳', name: 'China', mask: '### #### ####', maxDigits: 11 },
  { code: 'KR', dial: '+82', flag: '🇰🇷', name: 'South Korea', mask: '010-####-####', maxDigits: 11 },
  { code: 'MX', dial: '+52', flag: '🇲🇽', name: 'Mexico', mask: '### ### ####', maxDigits: 10 },
];

export default class InputPhone extends LitElement {
  static formAssociated = true;

  static properties = {
    value: { type: String },
    valid: { type: Boolean, reflect: true },
    error: { type: String },
    label: { type: String },
    placeholder: { type: String },
    description: { type: String },
    name: { type: String },
    required: { type: Boolean },
    disabled: { type: Boolean, reflect: true },
    readonly: { type: Boolean, attribute: 'readonly', reflect: true },
    shadow: { type: Boolean },
    inline: { type: Boolean },
    validateOn: { type: String, attribute: 'validate-on' },
    actionButton: { type: String, attribute: 'action-button' },
    prefixIcon: { type: String, attribute: 'prefix-icon' },
    defaultCountry: { type: String, attribute: 'default-country' },
    // Phone-specific (non-reflect)
    country: { type: String },
    dialCode: { type: String },
    mask: { type: String },
    maxDigits: { type: Number },
    localDigits: { type: String },
    formattedValue: { type: String },
    // IDs for accessibility
    labelId: { type: String },
    inputId: { type: String },
    countrySelectId: { type: String },
    descId: { type: String },
    errorId: { type: String },
    // Zod attrs (as String for simplicity)
    min: { type: String },
    max: { type: String },
    email: { type: Boolean },
    url: { type: Boolean },
    gt: { type: String },
    lt: { type: String },
    startsWith: { type: String, attribute: 'starts-with' },
    endsWith: { type: String, attribute: 'ends-with' },
    regex: { type: String },
    // ... add more zod-mini rules as attributes
    // *-message variants
    minMessage: { type: String, attribute: 'min-message' },
    // ... similarly for others
  };

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.value = '';
    this.valid = true;
    this.error = null;
    this.label = '';
    this.placeholder = '';
    this.description = '';
    this.validateOn = 'blur'; // default
    this.country = 'US';
    this.dialCode = '+1';
    this.mask = '(###) ###-####';
    this.maxDigits = 10;
    this.localDigits = '';
    this.formattedValue = '';
    this._initDispatched = false;
    this._debounceTimer = null;
    this._abortController = null;
    this.countries = COUNTRIES;
    this._generateIds();
  }

  createRenderRoot() {
    return this.shadow ? this.attachShadow({ mode: 'open' }) : this;
  }

  _generateIds() {
    const uid = Math.random().toString(36).substr(2, 9);
    this.labelId = `input-phone-label-${uid}`;
    this.inputId = `input-phone-${uid}`;
    this.countrySelectId = `input-phone-country-${uid}`;
    this.descId = `input-phone-desc-${uid}`;
    this.errorId = `input-phone-error-${uid}`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  init() {
    try {
      this._parseInitialValue();
      this.updateFormattedValue();
      // Hooks: this.onInit?.();
    } catch (e) {
      this._handleError(e);
    }
  }

  _parseInitialValue() {
    if (!this.value) return;
    const matchedCountry = this.countries.find(c => this.value.startsWith(c.dial));
    if (matchedCountry) {
      this.country = matchedCountry.code;
      this.dialCode = matchedCountry.dial;
      this.mask = matchedCountry.mask;
      this.maxDigits = matchedCountry.maxDigits;
      this.localDigits = this.value.slice(this.dialCode.length).replace(/\D/g, '');
    } else {
      const defaultCountryCode = this.defaultCountry || 'US';
      const defaultCountry = this.countries.find(c => c.code === defaultCountryCode) || this.countries[0];
      this.country = defaultCountry.code;
      this.dialCode = defaultCountry.dial;
      this.mask = defaultCountry.mask;
      this.maxDigits = defaultCountry.maxDigits;
      this.localDigits = this.value.replace(/\D/g, '');
    }
  }

  getCountry(code) {
    return this.countries.find(c => c.code === code) || this.countries[0];
  }

  render() {
    // Hooks: this.onBeforeRender?.();
    const descIds = [this.description ? this.descId : null, this.error ? this.errorId : null]
      .filter(Boolean)
      .join(' ') || null;
    const inputClasses = ['input-input'].concat(this.error ? ['input-input-error'] : []);
    if (this.inline) inputClasses.push('input-inline');
    return html`
      <div class="input-wrapper ${this.inline ? 'input-inline' : ''}">
        <label class="input-label" id="${this.labelId}" for="${this.inputId}">${this.label}</label>
        <div class="input-phone-group">
          <select
            id="${this.countrySelectId}"
            class="input-country"
            @change="${this.onCountryChange}"
            aria-label="Select country and calling code"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
          >
            ${this.countries.map((c) => html`
              <option value="${c.code}" ?selected="${this.country === c.code}">
                ${c.flag} ${c.name} (${c.dial})
              </option>
            `)}
          </select>
          ${this.prefixIcon ? html`<span class="input-prefix-icon">${this.prefixIcon}</span>` : ''}
          <input
            id="${this.inputId}"
            class="${inputClasses.join(' ')}"
            type="tel"
            .value="${this.formattedValue || ''}"
            placeholder="${this.placeholder || ''}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-labelledby="${this.labelId}"
            aria-describedby="${descIds}"
            aria-invalid="${!this.valid}"
            @input="${this.onPhoneInput}"
            @change="${this.onChange}"
            @blur="${this.onBlur}"
          />
          ${this.actionButton === 'copy' ? html`
            <button type="button" class="input-action" @click="${this.onCopy}" ?disabled="${this.disabled}" tabindex="-1">
              📋
            </button>
          ` : ''}
        </div>
        <p class="input-description" id="${this.descId}">${this.description}</p>
        <p class="input-error" id="${this.errorId}" class="${this.error ? 'input-error-visible' : ''}" role="alert" aria-live="polite">${this.error || ''}</p>
      </div>
    `;
    // Hooks: this.onAfterRender?.();
  }

  firstUpdated() {
    this.attachEvents();
  }

  attachEvents() {
    // Additional events if needed
  }

  onCountryChange(e) {
    try {
      this.country = e.target.value;
      const country = this.getCountry(this.country);
      this.dialCode = country.dial;
      this.mask = country.mask;
      this.maxDigits = country.maxDigits;
      this.updateFormattedValue();
      this.updateValue();
      this.requestUpdate();
      // this.onChange?.(e); hook
    } catch (err) {
      this._handleError(err);
    }
  }

  onPhoneInput(e) {
    try {
      const input = e.target;
      const oldCursor = input.selectionStart;
      const oldValue = input.value;

      let digits = oldValue.replace(/\D/g, '');
      digits = digits.slice(0, this.maxDigits);
      this.localDigits = digits;

      this.formattedValue = this.formatNumber(digits, this.mask);
      input.value = this.formattedValue;

      // Restore cursor position
      let digitsBefore = oldValue.slice(0, oldCursor).replace(/\D/g, '').length;
      let newCursor = 0;
      for (let i = 0; i < this.formattedValue.length; i++) {
        if (digitsBefore === 0) {
          newCursor = i;
          break;
        }
        if (/\d/.test(this.formattedValue[i])) {
          digitsBefore--;
        }
      }
      if (digitsBefore > 0) newCursor = this.formattedValue.length;
      requestAnimationFrame(() => input.setSelectionRange(newCursor, newCursor));

      this.updateValue();

      this.dispatchInputEvent();

      if (this.validateOn === 'input') {
        this.debounceValidate();
      }
      // Hooks: this.onInput?.(e);
    } catch (err) {
      this._handleError(err);
    }
  }

  onChange(e) {
    this.dispatchEvent(new CustomEvent('input:change', {
      bubbles: true,
      composed: true,
      detail: { value: this.value, country: this.country, formattedValue: this.formattedValue }
    }));
    if (this.validateOn === 'change') {
      this.debounceValidate();
    }
    // Hooks: this.onChange?.(e);
  }

  onBlur(e) {
    if (this.validateOn === 'blur') {
      this.debounceValidate();
    }
    // Hooks: this.onBlur?.(e);
  }

  onCopy() {
    if (navigator.clipboard && this.value) {
      navigator.clipboard.writeText(this.value);
    }
  }

  formatNumber(digits, mask) {
    let result = '';
    let digitIdx = 0;
    for (let i = 0; i < mask.length && digitIdx < digits.length; i++) {
      if (mask[i] === '#' || mask[i] === '0') {
        result += digits[digitIdx++];
      } else {
        result += mask[i];
      }
    }
    return result;
  }

  updateFormattedValue() {
    this.formattedValue = this.formatNumber(this.localDigits, this.mask);
  }

  updateValue() {
    this.value = `${this.dialCode}${this.localDigits}`;
    this.internals.setFormValue(this.value);
  }

  dispatchInputEvent() {
    const detail = {
      value: this.value,
      country: this.country,
      dialCode: this.dialCode,
      localDigits: this.localDigits,
      formattedValue: this.formattedValue
    };
    if (!this._initDispatched) {
      this.dispatchEvent(new CustomEvent('input:init', { bubbles: true, composed: true, detail }));
      this._initDispatched = true;
    }
    this.dispatchEvent(new CustomEvent('input:input', { bubbles: true, composed: true, detail }));
  }

  debounceValidate() {
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      if (this._abortController) this._abortController.abort();
      this._abortController = new AbortController();
      this.validate({ signal: this._abortController.signal }).catch(e => {
        if (e.name !== 'AbortError') console.warn(e);
      });
    }, 300);
  }

  async validate(options = {}) {
    const { signal } = options;
    try {
      if (signal) signal.throwIfAborted();
      const schema = this._buildZodSchema();
      if (signal) signal.throwIfAborted();
      const result = schema.safeParse(this.value);
      this.valid = result.success;
      this.error = result.success ? null : result.error.issues[0]?.message || 'Invalid phone number';
      if (this.valid) {
        // this.internals.setValidity({});
        // this.internals.setValidationMessage('');
      } else {
        // this.internals.setValidity({ customError: true });
        // this.internals.setValidationMessage(this.error);
      }
      this.requestUpdate();
      const detail = { valid: this.valid, value: this.value, error: this.error };
      this.dispatchEvent(new CustomEvent('input:validate', { bubbles: true, composed: true, detail }));
      if (!this.valid) {
        this.dispatchEvent(new CustomEvent('input:error', { bubbles: true, composed: true, detail }));
        // Hooks: this.onError?.(detail);
      } else {
        this.dispatchEvent(new CustomEvent('input:success', { bubbles: true, composed: true, detail }));
        // Hooks: this.onSuccess?.(detail);
      }
      // Hooks: this.onValidate?.(detail);
      return { valid: this.valid, error: this.error };
    } catch (e) {
      this._handleError(e);
      return { valid: false, error: this.error };
    }
  }

  _buildZodSchema() {
    let schema = z.string();
    // Required
    if (this.required) {
      schema = schema.min(1, this.requiredMessage || "This field is required");
    }
    // Common validators (extend as needed for full zod-mini support)
    const validators = {
      min: (val, msg) => schema.min(Number(val), msg),
      max: (val, msg) => schema.max(Number(val), msg),
      gt: (val, msg) => schema.gt(Number(val), msg), // assumes zod-mini .gt
      lt: (val, msg) => schema.lt(Number(val), msg),
      'starts-with': (val, msg) => schema.startsWith(val, msg),
      'ends-with': (val, msg) => schema.endsWith(val, msg),
      email: (val, msg) => schema.email(msg),
      url: (val, msg) => schema.url(msg),
      regex: (val, msg) => schema.regex(new RegExp(val), msg)
    };
    Object.entries(validators).forEach(([key, applicator]) => {
      if (this.hasAttribute(key)) {
        const val = this.getAttribute(key);
        const msgKey = `${key}-message`;
        const msg = this.getAttribute(msgKey) || `Must ${key.replace('-', ' ')} ${val}`;
        schema = applicator(val, msg);
      }
    });
    return schema;
  }

  reset() {
    this.value = '';
    this.localDigits = '';
    this.formattedValue = '';
    this.clearErrors();
    this.internals.setFormValue('');
    this.internals.setValidity({});
    this.requestUpdate();
    this.dispatchInputEvent(); // or input:reset?
  }

  clearErrors() {
    this.error = null;
    this.valid = true;
    this.internals.setValidationMessage('');
  }

  focus() {
    this.renderRoot.querySelector('.input-input')?.focus();
  }

  _handleError(e) {
    console.error(e);
    this.error = 'An error occurred';
    this.valid = false;
    this.internals.setValidity({ customError: true });
    this.internals.setValidationMessage(this.error);
    this.dispatchEvent(new CustomEvent('input:error', {
      bubbles: true,
      composed: true,
      detail: { error: this.error }
    }));
    this.requestUpdate();
  }

  formResetCallback() {
    this.reset();
  }

  formStateRestoreCallback(state) {
    this.value = state;
    this._parseInitialValue();
    this.updateFormattedValue();
    this.requestUpdate();
  }
}
