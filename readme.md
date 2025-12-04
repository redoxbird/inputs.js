
# Inputs.js Documentation

A lightweight, zero-dependency, fully accessible input library built with Lit and form‑associated custom elements.

---

## 1. Overview

Inputs.js is a collection of Web Component inputs (e.g. `<input-text>`, `<input-email>`, `<input-number>`, `<input-phone>`) that:

- Enhance native `<input>` elements instead of replacing them
- Are fully accessible (WCAG AA, ARIA, keyboard support) [6]
- Integrate natively with HTML forms via `ElementInternals` [6][1]
- Expose a consistent set of attributes, events, hooks, and methods across all components
- Use schema-based validation (zod‑mini) configured via HTML attributes

Every Inputs.js component:

- Extends `LitElement` and uses Lit’s rendering and reactivity [6][1]
- Is a **Form-Associated Custom Element** (`static formAssociated = true`) [6][1]
- Uses a **strict DOM structure** and class names so you can fully style from the outside [6]

---

## 2. Core Philosophy

From the official spec: [6]

1. **Progressive Enhancement**  
   Components progressively enhance existing native input behavior. They remain form controls, support `form.reset()`, and participate in native validation mechanisms.

2. **Accessibility First**  
   - Proper ARIA linkage between label, input, description, and error messages [6][1][2].
   - Keyboard navigation is fully supported.
   - WCAG AA compliance is a core requirement.

3. **Hookable**  
   Every component exposes lifecycle hooks:

   - `onInit`
   - `onBeforeRender`
   - `onAfterRender`
   - `onInput`
   - `onChange`
   - `onValidate`
   - `onError`
   - `onSuccess`  

   Hooks are available via:
   - HTML attributes
   - JS properties
   - Custom events [6][1]

4. **Form-Associated Elements**  
   All components: [6][1]

   - Use `ElementInternals`
   - Participate in native forms
   - Support `form.reset()`
   - Support custom + native validation

---

## 3. DOM Structure (All Components)

Every Inputs.js component must render the same DOM structure: [6]

```html
<div class="input-wrapper">
  <label class="input-label"></label>
  <input class="input-input" />
  <p class="input-description"></p>
  <p class="input-error"></p>
</div>
```

**Structure rules**: [6]

- `.input-wrapper` wraps all internal elements.
- `.input-label` is linked to the input via `for` + `id`.
- `.input-input` is the core `<input>` element.
- `.input-description` is only visually shown when a `description` is provided.
- `.input-error` is only visibly shown when an error exists.

Additional state classes used by components:

- `.input-error-visible` – toggled when there is an error [2]
- `.input-input-error` – toggled on the input when invalid [2]

These classes are intended for your own CSS.

> Implementation detail: some *base* classes (e.g. `input-text-base`, `input-number-base`) internally use helper markup like `.i-field`, `.i-wrapper`, etc. Public components must still conform to the DOM contract above. [3][5][6]

---

## 4. Styling

Inputs.js is **class-based only**; there is no built-in design system or utility framework. You style everything via the standard class names:

- `input-wrapper`
- `input-label`
- `input-input`
- `input-description`
- `input-error`
- `input-error-visible`
- `input-input-error`

You can keep components in light DOM (default) for full global CSS control, or enable Shadow DOM per-instance via the `shadow` attribute (see below). Shadow/root creation is delegated to the component’s `createRenderRoot()` method, which respects the `shadow` attribute. [1]

---

## 5. Installation & Usage

> The spec describes structure and behavior but does not prescribe a specific packaging format (npm name, build system). This section reflects a typical setup using ES modules and bare imports, based on standard Web Component practice.

### 5.1 Install

Assuming Inputs.js is published as an ES module package:

```bash
npm install inputs.js
```

Or include via `<script type="module">` pointing to the distributed files.

### 5.2 Basic usage

```html
<script type="module">
  import 'inputs.js/components/input-text.js';
</script>

<form id="signup">
  <input-text
    name="email"
    label="Email"
    placeholder="you@example.com"
    description="We’ll never share your email."
    validate-on="input"
    email
    required
  ></input-text>

  <button type="submit">Submit</button>
</form>
```

