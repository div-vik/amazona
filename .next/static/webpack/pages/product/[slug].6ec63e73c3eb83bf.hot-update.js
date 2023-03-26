"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductScreen = ()=>{\n    _s();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { slug  } = query;\n    const product = _utils_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].products.find((x)=>x.slug === slug);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found!\"\n        }, void 0, false, {\n            fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"back to products\"\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-4 md:gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:col-span-2 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            width: 640,\n                            height: 640,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-lg\",\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Category: \",\n                                        product.category\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Brand: \",\n                                        product.brand\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        product.rating,\n                                        \" of \",\n                                        product.numReviews,\n                                        \" reviews\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Description: \",\n                                        product.description\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card p-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-2 flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Price\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Rs. \",\n                                            product.price * 82.35\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/product/[slug].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductScreen, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductScreen);\nvar _c;\n$RefreshReg$(_c, \"ProductScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNXO0FBQ2Q7QUFDbUI7QUFDVDtBQUVwQyxNQUFNTSxnQkFBZ0IsSUFBTTs7SUFDMUIsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0wsc0RBQVNBO0lBQzNCLE1BQU0sRUFBRU0sS0FBSSxFQUFFLEdBQUdEO0lBQ2pCLE1BQU1FLFVBQVVKLGlFQUFrQixDQUFDLENBQUNPLElBQU1BLEVBQUVKLElBQUksS0FBS0E7SUFFckQsSUFBSSxDQUFDQyxTQUFTO1FBQ1oscUJBQU8sOERBQUNJO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUNULDBEQUFNQTtRQUFDVSxPQUFPTCxRQUFRTSxJQUFJOzswQkFDekIsOERBQUNGO2dCQUFJRyxXQUFVOzBCQUNiLDRFQUFDZixrREFBSUE7b0JBQUNnQixNQUFLOzhCQUFJOzs7Ozs7Ozs7OzswQkFFakIsOERBQUNKO2dCQUFJRyxXQUFVOztrQ0FDYiw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQ2IsNEVBQUNoQixtREFBS0E7NEJBQ0prQixLQUFLVCxRQUFRVSxLQUFLOzRCQUNsQkMsS0FBS1gsUUFBUU0sSUFBSTs0QkFDakJNLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFFBQU87Ozs7Ozs7Ozs7O2tDQUdYLDhEQUFDVjtrQ0FDQyw0RUFBQ1c7OzhDQUNDLDhEQUFDQzs4Q0FDQyw0RUFBQ0M7d0NBQUdWLFdBQVU7a0RBQVdQLFFBQVFNLElBQUk7Ozs7Ozs7Ozs7OzhDQUV2Qyw4REFBQ1U7O3dDQUFHO3dDQUFXaEIsUUFBUWtCLFFBQVE7Ozs7Ozs7OENBQy9CLDhEQUFDRjs7d0NBQUc7d0NBQVFoQixRQUFRbUIsS0FBSzs7Ozs7Ozs4Q0FDekIsOERBQUNIOzt3Q0FDRWhCLFFBQVFvQixNQUFNO3dDQUFDO3dDQUFLcEIsUUFBUXFCLFVBQVU7d0NBQUM7Ozs7Ozs7OENBRTFDLDhEQUFDTDs7d0NBQUc7d0NBQWNoQixRQUFRc0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ2xCO2tDQUNDLDRFQUFDQTs0QkFBSUcsV0FBVTtzQ0FDYiw0RUFBQ0g7Z0NBQUlHLFdBQVU7O2tEQUNiLDhEQUFDSDtrREFBSTs7Ozs7O2tEQUNMLDhEQUFDQTs7NENBQUk7NENBQUtKLFFBQVF1QixLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDO0dBaERNMUI7O1FBQ2NKLGtEQUFTQTs7O0tBRHZCSTtBQWtETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGFcIjtcblxuY29uc3QgUHJvZHVjdFNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcXVlcnk7XG4gIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQoKHgpID0+IHguc2x1ZyA9PT0gc2x1Zyk7XG5cbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIDxkaXY+UHJvZHVjdCBOb3QgRm91bmQhPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXtwcm9kdWN0Lm5hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+YmFjayB0byBwcm9kdWN0czwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IG1kOmdhcC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgd2lkdGg9ezY0MH1cbiAgICAgICAgICAgIGhlaWdodD17NjQwfVxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+Q2F0ZWdvcnk6IHtwcm9kdWN0LmNhdGVnb3J5fTwvbGk+XG4gICAgICAgICAgICA8bGk+QnJhbmQ6IHtwcm9kdWN0LmJyYW5kfTwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LnJhdGluZ30gb2Yge3Byb2R1Y3QubnVtUmV2aWV3c30gcmV2aWV3c1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5EZXNjcmlwdGlvbjoge3Byb2R1Y3QuZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdj5QcmljZTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlJzLiB7cHJvZHVjdC5wcmljZSAqIDgyLjM1fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U2NyZWVuO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwiTGF5b3V0IiwiZGF0YSIsIlByb2R1Y3RTY3JlZW4iLCJxdWVyeSIsInNsdWciLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwieCIsImRpdiIsInRpdGxlIiwibmFtZSIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwidWwiLCJsaSIsImgxIiwiY2F0ZWdvcnkiLCJicmFuZCIsInJhdGluZyIsIm51bVJldmlld3MiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});