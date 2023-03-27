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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { title , children  } = param;\n    _s();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_7__.Store);\n    const { cart  } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - Amazona\" : \"Amazona\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 justify-between shadow-md items-center px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: \"text-lg font-bold\",\n                                    href: \"/\",\n                                    children: \"amazona\"\n                                }, void 0, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"p-2\",\n                                            href: \"/cart\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? session.user.name : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"p-2\",\n                                            href: \"/login\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex justify-center items-center h-10 shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2023 Amazona\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"erJFpS/OaHhZrWVyPIAb5BYEeH0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNoQjtBQUNBO0FBQ2tDO0FBQ2Y7QUFDRDtBQUNSO0FBRXZDLE1BQU1TLFNBQVMsU0FBeUI7UUFBeEIsRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUU7O0lBQ2pDLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR2QsMkRBQVVBO0lBQzVDLE1BQU0sRUFBRWUsTUFBSyxFQUFFLEdBQUdYLGlEQUFVQSxDQUFDSSwrQ0FBS0E7SUFDbEMsTUFBTSxFQUFFUSxLQUFJLEVBQUUsR0FBR0Q7SUFDakIsTUFBTSxDQUFDRSxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYSxrQkFBa0JGLEtBQUtHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELElBQUlDLEVBQUVDLFFBQVEsRUFBRTtJQUNwRSxHQUFHO1FBQUNQLEtBQUtHLFNBQVM7S0FBQztJQUNuQixxQkFDRTs7MEJBQ0UsOERBQUNsQixrREFBSUE7O2tDQUNILDhEQUFDUztrQ0FBT0EsUUFBUUEsUUFBUSxlQUFlLFNBQVM7Ozs7OztrQ0FDaEQsOERBQUNjO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ3RCLDBEQUFjQTtnQkFBQ3VCLFVBQVM7Z0JBQWdCQyxPQUFPOzs7Ozs7MEJBRWhELDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUMvQixrREFBSUE7b0NBQUMrQixXQUFVO29DQUFvQkosTUFBSzs4Q0FBSTs7Ozs7OzhDQUc3Qyw4REFBQ0c7O3NEQUNDLDhEQUFDOUIsa0RBQUlBOzRDQUFDK0IsV0FBVTs0Q0FBTUosTUFBSzs7Z0RBQVE7Z0RBRWhDWixpQkFBaUIsbUJBQ2hCLDhEQUFDbUI7b0RBQUtILFdBQVU7OERBQ2JoQjs7Ozs7Ozs7Ozs7O3dDQUlOTCxXQUFXLFlBQ1YsWUFDRUUsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTdUIsSUFBSSxJQUNmdkIsUUFBUXVCLElBQUksQ0FBQ1osSUFBSSxpQkFFakIsOERBQUN2QixrREFBSUE7NENBQUMrQixXQUFVOzRDQUFNSixNQUFLO3NEQUFTOzs7OztxREFHckM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLUCw4REFBQ1M7d0JBQUtMLFdBQVU7a0NBQThCdEI7Ozs7OztrQ0FFOUMsOERBQUM0Qjt3QkFBT04sV0FBVTtrQ0FDaEIsNEVBQUNPO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0F0RE0vQjs7UUFDOEJULHVEQUFVQTs7O0tBRHhDUztBQXdETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3V0aWxzL1N0b3JlXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdHVzLCBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xuICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xuICBjb25zdCBbY2FydEl0ZW1zQ291bnQsIHNldENhcnRJdGVtc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhcnRJdGVtc0NvdW50KGNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoYSwgYykgPT4gYSArIGMucXVhbnRpdHksIDApKTtcbiAgfSwgW2NhcnQuY2FydEl0ZW1zXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlID8gdGl0bGUgKyBcIiAtIEFtYXpvbmFcIiA6IFwiQW1hem9uYVwifTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFY29tbWVyY2UgV2Vic2l0ZVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiIGxpbWl0PXsxfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBoLTEyIGp1c3RpZnktYmV0d2VlbiBzaGFkb3ctbWQgaXRlbXMtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgYW1hem9uYVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicC0yXCIgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNDb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBweC0yIHB5LTEgdGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zQ291bnR9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiA/IChcbiAgICAgICAgICAgICAgICBcIkxvYWRpbmdcIlxuICAgICAgICAgICAgICApIDogc2Vzc2lvbj8udXNlciA/IChcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInAtMlwiIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG8gbXQtNCBweC00XCI+e2NoaWxkcmVufTwvbWFpbj5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMTAgc2hhZG93LWlubmVyXCI+XG4gICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMjMgQW1hem9uYTwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwiSGVhZCIsIkxpbmsiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwiU3RvcmUiLCJMYXlvdXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0ZSIsImNhcnQiLCJjYXJ0SXRlbXNDb3VudCIsInNldENhcnRJdGVtc0NvdW50IiwiY2FydEl0ZW1zIiwicmVkdWNlIiwiYSIsImMiLCJxdWFudGl0eSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwicG9zaXRpb24iLCJsaW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsInNwYW4iLCJ1c2VyIiwibWFpbiIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});