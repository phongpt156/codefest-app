"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    setSocket: ()=>{}
});
const AppProvider = ({ children  })=>{
    const { 0: socket , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            socket,
            setSocket
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProvider);


/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qe": () => (/* binding */ setMapInfo),
/* harmony export */   "TG": () => (/* binding */ setPlayerId),
/* harmony export */   "ax": () => (/* binding */ setGameId),
/* harmony export */   "yb": () => (/* binding */ setConnectedGame),
/* harmony export */   "z5": () => (/* binding */ setConnectedServer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const setConnectedServer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("global/setConnectedServer");
const setConnectedGame = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("global/setConnectedGame");
const setGameId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("global/setGameId");
const setPlayerId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("global/setPlayerId");
const setMapInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("global/setMapInfo");


/***/ }),

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ state),
  "TL": () => (/* binding */ useAppDispatch)
});

// UNUSED EXPORTS: persistConfig, persistor, store

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(161);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(936);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
// EXTERNAL MODULE: ./state/global/actions.ts
var actions = __webpack_require__(356);
;// CONCATENATED MODULE: ./state/global/reducer.ts


const initialState = {
    connectedServer: false,
    connectedGame: false
};
/* harmony default export */ const reducer = ((0,toolkit_.createReducer)(initialState, (builder)=>builder.addCase(actions/* setConnectedServer */.z5, (state, { payload  })=>{
        state.connectedServer = payload;
    }).addCase(actions/* setConnectedGame */.yb, (state, { payload  })=>{
        state.connectedGame = payload;
    }).addCase(actions/* setGameId */.ax, (state, { payload  })=>{
        state.gameId = payload;
    }).addCase(actions/* setPlayerId */.TG, (state, { payload  })=>{
        state.playerId = payload;
    }).addCase(actions/* setMapInfo */.Qe, (state, { payload  })=>{
        state.mapInfo = payload;
    })));

;// CONCATENATED MODULE: ./state/index.ts





const PERSISTED_KEYS = [
    "cache"
];
const persistConfig = {
    key: "primary",
    whitelist: PERSISTED_KEYS,
    storage: (storage_default()),
    version: 1
};
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, (0,toolkit_.combineReducers)({
    global: reducer
}));
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_.FLUSH,
                    external_redux_persist_.REHYDRATE,
                    external_redux_persist_.PAUSE,
                    external_redux_persist_.PERSIST,
                    external_redux_persist_.PURGE,
                    external_redux_persist_.REGISTER
                ]
            }
        })
});
const useAppDispatch = ()=>(0,external_react_redux_.useDispatch)();
/* harmony default export */ const state = (store);
const persistor = (0,external_redux_persist_.persistStore)(store);


/***/ })

};
;