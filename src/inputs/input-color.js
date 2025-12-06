import { html } from 'lit';
import InputTextBase from './input-text-base.js';

export default class InputColor extends InputTextBase {
  static properties = {
    themeMode: { type: String, attribute: 'theme-mode' },
    _coloris: { type: Object, state: false },
    defaultColor: { type: String, state: false },
  };

  constructor() {
    super();
    this.inputType = 'text';
    this.actionButton = 'color';
    this._coloris = null;
    this.defaultColor = '#023e8a';
  }

  firstUpdated() {
    super.firstUpdated();
    const input = this.renderRoot.querySelector('input');
    if (input && typeof Coloris !== 'undefined') {
      this._coloris = Coloris({
        el: input,
        theme: 'polaroid',
        formatToggle: true,
        wrap: false,
        themeMode: this.themeMode || 'light',
        defaultColor: this.value || this.defaultColor || '#023e8a',
        swatches: [
          '#0f172a', // slate-900
          '#1e293b', // slate-800
          '#334155', // slate-700
          '#64748b', // slate-500
          '#94a3b8', // slate-400

          '#ef4444', // red-500
          '#f97316', // orange-500
          '#eab308', // yellow-500
          '#22c55e', // green-500
          '#06b6d4', // cyan-500
          '#0891b2', // cyan-600
          '#3b82f6', // blue-500
          '#6366f1', // indigo-500
          '#8b5cf6', // violet-500
          '#ec4899', // pink-500
        ],
        onChange: (color) => {
          this.value = color;
          this._updateValue(color);
          this.requestUpdate();
        }
      });
    }
  }

  // ------------------------------------------------------------------ //
  // Render – simplified for color input
  // ------------------------------------------------------------------ //
  render() {
    const ariaDescribedby = [
      this.description ? this.ids.desc : null,
      this.error ? this.ids.error : null
    ].filter(Boolean).join(' ');

    const inputClasses = this.error ? 'i-input i-input-error' : 'i-input';
    const wrapperClasses = this.error ? 'i-wrapper i-wrapper-error' : 'i-wrapper';

    return html`
        <div class="i-field">
          <label class="i-label" for="${this.ids.input}">${this.label || ''}</label>
          <div class="${wrapperClasses}">
              <input
                class="${inputClasses}"
                id="${this.ids.input}"
                name="${this.name || ''}"
                type="text"
                .value="${this.value ?? ''}"
                placeholder="${this.placeholder ?? '#ffffff'}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                aria-required="${this.required ? 'true' : 'false'}"
                aria-invalid="${this.valid ? undefined : 'true'}"
                aria-describedby="${ariaDescribedby}"
                @input="${this._onInput}"
                @change="${this._onChange}"
                @blur="${this._onBlur}"
                autocomplete="${this.autocomplete ?? 'off'}"
                ${this.autofocus ? 'autofocus' : ''}
              />
              ${this._renderAction()}
          </div>
          ${this._renderDescription()}
          ${this._renderError()}
        </div>
      `;
  }

  _renderAction() {
    if (!this.actionButton) return '';
    if (this.actionButton === 'color') {
      return html`<button class="i-action i-action-color" type="button" @click="${this._handleColorPicker}" title="Select color">
          <span class="i-color-preview" style="background-color: ${this.value || this.defaultColor}"></span>
      </button>`;
    }
    return '';
  }

  _handleColorPicker(e) {
    e.preventDefault();

    this.renderRoot.querySelector('input').click();
  }
}

customElements.define('input-color', InputColor);
