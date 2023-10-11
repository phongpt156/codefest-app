"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./state/index.ts + 1 modules
var state = __webpack_require__(59);
;// CONCATENATED MODULE: ./components/Providers.tsx



const Providers = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: state/* default */.ZP,
        children: children
    });
};
/* harmony default export */ const components_Providers = (Providers);

// EXTERNAL MODULE: ./providers/AppProvider.tsx
var AppProvider = __webpack_require__(401);
;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Providers, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(AppProvider/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [902], () => (__webpack_exec__(698)));
module.exports = __webpack_exports__;

})();