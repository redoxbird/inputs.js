import { html } from 'lit';
import * as z from 'zod';
import InputBase from './input-base.js';
import 'range-slider-element';

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
    this.range = true;
    this.value = JSON.stringify({ min: this.valueMin, max: this.valueMax });
  }

  render() {
    const ariaDescribedby = [
      this.description ? this.ids.desc : null,
      this.error ? this.ids.error : null
    ].filter(Boolean).join(' ');

    return html`
      <div class="i-field">
        <label class="i-label" for="${this.ids.input}">${this.label || ''}</label>
        <div class="i-wrapper">
          ${this.range ? this._renderRangeSlider() : this._renderSingleRange()}
        </div>
        ${this._renderDescription()}
        ${this._renderError()}
      </div>
    `;
  }

  _renderSingleRange() {
    return html`<input
      class="i-input"
      id="${this.ids.input}"
      type="range"
      min="${this.min}"
      max="${this.max}"
      step="${this.step}"
      .value="${this.value}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      aria-required="${this.required ? 'true' : 'false'}"
      aria-invalid="${this.valid ? undefined : 'true'}"
      aria-describedby="${ariaDescribedby}"
      @input="${this._onInput}"
      @change="${this._onChange}"
      @blur="${this._onBlur}"
      ${this.autofocus ? 'autofocus' : ''}
    />`;
  }

  _renderRangeSlider() {
    return html`
      <range-slider
        value="${this.valueMin},${this.valueMax}"
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        name="${this.name}"
        aria-label="${this.label || 'Range'}"
        ?disabled="${this.disabled}"
        @input="${this._onRangeInput}"
        @change="${this._onRangeChange}"
      >
        <div data-track></div>
        <div data-track-fill></div>
        <div data-runnable-track>
          <div data-thumb aria-label="Minimum ${this.label || 'value'}"></div>
          <div data-thumb aria-label="Maximum ${this.label || 'value'}"></div>
        </div>
      </range-slider>
    `;
  }

  _onInput(e) {
    this.value = e.target.value;
    this._updateValue(this.value);
    this._callHook('onInput', e);
  }

  _onChange(e) {
    this._handleChange();
    this._callHook('onChange', e);
  }

  _onBlur(e) {
    this._handleBlur();
    this._callHook('onBlur', e);
  }

  _onRangeInput(e) {
    const values = e.target.value.split(',').map(Number);
    this.valueMin = values[0];
    this.valueMax = values[1];
    this.value = JSON.stringify({ min: this.valueMin, max: this.valueMax });
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