Values will be part of the form’s `FormData` (e.g. `new FormData(form).get('email')`) thanks to `ElementInternals#setFormValue`. [1][6]

---

## 6. Core Attributes (Universal)

All Inputs.js components must support these attributes:

- `name` – form field name (participates in `FormData`) [1][3][5]
- `value` – string value (also available as a property) [1]
- `label` – text for `<label class="input-label">` [6]
- `placeholder` – forwards to the internal `<input>` placeholder [1][2][3][5]
- `description` – text for `.input-description` [1][2][6]
- `required` – standard HTML required flag [1][2][3][5]
- `disabled` – disables the control [1][2][3][5]
- `readonly` – read-only value [1][2][3][5]
- `shadow` – when present, component uses Shadow DOM; otherwise light DOM [1]
- `inline` – layout hint; used by components for styling/markup variations [1]
- `error` – manually set or override the current error message (also mirrored as property) [1]
- `validate-on` – controls when validation runs: `"input" | "change" | "blur"`; can be combined using comma, space, or `|` separated values (e.g. `validate-on="input|blur"`). [1]

Action / decoration attributes:

- `action-button="copy|hide"` – optional inline action:
  - `"copy"` – copy current value to clipboard
  - `"hide"` – toggle visibility for password-style inputs  
    Supported by text-like and number-like bases via `_renderAction()` helpers. [3][5]
- `prefix-icon` – visual icon (e.g. as text or styled element) displayed near the input.
- `prefix` / `prefix-value` – text prefix or logical value prefix for text inputs (e.g. currency symbol, URL scheme). [5]

### 6.1 Validation Attributes (zod-mini)

Inputs.js uses zod‑mini for schema-based validation.  
All zod-mini rules are configurable via HTML attributes; for example:

- String-related:
  - `min` / `max` – length boundaries (`z.string().min(...)`, `z.string().max(...)`)
  - `regex` – RegExp for the value
  - `starts-with` / `ends-with`
  - `email`, `url` – semantic validators
- Number-related (on number components): [3]
  - `gt`, `gte`, `lt`, `lte`
  - `min` (alias for `gte`), `max` (alias for `lte`)
  - `int`, `positive`, `nonnegative`

Each rule has an associated `-message` variant to customize error messages, e.g.:

- `min="5"` and `min-message="Minimum length is 5 characters"`
- `email` and `email-message="Please enter a valid email address"`

The component’s `validate()` method builds a zod schema from the active attributes and uses it for synchronous + async validation. [3][5]

---

## 7. Validation Behavior

Validation is centralized in base classes and handled consistently across components:

- Attributes are read and converted into a zod-mini schema (string or number specific). [3][5]
- Validation can be **debounced** and **async**, with an internal `AbortController` to cancel previous requests while a new validation run is scheduled. [1]
- The public `validate()` method returns:

  ```ts
  {
    valid: boolean;
    error: string | null;
  }
  ```

- When validation runs:
  - `this.valid` and `this.error` are updated.
  - `ElementInternals#setValidity()` is called with appropriate flags. [1][2]
  - The component fires:
    - `input:validate` (always)
    - `input:error` if invalid
    - `input:success` if valid [1]

- Triggers are controlled by `validate-on`:
  - `"input"` – validate while typing
  - `"change"` – validate on `change`
  - `"blur"` – validate when leaving the field
  - Can be combined (e.g. `validate-on="input blur"`). [1]

### Default error messages

The spec defines common default messages: [6]

- `"This field is required"`
- `"Invalid email address"`
- `"Enter a valid value"`

These can be overridden by your own `*-message` attributes or by setting `error` directly.

---

## 8. Events

All Inputs.js components dispatch the same set of custom events, always with `{ bubbles: true, composed: true }`. [1][6]

- `input:init` – fired when the component initializes (connected to DOM). [1]
- `input:input` – fired on each input (`@input`) change.
- `input:change` – fired on native `change`.
- `input:validate` – fired when validation runs.
- `input:error` – fired when validation fails or when an internal error is set.
- `input:success` – fired when validation succeeds (no errors).

