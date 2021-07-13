class Alerts {
  constructor() {
    this._key = 1;
    this.messages = [];

    this._removeExpiredAlerts();
  }

  add(alert) {
    if (!alert || !alert.message) {
      return;
    }

    if (alert.key || alert.name) {
      this.remove(alert);
    }

    this._push(alert);
  }

  clear() {
    this.messages = [];
  }

  remove(alert) {
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

  _push(alert, mode) {
    var key = this._key + 1;
    var expiryDate = new Date();

    if (!alert || !alert.message) {
      return;
    }

    var type = alert.type || 'info';
    alert.expire = alert.expire != undefined ? alert.expire : true;

    if (alert.expire) {
      expiryDate.setSeconds(expiryDate.getSeconds() + 10);
    }

    const message = {
      message: alert.message,
      type: type,
      mode: mode,
      key: key,
      name: alert.name,
      expire: alert.expire,
      expiryDate: expiryDate
    };
    this.messages.push(message);
    this._key = key;
  }

  _removeExpiredAlerts() {
    var self = this;
    var date = new Date();

    if (!this.messages) {
      return;
    }

    this.messages = this.messages.filter(function (message) {
      return message.expire && message.expiryDate && message.expiryDate < date ? undefined : message;
    });
    setTimeout(function () {
      self._removeExpiredAlerts();
    }, 500);
  }

}

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
//
var script$4 = {
  props: {
    alerts: Array
  },
  methods: {
    remove(alert) {
      this.$emit("removed", alert);
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
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
        "click": function ($event) {
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

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var script$3 = {
  name: "SColumn",
  props: {
    type: String,
    size: Number
  },
  computed: {
    classes: function () {
      const renderType = (this.type || "sm").toLowerCase();
      var renderSize = this.size || 8;

      if (renderSize > 12) {
        renderSize = 12;
      } else if (renderSize < 5) {
        renderSize = 5;
      }

      switch (renderType) {
        case "lg":
          {
            renderSize = renderSize - 1;
            break;
          }

        case "md":
          {
            renderSize = renderSize - 2;
            break;
          }

        case "sm":
          {
            renderSize = renderSize - 3;
            break;
          }

        case "xs":
          {
            renderSize = renderSize - 4;
            break;
          }
      }

      return `col-xl-${renderSize} col-lg-${renderSize + 1} col-md-${renderSize + 2} mx-auto`;
    }
  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "s-column row"
  }, [_c('div', {
    staticClass: "col d-sm-none d-md-block"
  }), _vm._v(" "), _c('div', {
    staticClass: "p-0",
    class: [_vm.classes]
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "col d-sm-none d-md-block"
  })])]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

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
var script$2 = {
  props: {
    to: String,
    text: String,
    items: Array
  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('b-navbar-nav', [_vm.to ? _c('b-nav-item', {
    attrs: {
      "to": _vm.to
    }
  }, [_vm._v(_vm._s(_vm.text))]) : _vm.items ? _c('b-nav-item-dropdown', {
    attrs: {
      "text": _vm.text
    }
  }, _vm._l(_vm.items, function (item) {
    return _c('b-dropdown-item', {
      key: item.href,
      attrs: {
        "to": item.to
      }
    }, [_vm._v(_vm._s(item.text))]);
  }), 1) : _vm._e()], 1);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var script$1 = {
  name: 'STitle',
  props: {
    text: String
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "s-title"
  }, [_c('h1', [_vm._v("\n        " + _vm._s(_vm.text) + "\n    ")])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var script = {
  name: "SWorking",
  props: {
    icon: String,
    text: String,
    textClass: String
  },
  computed: {
    computeIconClass() {
      return this.icon ? this.icon : "fa-spin fa-4x";
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "s-working"
  }, [_vm.text ? _c('div', {
    class: _vm.textClass
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('font-awesome-icon', {
    class: _vm.computeIconClass,
    attrs: {
      "icon": "circle-notch"
    }
  })], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Alerts: Alerts,
    SAlerts: __vue_component__$4,
    SColumn: __vue_component__$3,
    SNavbarDropdown: __vue_component__$2,
    STitle: __vue_component__$1,
    SWorking: __vue_component__
});

// Import vue components

const install = function installShuttleVue(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { Alerts, __vue_component__$4 as SAlerts, __vue_component__$3 as SColumn, __vue_component__$2 as SNavbarDropdown, __vue_component__$1 as STitle, __vue_component__ as SWorking };
