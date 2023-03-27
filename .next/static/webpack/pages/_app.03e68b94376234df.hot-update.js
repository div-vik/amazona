"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": function() { return /* binding */ Store; },\n/* harmony export */   \"StoreProvider\": function() { return /* binding */ StoreProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialSate = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: []\n    }\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        cartItems: [],\n                        shippingAddress: {\n                            location: {}\n                        },\n                        paymentMethod: \"\"\n                    }\n                };\n            }\n        case \"SAVE_SHIPPING_ADDRESS\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        shippingAddress: {\n                            ...state.cart.shippingAddress,\n                            ...action.payload\n                        }\n                    }\n                };\n            }\n        default:\n            return state;\n    }\n};\nconst StoreProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialSate);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/amazona/utils/Store.js\",\n        lineNumber: 65,\n        columnNumber: 10\n    }, undefined);\n};\n_s(StoreProvider, \"AQy1xtJjh3zpuKYINrwyY15b6lE=\");\n_c = StoreProvider;\nvar _c;\n$RefreshReg$(_c, \"StoreProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9TdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEI7QUFFekIsTUFBTUcsc0JBQVFILG9EQUFhQSxHQUFHO0FBRXJDLE1BQU1JLGNBQWM7SUFDbEJDLE1BQU1ILHFEQUFXLENBQUMsVUFDZEssS0FBS0MsS0FBSyxDQUFDTixxREFBVyxDQUFDLFdBQ3ZCO1FBQUVPLFdBQVcsRUFBRTtJQUFDLENBQUM7QUFDdkI7QUFFQSxNQUFNQyxVQUFVLENBQUNDLE9BQU9DLFNBQVc7SUFDakMsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLO1lBQWlCO2dCQUNwQixNQUFNQyxVQUFVRixPQUFPRyxPQUFPO2dCQUM5QixNQUFNQyxZQUFZTCxNQUFNTixJQUFJLENBQUNJLFNBQVMsQ0FBQ1EsSUFBSSxDQUN6QyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLEtBQUtMLFFBQVFLLElBQUk7Z0JBR3RDLE1BQU1WLFlBQVlPLFlBQ2RMLE1BQU1OLElBQUksQ0FBQ0ksU0FBUyxDQUFDVyxHQUFHLENBQUMsQ0FBQ0YsT0FDeEJBLEtBQUtHLElBQUksS0FBS0wsVUFBVUssSUFBSSxHQUFHUCxVQUFVSSxJQUFJLElBRS9DO3VCQUFJUCxNQUFNTixJQUFJLENBQUNJLFNBQVM7b0JBQUVLO2lCQUFRO2dCQUN0Q1oscURBQVcsQ0FBQyxRQUFRSyxLQUFLZ0IsU0FBUyxDQUFDO29CQUFFLEdBQUdaLE1BQU1OLElBQUk7b0JBQUVJO2dCQUFVO2dCQUM5RCxPQUFPO29CQUFFLEdBQUdFLEtBQUs7b0JBQUVOLE1BQU07d0JBQUUsR0FBR00sTUFBTU4sSUFBSTt3QkFBRUk7b0JBQVU7Z0JBQUU7WUFDeEQ7UUFDQSxLQUFLO1lBQW9CO2dCQUN2QixNQUFNQSxZQUFZRSxNQUFNTixJQUFJLENBQUNJLFNBQVMsQ0FBQ2UsTUFBTSxDQUMzQyxDQUFDTixPQUFTQSxLQUFLQyxJQUFJLEtBQUtQLE9BQU9HLE9BQU8sQ0FBQ0ksSUFBSTtnQkFFN0NqQixxREFBVyxDQUFDLFFBQVFLLEtBQUtnQixTQUFTLENBQUM7b0JBQUUsR0FBR1osTUFBTU4sSUFBSTtvQkFBRUk7Z0JBQVU7Z0JBQzlELE9BQU87b0JBQUUsR0FBR0UsS0FBSztvQkFBRU4sTUFBTTt3QkFBRSxHQUFHTSxNQUFNTixJQUFJO3dCQUFFSTtvQkFBVTtnQkFBRTtZQUN4RDtRQUNBLEtBQUs7WUFBZTtnQkFDbEIsT0FBTztvQkFDTCxHQUFHRSxLQUFLO29CQUNSTixNQUFNO3dCQUNKSSxXQUFXLEVBQUU7d0JBQ2JnQixpQkFBaUI7NEJBQUVDLFVBQVUsQ0FBQzt3QkFBRTt3QkFDaENDLGVBQWU7b0JBQ2pCO2dCQUNGO1lBQ0Y7UUFDQSxLQUFLO1lBQXlCO2dCQUM1QixPQUFPO29CQUNMLEdBQUdoQixLQUFLO29CQUNSTixNQUFNO3dCQUNKLEdBQUdNLE1BQU1OLElBQUk7d0JBQ2JvQixpQkFBaUI7NEJBQ2YsR0FBR2QsTUFBTU4sSUFBSSxDQUFDb0IsZUFBZTs0QkFDN0IsR0FBR2IsT0FBT0csT0FBTzt3QkFDbkI7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNBO1lBQ0UsT0FBT0o7SUFDWDtBQUNGO0FBRU8sTUFBTWlCLGdCQUFnQixTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3hDLE1BQU0sQ0FBQ2xCLE9BQU9tQixTQUFTLEdBQUc3QixpREFBVUEsQ0FBQ1MsU0FBU047SUFDOUMsTUFBTTJCLFFBQVE7UUFBRXBCO1FBQU9tQjtJQUFTO0lBQ2hDLHFCQUFPLDhEQUFDM0IsTUFBTTZCLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQVFGOzs7Ozs7QUFDeEMsRUFBRTtHQUpXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9TdG9yZS5qcz84YjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU2F0ZSA9IHtcbiAgY2FydDogQ29va2llcy5nZXQoXCJjYXJ0XCIpXG4gICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwiY2FydFwiKSlcbiAgICA6IHsgY2FydEl0ZW1zOiBbXSB9LFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQ0FSVF9BRERfSVRFTVwiOiB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBuZXdJdGVtLnNsdWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gZXhpc3RJdGVtLm5hbWUgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xuICAgICAgQ29va2llcy5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XG4gICAgfVxuICAgIGNhc2UgXCJDQVJUX1JFTU9WRV9JVEVNXCI6IHtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyAhPT0gYWN0aW9uLnBheWxvYWQuc2x1Z1xuICAgICAgKTtcbiAgICAgIENvb2tpZXMuc2V0KFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlIFwiQ0FSVF9SRU1PVkVcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcIlNBVkVfU0hJUFBJTkdfQUREUkVTU1wiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgU3RvcmVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTYXRlKTtcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkNvb2tpZXMiLCJTdG9yZSIsImluaXRpYWxTYXRlIiwiY2FydCIsImdldCIsIkpTT04iLCJwYXJzZSIsImNhcnRJdGVtcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwic2x1ZyIsIm1hcCIsIm5hbWUiLCJzZXQiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJzaGlwcGluZ0FkZHJlc3MiLCJsb2NhdGlvbiIsInBheW1lbnRNZXRob2QiLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Store.js\n"));

/***/ })

});