(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __decoratorStart = (base) => {
    var _a8;
    return [, , , __create((_a8 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a8 : null)];
  };
  var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
  var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
  var __decoratorMetadata = (array2, target) => __defNormalProp(target, __knownSymbol("metadata"), array2[3]);
  var __runInitializers = (array2, flags, self, value) => {
    for (var i5 = 0, fns = array2[flags >> 1], n5 = fns && fns.length; i5 < n5; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
    return value;
  };
  var __decorateElement = (array2, flags, name, decorators, target, extra) => {
    var fn, it, done, ctx, access, k2 = flags & 7, s4 = !!(flags & 8), p3 = !!(flags & 16);
    var j2 = k2 > 3 ? array2.length + 1 : k2 ? s4 ? 1 : 2 : 0, key = __decoratorStrings[k2 + 5];
    var initializers = k2 > 3 && (array2[j2 - 1] = []), extraInitializers = array2[j2] || (array2[j2] = []);
    var desc = k2 && (!p3 && !s4 && (target = target.prototype), k2 < 5 && (k2 > 3 || !p3) && __getOwnPropDesc(k2 < 4 ? target : { get [name]() {
      return __privateGet(this, extra);
    }, set [name](x2) {
      return __privateSet(this, extra, x2);
    } }, name));
    k2 ? p3 && k2 < 4 && __name(extra, (k2 > 2 ? "set " : k2 > 1 ? "get " : "") + name) : __name(target, name);
    for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
      ctx = __decoratorContext(k2, name, done = {}, array2[3], extraInitializers);
      if (k2) {
        ctx.static = s4, ctx.private = p3, access = ctx.access = { has: p3 ? (x2) => __privateIn(target, x2) : (x2) => name in x2 };
        if (k2 ^ 3) access.get = p3 ? (x2) => (k2 ^ 1 ? __privateGet : __privateMethod)(x2, target, k2 ^ 4 ? extra : desc.get) : (x2) => x2[name];
        if (k2 > 2) access.set = p3 ? (x2, y3) => __privateSet(x2, target, y3, k2 ^ 4 ? extra : desc.set) : (x2, y3) => x2[name] = y3;
      }
      it = (0, decorators[i5])(k2 ? k2 < 4 ? p3 ? extra : desc[key] : k2 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k2 ^ 4 || it === void 0) __expectFn(it) && (k2 > 4 ? initializers.unshift(it) : k2 ? p3 ? extra = it : desc[key] = it : target = it);
      else if (typeof it !== "object" || it === null) __typeError("Object expected");
      else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
    }
    return k2 || __decoratorMetadata(array2, target), desc && __defProp(target, name, desc), p3 ? k2 ^ 4 ? extra : desc : target;
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e6, o5) {
      if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e6;
    }
    get styleSheet() {
      let t4 = this.o;
      const s4 = this.t;
      if (e && void 0 === t4) {
        const e6 = void 0 !== s4 && 1 === s4.length;
        e6 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e6) => {
    const o5 = 1 === t4.length ? t4[0] : e6.reduce(((e7, s4, o6) => e7 + ((t5) => {
      if (true === t5._$cssResult$) return t5.cssText;
      if ("number" == typeof t5) return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t4[o6 + 1]), t4[0]);
    return new n(o5, t4, s);
  };
  var S = (s4, o5) => {
    if (e) s4.adoptedStyleSheets = o5.map(((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet));
    else for (const e6 of o5) {
      const o6 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o6.setAttribute("nonce", n5), o6.textContent = e6.cssText, s4.appendChild(o6);
    }
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const s4 of t5.cssRules) e6 += s4.cssText;
    return r(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t4, s4) => t4;
  var u = { toAttribute(t4, s4) {
    switch (s4) {
      case Boolean:
        t4 = t4 ? l : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s4) {
    let i5 = t4;
    switch (s4) {
      case Boolean:
        i5 = null !== t4;
        break;
      case Number:
        i5 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t4);
        } catch (t5) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t4, s4) => !i2(t4, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  var _a, _b;
  (_a = Symbol.metadata) != null ? _a : Symbol.metadata = Symbol("metadata"), (_b = a.litPropertyMetadata) != null ? _b : a.litPropertyMetadata = /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t4) {
      var _a8;
      this._$Ei(), ((_a8 = this.l) != null ? _a8 : this.l = []).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t4, i5, s4);
        void 0 !== h3 && e2(this.prototype, t4, h3);
      }
    }
    static getPropertyDescriptor(t4, s4, i5) {
      var _a8;
      const { get: e6, set: r5 } = (_a8 = h(this.prototype, t4)) != null ? _a8 : { get() {
        return this[s4];
      }, set(t5) {
        this[s4] = t5;
      } };
      return { get: e6, set(s5) {
        const h3 = e6 == null ? void 0 : e6.call(this);
        r5 == null ? void 0 : r5.call(this, s5), this.requestUpdate(t4, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      var _a8;
      return (_a8 = this.elementProperties.get(t4)) != null ? _a8 : b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
        for (const i5 of s4) this.createProperty(i5, t5[i5]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s4 = litPropertyMetadata.get(t4);
        if (void 0 !== s4) for (const [t5, i5] of s4) this.elementProperties.set(t5, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s4] of this.elementProperties) {
        const i5 = this._$Eu(t5, s4);
        void 0 !== i5 && this._$Eh.set(i5, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e6 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e6) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t4, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a8;
      this._$ES = new Promise(((t4) => this.enableUpdating = t4)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a8 = this.constructor.l) == null ? void 0 : _a8.forEach(((t4) => t4(this)));
    }
    addController(t4) {
      var _a8, _b2;
      ((_a8 = this._$EO) != null ? _a8 : this._$EO = /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && ((_b2 = t4.hostConnected) == null ? void 0 : _b2.call(t4));
    }
    removeController(t4) {
      var _a8;
      (_a8 = this._$EO) == null ? void 0 : _a8.delete(t4);
    }
    _$E_() {
      const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t4.set(i5, this[i5]), delete this[i5]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      var _a8;
      const t4 = (_a8 = this.shadowRoot) != null ? _a8 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      var _a8, _b2;
      (_a8 = this.renderRoot) != null ? _a8 : this.renderRoot = this.createRenderRoot(), this.enableUpdating(true), (_b2 = this._$EO) == null ? void 0 : _b2.forEach(((t4) => {
        var _a9;
        return (_a9 = t4.hostConnected) == null ? void 0 : _a9.call(t4);
      }));
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var _a8;
      (_a8 = this._$EO) == null ? void 0 : _a8.forEach(((t4) => {
        var _a9;
        return (_a9 = t4.hostDisconnected) == null ? void 0 : _a9.call(t4);
      }));
    }
    attributeChangedCallback(t4, s4, i5) {
      this._$AK(t4, i5);
    }
    _$ET(t4, s4) {
      var _a8;
      const i5 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i5);
      if (void 0 !== e6 && true === i5.reflect) {
        const h3 = (void 0 !== ((_a8 = i5.converter) == null ? void 0 : _a8.toAttribute) ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t4, null == h3 ? this.removeAttribute(e6) : this.setAttribute(e6, h3), this._$Em = null;
      }
    }
    _$AK(t4, s4) {
      var _a8, _b2, _c;
      const i5 = this.constructor, e6 = i5._$Eh.get(t4);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t5 = i5.getPropertyOptions(e6), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== ((_a8 = t5.converter) == null ? void 0 : _a8.fromAttribute) ? t5.converter : u;
        this._$Em = e6;
        const r5 = h3.fromAttribute(s4, t5.type);
        this[e6] = (_c = r5 != null ? r5 : (_b2 = this._$Ej) == null ? void 0 : _b2.get(e6)) != null ? _c : r5, this._$Em = null;
      }
    }
    requestUpdate(t4, s4, i5) {
      var _a8, _b2;
      if (void 0 !== t4) {
        const e6 = this.constructor, h3 = this[t4];
        if (i5 != null ? i5 : i5 = e6.getPropertyOptions(t4), !(((_a8 = i5.hasChanged) != null ? _a8 : f)(h3, s4) || i5.useDefault && i5.reflect && h3 === ((_b2 = this._$Ej) == null ? void 0 : _b2.get(t4)) && !this.hasAttribute(e6._$Eu(t4, i5)))) return;
        this.C(t4, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t4, s4, { useDefault: i5, reflect: e6, wrapped: h3 }, r5) {
      var _a8, _b2, _c;
      i5 && !((_a8 = this._$Ej) != null ? _a8 : this._$Ej = /* @__PURE__ */ new Map()).has(t4) && (this._$Ej.set(t4, (_b2 = r5 != null ? r5 : s4) != null ? _b2 : this[t4]), true !== h3 || void 0 !== r5) || (this._$AL.has(t4) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t4, s4)), true === e6 && this._$Em !== t4 && ((_c = this._$Eq) != null ? _c : this._$Eq = /* @__PURE__ */ new Set()).add(t4));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a8, _b2;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if ((_a8 = this.renderRoot) != null ? _a8 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
          for (const [t6, s5] of this._$Ep) this[t6] = s5;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0) for (const [s5, i5] of t5) {
          const { wrapped: t6 } = i5, e6 = this[s5];
          true !== t6 || this._$AL.has(s5) || void 0 === e6 || this.C(s5, void 0, i5, e6);
        }
      }
      let t4 = false;
      const s4 = this._$AL;
      try {
        t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), (_b2 = this._$EO) == null ? void 0 : _b2.forEach(((t5) => {
          var _a9;
          return (_a9 = t5.hostUpdate) == null ? void 0 : _a9.call(t5);
        })), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t4 = false, this._$EM(), s5;
      }
      t4 && this._$AE(s4);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var _a8;
      (_a8 = this._$EO) == null ? void 0 : _a8.forEach(((t5) => {
        var _a9;
        return (_a9 = t5.hostUpdated) == null ? void 0 : _a9.call(t5);
      })), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Eq && (this._$Eq = this._$Eq.forEach(((t5) => this._$ET(t5, this[t5])))), this._$EM();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  var _a2;
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p == null ? void 0 : p({ ReactiveElement: y }), ((_a2 = a.reactiveElementVersions) != null ? _a2 : a.reactiveElementVersions = []).push("2.1.1");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var a2 = Array.isArray;
  var u2 = (t4) => a2(t4) || "function" == typeof (t4 == null ? void 0 : t4[Symbol.iterator]);
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t4) => (i5, ...s4) => ({ _$litType$: t4, strings: i5, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t4, i5) {
    if (!a2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var V = (t4, i5) => {
    const s4 = t4.length - 1, o5 = [];
    let r5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t4[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r5 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r5 != null ? r5 : f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r5 = void 0);
      const x2 = c4 === m && t4[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o5.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t4, l3 + (t4[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o5];
  };
  var N = class _N {
    constructor({ strings: t4, _$litType$: s4 }, n5) {
      let r5;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = V(t4, s4);
      if (this.el = _N.createElement(f3, n5), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r5 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r5.nodeType) {
          if (r5.hasAttributes()) for (const t5 of r5.getAttributeNames()) if (t5.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r5.getAttribute(t5).split(h2), e6 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e6[2], strings: s5, ctor: "." === e6[1] ? H : "?" === e6[1] ? I : "@" === e6[1] ? L : k }), r5.removeAttribute(t5);
          } else t5.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r5.removeAttribute(t5));
          if ($.test(r5.tagName)) {
            const t5 = r5.textContent.split(h2), s5 = t5.length - 1;
            if (s5 > 0) {
              r5.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r5.append(t5[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r5.append(t5[s5], l2());
            }
          }
        } else if (8 === r5.nodeType) if (r5.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = r5.data.indexOf(h2, t5 + 1)); ) d3.push({ type: 7, index: c4 }), t5 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t4, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t4, s4;
    }
  };
  function S2(t4, i5, s4 = t4, e6) {
    var _a8, _b2, _c;
    if (i5 === T) return i5;
    let h3 = void 0 !== e6 ? (_a8 = s4._$Co) == null ? void 0 : _a8[e6] : s4._$Cl;
    const o5 = c3(i5) ? void 0 : i5._$litDirective$;
    return (h3 == null ? void 0 : h3.constructor) !== o5 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b2.call(h3, false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t4), h3._$AT(t4, s4, e6)), void 0 !== e6 ? ((_c = s4._$Co) != null ? _c : s4._$Co = [])[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t4, h3._$AS(t4, i5.values), h3, e6)), i5;
  }
  var M = class {
    constructor(t4, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      var _a8;
      const { el: { content: i5 }, parts: s4 } = this._$AD, e6 = ((_a8 = t4 == null ? void 0 : t4.creationScope) != null ? _a8 : r3).importNode(i5, true);
      C.currentNode = e6;
      let h3 = C.nextNode(), o5 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o5 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t4) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t4) : 6 === l3.type && (i6 = new z(h3, this, t4)), this._$AV.push(i6), l3 = s4[++n5];
        }
        o5 !== (l3 == null ? void 0 : l3.index) && (h3 = C.nextNode(), o5++);
      }
      return C.currentNode = r3, e6;
    }
    p(t4) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t4[i5])), i5++;
    }
  };
  var R = class _R {
    get _$AU() {
      var _a8, _b2;
      return (_b2 = (_a8 = this._$AM) == null ? void 0 : _a8._$AU) != null ? _b2 : this._$Cv;
    }
    constructor(t4, i5, s4, e6) {
      var _a8;
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s4, this.options = e6, this._$Cv = (_a8 = e6 == null ? void 0 : e6.isConnected) != null ? _a8 : true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === (t4 == null ? void 0 : t4.nodeType) && (t4 = i5.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i5 = this) {
      t4 = S2(this, t4, i5), c3(t4) ? t4 === E || null == t4 || "" === t4 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t4 !== this._$AH && t4 !== T && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : u2(t4) ? this.k(t4) : this._(t4);
    }
    O(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    _(t4) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(r3.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      var _a8;
      const { values: i5, _$litType$: s4 } = t4, e6 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (((_a8 = this._$AH) == null ? void 0 : _a8._$AD) === e6) this._$AH.p(i5);
      else {
        const t5 = new M(e6, this), s5 = t5.u(this.options);
        t5.p(i5), this.T(s5), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i5 = A.get(t4.strings);
      return void 0 === i5 && A.set(t4.strings, i5 = new N(t4)), i5;
    }
    k(t4) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e6 = 0;
      for (const h3 of t4) e6 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e6], s4._$AI(h3), e6++;
      e6 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i5.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i5) {
      var _a8;
      for ((_a8 = this._$AP) == null ? void 0 : _a8.call(this, false, true, i5); t4 !== this._$AB; ) {
        const i6 = t4.nextSibling;
        t4.remove(), t4 = i6;
      }
    }
    setConnected(t4) {
      var _a8;
      void 0 === this._$AM && (this._$Cv = t4, (_a8 = this._$AP) == null ? void 0 : _a8.call(this, t4));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i5, s4, e6, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t4, i5 = this, s4, e6) {
      const h3 = this.strings;
      let o5 = false;
      if (void 0 === h3) t4 = S2(this, t4, i5, 0), o5 = !c3(t4) || t4 !== this._$AH && t4 !== T, o5 && (this._$AH = t4);
      else {
        const e7 = t4;
        let n5, r5;
        for (t4 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r5 = S2(this, e7[s4 + n5], i5, n5), r5 === T && (r5 = this._$AH[n5]), o5 || (o5 = !c3(r5) || r5 !== this._$AH[n5]), r5 === E ? t4 = E : t4 !== E && (t4 += (r5 != null ? r5 : "") + h3[n5 + 1]), this._$AH[n5] = r5;
      }
      o5 && !e6 && this.j(t4);
    }
    j(t4) {
      t4 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === E ? void 0 : t4;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== E);
    }
  };
  var L = class extends k {
    constructor(t4, i5, s4, e6, h3) {
      super(t4, i5, s4, e6, h3), this.type = 5;
    }
    _$AI(t4, i5 = this) {
      var _a8;
      if ((t4 = (_a8 = S2(this, t4, i5, 0)) != null ? _a8 : E) === T) return;
      const s4 = this._$AH, e6 = t4 === E && s4 !== E || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== E && (s4 === E || e6);
      e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var _a8, _b2;
      "function" == typeof this._$AH ? this._$AH.call((_b2 = (_a8 = this.options) == null ? void 0 : _a8.host) != null ? _b2 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var z = class {
    constructor(t4, i5, s4) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      S2(this, t4);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  var _a3;
  j == null ? void 0 : j(N, R), ((_a3 = t2.litHtmlVersions) != null ? _a3 : t2.litHtmlVersions = []).push("3.3.1");
  var B = (t4, i5, s4) => {
    var _a8, _b2;
    const e6 = (_a8 = s4 == null ? void 0 : s4.renderBefore) != null ? _a8 : i5;
    let h3 = e6._$litPart$;
    if (void 0 === h3) {
      const t5 = (_b2 = s4 == null ? void 0 : s4.renderBefore) != null ? _b2 : null;
      e6._$litPart$ = h3 = new R(i5.insertBefore(l2(), t5), t5, void 0, s4 != null ? s4 : {});
    }
    return h3._$AI(t4), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a8, _b2;
      const t4 = super.createRenderRoot();
      return (_b2 = (_a8 = this.renderOptions).renderBefore) != null ? _b2 : _a8.renderBefore = t4.firstChild, t4;
    }
    update(t4) {
      const r5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = B(r5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var _a8;
      super.connectedCallback(), (_a8 = this._$Do) == null ? void 0 : _a8.setConnected(true);
    }
    disconnectedCallback() {
      var _a8;
      super.disconnectedCallback(), (_a8 = this._$Do) == null ? void 0 : _a8.setConnected(false);
    }
    render() {
      return T;
    }
  };
  var _a4;
  i4._$litElement$ = true, i4["finalized"] = true, (_a4 = s3.litElementHydrateSupport) == null ? void 0 : _a4.call(s3, { LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4 == null ? void 0 : o4({ LitElement: i4 });
  var _a5;
  ((_a5 = s3.litElementVersions) != null ? _a5 : s3.litElementVersions = []).push("4.2.1");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t3 = (t4) => (e6, o5) => {
    void 0 !== o5 ? o5.addInitializer((() => {
      customElements.define(t4, e6);
    })) : customElements.define(t4, e6);
  };

  // node_modules/zod/v4/core/core.js
  var NEVER = Object.freeze({
    status: "aborted"
  });
  // @__NO_SIDE_EFFECTS__
  function $constructor(name, initializer3, params) {
    var _a8;
    function init(inst, def) {
      var _a10, _b2;
      var _a9;
      Object.defineProperty(inst, "_zod", {
        value: (_a10 = inst._zod) != null ? _a10 : {},
        enumerable: false
      });
      (_b2 = (_a9 = inst._zod).traits) != null ? _b2 : _a9.traits = /* @__PURE__ */ new Set();
      inst._zod.traits.add(name);
      initializer3(inst, def);
      for (const k2 in _2.prototype) {
        if (!(k2 in inst))
          Object.defineProperty(inst, k2, { value: _2.prototype[k2].bind(inst) });
      }
      inst._zod.constr = _2;
      inst._zod.def = def;
    }
    const Parent = (_a8 = params == null ? void 0 : params.Parent) != null ? _a8 : Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _2(def) {
      var _a10;
      var _a9;
      const inst = (params == null ? void 0 : params.Parent) ? new Definition() : this;
      init(inst, def);
      (_a10 = (_a9 = inst._zod).deferred) != null ? _a10 : _a9.deferred = [];
      for (const fn of inst._zod.deferred) {
        fn();
      }
      return inst;
    }
    Object.defineProperty(_2, "init", { value: init });
    Object.defineProperty(_2, Symbol.hasInstance, {
      value: (inst) => {
        var _a9, _b2;
        if ((params == null ? void 0 : params.Parent) && inst instanceof params.Parent)
          return true;
        return (_b2 = (_a9 = inst == null ? void 0 : inst._zod) == null ? void 0 : _a9.traits) == null ? void 0 : _b2.has(name);
      }
    });
    Object.defineProperty(_2, "name", { value: name });
    return _2;
  }
  var $brand = Symbol("zod_brand");
  var $ZodAsyncError = class extends Error {
    constructor() {
      super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
  };
  var globalConfig = {};
  function config(newConfig) {
    if (newConfig)
      Object.assign(globalConfig, newConfig);
    return globalConfig;
  }

  // node_modules/zod/v4/core/util.js
  var util_exports = {};
  __export(util_exports, {
    BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
    Class: () => Class,
    NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
    aborted: () => aborted,
    allowsEval: () => allowsEval,
    assert: () => assert,
    assertEqual: () => assertEqual,
    assertIs: () => assertIs,
    assertNever: () => assertNever,
    assertNotEqual: () => assertNotEqual,
    assignProp: () => assignProp,
    cached: () => cached,
    captureStackTrace: () => captureStackTrace,
    cleanEnum: () => cleanEnum,
    cleanRegex: () => cleanRegex,
    clone: () => clone,
    createTransparentProxy: () => createTransparentProxy,
    defineLazy: () => defineLazy,
    esc: () => esc,
    escapeRegex: () => escapeRegex,
    extend: () => extend,
    finalizeIssue: () => finalizeIssue,
    floatSafeRemainder: () => floatSafeRemainder,
    getElementAtPath: () => getElementAtPath,
    getEnumValues: () => getEnumValues,
    getLengthableOrigin: () => getLengthableOrigin,
    getParsedType: () => getParsedType,
    getSizableOrigin: () => getSizableOrigin,
    isObject: () => isObject,
    isPlainObject: () => isPlainObject,
    issue: () => issue,
    joinValues: () => joinValues,
    jsonStringifyReplacer: () => jsonStringifyReplacer,
    merge: () => merge,
    normalizeParams: () => normalizeParams,
    nullish: () => nullish,
    numKeys: () => numKeys,
    omit: () => omit,
    optionalKeys: () => optionalKeys,
    partial: () => partial,
    pick: () => pick,
    prefixIssues: () => prefixIssues,
    primitiveTypes: () => primitiveTypes,
    promiseAllObject: () => promiseAllObject,
    propertyKeyTypes: () => propertyKeyTypes,
    randomString: () => randomString,
    required: () => required,
    stringifyPrimitive: () => stringifyPrimitive,
    unwrapMessage: () => unwrapMessage
  });
  function assertEqual(val) {
    return val;
  }
  function assertNotEqual(val) {
    return val;
  }
  function assertIs(_arg) {
  }
  function assertNever(_x) {
    throw new Error();
  }
  function assert(_2) {
  }
  function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v2) => typeof v2 === "number");
    const values = Object.entries(entries).filter(([k2, _2]) => numericValues.indexOf(+k2) === -1).map(([_2, v2]) => v2);
    return values;
  }
  function joinValues(array2, separator = "|") {
    return array2.map((val) => stringifyPrimitive(val)).join(separator);
  }
  function jsonStringifyReplacer(_2, value) {
    if (typeof value === "bigint")
      return value.toString();
    return value;
  }
  function cached(getter) {
    const set = false;
    return {
      get value() {
        if (!set) {
          const value = getter();
          Object.defineProperty(this, "value", { value });
          return value;
        }
        throw new Error("cached value already set");
      }
    };
  }
  function nullish(input) {
    return input === null || input === void 0;
  }
  function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
  }
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  function defineLazy(object, key, getter) {
    const set = false;
    Object.defineProperty(object, key, {
      get() {
        if (!set) {
          const value = getter();
          object[key] = value;
          return value;
        }
        throw new Error("cached value already set");
      },
      set(v2) {
        Object.defineProperty(object, key, {
          value: v2
          // configurable: true,
        });
      },
      configurable: true
    });
  }
  function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
      value,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function getElementAtPath(obj, path) {
    if (!path)
      return obj;
    return path.reduce((acc, key) => acc == null ? void 0 : acc[key], obj);
  }
  function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key) => promisesObj[key]);
    return Promise.all(promises).then((results) => {
      const resolvedObj = {};
      for (let i5 = 0; i5 < keys.length; i5++) {
        resolvedObj[keys[i5]] = results[i5];
      }
      return resolvedObj;
    });
  }
  function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i5 = 0; i5 < length; i5++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  function esc(str) {
    return JSON.stringify(str);
  }
  var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {
  };
  function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
  }
  var allowsEval = cached(() => {
    var _a8;
    if (typeof navigator !== "undefined" && ((_a8 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a8.includes("Cloudflare"))) {
      return false;
    }
    try {
      const F = Function;
      new F("");
      return true;
    } catch (_2) {
      return false;
    }
  });
  function isPlainObject(o5) {
    if (isObject(o5) === false)
      return false;
    const ctor = o5.constructor;
    if (ctor === void 0)
      return true;
    const prot = ctor.prototype;
    if (isObject(prot) === false)
      return false;
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
      return false;
    }
    return true;
  }
  function numKeys(data) {
    let keyCount = 0;
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        keyCount++;
      }
    }
    return keyCount;
  }
  var getParsedType = (data) => {
    const t4 = typeof data;
    switch (t4) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(data) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return "promise";
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return "map";
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return "set";
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return "date";
        }
        if (typeof File !== "undefined" && data instanceof File) {
          return "file";
        }
        return "object";
      default:
        throw new Error(`Unknown data type: ${t4}`);
    }
  };
  var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  var primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function clone(inst, def, params) {
    const cl = new inst._zod.constr(def != null ? def : inst._zod.def);
    if (!def || (params == null ? void 0 : params.parent))
      cl._zod.parent = inst;
    return cl;
  }
  function normalizeParams(_params) {
    const params = _params;
    if (!params)
      return {};
    if (typeof params === "string")
      return { error: () => params };
    if ((params == null ? void 0 : params.message) !== void 0) {
      if ((params == null ? void 0 : params.error) !== void 0)
        throw new Error("Cannot specify both `message` and `error` params");
      params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string")
      return __spreadProps(__spreadValues({}, params), { error: () => params.error });
    return params;
  }
  function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
      get(_2, prop, receiver) {
        target != null ? target : target = getter();
        return Reflect.get(target, prop, receiver);
      },
      set(_2, prop, value, receiver) {
        target != null ? target : target = getter();
        return Reflect.set(target, prop, value, receiver);
      },
      has(_2, prop) {
        target != null ? target : target = getter();
        return Reflect.has(target, prop);
      },
      deleteProperty(_2, prop) {
        target != null ? target : target = getter();
        return Reflect.deleteProperty(target, prop);
      },
      ownKeys(_2) {
        target != null ? target : target = getter();
        return Reflect.ownKeys(target);
      },
      getOwnPropertyDescriptor(_2, prop) {
        target != null ? target : target = getter();
        return Reflect.getOwnPropertyDescriptor(target, prop);
      },
      defineProperty(_2, prop, descriptor) {
        target != null ? target : target = getter();
        return Reflect.defineProperty(target, prop, descriptor);
      }
    });
  }
  function stringifyPrimitive(value) {
    if (typeof value === "bigint")
      return value.toString() + "n";
    if (typeof value === "string")
      return `"${value}"`;
    return `${value}`;
  }
  function optionalKeys(shape) {
    return Object.keys(shape).filter((k2) => {
      return shape[k2]._zod.optin === "optional" && shape[k2]._zod.optout === "optional";
    });
  }
  var NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  };
  var BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
  };
  function pick(schema, mask) {
    const newShape = {};
    const currDef = schema._zod.def;
    for (const key in mask) {
      if (!(key in currDef.shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      newShape[key] = currDef.shape[key];
    }
    return clone(schema, __spreadProps(__spreadValues({}, schema._zod.def), {
      shape: newShape,
      checks: []
    }));
  }
  function omit(schema, mask) {
    const newShape = __spreadValues({}, schema._zod.def.shape);
    const currDef = schema._zod.def;
    for (const key in mask) {
      if (!(key in currDef.shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      delete newShape[key];
    }
    return clone(schema, __spreadProps(__spreadValues({}, schema._zod.def), {
      shape: newShape,
      checks: []
    }));
  }
  function extend(schema, shape) {
    if (!isPlainObject(shape)) {
      throw new Error("Invalid input to extend: expected a plain object");
    }
    const def = __spreadProps(__spreadValues({}, schema._zod.def), {
      get shape() {
        const _shape = __spreadValues(__spreadValues({}, schema._zod.def.shape), shape);
        assignProp(this, "shape", _shape);
        return _shape;
      },
      checks: []
      // delete existing checks
    });
    return clone(schema, def);
  }
  function merge(a3, b3) {
    return clone(a3, __spreadProps(__spreadValues({}, a3._zod.def), {
      get shape() {
        const _shape = __spreadValues(__spreadValues({}, a3._zod.def.shape), b3._zod.def.shape);
        assignProp(this, "shape", _shape);
        return _shape;
      },
      catchall: b3._zod.def.catchall,
      checks: []
      // delete existing checks
    }));
  }
  function partial(Class2, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = __spreadValues({}, oldShape);
    if (mask) {
      for (const key in mask) {
        if (!(key in oldShape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        shape[key] = Class2 ? new Class2({
          type: "optional",
          innerType: oldShape[key]
        }) : oldShape[key];
      }
    } else {
      for (const key in oldShape) {
        shape[key] = Class2 ? new Class2({
          type: "optional",
          innerType: oldShape[key]
        }) : oldShape[key];
      }
    }
    return clone(schema, __spreadProps(__spreadValues({}, schema._zod.def), {
      shape,
      checks: []
    }));
  }
  function required(Class2, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = __spreadValues({}, oldShape);
    if (mask) {
      for (const key in mask) {
        if (!(key in shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        shape[key] = new Class2({
          type: "nonoptional",
          innerType: oldShape[key]
        });
      }
    } else {
      for (const key in oldShape) {
        shape[key] = new Class2({
          type: "nonoptional",
          innerType: oldShape[key]
        });
      }
    }
    return clone(schema, __spreadProps(__spreadValues({}, schema._zod.def), {
      shape,
      // optional: [],
      checks: []
    }));
  }
  function aborted(x2, startIndex = 0) {
    var _a8;
    for (let i5 = startIndex; i5 < x2.issues.length; i5++) {
      if (((_a8 = x2.issues[i5]) == null ? void 0 : _a8.continue) !== true)
        return true;
    }
    return false;
  }
  function prefixIssues(path, issues) {
    return issues.map((iss) => {
      var _a9;
      var _a8;
      (_a9 = (_a8 = iss).path) != null ? _a9 : _a8.path = [];
      iss.path.unshift(path);
      return iss;
    });
  }
  function unwrapMessage(message) {
    return typeof message === "string" ? message : message == null ? void 0 : message.message;
  }
  function finalizeIssue(iss, ctx, config2) {
    var _a8, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const full = __spreadProps(__spreadValues({}, iss), { path: (_a8 = iss.path) != null ? _a8 : [] });
    if (!iss.message) {
      const message = (_k = (_j = (_h = (_f = unwrapMessage((_d = (_c = (_b2 = iss.inst) == null ? void 0 : _b2._zod.def) == null ? void 0 : _c.error) == null ? void 0 : _d.call(_c, iss))) != null ? _f : unwrapMessage((_e = ctx == null ? void 0 : ctx.error) == null ? void 0 : _e.call(ctx, iss))) != null ? _h : unwrapMessage((_g = config2.customError) == null ? void 0 : _g.call(config2, iss))) != null ? _j : unwrapMessage((_i = config2.localeError) == null ? void 0 : _i.call(config2, iss))) != null ? _k : "Invalid input";
      full.message = message;
    }
    delete full.inst;
    delete full.continue;
    if (!(ctx == null ? void 0 : ctx.reportInput)) {
      delete full.input;
    }
    return full;
  }
  function getSizableOrigin(input) {
    if (input instanceof Set)
      return "set";
    if (input instanceof Map)
      return "map";
    if (input instanceof File)
      return "file";
    return "unknown";
  }
  function getLengthableOrigin(input) {
    if (Array.isArray(input))
      return "array";
    if (typeof input === "string")
      return "string";
    return "unknown";
  }
  function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
      return {
        message: iss,
        code: "custom",
        input,
        inst
      };
    }
    return __spreadValues({}, iss);
  }
  function cleanEnum(obj) {
    return Object.entries(obj).filter(([k2, _2]) => {
      return Number.isNaN(Number.parseInt(k2, 10));
    }).map((el) => el[1]);
  }
  var Class = class {
    constructor(..._args) {
    }
  };

  // node_modules/zod/v4/core/errors.js
  var initializer = (inst, def) => {
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
      value: inst._zod,
      enumerable: false
    });
    Object.defineProperty(inst, "issues", {
      value: def,
      enumerable: false
    });
    Object.defineProperty(inst, "message", {
      get() {
        return JSON.stringify(def, jsonStringifyReplacer, 2);
      },
      enumerable: true
      // configurable: false,
    });
    Object.defineProperty(inst, "toString", {
      value: () => inst.message,
      enumerable: false
    });
  };
  var $ZodError = $constructor("$ZodError", initializer);
  var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
  function flattenError(error, mapper = (issue2) => issue2.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  function formatError(error, _mapper) {
    const mapper = _mapper || function(issue2) {
      return issue2.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error2) => {
      for (const issue2 of error2.issues) {
        if (issue2.code === "invalid_union" && issue2.errors.length) {
          issue2.errors.map((issues) => processError({ issues }));
        } else if (issue2.code === "invalid_key") {
          processError({ issues: issue2.issues });
        } else if (issue2.code === "invalid_element") {
          processError({ issues: issue2.issues });
        } else if (issue2.path.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i5 = 0;
          while (i5 < issue2.path.length) {
            const el = issue2.path[i5];
            const terminal = i5 === issue2.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue2));
            }
            curr = curr[el];
            i5++;
          }
        }
      }
    };
    processError(error);
    return fieldErrors;
  }

  // node_modules/zod/v4/core/parse.js
  var _parse = (_Err) => (schema, value, _ctx, _params) => {
    var _a8;
    const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    if (result.issues.length) {
      const e6 = new ((_a8 = _params == null ? void 0 : _params.Err) != null ? _a8 : _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e6, _params == null ? void 0 : _params.callee);
      throw e6;
    }
    return result.value;
  };
  var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
    var _a8;
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e6 = new ((_a8 = params == null ? void 0 : params.Err) != null ? _a8 : _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e6, params == null ? void 0 : params.callee);
      throw e6;
    }
    return result.value;
  };
  var _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? __spreadProps(__spreadValues({}, _ctx), { async: false }) : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    return result.issues.length ? {
      success: false,
      error: new (_Err != null ? _Err : $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    } : { success: true, data: result.value };
  };
  var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
  var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    return result.issues.length ? {
      success: false,
      error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    } : { success: true, data: result.value };
  };
  var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);

  // node_modules/zod/v4/core/regexes.js
  var cuid = /^[cC][^\s-]{8,}$/;
  var cuid2 = /^[0-9a-z]+$/;
  var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  var xid = /^[0-9a-vA-V]{20}$/;
  var ksuid = /^[A-Za-z0-9]{27}$/;
  var nanoid = /^[a-zA-Z0-9_-]{21}$/;
  var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  var uuid = (version2) => {
    if (!version2)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
  var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  function emoji() {
    return new RegExp(_emoji, "u");
  }
  var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
  var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  var base64url = /^[A-Za-z0-9_-]*$/;
  var hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
  var e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
  var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
  var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
  function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
  }
  function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
  }
  function datetime(args) {
    const time3 = timeSource({ precision: args.precision });
    const opts = ["Z"];
    if (args.local)
      opts.push("");
    if (args.offset)
      opts.push(`([+-]\\d{2}:\\d{2})`);
    const timeRegex = `${time3}(?:${opts.join("|")})`;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
  }
  var string = (params) => {
    var _a8, _b2;
    const regex = params ? `[\\s\\S]{${(_a8 = params == null ? void 0 : params.minimum) != null ? _a8 : 0},${(_b2 = params == null ? void 0 : params.maximum) != null ? _b2 : ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
  };
  var lowercase = /^[^A-Z]*$/;
  var uppercase = /^[^a-z]*$/;

  // node_modules/zod/v4/core/checks.js
  var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
    var _a9, _b2;
    var _a8;
    (_a9 = inst._zod) != null ? _a9 : inst._zod = {};
    inst._zod.def = def;
    (_b2 = (_a8 = inst._zod).onattach) != null ? _b2 : _a8.onattach = [];
  });
  var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a9;
    var _a8;
    $ZodCheck.init(inst, def);
    (_a9 = (_a8 = inst._zod.def).when) != null ? _a9 : _a8.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    };
    inst._zod.onattach.push((inst2) => {
      var _a10;
      const curr = (_a10 = inst2._zod.bag.maximum) != null ? _a10 : Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length <= def.maximum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
    var _a9;
    var _a8;
    $ZodCheck.init(inst, def);
    (_a9 = (_a8 = inst._zod.def).when) != null ? _a9 : _a8.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    };
    inst._zod.onattach.push((inst2) => {
      var _a10;
      const curr = (_a10 = inst2._zod.bag.minimum) != null ? _a10 : Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length >= def.minimum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a9;
    var _a8;
    $ZodCheck.init(inst, def);
    (_a9 = (_a8 = inst._zod.def).when) != null ? _a9 : _a8.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    };
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.length;
      bag.maximum = def.length;
      bag.length = def.length;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length === def.length)
        return;
      const origin = getLengthableOrigin(input);
      const tooBig = length > def.length;
      payload.issues.push(__spreadProps(__spreadValues({
        origin
      }, tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length }), {
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      }));
    };
  });
  var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a9, _b3;
    var _a8, _b2;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      var _a10;
      const bag = inst2._zod.bag;
      bag.format = def.format;
      if (def.pattern) {
        (_a10 = bag.patterns) != null ? _a10 : bag.patterns = /* @__PURE__ */ new Set();
        bag.patterns.add(def.pattern);
      }
    });
    if (def.pattern)
      (_a9 = (_a8 = inst._zod).check) != null ? _a9 : _a8.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push(__spreadProps(__spreadValues({
          origin: "string",
          code: "invalid_format",
          format: def.format,
          input: payload.value
        }, def.pattern ? { pattern: def.pattern.toString() } : {}), {
          inst,
          continue: !def.abort
        }));
      };
    else
      (_b3 = (_b2 = inst._zod).check) != null ? _b3 : _b2.check = () => {
      };
  });
  var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = lowercase;
    $ZodCheckStringFormat.init(inst, def);
  });
  var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = uppercase;
    $ZodCheckStringFormat.init(inst, def);
  });
  var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      var _a8;
      const bag = inst2._zod.bag;
      (_a8 = bag.patterns) != null ? _a8 : bag.patterns = /* @__PURE__ */ new Set();
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.includes(def.includes, def.position))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: def.includes,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
    var _a8;
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    (_a8 = def.pattern) != null ? _a8 : def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      var _a9;
      const bag = inst2._zod.bag;
      (_a9 = bag.patterns) != null ? _a9 : bag.patterns = /* @__PURE__ */ new Set();
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.startsWith(def.prefix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: def.prefix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
    var _a8;
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    (_a8 = def.pattern) != null ? _a8 : def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      var _a9;
      const bag = inst2._zod.bag;
      (_a9 = bag.patterns) != null ? _a9 : bag.patterns = /* @__PURE__ */ new Set();
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.endsWith(def.suffix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: def.suffix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      payload.value = def.tx(payload.value);
    };
  });

  // node_modules/zod/v4/core/versions.js
  var version = {
    major: 4,
    minor: 0,
    patch: 0
  };

  // node_modules/zod/v4/core/schemas.js
  var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
    var _a9, _b2, _c;
    var _a8;
    inst != null ? inst : inst = {};
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version;
    const checks = [...(_a9 = inst._zod.def.checks) != null ? _a9 : []];
    if (inst._zod.traits.has("$ZodCheck")) {
      checks.unshift(inst);
    }
    for (const ch of checks) {
      for (const fn of ch._zod.onattach) {
        fn(inst);
      }
    }
    if (checks.length === 0) {
      (_b2 = (_a8 = inst._zod).deferred) != null ? _b2 : _a8.deferred = [];
      (_c = inst._zod.deferred) == null ? void 0 : _c.push(() => {
        inst._zod.run = inst._zod.parse;
      });
    } else {
      const runChecks = (payload, checks2, ctx) => {
        let isAborted = aborted(payload);
        let asyncResult;
        for (const ch of checks2) {
          if (ch._zod.def.when) {
            const shouldRun = ch._zod.def.when(payload);
            if (!shouldRun)
              continue;
          } else if (isAborted) {
            continue;
          }
          const currLen = payload.issues.length;
          const _2 = ch._zod.check(payload);
          if (_2 instanceof Promise && (ctx == null ? void 0 : ctx.async) === false) {
            throw new $ZodAsyncError();
          }
          if (asyncResult || _2 instanceof Promise) {
            asyncResult = (asyncResult != null ? asyncResult : Promise.resolve()).then(async () => {
              await _2;
              const nextLen = payload.issues.length;
              if (nextLen === currLen)
                return;
              if (!isAborted)
                isAborted = aborted(payload, currLen);
            });
          } else {
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              continue;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          }
        }
        if (asyncResult) {
          return asyncResult.then(() => {
            return payload;
          });
        }
        return payload;
      };
      inst._zod.run = (payload, ctx) => {
        const result = inst._zod.parse(payload, ctx);
        if (result instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError();
          return result.then((result2) => runChecks(result2, checks, ctx));
        }
        return runChecks(result, checks, ctx);
      };
    }
    inst["~standard"] = {
      validate: (value) => {
        var _a10;
        try {
          const r5 = safeParse(inst, value);
          return r5.success ? { value: r5.data } : { issues: (_a10 = r5.error) == null ? void 0 : _a10.issues };
        } catch (_2) {
          return safeParseAsync(inst, value).then((r5) => {
            var _a11;
            return r5.success ? { value: r5.data } : { issues: (_a11 = r5.error) == null ? void 0 : _a11.issues };
          });
        }
      },
      vendor: "zod",
      version: 1
    };
  });
  var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
    var _a8, _b2, _c;
    $ZodType.init(inst, def);
    inst._zod.pattern = (_c = [...(_b2 = (_a8 = inst == null ? void 0 : inst._zod.bag) == null ? void 0 : _a8.patterns) != null ? _b2 : []].pop()) != null ? _c : string(inst._zod.bag);
    inst._zod.parse = (payload, _2) => {
      if (def.coerce)
        try {
          payload.value = String(payload.value);
        } catch (_3) {
        }
      if (typeof payload.value === "string")
        return payload;
      payload.issues.push({
        expected: "string",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
  });
  var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = guid;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
    var _a8, _b2;
    if (def.version) {
      const versionMap = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      };
      const v2 = versionMap[def.version];
      if (v2 === void 0)
        throw new Error(`Invalid UUID version: "${def.version}"`);
      (_a8 = def.pattern) != null ? _a8 : def.pattern = uuid(v2);
    } else
      (_b2 = def.pattern) != null ? _b2 : def.pattern = uuid();
    $ZodStringFormat.init(inst, def);
  });
  var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = email;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      try {
        const orig = payload.value;
        const url = new URL(orig);
        const href = url.href;
        if (def.hostname) {
          def.hostname.lastIndex = 0;
          if (!def.hostname.test(url.hostname)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: hostname.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (def.protocol) {
          def.protocol.lastIndex = 0;
          if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid protocol",
              pattern: def.protocol.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (!orig.endsWith("/") && href.endsWith("/")) {
          payload.value = href.slice(0, -1);
        } else {
          payload.value = href;
        }
        return;
      } catch (_2) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = emoji();
    $ZodStringFormat.init(inst, def);
  });
  var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = nanoid;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = cuid;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = cuid2;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = ulid;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = xid;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = ksuid;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = datetime(def);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = date;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = time(def);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = duration;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = ipv4;
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = `ipv4`;
    });
  });
  var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = ipv6;
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = `ipv6`;
    });
    inst._zod.check = (payload) => {
      try {
        new URL(`http://[${payload.value}]`);
      } catch (e6) {
        payload.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = cidrv4;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = cidrv6;
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      const [address, prefix] = payload.value.split("/");
      try {
        if (!prefix)
          throw new Error();
        const prefixNum = Number(prefix);
        if (`${prefixNum}` !== prefix)
          throw new Error();
        if (prefixNum < 0 || prefixNum > 128)
          throw new Error();
        new URL(`http://[${address}]`);
      } catch (e6) {
        payload.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  function isValidBase64(data) {
    if (data === "")
      return true;
    if (data.length % 4 !== 0)
      return false;
    try {
      atob(data);
      return true;
    } catch (e6) {
      return false;
    }
  }
  var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = base64;
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      inst2._zod.bag.contentEncoding = "base64";
    });
    inst._zod.check = (payload) => {
      if (isValidBase64(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  function isValidBase64URL(data) {
    if (!base64url.test(data))
      return false;
    const base642 = data.replace(/[-_]/g, (c4) => c4 === "-" ? "+" : "/");
    const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
    return isValidBase64(padded);
  }
  var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = base64url;
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      inst2._zod.bag.contentEncoding = "base64url";
    });
    inst._zod.check = (payload) => {
      if (isValidBase64URL(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
    var _a8;
    (_a8 = def.pattern) != null ? _a8 : def.pattern = e164;
    $ZodStringFormat.init(inst, def);
  });
  function isValidJWT(token, algorithm = null) {
    try {
      const tokensParts = token.split(".");
      if (tokensParts.length !== 3)
        return false;
      const [header] = tokensParts;
      if (!header)
        return false;
      const parsedHeader = JSON.parse(atob(header));
      if ("typ" in parsedHeader && (parsedHeader == null ? void 0 : parsedHeader.typ) !== "JWT")
        return false;
      if (!parsedHeader.alg)
        return false;
      if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
        return false;
      return true;
    } catch (e6) {
      return false;
    }
  }
  var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (isValidJWT(payload.value, def.alg))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  function handleArrayResult(result, final, index) {
    if (result.issues.length) {
      final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
  }
  var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          expected: "array",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = Array(input.length);
      const proms = [];
      for (let i5 = 0; i5 < input.length; i5++) {
        const item = input[i5];
        const result = def.element._zod.run({
          value: item,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleArrayResult(result2, payload, i5)));
        } else {
          handleArrayResult(result, payload, i5);
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => payload);
      }
      return payload;
    };
  });
  function handleUnionResults(results, final, inst, ctx) {
    for (const result of results) {
      if (result.issues.length === 0) {
        final.value = result.value;
        return final;
      }
    }
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
    return final;
  }
  var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.options.some((o5) => o5._zod.optin === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "optout", () => def.options.some((o5) => o5._zod.optout === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "values", () => {
      if (def.options.every((o5) => o5._zod.values)) {
        return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
      }
      return void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      if (def.options.every((o5) => o5._zod.pattern)) {
        const patterns = def.options.map((o5) => o5._zod.pattern);
        return new RegExp(`^(${patterns.map((p3) => cleanRegex(p3.source)).join("|")})$`);
      }
      return void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          if (result.issues.length === 0)
            return result;
          results.push(result);
        }
      }
      if (!async)
        return handleUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      const left = def.left._zod.run({ value: input, issues: [] }, ctx);
      const right = def.right._zod.run({ value: input, issues: [] }, ctx);
      const async = left instanceof Promise || right instanceof Promise;
      if (async) {
        return Promise.all([left, right]).then(([left2, right2]) => {
          return handleIntersectionResults(payload, left2, right2);
        });
      }
      return handleIntersectionResults(payload, left, right);
    };
  });
  function mergeValues(a3, b3) {
    if (a3 === b3) {
      return { valid: true, data: a3 };
    }
    if (a3 instanceof Date && b3 instanceof Date && +a3 === +b3) {
      return { valid: true, data: a3 };
    }
    if (isPlainObject(a3) && isPlainObject(b3)) {
      const bKeys = Object.keys(b3);
      const sharedKeys = Object.keys(a3).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = __spreadValues(__spreadValues({}, a3), b3);
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a3[key], b3[key]);
        if (!sharedValue.valid) {
          return {
            valid: false,
            mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
          };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    }
    if (Array.isArray(a3) && Array.isArray(b3)) {
      if (a3.length !== b3.length) {
        return { valid: false, mergeErrorPath: [] };
      }
      const newArray = [];
      for (let index = 0; index < a3.length; index++) {
        const itemA = a3[index];
        const itemB = b3[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return {
            valid: false,
            mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
          };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
      result.issues.push(...left.issues);
    }
    if (right.issues.length) {
      result.issues.push(...right.issues);
    }
    if (aborted(result))
      return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
      throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
  }
  var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const _out = def.transform(payload.value, payload);
      if (_ctx.async) {
        const output = _out instanceof Promise ? _out : Promise.resolve(_out);
        return output.then((output2) => {
          payload.value = output2;
          return payload;
        });
      }
      if (_out instanceof Promise) {
        throw new $ZodAsyncError();
      }
      payload.value = _out;
      return payload;
    };
  });
  var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (def.innerType._zod.optin === "optional") {
        return def.innerType._zod.run(payload, ctx);
      }
      if (payload.value === void 0) {
        return payload;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
    });
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === null)
        return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
        return payload;
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleDefaultResult(result2, def));
      }
      return handleDefaultResult(result, def);
    };
  });
  function handleDefaultResult(payload, def) {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return payload;
  }
  var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => {
      const v2 = def.innerType._zod.values;
      return v2 ? new Set([...v2].filter((x2) => x2 !== void 0)) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleNonOptionalResult(result2, inst));
      }
      return handleNonOptionalResult(result, inst);
    };
  });
  function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === void 0) {
      payload.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: payload.value,
        inst
      });
    }
    return payload;
  }
  var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => {
          payload.value = result2.value;
          if (result2.issues.length) {
            payload.value = def.catchValue(__spreadProps(__spreadValues({}, payload), {
              error: {
                issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
              },
              input: payload.value
            }));
            payload.issues = [];
          }
          return payload;
        });
      }
      payload.value = result.value;
      if (result.issues.length) {
        payload.value = def.catchValue(__spreadProps(__spreadValues({}, payload), {
          error: {
            issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
          },
          input: payload.value
        }));
        payload.issues = [];
      }
      return payload;
    };
  });
  var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    inst._zod.parse = (payload, ctx) => {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handlePipeResult(left2, def, ctx));
      }
      return handlePipeResult(left, def, ctx);
    };
  });
  function handlePipeResult(left, def, ctx) {
    if (aborted(left)) {
      return left;
    }
    return def.out._zod.run({ value: left.value, issues: left.issues }, ctx);
  }
  var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then(handleReadonlyResult);
      }
      return handleReadonlyResult(result);
    };
  });
  function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
  }
  var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _2) => {
      return payload;
    };
    inst._zod.check = (payload) => {
      const input = payload.value;
      const r5 = def.fn(input);
      if (r5 instanceof Promise) {
        return r5.then((r6) => handleRefineResult(r6, payload, input, inst));
      }
      handleRefineResult(r5, payload, input, inst);
      return;
    };
  });
  function handleRefineResult(result, payload, input, inst) {
    var _a8;
    if (!result) {
      const _iss = {
        code: "custom",
        input,
        inst,
        // incorporates params.error into issue reporting
        path: [...(_a8 = inst._zod.def.path) != null ? _a8 : []],
        // incorporates params.error into issue reporting
        continue: !inst._zod.def.abort
        // params: inst._zod.def.params,
      };
      if (inst._zod.def.params)
        _iss.params = inst._zod.def.params;
      payload.issues.push(issue(_iss));
    }
  }

  // node_modules/zod/v4/core/registries.js
  var $output = Symbol("ZodOutput");
  var $input = Symbol("ZodInput");
  var $ZodRegistry = class {
    constructor() {
      this._map = /* @__PURE__ */ new Map();
      this._idmap = /* @__PURE__ */ new Map();
    }
    add(schema, ..._meta) {
      const meta = _meta[0];
      this._map.set(schema, meta);
      if (meta && typeof meta === "object" && "id" in meta) {
        if (this._idmap.has(meta.id)) {
          throw new Error(`ID ${meta.id} already exists in the registry`);
        }
        this._idmap.set(meta.id, schema);
      }
      return this;
    }
    clear() {
      this._map = /* @__PURE__ */ new Map();
      this._idmap = /* @__PURE__ */ new Map();
      return this;
    }
    remove(schema) {
      const meta = this._map.get(schema);
      if (meta && typeof meta === "object" && "id" in meta) {
        this._idmap.delete(meta.id);
      }
      this._map.delete(schema);
      return this;
    }
    get(schema) {
      var _a8;
      const p3 = schema._zod.parent;
      if (p3) {
        const pm = __spreadValues({}, (_a8 = this.get(p3)) != null ? _a8 : {});
        delete pm.id;
        return __spreadValues(__spreadValues({}, pm), this._map.get(schema));
      }
      return this._map.get(schema);
    }
    has(schema) {
      return this._map.has(schema);
    }
  };
  function registry() {
    return new $ZodRegistry();
  }
  var globalRegistry = /* @__PURE__ */ registry();

  // node_modules/zod/v4/core/api.js
  function _string(Class2, params) {
    return new Class2(__spreadValues({
      type: "string"
    }, normalizeParams(params)));
  }
  function _email(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _guid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _uuid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _uuidv4(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4"
    }, normalizeParams(params)));
  }
  function _uuidv6(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6"
    }, normalizeParams(params)));
  }
  function _uuidv7(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7"
    }, normalizeParams(params)));
  }
  function _url(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "url",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _emoji2(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _nanoid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _cuid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _cuid2(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "cuid2",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _ulid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _xid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _ksuid(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _ipv4(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _ipv6(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _cidrv4(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _cidrv6(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _base64(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _base64url(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _e164(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "e164",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _jwt(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _isoDateTime(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null
    }, normalizeParams(params)));
  }
  function _isoDate(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "date",
      check: "string_format"
    }, normalizeParams(params)));
  }
  function _isoTime(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null
    }, normalizeParams(params)));
  }
  function _isoDuration(Class2, params) {
    return new Class2(__spreadValues({
      type: "string",
      format: "duration",
      check: "string_format"
    }, normalizeParams(params)));
  }
  function _maxLength(maximum, params) {
    const ch = new $ZodCheckMaxLength(__spreadProps(__spreadValues({
      check: "max_length"
    }, normalizeParams(params)), {
      maximum
    }));
    return ch;
  }
  function _minLength(minimum, params) {
    return new $ZodCheckMinLength(__spreadProps(__spreadValues({
      check: "min_length"
    }, normalizeParams(params)), {
      minimum
    }));
  }
  function _length(length, params) {
    return new $ZodCheckLengthEquals(__spreadProps(__spreadValues({
      check: "length_equals"
    }, normalizeParams(params)), {
      length
    }));
  }
  function _regex(pattern, params) {
    return new $ZodCheckRegex(__spreadProps(__spreadValues({
      check: "string_format",
      format: "regex"
    }, normalizeParams(params)), {
      pattern
    }));
  }
  function _lowercase(params) {
    return new $ZodCheckLowerCase(__spreadValues({
      check: "string_format",
      format: "lowercase"
    }, normalizeParams(params)));
  }
  function _uppercase(params) {
    return new $ZodCheckUpperCase(__spreadValues({
      check: "string_format",
      format: "uppercase"
    }, normalizeParams(params)));
  }
  function _includes(includes, params) {
    return new $ZodCheckIncludes(__spreadProps(__spreadValues({
      check: "string_format",
      format: "includes"
    }, normalizeParams(params)), {
      includes
    }));
  }
  function _startsWith(prefix, params) {
    return new $ZodCheckStartsWith(__spreadProps(__spreadValues({
      check: "string_format",
      format: "starts_with"
    }, normalizeParams(params)), {
      prefix
    }));
  }
  function _endsWith(suffix, params) {
    return new $ZodCheckEndsWith(__spreadProps(__spreadValues({
      check: "string_format",
      format: "ends_with"
    }, normalizeParams(params)), {
      suffix
    }));
  }
  function _overwrite(tx) {
    return new $ZodCheckOverwrite({
      check: "overwrite",
      tx
    });
  }
  function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
  }
  function _trim() {
    return _overwrite((input) => input.trim());
  }
  function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
  }
  function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
  }
  function _array(Class2, element, params) {
    return new Class2(__spreadValues({
      type: "array",
      element
    }, normalizeParams(params)));
  }
  function _refine(Class2, fn, _params) {
    const schema = new Class2(__spreadValues({
      type: "custom",
      check: "custom",
      fn
    }, normalizeParams(_params)));
    return schema;
  }

  // node_modules/zod/v4/classic/iso.js
  var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function datetime2(params) {
    return _isoDateTime(ZodISODateTime, params);
  }
  var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function date2(params) {
    return _isoDate(ZodISODate, params);
  }
  var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function time2(params) {
    return _isoTime(ZodISOTime, params);
  }
  var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function duration2(params) {
    return _isoDuration(ZodISODuration, params);
  }

  // node_modules/zod/v4/classic/errors.js
  var initializer2 = (inst, issues) => {
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
      format: {
        value: (mapper) => formatError(inst, mapper)
        // enumerable: false,
      },
      flatten: {
        value: (mapper) => flattenError(inst, mapper)
        // enumerable: false,
      },
      addIssue: {
        value: (issue2) => inst.issues.push(issue2)
        // enumerable: false,
      },
      addIssues: {
        value: (issues2) => inst.issues.push(...issues2)
        // enumerable: false,
      },
      isEmpty: {
        get() {
          return inst.issues.length === 0;
        }
        // enumerable: false,
      }
    });
  };
  var ZodError = $constructor("ZodError", initializer2);
  var ZodRealError = $constructor("ZodError", initializer2, {
    Parent: Error
  });

  // node_modules/zod/v4/classic/parse.js
  var parse = /* @__PURE__ */ _parse(ZodRealError);
  var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
  var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
  var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);

  // node_modules/zod/v4/classic/schemas.js
  var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
    $ZodType.init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", { value: def });
    inst.check = (...checks) => {
      var _a8;
      return inst.clone(
        __spreadProps(__spreadValues({}, def), {
          checks: [
            ...(_a8 = def.checks) != null ? _a8 : [],
            ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
          ]
        })
        // { parent: true }
      );
    };
    inst.clone = (def2, params) => clone(inst, def2, params);
    inst.brand = () => inst;
    inst.register = ((reg, meta) => {
      reg.add(inst, meta);
      return inst;
    });
    inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => safeParse2(inst, data, params);
    inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.refine = (check2, params) => inst.check(refine(check2, params));
    inst.superRefine = (refinement) => inst.check(superRefine(refinement));
    inst.overwrite = (fn) => inst.check(_overwrite(fn));
    inst.optional = () => optional(inst);
    inst.nullable = () => nullable(inst);
    inst.nullish = () => optional(nullable(inst));
    inst.nonoptional = (params) => nonoptional(inst, params);
    inst.array = () => array(inst);
    inst.or = (arg) => union([inst, arg]);
    inst.and = (arg) => intersection(inst, arg);
    inst.transform = (tx) => pipe(inst, transform(tx));
    inst.default = (def2) => _default(inst, def2);
    inst.prefault = (def2) => prefault(inst, def2);
    inst.catch = (params) => _catch(inst, params);
    inst.pipe = (target) => pipe(inst, target);
    inst.readonly = () => readonly(inst);
    inst.describe = (description) => {
      const cl = inst.clone();
      globalRegistry.add(cl, { description });
      return cl;
    };
    Object.defineProperty(inst, "description", {
      get() {
        var _a8;
        return (_a8 = globalRegistry.get(inst)) == null ? void 0 : _a8.description;
      },
      configurable: true
    });
    inst.meta = (...args) => {
      if (args.length === 0) {
        return globalRegistry.get(inst);
      }
      const cl = inst.clone();
      globalRegistry.add(cl, args[0]);
      return cl;
    };
    inst.isOptional = () => inst.safeParse(void 0).success;
    inst.isNullable = () => inst.safeParse(null).success;
    return inst;
  });
  var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
    var _a8, _b2, _c;
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    const bag = inst._zod.bag;
    inst.format = (_a8 = bag.format) != null ? _a8 : null;
    inst.minLength = (_b2 = bag.minimum) != null ? _b2 : null;
    inst.maxLength = (_c = bag.maximum) != null ? _c : null;
    inst.regex = (...args) => inst.check(_regex(...args));
    inst.includes = (...args) => inst.check(_includes(...args));
    inst.startsWith = (...args) => inst.check(_startsWith(...args));
    inst.endsWith = (...args) => inst.check(_endsWith(...args));
    inst.min = (...args) => inst.check(_minLength(...args));
    inst.max = (...args) => inst.check(_maxLength(...args));
    inst.length = (...args) => inst.check(_length(...args));
    inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
    inst.lowercase = (params) => inst.check(_lowercase(params));
    inst.uppercase = (params) => inst.check(_uppercase(params));
    inst.trim = () => inst.check(_trim());
    inst.normalize = (...args) => inst.check(_normalize(...args));
    inst.toLowerCase = () => inst.check(_toLowerCase());
    inst.toUpperCase = () => inst.check(_toUpperCase());
  });
  var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params) => inst.check(_email(ZodEmail, params));
    inst.url = (params) => inst.check(_url(ZodURL, params));
    inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
    inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
    inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
    inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
    inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
    inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
    inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
    inst.xid = (params) => inst.check(_xid(ZodXID, params));
    inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(_e164(ZodE164, params));
    inst.datetime = (params) => inst.check(datetime2(params));
    inst.date = (params) => inst.check(date2(params));
    inst.time = (params) => inst.check(time2(params));
    inst.duration = (params) => inst.check(duration2(params));
  });
  function string2(params) {
    return _string(ZodString, params);
  }
  var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
  });
  var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
    inst.nonempty = (params) => inst.check(_minLength(1, params));
    inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
    inst.length = (len, params) => inst.check(_length(len, params));
    inst.unwrap = () => inst.element;
  });
  function array(element, params) {
    return _array(ZodArray, element, params);
  }
  var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst.options = def.options;
  });
  function union(options, params) {
    return new ZodUnion(__spreadValues({
      type: "union",
      options
    }, util_exports.normalizeParams(params)));
  }
  var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
  });
  function intersection(left, right) {
    return new ZodIntersection({
      type: "intersection",
      left,
      right
    });
  }
  var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      payload.addIssue = (issue2) => {
        var _a8, _b2, _c, _d;
        if (typeof issue2 === "string") {
          payload.issues.push(util_exports.issue(issue2, payload.value, def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          (_a8 = _issue.code) != null ? _a8 : _issue.code = "custom";
          (_b2 = _issue.input) != null ? _b2 : _issue.input = payload.value;
          (_c = _issue.inst) != null ? _c : _issue.inst = inst;
          (_d = _issue.continue) != null ? _d : _issue.continue = true;
          payload.issues.push(util_exports.issue(_issue));
        }
      };
      const output = def.transform(payload.value, payload);
      if (output instanceof Promise) {
        return output.then((output2) => {
          payload.value = output2;
          return payload;
        });
      }
      payload.value = output;
      return payload;
    };
  });
  function transform(fn) {
    return new ZodTransform({
      type: "transform",
      transform: fn
    });
  }
  var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function optional(innerType) {
    return new ZodOptional({
      type: "optional",
      innerType
    });
  }
  var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function nullable(innerType) {
    return new ZodNullable({
      type: "nullable",
      innerType
    });
  }
  var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
  });
  function _default(innerType, defaultValue) {
    return new ZodDefault({
      type: "default",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      }
    });
  }
  var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function prefault(innerType, defaultValue) {
    return new ZodPrefault({
      type: "prefault",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      }
    });
  }
  var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function nonoptional(innerType, params) {
    return new ZodNonOptional(__spreadValues({
      type: "nonoptional",
      innerType
    }, util_exports.normalizeParams(params)));
  }
  var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
  });
  function _catch(innerType, catchValue) {
    return new ZodCatch({
      type: "catch",
      innerType,
      catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
    });
  }
  var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
  });
  function pipe(in_, out) {
    return new ZodPipe({
      type: "pipe",
      in: in_,
      out
      // ...util.normalizeParams(params),
    });
  }
  var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
  });
  function readonly(innerType) {
    return new ZodReadonly({
      type: "readonly",
      innerType
    });
  }
  var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
  });
  function check(fn) {
    const ch = new $ZodCheck({
      check: "custom"
      // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
  }
  function refine(fn, _params = {}) {
    return _refine(ZodCustom, fn, _params);
  }
  function superRefine(fn) {
    const ch = check((payload) => {
      payload.addIssue = (issue2) => {
        var _a8, _b2, _c, _d;
        if (typeof issue2 === "string") {
          payload.issues.push(util_exports.issue(issue2, payload.value, ch._zod.def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          (_a8 = _issue.code) != null ? _a8 : _issue.code = "custom";
          (_b2 = _issue.input) != null ? _b2 : _issue.input = payload.value;
          (_c = _issue.inst) != null ? _c : _issue.inst = ch;
          (_d = _issue.continue) != null ? _d : _issue.continue = !ch._zod.def.abort;
          payload.issues.push(util_exports.issue(_issue));
        }
      };
      return fn(payload.value, payload);
    });
    return ch;
  }

  // package/inputs/input-text.js
  var _BaseTextInput_decorators, _init, _a6;
  _BaseTextInput_decorators = [t3("base-text-input")];
  var BaseTextInput = class extends (_a6 = i4) {
    // Form-associated per spec [1]
    static get properties() {
      return {
        name: { type: String },
        value: { type: String },
        label: { type: String },
        placeholder: { type: String },
        required: { type: Boolean },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        inline: { type: Boolean },
        error: { type: String },
        description: { type: String },
        validateOn: { type: String },
        actionButton: { type: String },
        prefixIcon: { type: String },
        inputType: { type: String },
        // Zod validators [1]
        min: { type: String },
        max: { type: String },
        email: { type: Boolean },
        url: { type: Boolean },
        regex: { type: String },
        startsWith: { attribute: "starts-with", type: String },
        endsWith: { attribute: "ends-with", type: String },
        gt: { type: String },
        lt: { type: String },
        positive: { type: Boolean },
        minMessage: { attribute: "min-message", type: String },
        maxMessage: { attribute: "max-message", type: String },
        emailMessage: { attribute: "email-message", type: String },
        // States
        internalError: { type: String, state: true },
        isValid: { type: Boolean, state: true }
      };
    }
    static get styles() {
      return i`
        /* Minimal defaults per exact structure [1] */
        .input-wrapper { display: block; }
        .input-label { display: block; font-weight: bold; margin-bottom: 0.25rem; }
        .input-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #ccc;
          padding: 0.5rem;
          border-radius: 4px;
        }
        .input-description { font-size: 0.875rem; color: #666; margin-top: 0.25rem; }
        .input-error { display: none; color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem; }
        .input-error-visible { display: block; } /* Required [1] */
        .input-input-error {
          border-color: #dc2626;
          box-shadow: 0 0 0 1px #dc2626; /* Error states [1] */
        }
        .input-wrapper.input-inline { display: inline-block; width: auto; } /* inline attr [1] */
        .input-prefix, .input-action { /* External styling [1] */ }
      `;
    }
    constructor() {
      super();
      this.internals = this.attachInternals();
      this.name = "";
      this.value = "";
      this.label = "";
      this.placeholder = "";
      this.required = false;
      this.disabled = false;
      this.readonly = false;
      this.inline = false;
      this.error = "";
      this.description = "";
      this.validateOn = "blur";
      this.actionButton = "";
      this.prefixIcon = "";
      this.inputType = "text";
      this.min = "";
      this.max = "";
      this.email = false;
      this.url = false;
      this.regex = "";
      this.startsWith = "";
      this.endsWith = "";
      this.gt = "";
      this.lt = "";
      this.positive = false;
      this.minMessage = "";
      this.maxMessage = "";
      this.emailMessage = "";
      this.internalError = null;
      this.isValid = true;
      this.debounceTimer = null;
      this.inputId = "";
      this.onInit = () => {
      };
      this.onBeforeRender = () => {
      };
      this.onAfterRender = () => {
      };
      this.onInput = (value) => {
      };
      this.onChange = (value) => {
      };
      this.onValidate = () => {
      };
      this.onError = (errorMsg) => {
      };
      this.onSuccess = (value) => {
      };
      this.inputEl = this.querySelector("input");
    }
    generateIds() {
      const baseId = `input-${Math.random().toString(36).substr(2, 9)}`;
      this.inputId = baseId;
      return {
        input: baseId,
        label: `${baseId}-label`,
        desc: `${baseId}-desc`,
        err: `${baseId}-err`
      };
    }
    render() {
      this.onBeforeRender();
      const ids = this.generateIds();
      const hasDesc = !!this.description && this.description.trim();
      const hasError = !!this.internalError;
      const ariaDescribedBy = [hasDesc ? ids.desc : "", hasError ? ids.err : ""].filter(Boolean).join(" ") || void 0;
      return x`
      <div class="input-wrapper ${this.inline ? "input-inline" : ""}">
        <label class="input-label" id="${ids.label}" for="${ids.input}">${this.label}</label>
        ${this.prefixIcon ? x`<span class="input-prefix" aria-hidden="true">${this.prefixIcon}</span>` : ""}
        <input
          class="input-input ${hasError ? "input-input-error" : ""}"
          type="${this.inputType}"
          id="${ids.input}"
          .value="${this.value}"
          @input="${this.handleInput}"
          @change="${this.handleChange}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          placeholder="${this.placeholder}"
          aria-labelledby="${ids.label}"
          aria-describedby="${ariaDescribedBy}"
          aria-invalid="${hasError}"
        />
        ${this.actionButton ? x`<button type="button" class="input-action" @click="${this.handleAction}" aria-label="${this.actionButton} value"></button>` : ""}
        ${hasDesc ? x`<p class="input-description" id="${ids.desc}">${this.description}</p>` : ""}
        <p class="input-error ${hasError ? "input-error-visible" : ""}" id="${ids.err}">${this.internalError || ""}</p>
      </div>
    `;
      this.onAfterRender();
    }
    firstUpdated() {
      this.dispatchEvent(new CustomEvent("input:init", { bubbles: true, composed: true, detail: { value: this.value } }));
      this.onInit();
      this.attachValidation();
    }
    updated(changedProps) {
      if (changedProps.has("value")) {
        this.internals.setFormValue(this.value);
      }
      super.updated(changedProps);
    }
    attachValidation() {
      const debouncedValidate = this.debounce(this.doValidate.bind(this), 300);
      this.inputEl.addEventListener(this.validateOn, debouncedValidate);
    }
    debounce(fn, delay) {
      return (...args) => {
        if (this.debounceTimer) clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => fn(...args), delay);
      };
    }
    handleInput(e6) {
      const target = e6.target;
      this.value = target.value;
      this.dispatchEvent(new CustomEvent("input:input", { bubbles: true, composed: true, detail: { value: this.value } }));
      this.onInput(this.value);
    }
    handleChange(e6) {
      const target = e6.target;
      this.dispatchEvent(new CustomEvent("input:change", { bubbles: true, composed: true, detail: { value: target.value } }));
      this.onChange(target.value);
    }
    buildSchema() {
      let schema = string2();
      if (this.error) {
        return schema.refine(() => false, { message: this.error });
      }
      if (this.required) {
        schema = schema.min(1, { message: "This field is required" });
      }
      if (this.min) schema = schema.min(Number(this.min), { message: this.minMessage });
      if (this.max) schema = schema.max(Number(this.max), { message: this.maxMessage });
      if (this.email) schema = schema.email({ message: this.emailMessage || "Invalid email address" });
      if (this.url) schema = schema.url({ message: this.urlMessage || "Invalid URL" });
      if (this.regex) {
        try {
          schema = schema.regex(new RegExp(this.regex), { message: this.regexMessage || "Invalid format" });
        } catch (e6) {
        }
      }
      if (this.startsWith) schema = schema.startsWith(this.startsWith, { message: `Must start with "${this.startsWith}"` });
      if (this.endsWith) schema = schema.endsWith(this.endsWith, { message: `Must end with "${this.endsWith}"` });
      if (this.gt) {
        const num = Number(this.gt);
        schema = schema.refine((v2) => Number(v2) > num, { message: `Must be > ${num}` });
      }
      if (this.lt) {
        const num = Number(this.lt);
        schema = schema.refine((v2) => Number(v2) < num, { message: `Must be < ${num}` });
      }
      if (this.positive) {
        schema = schema.refine((v2) => {
          const n5 = Number(v2);
          return !isNaN(n5) && n5 > 0;
        }, { message: this.positiveMessage || "Must be positive" });
      }
      return schema;
    }
    validate() {
      return this.doValidate();
    }
    doValidate() {
      try {
        this.onValidate();
        this.dispatchEvent(new CustomEvent("input:validate", { bubbles: true, composed: true, detail: { value: this.value } }));
        const schema = this.buildSchema();
        const result = schema.safeParse(this.value);
        if (result.success) {
          this.internalError = null;
          this.isValid = true;
          this.internals.setValidity({});
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent("input:success", { bubbles: true, composed: true, detail: { value: this.value } }));
          this.onSuccess(this.value);
          return { valid: true, error: null };
        } else {
          const msg = result.error.errors[0].message || "Enter a valid value";
          this.internalError = msg;
          this.isValid = false;
          this.internals.setValidity({ customError: true }, msg, this.inputEl);
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent("input:error", { bubbles: true, composed: true, detail: { value: this.value, error: msg } }));
          this.onError(msg);
          return { valid: false, error: msg };
        }
      } catch (e6) {
        const msg = "Validation error";
        this.internalError = msg;
        this.internals.setValidity({ customError: true }, msg, this.inputEl);
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent("input:error", { bubbles: true, composed: true, detail: { value: this.value, error: msg } }));
        return { valid: false, error: msg };
      }
    }
    handleAction(e6) {
      e6.stopPropagation();
      if (this.actionButton === "copy") {
        navigator.clipboard.writeText(this.value).catch(() => {
        });
      } else if (this.actionButton === "hide") {
        const isHidden = this.inputEl.type === "password";
        this.inputEl.type = isHidden ? this.inputType : "password";
        if (this.actionEl) {
          this.actionEl.textContent = isHidden ? "Hide" : "Show";
          this.actionEl.setAttribute("aria-label", isHidden ? "Hide value" : "Show value");
        }
      }
    }
    reset() {
      this.value = "";
      this.internalError = null;
      this.isValid = true;
      this.requestUpdate();
    }
    focus() {
      this.inputEl.focus();
    }
    formResetCallback() {
      this.reset();
    }
    formStateRestoreCallback(state) {
      this.value = state.get(this) || "";
    }
  };
  _init = __decoratorStart(_a6);
  BaseTextInput = __decorateElement(_init, 0, "BaseTextInput", _BaseTextInput_decorators, BaseTextInput);
  __publicField(BaseTextInput, "formAssociated", true);
  __runInitializers(_init, 1, BaseTextInput);
  var input_text_default = BaseTextInput;

  // package/index.js
  var _InputText_decorators, _init2, _a7;
  _InputText_decorators = [t3("input-text")];
  var InputText = class extends (_a7 = input_text_default) {
    static get properties() {
      return {
        inputType: { type: String }
      };
    }
  };
  _init2 = __decoratorStart(_a7);
  InputText = __decorateElement(_init2, 0, "InputText", _InputText_decorators, InputText);
  __runInitializers(_init2, 1, InputText);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=index.js.map
