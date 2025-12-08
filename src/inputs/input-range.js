import { html } from 'lit';
import * as z from 'zod';
import InputBase from './input-base.js';

export default class InputRange extends InputBase {
  static properties = {
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    valueMin: { type: Number },
    valueMax: { type: Number },
    range: { type: Boolean },
  };

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.valueMin = 25;
    this.valueMax = 75;
    this.range = false;
    this.value = this.range ? JSON.stringify({ min: this.valueMin, max: this.valueMax }) : this.valueMin.toString();
  }

  render() {
    return html`
      <div class="i-field">
        <label class="i-label" for="${this.ids.input}">${this.label || ''}</label>
        <div class="i-wrapper-range">
          ${this._renderSlider()}
        </div>
        ${this._renderDescription()}
        ${this._renderError()}
      </div>
    `;
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

  _renderSlider() {
    return html`
      <range-slider
        value="${this.range ? `${this.valueMin},${this.valueMax}` : this.value}"
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        name="${this.name}"
        aria-label="${this.label || 'Choose a value'}"
        ?disabled="${this.disabled}"
        @input="${this._onRangeInput}"
        @change="${this._onRangeChange}"
      >
        <div data-track></div>
        <div data-track-fill></div>
        <div data-runnable-track>
          <div data-thumb aria-label="${this.range ? `Minimum ${this.label || 'value'}` : this.label || 'Choose a value'}"></div>
          ${this.range ? html`<div data-thumb aria-label="Maximum ${this.label || 'value'}"></div>` : ''}
        </div>
      </range-slider>
    `;
  }

  _onRangeInput(e) {
    if (this.range) {
      const values = e.target.value.split(',').map(Number);
      this.valueMin = values[0];
      this.valueMax = values[1];
      this.value = JSON.stringify({ min: this.valueMin, max: this.valueMax });
    } else {
      this.value = e.target.value;
    }
    this.internals.setFormValue(this.value);
    this.dispatchInput();
    this._callHook('onInput', e);
    if (this.shouldValidate('input')) {
      this.debounceValidate();
    }
  }

  _onRangeChange(e) {
    this._handleChange();
    this._callHook('onChange', e);
  }

  async validate() {
    this._callHook('onValidate');
    this._dispatch('input:validate');

    try {
      const schema = this._buildSchema();
      const parseValue = this.value ?? '';

      await schema.parseAsync(parseValue);

      this.setValidState({ valid: true });
      this._callHook('onSuccess', { value: this.value });
      return { valid: true, error: null };
    } catch (err) {
      const errorMsg = err.errors?.[0]?.message || err.message || 'Invalid value';
      this.setValidState({ valid: false, error: JSON.stringify([{ message: errorMsg }]) });
      this._callHook('onError', { error: errorMsg });
      return { valid: false, error: errorMsg };
    }
  }

  _buildSchema() {
    let schema = z.string();
    if (this.required) {
      schema = schema.min(1, this.requiredMessage || (this.label ? `${this.label} is required` : 'This field is required'));
    }
    if (this.range) {
      schema = schema.refine((val) => {
        try {
          const parsed = JSON.parse(val);
          return parsed.min !== undefined && parsed.max !== undefined && parsed.min <= parsed.max;
        } catch {
          return false;
        }
      }, 'Select a valid range');
    } else {
      schema = z.coerce.number();
      if (this.min !== undefined) schema = schema.min(this.min, `Minimum value is ${this.min}`);
      if (this.max !== undefined) schema = schema.max(this.max, `Maximum value is ${this.max}`);
      if (this.step !== undefined) schema = schema.multipleOf(this.step, `Must be a multiple of ${this.step}`);
    }
    return schema;
  }

  reset() {
    super.reset();
    this.valueMin = this.min;
    this.valueMax = this.max;
    this.value = this.range ? JSON.stringify({ min: this.valueMin, max: this.valueMax }) : this.valueMin.toString();
  }

  focus() {
    if (this.range) {
      this.renderRoot?.querySelector('range-slider')?.focus();
    } else {
      super.focus();
    }
  }
}

customElements.define('input-range', InputRange);