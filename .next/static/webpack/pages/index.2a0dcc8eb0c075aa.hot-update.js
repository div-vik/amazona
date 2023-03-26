"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { title , children  } = param;\n    _s();\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_4__.Store);\n    const { cart  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - Amazona\" : \"Amazona\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 justify-between shadow-md items-center px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"text-lg font-bold\",\n                                    href: \"/\",\n                                    children: \"amazona\"\n                                }, void 0, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"p-2\",\n                                            href: \"/cart\",\n                                            children: [\n                                                \"Cart\",\n                                                cart.cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cart.cartItems.reduce((a, c)=>a + c.quantity, 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                    lineNumber: 26,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"p-2\",\n                                            href: \"/login\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex justify-center items-center h-10 shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2023 Amazona\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"1KanyRZ80sTgEeQF1ogKen7i0wM=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNhO0FBQ0g7QUFFdkMsTUFBTUssU0FBUyxTQUF5QjtRQUF4QixFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRTs7SUFDakMsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0wsaURBQVVBLENBQUNDLCtDQUFLQTtJQUNsQyxNQUFNLEVBQUVLLEtBQUksRUFBRSxHQUFHRDtJQUNqQixxQkFDRTs7MEJBQ0UsOERBQUNSLGtEQUFJQTs7a0NBQ0gsOERBQUNNO2tDQUFPQSxRQUFRQSxRQUFRLGVBQWUsU0FBUzs7Ozs7O2tDQUNoRCw4REFBQ0k7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNoQixrREFBSUE7b0NBQUNnQixXQUFVO29DQUFvQkYsTUFBSzs4Q0FBSTs7Ozs7OzhDQUc3Qyw4REFBQ0M7O3NEQUNDLDhEQUFDZixrREFBSUE7NENBQUNnQixXQUFVOzRDQUFNRixNQUFLOztnREFBUTtnREFFaENOLEtBQUtXLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLG1CQUN2Qiw4REFBQ0M7b0RBQUtMLFdBQVU7OERBQ2JSLEtBQUtXLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELElBQUlDLEVBQUVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O3NEQUl2RCw4REFBQ3pCLGtEQUFJQTs0Q0FBQ2dCLFdBQVU7NENBQU1GLE1BQUs7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU8xQyw4REFBQ1k7d0JBQUtWLFdBQVU7a0NBQThCVjs7Ozs7O2tDQUU5Qyw4REFBQ3FCO3dCQUFPWCxXQUFVO2tDQUNoQiw0RUFBQ1k7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQXhDTXhCO0tBQUFBO0FBMENOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3V0aWxzL1N0b3JlXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xuICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IHRpdGxlICsgXCIgLSBBbWF6b25hXCIgOiBcIkFtYXpvbmFcIn08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRWNvbW1lcmNlIFdlYnNpdGVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBoLTEyIGp1c3RpZnktYmV0d2VlbiBzaGFkb3ctbWQgaXRlbXMtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgYW1hem9uYVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicC0yXCIgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgIHtjYXJ0LmNhcnRJdGVtcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NhcnQuY2FydEl0ZW1zLnJlZHVjZSgoYSwgYykgPT4gYSArIGMucXVhbnRpdHksIDApfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicC0yXCIgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbS1hdXRvIG10LTQgcHgtNFwiPntjaGlsZHJlbn08L21haW4+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTEwIHNoYWRvdy1pbm5lclwiPlxuICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDIzIEFtYXpvbmE8L3A+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJTdG9yZSIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImNhcnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImNhcnRJdGVtcyIsImxlbmd0aCIsInNwYW4iLCJyZWR1Y2UiLCJhIiwiYyIsInF1YW50aXR5IiwibWFpbiIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});