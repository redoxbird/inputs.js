import { LitElement } from 'lit';

/**
 * <input-base>
 * The absolute minimal, reusable foundation for ALL Inputs.js components.
 *
 * Contains ONLY:
 *   - ElementInternals + form association
 *   - Lifecycle hooks (onInit / onBeforeRender / onAfterRender / onInput / onChange / onValidate / onError / onSuccess)
 *   - Standard event dispatch (input:init, input:input, input:change, input:validate, input:error, input:success)
 *   - Debounced async validation with AbortController
 *   - Public API: value, valid, error, validate(), reset(), focus()
 *   - Unique ARIA IDs + error state management
 *   - No validation logic whatsoever → delegated to <input-text-base>, <input-number-base>, etc.
 */
export default class InputBase extends LitElement {
  static formAssociated = true;

  static properties = {
    // Core attributes
    name: { type: String },
    value: { type: String, reflect: true },
    label: { type: String },
    placeholder: { type: String },
    description: { type: String },
    required: { type: Boolean },
    disabled: { type: Boolean, reflect: true },
    readonly: { type: Boolean, reflect: true },
    shadow: { type: Boolean },
    inline: { type: Boolean },
    autofocus: { type: Boolean },
    autocomplete: { type: String },

    // Validation trigger
    validateOn: { type: String, attribute: 'validate-on' }, // 'input', 'change', 'blur' (comma/space/| separated)

    // State
    valid: { type: Boolean, reflect: true },
    error: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.internals = this.attachInternals();

    // Defaults
    this.value = '';
    this.valid = true;
    this.error = null;
    this.validateOn = 'blur';
    this.autocomplete = 'off';

    // Internal
    this._initDispatched = false;
    this._debounceTimer = null;
    this._abortController = null;

    // Unique IDs for accessibility
    this.ids = this._generateIds();
  }

  // ------------------------------------------------------------------ //
  // Render root (shadow or light DOM)
  // ------------------------------------------------------------------ //
  createRenderRoot() {
    return this.shadow ? this.attachShadow({ mode: 'open' }) : this;
  }

  // ------------------------------------------------------------------ //
  // Lifecycle
  // ------------------------------------------------------------------ //
  connectedCallback() {
    super.connectedCallback();
    this._callHook('onInit');
    this._dispatch('input:init');
    this._initDispatched = true;
  }

  willUpdate(changed) {
    this._callHook('onBeforeRender', changed);
  }

  updated(changed) {
    super.updated(changed);
    this._callHook('onAfterRender', changed);
    this.internals.setFormValue(this.value ?? '');
  }

  // ------------------------------------------------------------------ //
  // Hook system (attribute, property, or event)
  // ------------------------------------------------------------------ //
  _callHook(name, payload) {
    if (typeof this[name] === 'function') this[name](payload);
    this.dispatchEvent(new CustomEvent(`hook:${name}`, { detail: payload }));
  }

  // ------------------------------------------------------------------ //
  // Unique IDs (label for, aria-describedby, etc.)
  // ------------------------------------------------------------------ //
  _generateIds() {
    const uid = Math.random().toString(36).substr(2, 9);
    return {
      wrapper: `inputs-wrapper-${uid}`,
      label: `inputs-label-${uid}`,
      input: `inputs-input-${uid}`,
      desc: `inputs-desc-${uid}`,
      error: `inputs-error-${uid}`,
    };
  }

  // ------------------------------------------------------------------ //
  // Event dispatch (spec-compliant naming)
  // ------------------------------------------------------------------ //
  _dispatch(name, extra = {}) {
    const detail = { value: this.value, valid: this.valid, error: this.error, ...extra };
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true, detail }));
  }

  dispatchInput(detail = {}) { this._dispatch('input:input', detail); }
  dispatchChange(detail = {}) { this._dispatch('input:change', detail); }

  // ------------------------------------------------------------------ //
  // Validation trigger helpers
  // ------------------------------------------------------------------ //
  shouldValidate(type) {
    if (!this.validateOn) return false;
    return this.validateOn.split(/[\s,|]+/).includes(type);
  }

  debounceValidate(delay = 300) {
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => this.validate(), delay);
  }

  // ------------------------------------------------------------------ //
  // Public validation method – MUST be implemented by subclass
  // ------------------------------------------------------------------ //
  async validate(options = {}) {
    throw new Error('<input-base>: validate() must be implemented in subclass');
  }

  // ------------------------------------------------------------------ //
  // Error state management (used by subclasses after validation)
  // ------------------------------------------------------------------ //
  // input-base.js — replace the entire setValidState method
  setValidState({ valid, error = null }) {
    this.valid = valid;
    this.error = error;

    const errorEl = this.renderRoot?.querySelector(`#${this * this.ids.error}`) || null;

    if (valid) {
      // Clear everything
      // this.internals.setValidity({});
      // this.internals.setValidationMessage('');
      this._dispatch('input:success');
      this._callHook('onSuccess', { value: this.value });
    } else {
      // Critical: only set customError + message if we have a real message
      const message = typeof error === 'string' && error.trim() !== ''
        ? error.trim()
        : 'Invalid value';

      // this.internals.setValidity({ customError: true }, message, errorEl);
      // this.internals.setValidationMessage(message);

      this._dispatch('input:error', { error: message });
      this._callHook('onError', { error: message });
    }

    this._dispatch('input:validate', { valid, error: this.error });
    this._callHook('onValidate', { valid: this.valid, error: this.error });
    this.requestUpdate();
  }

  clearErrors() {
    this.valid = true;
    this.error = null;
    this.internals.setValidity({});
    this.internals.setValidationMessage('');
    this.requestUpdate();
  }

  // ------------------------------------------------------------------ //
  // Value change helper (call from subclass input handlers)
  // ------------------------------------------------------------------ //
  _updateValue(newValue) {
    this.value = newValue ?? '';
    this.internals.setFormValue(this.value);
    this.dispatchInput();

    if (this.shouldValidate('input')) {
      this.debounceValidate();
    }
  }

  _handleChange() {
    this.dispatchChange();
    if (this.shouldValidate('change')) this.validate();
  }

  _handleBlur() {
    if (this.shouldValidate('blur')) this.validate();
  }

  // ------------------------------------------------------------------ //
  // Public API
  // ------------------------------------------------------------------ //
  reset() {
    this.value = '';
    this.clearErrors();
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this.internals.setFormValue('');
    this.requestUpdate();
    this._dispatch('input:change');
  }

  focus() {
    const input = this.renderRoot?.querySelector('input, textarea, select');
    input?.focus();
  }

  // Form integration
  formResetCallback() { this.reset(); }
  formStateRestoreCallback(state) {
    this.value = state ?? '';
    this.requestUpdate();
  }
}
