"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shipping",{

/***/ "./pages/shipping.js":
/*!***************************!*\
  !*** ./pages/shipping.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_CheckoutWizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CheckoutWizard */ \"./components/CheckoutWizard.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ShippingScreen = ()=>{\n    _s();\n    const { handleSubmit , register , formState: { errors  } , setValue , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const submitHandler = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Shipping Address\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutWizard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                activeStep: 1\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/shipping.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"mx-auto max-w-screen-md\",\n                onSubmit: handleSubmit(submitHandler),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-xl\",\n                    children: \"Shipping Address\"\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/shipping.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/shipping.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/shipping.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShippingScreen, \"RksrpwIC/nEJz4jVeRXit7Hnx6I=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = ShippingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShippingScreen);\nvar _c;\n$RefreshReg$(_c, \"ShippingScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaGlwcGluZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2dCO0FBQ2hCO0FBRTFDLE1BQU1JLGlCQUFpQixJQUFNOztJQUMzQixNQUFNLEVBQ0pDLGFBQVksRUFDWkMsU0FBUSxFQUNSQyxXQUFXLEVBQUVDLE9BQU0sRUFBRSxHQUNyQkMsU0FBUSxFQUNSQyxVQUFTLEVBQ1YsR0FBR1Qsd0RBQU9BO0lBRVgsTUFBTVUsZ0JBQWdCLElBQU0sQ0FBQztJQUU3QixxQkFDRSw4REFBQ1IsMERBQU1BO1FBQUNTLE9BQU07OzBCQUNaLDhEQUFDVixrRUFBY0E7Z0JBQUNXLFlBQVk7Ozs7OzswQkFDNUIsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUNWQyxVQUFVWCxhQUFhTTswQkFFdkIsNEVBQUNNO29CQUFHRixXQUFVOzhCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQztHQXRCTVg7O1FBT0FILG9EQUFPQTs7O0tBUFBHO0FBd0JOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NoaXBwaW5nLmpzPzc2ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBDaGVja291dFdpemFyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja291dFdpemFyZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgU2hpcHBpbmdTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIHNldFZhbHVlLFxuICAgIGdldFZhbHVlcyxcbiAgfSA9IHVzZUZvcm0oKTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiU2hpcHBpbmcgQWRkcmVzc1wiPlxuICAgICAgPENoZWNrb3V0V2l6YXJkIGFjdGl2ZVN0ZXA9ezF9IC8+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1tZFwiXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0SGFuZGxlcil9XG4gICAgICA+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQteGxcIj5TaGlwcGluZyBBZGRyZXNzPC9oMT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBwaW5nU2NyZWVuO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIkNoZWNrb3V0V2l6YXJkIiwiTGF5b3V0IiwiU2hpcHBpbmdTY3JlZW4iLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImVycm9ycyIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwic3VibWl0SGFuZGxlciIsInRpdGxlIiwiYWN0aXZlU3RlcCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shipping.js\n"));

/***/ })

});