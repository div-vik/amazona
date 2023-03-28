/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_4__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_4__.StoreProvider, {\n            children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nconst Auth = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/divya_vikash/Data/Projects/amazona/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, undefined);\n    }\n    return children;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3RCO0FBQ1Q7QUFDZ0I7QUFFL0MsU0FBU0ksTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFdBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdELFdBQVcsR0FBRSxFQUFFO0lBQ2xFLHFCQUNFLDhEQUFDTiw0REFBZUE7UUFBQ08sU0FBU0E7a0JBQ3hCLDRFQUFDSix1REFBYUE7c0JBQ1hFLFVBQVVHLElBQUksaUJBQ2IsOERBQUNDOztrQ0FDQyw4REFBQ0o7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O29CQUFJOzs7Ozs7cUNBRzlCLDhEQUFDRDtnQkFBVyxHQUFHQyxTQUFTOzs7OztvQkFDekI7Ozs7Ozs7Ozs7O0FBSVQ7QUFFQSxNQUFNRyxPQUFPLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDN0IsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsT0FBTSxFQUFFLEdBQUdYLDJEQUFVQSxDQUFDO1FBQzVCWSxVQUFVLElBQUk7UUFDZEMscUJBQW9CO1lBQ2xCSCxPQUFPSSxJQUFJLENBQUM7UUFDZDtJQUNGO0lBQ0EsSUFBSUgsV0FBVyxXQUFXO1FBQ3hCLHFCQUFPLDhEQUFDSTtzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELE9BQU9OO0FBQ1Q7QUFFQSxpRUFBZU4sS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtYXpvbmEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiLi4vdXRpbHMvU3RvcmVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgIDxTdG9yZVByb3ZpZGVyPlxuICAgICAgICB7Q29tcG9uZW50LmF1dGggPyAoXG4gICAgICAgICAgPEF1dGg+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgICAgICAgIDwvQXV0aD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICl9XG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IEF1dGggPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbih7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZFwiKTtcbiAgICB9LFxuICB9KTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlN0b3JlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJhdXRoIiwiQXV0aCIsImNoaWxkcmVuIiwicm91dGVyIiwic3RhdHVzIiwicmVxdWlyZWQiLCJvblVuYXV0aGVudGljYXRlZCIsInB1c2giLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialSate = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {}\n    }\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        cartItems: [],\n                        shippingAddress: {\n                            location: {}\n                        },\n                        paymentMethod: \"\"\n                    }\n                };\n            }\n        case \"SAVE_SHIPPING_ADDRESS\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        shippingAddress: {\n                            ...state.cart.shippingAddress,\n                            ...action.payload\n                        }\n                    }\n                };\n            }\n        case \"SAVE_PAYMENT_METHOD\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        paymentMethod: action.payload\n                    }\n                };\n            }\n        default:\n            return state;\n    }\n};\nconst StoreProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialSate);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/amazona/utils/Store.js\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU2F0ZSA9IHtcbiAgY2FydDogQ29va2llcy5nZXQoXCJjYXJ0XCIpXG4gICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwiY2FydFwiKSlcbiAgICA6IHsgY2FydEl0ZW1zOiBbXSwgc2hpcHBpbmdBZGRyZXNzOiB7fSB9LFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQ0FSVF9BRERfSVRFTVwiOiB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBuZXdJdGVtLnNsdWdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gZXhpc3RJdGVtLm5hbWUgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xuICAgICAgQ29va2llcy5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XG4gICAgfVxuICAgIGNhc2UgXCJDQVJUX1JFTU9WRV9JVEVNXCI6IHtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyAhPT0gYWN0aW9uLnBheWxvYWQuc2x1Z1xuICAgICAgKTtcbiAgICAgIENvb2tpZXMuc2V0KFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlIFwiQ0FSVF9SRU1PVkVcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcIlNBVkVfU0hJUFBJTkdfQUREUkVTU1wiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFwiU0FWRV9QQVlNRU5UX01FVEhPRFwiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgU3RvcmVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTYXRlKTtcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkNvb2tpZXMiLCJTdG9yZSIsImluaXRpYWxTYXRlIiwiY2FydCIsImdldCIsIkpTT04iLCJwYXJzZSIsImNhcnRJdGVtcyIsInNoaXBwaW5nQWRkcmVzcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwic2x1ZyIsIm1hcCIsIm5hbWUiLCJzZXQiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJsb2NhdGlvbiIsInBheW1lbnRNZXRob2QiLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();