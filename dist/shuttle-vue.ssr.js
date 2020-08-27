'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var Alerts = /*#__PURE__*/function () {
  function Alerts() {
    _classCallCheck(this, Alerts);

    this._key = 1;
    this.messages = [];

    this._removeExpiredAlerts();
  }

  _createClass(Alerts, [{
    key: "add",
    value: function add(alert) {
      if (!alert || !alert.message) {
        return;
      }

      if (alert.key || alert.name) {
        this.remove(alert);
      }

      this._push(alert);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.messages = [];
    }
  }, {
    key: "remove",
    value: function remove(alert) {
      if (!alert || !alert.key && !alert.name && !alert.type) {
        return;
      }

      this.messages = this.messages.filter(function (item) {
        var keep = true;

        if (alert.key) {
          keep = item.key !== alert.key;
        } else {
          if (alert.name) {
            keep = item.name !== alert.name;
          } else {
            if (alert.type) {
              keep = (item.type || 'info') !== alert.type;
            }
          }
        }

        return keep;
      });
    }
  }, {
    key: "_push",
    value: function _push(alert, mode) {
      var key = this._key + 1;
      var expiryDate = new Date();

      if (!alert || !alert.message) {
        return;
      }

      var type = alert.type || 'info';
      expiryDate.setSeconds(expiryDate.getSeconds() + 10);
      var message = {
        message: alert.message,
        type: type,
        mode: mode,
        key: key,
        name: alert.name,
        expiryDate: expiryDate
      };
      this.messages.push(message);
      this._key = key;
    }
  }, {
    key: "_removeExpiredAlerts",
    value: function _removeExpiredAlerts() {
      var self = this;
      var date = new Date();

      if (!this.messages) {
        return;
      }

      this.messages = this.messages.filter(function (message) {
        return message.expiryDate && message.expiryDate < date ? undefined : message;
      });
      setTimeout(function () {
        self._removeExpiredAlerts();
      }, 500);
    }
  }]);

  return Alerts;
}();//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    alerts: Array
  },
  methods: {
    remove: function remove(alert) {
      this.$emit("removed", alert);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.alerts ? _c('div', {
    staticClass: "s-alerta"
  }, _vm._l(_vm.alerts, function (alert) {
    return _c('b-alert', {
      key: alert.name,
      staticClass: "alert-dismissible",
      attrs: {
        "variant": alert.type,
        "show": ""
      }
    }, [_c('button', {
      staticClass: "close",
      attrs: {
        "type": "button",
        "aria-label": "Close",
        "data-dismiss": "alert"
      },
      on: {
        "click": function click($event) {
          return _vm.remove(alert);
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])]), _vm._v("\n    " + _vm._s(alert.message) + "\n  ")]);
  }), 1) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-7f0f30f6";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);var script$1 = {
  name: "SNavbarDropdown",
  props: {
    text: String,
    href: String,
    to: String,
    items: Array
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [!!_vm.href || !!_vm.to ? _c('b-nav-item', {
    attrs: {
      "href": !!_vm.href ? _vm.href : undefined,
      "to": !!_vm.to ? _vm.to : undefined
    }
  }, [_vm._v(_vm._s(_vm.text))]) : _c('b-nav-item-dropdown', {
    attrs: {
      "text": _vm.text,
      "right": ""
    }
  }, _vm._l(_vm.items, function (item) {
    return _c('b-dropdown-item', {
      key: item.name,
      attrs: {
        "href": !!item.href ? item.href : undefined,
        "to": !!item.to ? item.to : undefined
      }
    }, [_vm._v(_vm._s(item.text))]);
  }), 1)], 1);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-646ddb76";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var script$2 = {
  name: 'STitle',
  // vue component name
  props: {
    text: String
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "s-title"
  }, [_vm._ssrNode("<h1>" + _vm._ssrEscape("\n        " + _vm._s(_vm.text) + "\n    ") + "</h1>")]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-b20061ba";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,Alerts: Alerts,SAlerts: __vue_component__,SNavbarDropdown: __vue_component__$1,STitle: __vue_component__$2});var install = function installShuttleVue(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.Alerts=Alerts;exports.SAlerts=__vue_component__;exports.SNavbarDropdown=__vue_component__$1;exports.STitle=__vue_component__$2;exports.default=plugin;