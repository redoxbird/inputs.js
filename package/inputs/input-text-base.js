// input-text-base.js
import { html } from 'lit';
import * as z from 'zod';
import InputBase from './input-base.js';

/**
 * <input-text-base>
 * Reusable text input foundation (email, password, url, etc.)
 * Inherits ALL core logic from <input-base>:
 *   • Form association
 *   • Hooks + events
 *   • Debounced validation
 *   • Accessibility IDs
 *   • reset(), focus(), validate()
 */
export default class InputTextBase extends InputBase {
  static properties = {
    // Text-specific UI
    actionButton: { type: String, attribute: 'action-button' },
    prefix: { type: String, attribute: 'prefix' },
    prefixValue: { type: String, attribute: 'prefix-value' },
    inputType: { type: String },
    autocomplete: { type: String },
    unstyled: { type: Boolean, attribute: 'unstyled' },

    // Text validators (attributes)
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

    // Custom messages
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

    // Internal state
    isPasswordVisible: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.isPasswordVisible = false;
  }

  // ------------------------------------------------------------------ //
  // Render – uses input-base generated IDs
  // ------------------------------------------------------------------ //
  render() {
    const ariaDescribedby = [
      this.description ? this.ids.desc : null,
      this.error ? this.ids.error : null
    ].filter(Boolean).join(' ');

    const inputClasses = this.error ? 'i-input i-input-error' : 'i-input';

    return html`
        <div class="i-field">
          <label class="i-label" for="${this.ids.input}">${this.label || ''}</label>
          <div class="i-wrapper">
              ${this._renderPrefix()}
              <input
                class="${inputClasses}"
                id="${this.ids.input}"
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
          </div>
          ${this._renderDescription()}
          ${this._renderError()}
        </div>
      `;
  }

  // ------------------------------------------------------------------ //
  // EXACT SAME RENDER HELPERS – unchanged
  // ------------------------------------------------------------------ //
  _renderPrefix() {
    if (!this.prefix) return '';
    return html`<span class="i-prefix">${this.prefix}</span>`;
  }

  _renderAction() {
    if (!this.actionButton) return '';
    if (this.actionButton === 'copy') {
      return html`<button class="i-action i-action-copy" type="button" @click="${this._onActionCopy}" title="Copy to clipboard"></button>`;
    }
    if (this.actionButton === 'hide' && this.inputType === 'password') {
      const icon = this.isPasswordVisible ? 'Hide' : 'Show';
      return html`<button class="i-action i-action-hide" type="button" @click="${this._onActionHide}" title="Toggle password visibility">${icon}</button>`;
    }
    return '';
  }

  _renderDescription() {
    if (!this.description) return '';
    return html`<p class="i-description" id="${this.ids.desc}">${this.description || ''}</p>`;
  }

  _renderError() {
    if (!this.error) return '';
    const error = JSON.parse(this.error);
    if (error.length < 2) {
      return html`<p class="i-error ${error ? 'i-error-visible' : ''}" id="${this.ids.error}">${error[0].message || ''}</p>`;
    } else {
      const errorList = html`<ul>${error.map(err => html`<li>${err.message}</li>`)}</ul>`;
      return html`<div class="i-error ${error ? 'i-error-visible' : ''}" id="${this.ids.error}">${errorList}</div>`;
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
      this._dispatch('input:error', { error: 'Copy failed' });
    });
    e.target.classList.add('i-action-copied');
    setTimeout(() => e.target.classList.remove('i-action-copied'), 1000);
  }

  _onActionHide(e) {
    e.stopPropagation();
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // ------------------------------------------------------------------ //
  // Input handlers – delegate to input-base core
  // ------------------------------------------------------------------ //
  _onInput(e) {
    this._updateValue(e.target.value);     // → dispatches input:input + optional debounce
    this._callHook('onInput', e);
  }

  _onChange(e) {
    this._handleChange();                  // → dispatches input:change + optional validate
    this._callHook('onChange', e);
  }

  _onBlur(e) {
    this._handleBlur();                    // → optional validate on blur
    this._callHook('onBlur', e);
  }

  // ------------------------------------------------------------------ //
  // Zod schema – text-specific validators only
  // ------------------------------------------------------------------ //
  _buildSchema() {
    let schema = z.string();

    if (this.required) {
      schema = schema.min(1, this.requiredMessage || 'This field is required');
    }

    if (this.min) schema = schema.min(Number(this.min), this.minMessage || `Minimum length is ${this.min}`);
    if (this.max) schema = schema.max(Number(this.max), this.maxMessage || `Maximum length is ${this.max}`);

    if (this.email) schema = schema.email(this.emailMessage || 'Invalid email address');
    if (this.url) schema = schema.url(this.urlMessage || 'Invalid URL');

    if (this.startsWith) schema = schema.startsWith(this.startsWith, this.startsWithMessage || `Must start with "${this.startsWith}"`);
    if (this.endsWith) schema = schema.endsWith(this.endsWith, this.endsWithMessage || `Must end with "${this.endsWith}"`);
    if (this.includes) schema = schema.includes(this.includes, this.includesMessage || `Must include "${this.includes}"`);

    if (this.lowercase) schema = schema.lowercase(this.lowercaseMessage || 'Must be lowercase');
    if (this.uppercase) schema = schema.uppercase(this.uppercaseMessage || 'Must be uppercase');

    if (this.format) {
      const msg = this.formatMessage || `Must be a valid ${this.format}`;
      switch (this.format) {
        case 'email': schema = schema.email(msg); break;
        case 'url': schema = schema.url(msg); break;
        case 'uuid': schema = schema.uuid(msg); break;
        case 'cuid': schema = schema.cuid(msg); break;
        case 'cuid2': schema = schema.cuid2(msg); break;
        case 'ulid': schema = schema.ulid(msg); break;
        case 'iso-datetime': schema = z.iso.datetime(msg); break;
        case 'iso-date': schema = z.iso.date(msg); break;
        case 'emoji': schema = schema.emoji(msg); break;
        case 'base64': schema = schema.base64(msg); break;
        case 'hex': schema = schema.hex(msg); break;
        case 'jwt': schema = schema.jwt(msg); break;
        case 'nanoid': schema = schema.nanoid(msg); break;
        case 'ipv4': schema = schema.ipv4(msg); break;
        case 'ipv6': schema = schema.ipv6(msg); break;
        // Add more as needed
      }
    }

    if (this.regex) {
      try {
        schema = schema.regex(new RegExp(this.regex, 'u'), this.regexMessage || 'Invalid format');
      } catch { }
    }

    return schema;
  }

  // ------------------------------------------------------------------ //
  // Validation – uses input-base setValidState()
  // ------------------------------------------------------------------ //
  async validate() {
    this._callHook('onValidate');
    this._dispatch('input:validate');

    try {
      const schema = this._buildSchema();
      const parseValue = this.prefixValue
        ? (this.value.startsWith(this.prefixValue) ? this.value : this.prefixValue + this.value)
        : this.value;

      await schema.parseAsync(parseValue ?? '');

      this.setValidState({ valid: true });
      this._callHook('onSuccess', { value: this.value });
      return { valid: true, error: null };
    } catch (err) {
      const errorMsg = err.errors?.[0]?.message || err.message || 'Invalid value';
      this.setValidState({ valid: false, error: errorMsg });
      this._callHook('onError', { error: errorMsg });
      return { valid: false, error: errorMsg };
    }
  }

  // ------------------------------------------------------------------ //
  // Override reset to clear password visibility
  // ------------------------------------------------------------------ //
  reset() {
    super.reset();
    this.isPasswordVisible = false;
  }
}
