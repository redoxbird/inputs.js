import { LitElement, html, css } from 'lit';
import * as z from 'zod';

class InputTextBase extends LitElement {
  static formAssociated = true;

  static properties = {
    name: { type: String },
    value: { type: String },
    label: { type: String },
    placeholder: { type: String },
    description: { type: String },
    required: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    shadow: { type: Boolean },
    inline: { type: Boolean },
    error: { type: String },
    validateOn: { type: String, attribute: 'validate-on' },
    actionButton: { type: String, attribute: 'action-button' },
    prefixIcon: { type: String, attribute: 'prefix-icon' },
    inputType: { type: String },
    autocomplete: { type: String },
    unstyled: { type: Boolean, attribute: 'unstyled' },
    // Validators
    min: { type: String },
    max: { type: String },
    email: { type: Boolean },
    url: { type: Boolean },
    startsWith: { type: String, attribute: 'starts-with' },
    endsWith: { type: String, attribute: 'ends-with' },
    includes: { type: String },
    lowercase: { type: Boolean },
    uppercase: { type: Boolean },
    regex: { type: String },
    format: { type: String },
    // Messages
    requiredMessage: { type: String, attribute: 'required-message' },
    minMessage: { type: String, attribute: 'min-message' },
    maxMessage: { type: String, attribute: 'max-message' },
    emailMessage: { type: String, attribute: 'email-message' },
    urlMessage: { type: String, attribute: 'url-message' },
    startsWithMessage: { type: String, attribute: 'starts-with-message' },
    endsWithMessage: { type: String, attribute: 'ends-with-message' },
    includesMessage: { type: String, attribute: 'includes-message' },
    lowercaseMessage: { type: String, attribute: 'lowercase-message' },
    uppercaseMessage: { type: String, attribute: 'uppercase-message' },
    regexMessage: { type: String, attribute: 'regex-message' },
    formatMessage: { type: String, attribute: 'format-message' },
    // Hooks
    onInit: { type: Function },
    onBeforeRender: { type: Function },
    onAfterRender: { type: Function },
    onInput: { type: Function },
    onChange: { type: Function },
    onBlur: { type: Function },
    onValidate: { type: Function },
    onError: { type: Function },
    onSuccess: { type: Function },
    // State
    valid: { type: Boolean, reflect: true },
    isPasswordVisible: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.value = '';
    this.valid = true;
    this.error = '';
    this._initialized = false;
    this._timeout = null;
    this._inputId = '';
    this._descId = '';
    this._errorId = '';
    this.validateOn = 'blur';
    this.isPasswordVisible = false;
    this.unstyled = false;
  }