You can handle them via:

```js
el.addEventListener('input:validate', (event) => {
  console.log(event.detail); // component-specific payload
});
```

---

## 9. Lifecycle Hooks

To make components fully hookable, Inputs.js defines a set of lifecycle hooks that are invoked internally and can be attached from the outside. [6][1]

Hooks:

- `onInit`
- `onBeforeRender`
- `onAfterRender`
- `onInput`
- `onChange`
- `onValidate`
- `onError`
- `onSuccess`

Supported integration styles:

1. **HTML attributes**  
   (Exact wiring mechanism—e.g. global function name vs. inline JS—is implementation-dependent. The spec only mandates availability via attributes. [6])

2. **JS properties**

   ```js
   const email = document.querySelector('input-email');
   email.onValidate = (detail) => {
     console.log('validated', detail);
   };
   ```

3. **Custom events**  
   Use the event names listed above; hooks and events are designed to align.

Internally, base components call a structure like `_callHook('onInit')`, etc., on lifecycle transitions (connect, `willUpdate`, `updated`, input handlers, and validation). [1]

---

## 10. Form Integration

All Inputs.js components are **form-associated custom elements**:

- `static formAssociated = true;`
- Call `this.internals = this.attachInternals();` in the constructor. [1][4][6]

This enables:

- Participation in `FormData` via `internals.setFormValue(this.value ?? '')`. [1]
- Native form reset support via `formResetCallback()` → `this.reset()`. [1][2][4]
- Restoring form state (e.g. navigation / BF cache) via `formStateRestoreCallback(state)`. [1][2][4]
- Native validation integration via `internals.setValidity(...)` for error state and message anchoring. [1][2]

Example callbacks (simplified from implementations): [1][2][4]

```js
formResetCallback() {
  this.reset();
}

formStateRestoreCallback(state) {
  if (state !== undefined) this.value = state;
}
```

---

## 11. Public API (All Components)

Each Inputs.js component exposes the same core API:

### 11.1 Properties

- `value: string` – current value. Reflected as an attribute where appropriate. [1]
- `valid: boolean` – validity status, reflected as attribute for styling. [1]
- `error: string | null` – current error message (or null if valid). [1]

Additional properties for specific components (e.g. `country` on `<input-phone>`, `inputType`, `autocomplete` on text inputs) are documented per component below. [3][4][5]

### 11.2 Methods

- `validate(): Promise<{ valid: boolean; error: string | null }>`  
  Run validation immediately (canceling any pending debounced validations), update state and internals, and dispatch validation-related events. [1]

- `reset(): void`  
  Reset the input to its initial state:
  - Clear value and error
  - Mark the field as valid
  - Call `internals.setFormValue('')` and clear validity
  - Often used from `formResetCallback()`. [1][2][4]

- `focus(): void`  
  Focus the inner `.input-input` element. [2][4]

---

## 12. Error Handling & Accessibility

Error handling is defensive: components must never throw; internal errors are surfaced via `input:error` and through the `error` property. [System spec]

### 12.1 Visual error state

Components update CSS classes based on validity:

- `.input-error` text updated to the current error message.
- `.input-error-visible` toggled based on `valid` + `error`. [2]
- `.input-input-error` toggled on the internal `<input>`. [2]

### 12.2 ARIA attributes

- `aria-invalid="true"` set on the input when invalid, removed when valid. [2][3][5]
- `aria-required="true"` when `required` is present. [2]
- `aria-describedby` references description and error elements, using generated IDs when necessary. [1][2][3][5][6]

Example (from email input update flow): [2]

- If there is a description → `id="${inputId}-desc"` assigned to `.input-description`.
- If there is an error → `id="${inputId}-error"` assigned to `.input-error`.
- `aria-describedby` is computed as `"descId errorId"` where present, or removed if none. [2]

This ensures assistive technologies correctly announce both help text and validation messages.

---

## 13. Base Classes

Inputs.js uses base components to centralize behavior.

### 13.1 `<input-base>`

Minimal foundation used by higher-level bases: [1]

