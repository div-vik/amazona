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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var _DropdownLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownLink */ \"./components/DropdownLink.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { title , children  } = param;\n    _s();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_7__.Store);\n    const { cart  } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - Amazona\" : \"Amazona\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 justify-between shadow-md items-center px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: \"text-lg font-bold\",\n                                    href: \"/\",\n                                    children: \"amazona\"\n                                }, void 0, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"p-2\",\n                                            href: \"/cart\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Button, {\n                                                    className: \"text-blue-600\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                href: \"/profile\",\n                                                                className: \"dropdown-link\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                                lineNumber: 53,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                href: \"/order-history\",\n                                                                className: \"dropdown-link\",\n                                                                children: \"Order History\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                href: \"/profile\",\n                                                                // onClick={logoutClickHandler}\n                                                                className: \"dropdown-link\",\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                                lineNumber: 66,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"p-2\",\n                                            href: \"/login\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex justify-center items-center h-10 shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2023 Amazona\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/components/Layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"erJFpS/OaHhZrWVyPIAb5BYEeH0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0k7QUFDaEI7QUFDQTtBQUNrQztBQUNmO0FBQ0Q7QUFDUjtBQUNHO0FBRTFDLE1BQU1XLFNBQVMsU0FBeUI7UUFBeEIsRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUU7O0lBQ2pDLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR2YsMkRBQVVBO0lBQzVDLE1BQU0sRUFBRWdCLE1BQUssRUFBRSxHQUFHWixpREFBVUEsQ0FBQ0ksK0NBQUtBO0lBQ2xDLE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUdEO0lBQ2pCLE1BQU0sQ0FBQ0UsZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDckRELGdEQUFTQSxDQUFDLElBQU07UUFDZGMsa0JBQWtCRixLQUFLRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxJQUFJQyxFQUFFQyxRQUFRLEVBQUU7SUFDcEUsR0FBRztRQUFDUCxLQUFLRyxTQUFTO0tBQUM7SUFDbkIscUJBQ0U7OzBCQUNFLDhEQUFDbkIsa0RBQUlBOztrQ0FDSCw4REFBQ1U7a0NBQU9BLFFBQVFBLFFBQVEsZUFBZSxTQUFTOzs7Ozs7a0NBQ2hELDhEQUFDYzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUN2QiwwREFBY0E7Z0JBQUN3QixVQUFTO2dCQUFnQkMsT0FBTzs7Ozs7OzBCQUVoRCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FDQyw0RUFBQ0M7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDaEMsa0RBQUlBO29DQUFDZ0MsV0FBVTtvQ0FBb0JKLE1BQUs7OENBQUk7Ozs7Ozs4Q0FHN0MsOERBQUNHOztzREFDQyw4REFBQy9CLGtEQUFJQTs0Q0FBQ2dDLFdBQVU7NENBQU1KLE1BQUs7O2dEQUFRO2dEQUVoQ1osaUJBQWlCLG1CQUNoQiw4REFBQ21CO29EQUFLSCxXQUFVOzhEQUNiaEI7Ozs7Ozs7Ozs7Ozt3Q0FJTkwsV0FBVyxZQUNWLFlBQ0VFLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU3VCLElBQUksa0JBQ2YsOERBQUN2QyxtREFBSUE7NENBQUN3QyxJQUFHOzRDQUFNTCxXQUFVOzs4REFDdkIsOERBQUNuQywwREFBVztvREFBQ21DLFdBQVU7OERBQ3BCbkIsUUFBUXVCLElBQUksQ0FBQ1osSUFBSTs7Ozs7OzhEQUVwQiw4REFBQzNCLHlEQUFVO29EQUFDbUMsV0FBVTs7c0VBQ3BCLDhEQUFDbkMsd0RBQVM7c0VBQ1IsNEVBQUNVLHFEQUFZQTtnRUFBQ3FCLE1BQUs7Z0VBQVdJLFdBQVU7MEVBQWdCOzs7Ozs7Ozs7OztzRUFJMUQsOERBQUNuQyx3REFBUztzRUFDUiw0RUFBQ1UscURBQVlBO2dFQUNYcUIsTUFBSztnRUFDTEksV0FBVTswRUFDWDs7Ozs7Ozs7Ozs7c0VBSUgsOERBQUNuQyx3REFBUztzRUFDUiw0RUFBQ1UscURBQVlBO2dFQUNYcUIsTUFBSztnRUFDTCwrQkFBK0I7Z0VBQy9CSSxXQUFVOzBFQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NFQU9QLDhEQUFDaEMsa0RBQUlBOzRDQUFDZ0MsV0FBVTs0Q0FBTUosTUFBSztzREFBUzs7Ozs7cURBR3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS1AsOERBQUNhO3dCQUFLVCxXQUFVO2tDQUE4QnRCOzs7Ozs7a0NBRTlDLDhEQUFDZ0M7d0JBQU9WLFdBQVU7a0NBQ2hCLDRFQUFDVztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBbEZNbkM7O1FBQzhCVix1REFBVUE7OztLQUR4Q1U7QUFvRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IERyb3Bkb3duTGluayBmcm9tIFwiLi9Ecm9wZG93bkxpbmtcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChTdG9yZSk7XG4gIGNvbnN0IHsgY2FydCB9ID0gc3RhdGU7XG4gIGNvbnN0IFtjYXJ0SXRlbXNDb3VudCwgc2V0Q2FydEl0ZW1zQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2FydEl0ZW1zQ291bnQoY2FydC5jYXJ0SXRlbXMucmVkdWNlKChhLCBjKSA9PiBhICsgYy5xdWFudGl0eSwgMCkpO1xuICB9LCBbY2FydC5jYXJ0SXRlbXNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyB0aXRsZSArIFwiIC0gQW1hem9uYVwiIDogXCJBbWF6b25hXCJ9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVjb21tZXJjZSBXZWJzaXRlXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCIgbGltaXQ9ezF9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGgtMTIganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy1tZCBpdGVtcy1jZW50ZXIgcHgtNFwiPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICBhbWF6b25hXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJwLTJcIiBocmVmPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICBDYXJ0XG4gICAgICAgICAgICAgICAge2NhcnRJdGVtc0NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNDb3VudH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHtzdGF0dXMgPT09IFwibG9hZGluZ1wiID8gKFxuICAgICAgICAgICAgICAgIFwiTG9hZGluZ1wiXG4gICAgICAgICAgICAgICkgOiBzZXNzaW9uPy51c2VyID8gKFxuICAgICAgICAgICAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LTU2IG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3JkZXItaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBPcmRlciBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtsb2dvdXRDbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInAtMlwiIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG8gbXQtNCBweC00XCI+e2NoaWxkcmVufTwvbWFpbj5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMTAgc2hhZG93LWlubmVyXCI+XG4gICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMjMgQW1hem9uYTwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJNZW51IiwidXNlU2Vzc2lvbiIsIkhlYWQiLCJMaW5rIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb2FzdENvbnRhaW5lciIsIlN0b3JlIiwiRHJvcGRvd25MaW5rIiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInN0YXR1cyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdGUiLCJjYXJ0IiwiY2FydEl0ZW1zQ291bnQiLCJzZXRDYXJ0SXRlbXNDb3VudCIsImNhcnRJdGVtcyIsInJlZHVjZSIsImEiLCJjIiwicXVhbnRpdHkiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBvc2l0aW9uIiwibGltaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJuYXYiLCJzcGFuIiwidXNlciIsImFzIiwiQnV0dG9uIiwiSXRlbXMiLCJJdGVtIiwibWFpbiIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});