  createRenderRoot() {
    const root = this.shadow === true ? super.createRenderRoot() : this;
    return root;
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  init() {
    this._generateIds();
    this.onInit?.();
  }

  _generateIds() {
    const uid = Math.random().toString(36).substring(2, 15);
    this._inputId = `input-${uid}`;
    this._descId = `${this._inputId}-desc`;
    this._errorId = `${this._inputId}-error`;
  }

  willUpdate(changedProperties) {
    this.onBeforeRender?.(changedProperties);
    super.willUpdate(changedProperties);
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.onAfterRender?.(changedProperties);
    this.internals.setFormValue(this.value);
  }

  render() {
    const ariaDescribedby = [this.description ? this._descId : null, this.error ? this._errorId : null]
      .filter(Boolean)
      .join(' ');

    const inputClasses = this.error ? 'input-input input-input-error' : 'input-input';

    return html`
      <div class="input-wrapper">
        <label class="input-label" for="${this._inputId}">${this.label || ''}</label>
        ${this._renderPrefix()}
        <input
          class="${inputClasses}"
          id="${this._inputId}"
          name="${this.name || ''}"
          type="${this._getInputType()}"
          .value="${this.value ?? ''}"
          placeholder="${this.placeholder ?? ''}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-invalid="${this.valid ? undefined : 'true'}"
          aria-describedby="${ariaDescribedby}"
          @input="${this._onInput}"
          @change="${this._onChange}"
          @blur="${this._onBlur}"
          ${this.autocomplete ? `autocomplete="${this.autocomplete}"` : ''}
          ${this.autofocus ? 'autofocus' : ''}
        />
        ${this._renderAction()}
        <p class="input-description" id="${this._descId}">${this.description || ''}</p>
        ${this._renderError()}
      </div>
    `;
  }

  _renderPrefix() {
    if (!this.prefixIcon) return '';
    return html`<span class="input-prefix">${this.prefixIcon}</span>`;
  }

  _renderAction() {
    if (!this.actionButton) return '';
    if (this.actionButton === 'copy') {
      return html`<button class="input-action" type="button" @click="${this._onActionCopy}" title="Copy to clipboard">📋</button>`;
    }
    if (this.actionButton === 'hide' && this.inputType === 'password') {
      const icon = this.isPasswordVisible ? '🙈' : '👁';
      return html`<button class="input-action" type="button" @click="${this._onActionHide}" title="Toggle password visibility">${icon}</button>`;
    }
    return '';
  }

  _renderError() {
    if (!this.error) return '';

    const error = JSON.parse(this.error);

    if (error.length < 2) {
      return html`<p class="input-error ${error ? 'input-error-visible' : ''}" id="${this._errorId}">${error[0].message || ''}</p>`;
    } else {
      // generate <ul> with all the errors
      const errorList = html`<ul>${error.map(error => html`<li>${error.message}</li>`)}</ul>`;
      return html`<div class="input-error ${error ? 'input-error-visible' : ''}" id="${this._errorId}">${errorList}</div>`;
    }
  }

  _getInputType() {
    let type = this.inputType || 'text';
    if (type === 'password' && this.actionButton === 'hide' && this.isPasswordVisible) {
      type = 'text';
    }
    return type;
  }

  _onActionCopy(e) {
    e.stopPropagation();
    navigator.clipboard.writeText(this.value).catch(() => {
      this.dispatchInputEvent('error', { error: 'Copy failed' });
    });
  }

  _onActionHide(e) {
    e.stopPropagation();
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  _onInput(e) {
    try {
      this.value = e.target.value;
      if (!this._initialized) {
        this._initialized = true;
        this.dispatchInputEvent('init');
      }
      this.dispatchInputEvent('input');
      this.onInput?.(e);
      if (this._shouldValidate('input')) {
        this._debounceValidate();
      }
    } catch (err) {
      this.dispatchInputEvent('error', { error: err.message });
    }
  }

  _onChange(e) {
    try {
      this.dispatchInputEvent('change');
      this.onChange?.(e);
      if (this._shouldValidate('change')) {
        this._debounceValidate();
      }
    } catch (err) {
      this.dispatchInputEvent('error', { error: err.message });
    }
  }

  _onBlur(e) {
    try {
      this.onBlur?.(e);
      if (this._shouldValidate('blur')) {
        this._debounceValidate();
      }
    } catch (err) {
      this.dispatchInputEvent('error', { error: err.message });
    }
  }

  _shouldValidate(eventType) {
    return this.validateOn?.split(/[\s,|]+/).some((v) => v === eventType) ?? false;
  }

  _debounceValidate() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => this.validate(), 100);
  }

  dispatchInputEvent(type, extraDetail = {}) {
    this.dispatchEvent(
      new CustomEvent(`input:${type}`, {
        bubbles: true,
        composed: true,
        detail: { value: this.value, valid: this.valid, error: this.error, ...extraDetail },
      })
    );
  }