Responsibilities:

- Form association (`formAssociated`, `attachInternals`) [1]
- Core attributes: `name`, `value`, `label`, `placeholder`, `description`, `required`, `disabled`, `readonly`, `shadow`, `inline`, `validate-on`, `valid`, `error` [1]
- Render root selection (`createRenderRoot` respects `shadow`) [1]
- Lifecycle: `connectedCallback`, `willUpdate`, `updated` (with hooks and events) [1]
- Standard event dispatch helper (`input:init`, `input:input`, `input:change`, `input:validate`, `input:error`, `input:success`) [1]
- Debounced async validation with `AbortController` for cancellation [1]
- Accessibility IDs generation (`this.ids = this._generateIds()`) [1]
- Public API wiring: `value`, `valid`, `error`, `validate()`, `reset()`, `focus()` [1]

There is **no validation logic** inside `input-base`; validation is delegated to text/number/etc. bases. [1]

### 13.2 `<input-text-base>`

Foundation for text-like inputs (email, password, URL, generic text): [5]

- Inherits from `InputBase`. [5]
- Adds text-specific properties:
  - `actionButton` (`copy` / `hide`) [5]
  - `prefix` / `prefix-value` [5]
  - `inputType` (e.g. `"text"`, `"email"`, `"password"`) [5]
  - `autocomplete` [5]
  - `unstyled` (optional styling toggle) [5]
- Renders:
  - label
  - optional prefix (`_renderPrefix()` → `.i-prefix`) [5]
  - input (`.input-input` mapped appropriately)
  - optional action button (`_renderAction()` → `copy`/`hide`) [5]
- Builds zod string schemas based on attributes (`min`, `max`, `regex`, `email`, `url`, etc.). [5]

### 13.3 `<input-number-base>`

Foundation for number-like inputs (amounts, integers, etc.): [3]

- Inherits from `InputBase`. [3]
- Adds number-specific validators as reflected attributes:
  - `gt`, `gte`, `lt`, `lte`, `min`, `max`, `int`, `positive`, `nonnegative` [3]
- Renders a number `<input>` with type resolved via `_getInputType()` and optional prefix/action controls. [3]
- Builds zod number schemas from provided attributes. [3]

---

## 14. Concrete Components

Below are example concrete components inferred from the spec and snippets.

### 14.1 `<input-text>`

General-purpose text input built on `<input-text-base>`:

- Attributes:
  - All core attributes
  - Text validators (length, regex, starts/ends-with, etc.)
  - `action-button`, `prefix`, `prefix-value`, `autocomplete`
- Use cases: username, generic text fields, search inputs, etc.

Example:

```html
<input-text
  name="username"
  label="Username"
  description="3–20 characters, letters and numbers only."
  placeholder="johndoe"
  validate-on="blur"
  min="3"
  max="20"
  regex="^[a-zA-Z0-9]+$"
  regex-message="Only letters and numbers are allowed."
  required
></input-text>
```

### 14.2 `<input-email>`

Email-specific input, built on the text base with email semantics. Snippets for email show: [2]

- Shadow or light DOM depending on `shadow`.
- Syncs standard attributes (`name`, `placeholder`, `required`, `disabled`, `readonly`, `pattern`, `minlength`, `maxlength`, etc.) to the internal `<input type="email">`. [2]
- Manages ARIA and error state via `updateErrorState()`. [2]

Usage:

```html
<input-email
  name="email"
  label="Email"
  description="We’ll send a confirmation link."
  placeholder="you@example.com"
  validate-on="input"
  email
  required
></input-email>
```

### 14.3 `<input-number>`

Number input built on `<input-number-base>`: [3]

- Supports numeric zod-mini attributes:
  - `gt`, `gte`, `lt`, `lte`, `min`, `max`, `int`, `positive`, `nonnegative` [3]
- Can display prefixes like currency (`prefix="$"`) and optional action buttons. [3]

Usage:

```html
<input-number
  name="amount"
  label="Amount"
  description="Enter your amount"
  placeholder="10"
  validate-on="input"
  gt="5"
  gt-message="Minimum value is 5"
  lt="100"
  lt-message="Maximum value is 100"
  positive
  positive-message="Value must be positive"
  required
></input-number>
```

### 14.4 `<input-phone>`

Phone input with country code selection. The snippet shows: [4]

- Extends `LitElement`, `formAssociated = true`, uses zod for validation. [4]
- Renders:
  - `<label class="input-label">`
  - A country `<select>` with flag, name, dial code [4]
  - The main `<input type="tel" class="input-input">` bound to `formattedValue` [4]
  - Optional `prefixIcon` near the input [4]
  - Optional `actionButton="copy"` button [4]
- ARIA:
  - `aria-labelledby` → label ID
  - `aria-describedby` → description + error IDs
  - `aria-invalid` from `valid` [4]

Example:

```html
<input-phone
  name="phone"
  label="Phone number"
  description="Include country code."
  placeholder="123 456 789"
  validate-on="blur"
  required
></input-phone>
```

---

## 15. Shadow vs. Light DOM

By default, components may use **light DOM** for easier global styling, or switch to **Shadow DOM** when the `shadow` attribute is present. `InputBase` implements `createRenderRoot()` accordingly: [1]

```js
createRenderRoot() {
  return this.shadow ? this.attachShadow({ mode: 'open' }) : this;
}
```

- Use `shadow` when you want encapsulated styles.
- Omit `shadow` when you prefer to style with global CSS.

---

## 16. File Structure

The spec gives a canonical file layout: [6]

```text
inputs/
  index.js
  components/
    email.js
  styles/
    email.css  (optional, minimal)
  docs/
    specs/
      inputs-spec-v0.1.md
```

In practice, you will have additional components (`input-text.js`, `input-number.js`, `input-phone.js`, their base classes, etc.) under `components/`.

---

## 17. Example: End‑to‑End Form

```html
<form id="billing">
  <input-text
    name="fullName"
    label="Full name"
    placeholder="Jane Doe"
    description="As shown on your card."
    required
    min="3"
    validate-on="blur"
  ></input-text>

  <input-email
    name="email"
    label="Email"
    placeholder="you@example.com"
    description="We’ll send a receipt."
    email
    required
    validate-on="input|blur"
  ></input-email>

  <input-number
    name="amount"
    label="Donation amount"
    prefix="$"
    placeholder="50"
    positive
    min="1"
    max="1000"
    validate-on="change"
    required
  ></input-number>

  <input-phone
    name="phone"
    label="Phone (optional)"
    description="For SMS updates about your donation."
    validate-on="blur"
  ></input-phone>

  <button type="submit">Donate</button>
</form>

<script type="module">
  import 'inputs.js/components/input-text.js';
  import 'inputs.js/components/input-email.js';
  import 'inputs.js/components/input-number.js';
  import 'inputs.js/components/input-phone.js';

  const form = document.getElementById('billing');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Manually validate all Inputs.js fields
    const fields = form.querySelectorAll(
      'input-text, input-email, input-number, input-phone'
    );

    let allValid = true;
    for (const field of fields) {
      const { valid } = await field.validate();
      if (!valid) allValid = false;
    }

    if (!allValid) return;

    const data = new FormData(form);
    console.log(Object.fromEntries(data.entries()));
  });
</script>
```

---

## 18. Extending Inputs.js

If you need a new specialized input:

1. Extend the appropriate base (e.g. `InputTextBase`, `InputNumberBase`, or `InputBase` directly). [1][3][5]
2. Implement `render()` to match the required DOM structure (`input-wrapper`, etc.). [6]
3. Declare supported attributes in `static properties`.
4. Implement any custom validation in `validate()` by augmenting the zod-mini schema.
5. Respect:
   - `validate-on` semantics
   - Hook calls (`onInit`, `onValidate`, etc.)
   - Event dispatch (`input:*`) [1][6]
   - `formResetCallback` and `formStateRestoreCallback` [1]

---

If you need more detail on any specific component (e.g. full API for `<input-phone>` or the exact zod-mini schema mapping), tell me which component or area you want expanded.