  _buildSchema() {
    let schema = z.string();

    if (this.required) {
      schema = schema.min(1, this.requiredMessage || 'This field is required');
    }

    if (this.min != null && this.min !== '') {
      schema = schema.min(Number(this.min), this.minMessage || `Minimum length is ${this.min}`);
    }

    if (this.max != null && this.max !== '') {
      schema = schema.max(Number(this.max), this.maxMessage || `Maximum length is ${this.max}`);
    }

    if (this.email) {
      schema = schema.email(this.emailMessage || 'Invalid email address');
    }

    if (this.url) {
      schema = schema.url(this.urlMessage || 'Invalid URL');
    }

    if (this.startsWith != null) {
      schema = schema.startsWith(
        this.startsWith,
        this.startsWithMessage || `Must start with "${this.startsWith}"`
      );
    }

    if (this.endsWith != null) {
      schema = schema.endsWith(
        this.endsWith,
        this.endsWithMessage || `Must end with "${this.endsWith}"`
      );
    }

    if (this.includes != null) {
      schema = schema.includes(
        this.includes,
        this.includesMessage || `Must include "${this.includes}"`
      );
    }

    if (this.lowercase != null) {
      schema = schema.lowercase(
        this.lowercaseMessage || `Must be lowercase`
      );
    }

    if (this.uppercase != null) {
      schema = schema.uppercase(
        this.uppercaseMessage || `Must be uppercase`
      );
    }

    if (this.format != null) {
      if (this.format === 'email') {
        schema = schema.email(
          this.formatMessage || `Must be a valid email`
        );
      }

      if (this.format === 'uuid') {
        schema = schema.uuid(
          this.formatMessage || `Must be a valid UUID`
        );
      }

      if (this.format === 'url') {
        schema = schema.url(
          this.formatMessage || `Must be a valid URL`
        );
      }

      if (this.format === 'emoji') {
        schema = schema.emoji(
          this.formatMessage || `Must be a valid emoji`
        );
      }

      if (this.format === 'base64') {
        schema = schema.base64(
          this.formatMessage || `Must be a valid base64 string`
        );
      }

      if (this.format === 'base64url') {
        schema = schema.base64url(
          this.formatMessage || `Must be a valid base64url string`
        );
      }

      if (this.format === 'hex') {
        schema = schema.hex(
          this.formatMessage || `Must be a valid hex string`
        );
      }

      if (this.format === 'jwt') {
        schema = schema.jwt(
          this.formatMessage || `Must be a valid JWT`
        );
      }

      if (this.format === 'nanoid') {
        schema = schema.nanoid(
          this.formatMessage || `Must be a valid nanoid`
        );
      }

      if (this.format === 'cuid') {
        schema = schema.cuid(
          this.formatMessage || `Must be a valid cuid`
        );
      }

      if (this.format === 'cuid2') {
        schema = schema.cuid2(
          this.formatMessage || `Must be a valid cuid2`
        );
      }

      if (this.format === 'ulid') {
        schema = schema.ulid(
          this.formatMessage || `Must be a valid ulid`
        );
      }

      if (this.format === 'ipv4') {
        schema = schema.ipv4(
          this.formatMessage || `Must be a valid IPv4 Address`
        );
      }

      if (this.format === 'ipv6') {
        schema = schema.ipv6(
          this.formatMessage || `Must be a valid IPv6 Address`
        );
      }

      if (this.format === 'mac') {
        schema = schema.mac(
          this.formatMessage || `Must be a valid MAC Address`
        );
      }

      if (this.format === 'cidrv4') {
        schema = schema.cidrv4(
          this.formatMessage || `Must be a valid CIDRv4 Address`
        );
      }

      if (this.format === 'cidrv6') {
        schema = schema.cidrv6(
          this.formatMessage || `Must be a valid CIDRv6 Address`
        );
      }

      if (this.format === 'iso-date') {
        schema = z.iso.date(
          this.formatMessage || `Must be a valid Date`
        );
      }

      if (this.format === 'iso-datetime') {
        schema = z.iso.datetime(
          this.formatMessage || `Must be a valid DateTime format`
        );
      }
    }

    if (this.regex != null) {
      try {
        const re = new RegExp(this.regex, 'u');
        schema = schema.regex(re, this.regexMessage || 'Invalid format');
      } catch {
        // Invalid regex, ignore
      }
    }

    return schema;
  }

  async validate() {
    try {
      this.onValidate?.();
      this.dispatchInputEvent('validate');

      const schema = this._buildSchema();
      await schema.parseAsync(this.value ?? '');

      this.error = '';
      this.valid = true;
      // this.internals.setValidity({ valid: true });
      this.onSuccess?.();
      this.dispatchInputEvent('success');
      return { valid: true, error: null };
    } catch (err) {
      const errorMsg = err.errors?.[0]?.message || err.message || 'Invalid value';
      this.error = errorMsg;
      this.valid = false;
      // this.internals.setValidity({ customError: true }, errorMsg, this._errorId);
      this.onError?.();
      this.dispatchInputEvent('error', { error: errorMsg });
      return { valid: false, error: errorMsg };
    }
  }

  reset() {
    this.value = '';
    this.error = '';
    this.valid = true;
    this.isPasswordVisible = false;
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    this.internals.setFormValue('');
    this.internals.setValidity({ valid: true });
    this.requestUpdate();
    this.dispatchInputEvent('change');
  }

  focus() {
    const inputEl = this.renderRoot?.querySelector('.input-input');
    inputEl?.focus();
  }

  formResetCallback() {
    this.reset();
  }

  formStateRestoreCallback(value) {
    this.value = value || '';
    this.requestUpdate();
  }
}

export default InputTextBase;
