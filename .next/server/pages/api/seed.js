"use strict";
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
exports.id = "pages/api/seed";
exports.ids = ["pages/api/seed"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtRQUFFRSxRQUFRLElBQUk7SUFBQztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUN6Q0ksU0FBUztRQUFFTixNQUFNTztRQUFTTCxVQUFVLElBQUk7UUFBRU0sU0FBUyxLQUFLO0lBQUM7QUFDM0QsR0FDQTtJQUNFQyxZQUFZLElBQUk7QUFDbEI7QUFHRixNQUFNQyxPQUFPZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQztBQUM1RCxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtYXpvbmEvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaXNBZG1pbjogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogZmFsc2UgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/seed.js":
/*!***************************!*\
  !*** ./pages/api/seed.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/data */ \"(api)/./utils/data.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n\n\n\nconst handler = async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteMany();\n    await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].insertMany(_utils_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users);\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n    res.send({\n        message: \"seeded successfully\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFDO0FBQ0Q7QUFDSjtBQUVoQyxNQUFNRyxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsTUFBTUgseURBQVU7SUFDaEIsTUFBTUYsK0RBQWU7SUFDckIsTUFBTUEsK0RBQWUsQ0FBQ0MseURBQVU7SUFDaEMsTUFBTUMsNERBQWE7SUFDbkJHLElBQUlNLElBQUksQ0FBQztRQUFFQyxTQUFTO0lBQXNCO0FBQzVDO0FBRUEsaUVBQWVULE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b25hLy4vcGFnZXMvYXBpL3NlZWQuanM/NGFhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi91dGlscy9kYXRhXCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uL3V0aWxzL2RiXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xuICBhd2FpdCBVc2VyLmRlbGV0ZU1hbnkoKTtcbiAgYXdhaXQgVXNlci5pbnNlcnRNYW55KGRhdGEudXNlcnMpO1xuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XG4gIHJlcy5zZW5kKHsgbWVzc2FnZTogXCJzZWVkZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIlVzZXIiLCJkYXRhIiwiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29ubmVjdCIsImRlbGV0ZU1hbnkiLCJpbnNlcnRNYW55IiwidXNlcnMiLCJkaXNjb25uZWN0Iiwic2VuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/seed.js\n");

/***/ }),

/***/ "(api)/./utils/data.js":
/*!***********************!*\
  !*** ./utils/data.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst data = {\n    users: [\n        {\n            name: \"John\",\n            email: \"admin@example.com\",\n            password: bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync(\"123456\"),\n            isAdmin: true\n        },\n        {\n            name: \"Jane\",\n            email: \"user@example.com\",\n            password: bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync(\"123456\"),\n            isAdmin: false\n        }\n    ],\n    products: [\n        {\n            name: \"Free Shirt\",\n            slug: \"free-shirt\",\n            category: \"Shirts\",\n            image: \"/images/shirt1.jpg\",\n            price: 70,\n            brand: \"Nike\",\n            rating: 4.5,\n            numReviews: 8,\n            countInStock: 20,\n            description: \"A popular shirt\",\n            isFeatured: true,\n            banner: \"/images/banner1.jpg\"\n        },\n        {\n            name: \"Fit Shirt\",\n            slug: \"fit-shirt\",\n            category: \"Shirts\",\n            image: \"/images/shirt2.jpg\",\n            price: 80,\n            brand: \"Adidas\",\n            rating: 3.2,\n            numReviews: 10,\n            countInStock: 20,\n            description: \"A popular shirt\",\n            isFeatured: true,\n            banner: \"/images/banner2.jpg\"\n        },\n        {\n            name: \"Slim Shirt\",\n            slug: \"slim-shirt\",\n            category: \"Shirts\",\n            image: \"/images/shirt3.jpg\",\n            price: 90,\n            brand: \"Raymond\",\n            rating: 4.5,\n            numReviews: 3,\n            countInStock: 20,\n            description: \"A popular shirt\"\n        },\n        {\n            name: \"Golf Pants\",\n            slug: \"golf-pants\",\n            category: \"Pants\",\n            image: \"/images/pants1.jpg\",\n            price: 90,\n            brand: \"Oliver\",\n            rating: 2.9,\n            numReviews: 13,\n            countInStock: 20,\n            description: \"Smart looking pants\"\n        },\n        {\n            name: \"Fit Pants\",\n            slug: \"fit-pants\",\n            category: \"Pants\",\n            image: \"/images/pants2.jpg\",\n            price: 95,\n            brand: \"Zara\",\n            rating: 3.5,\n            numReviews: 7,\n            countInStock: 20,\n            description: \"A popular pants\"\n        },\n        {\n            name: \"Classic Pants\",\n            slug: \"classic-pants\",\n            category: \"Pants\",\n            image: \"/images/pants3.jpg\",\n            price: 75,\n            brand: \"Casely\",\n            rating: 2.4,\n            numReviews: 14,\n            countInStock: 20,\n            description: \"A popular pants\"\n        }\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUU5QixNQUFNQyxPQUFPO0lBQ1hDLE9BQU87UUFDTDtZQUNFQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsVUFBVUwsd0RBQWUsQ0FBQztZQUMxQk8sU0FBUyxJQUFJO1FBQ2Y7UUFDQTtZQUNFSixNQUFNO1lBQ05DLE9BQU87WUFDUEMsVUFBVUwsd0RBQWUsQ0FBQztZQUMxQk8sU0FBUyxLQUFLO1FBQ2hCO0tBQ0Q7SUFDREMsVUFBVTtRQUNSO1lBQ0VMLE1BQU07WUFDTk0sTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGFBQWE7WUFDYkMsWUFBWSxJQUFJO1lBQ2hCQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFaEIsTUFBTTtZQUNOTSxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLGNBQWM7WUFDZEMsYUFBYTtZQUNiQyxZQUFZLElBQUk7WUFDaEJDLFFBQVE7UUFDVjtRQUNBO1lBQ0VoQixNQUFNO1lBQ05NLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFZCxNQUFNO1lBQ05NLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFZCxNQUFNO1lBQ05NLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFZCxNQUFNO1lBQ05NLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxhQUFhO1FBQ2Y7S0FDRDtBQUNIO0FBRUEsaUVBQWVoQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1hem9uYS8uL3V0aWxzL2RhdGEuanM/ZjA0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5jb25zdCBkYXRhID0ge1xuICB1c2VyczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiSm9oblwiLFxuICAgICAgZW1haWw6IFwiYWRtaW5AZXhhbXBsZS5jb21cIixcbiAgICAgIHBhc3N3b3JkOiBiY3J5cHQuaGFzaFN5bmMoXCIxMjM0NTZcIiksXG4gICAgICBpc0FkbWluOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYW5lXCIsXG4gICAgICBlbWFpbDogXCJ1c2VyQGV4YW1wbGUuY29tXCIsXG4gICAgICBwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKFwiMTIzNDU2XCIpLFxuICAgICAgaXNBZG1pbjogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgcHJvZHVjdHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkZyZWUgU2hpcnRcIixcbiAgICAgIHNsdWc6IFwiZnJlZS1zaGlydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2hpcnRzXCIsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3NoaXJ0MS5qcGdcIixcbiAgICAgIHByaWNlOiA3MCxcbiAgICAgIGJyYW5kOiBcIk5pa2VcIixcbiAgICAgIHJhdGluZzogNC41LFxuICAgICAgbnVtUmV2aWV3czogOCxcbiAgICAgIGNvdW50SW5TdG9jazogMjAsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHBvcHVsYXIgc2hpcnRcIixcbiAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgICBiYW5uZXI6IFwiL2ltYWdlcy9iYW5uZXIxLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGaXQgU2hpcnRcIixcbiAgICAgIHNsdWc6IFwiZml0LXNoaXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJTaGlydHNcIixcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hpcnQyLmpwZ1wiLFxuICAgICAgcHJpY2U6IDgwLFxuICAgICAgYnJhbmQ6IFwiQWRpZGFzXCIsXG4gICAgICByYXRpbmc6IDMuMixcbiAgICAgIG51bVJldmlld3M6IDEwLFxuICAgICAgY291bnRJblN0b2NrOiAyMCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcG9wdWxhciBzaGlydFwiLFxuICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICAgIGJhbm5lcjogXCIvaW1hZ2VzL2Jhbm5lcjIuanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNsaW0gU2hpcnRcIixcbiAgICAgIHNsdWc6IFwic2xpbS1zaGlydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2hpcnRzXCIsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3NoaXJ0My5qcGdcIixcbiAgICAgIHByaWNlOiA5MCxcbiAgICAgIGJyYW5kOiBcIlJheW1vbmRcIixcbiAgICAgIHJhdGluZzogNC41LFxuICAgICAgbnVtUmV2aWV3czogMyxcbiAgICAgIGNvdW50SW5TdG9jazogMjAsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHBvcHVsYXIgc2hpcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiR29sZiBQYW50c1wiLFxuICAgICAgc2x1ZzogXCJnb2xmLXBhbnRzXCIsXG4gICAgICBjYXRlZ29yeTogXCJQYW50c1wiLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wYW50czEuanBnXCIsXG4gICAgICBwcmljZTogOTAsXG4gICAgICBicmFuZDogXCJPbGl2ZXJcIixcbiAgICAgIHJhdGluZzogMi45LFxuICAgICAgbnVtUmV2aWV3czogMTMsXG4gICAgICBjb3VudEluU3RvY2s6IDIwLFxuICAgICAgZGVzY3JpcHRpb246IFwiU21hcnQgbG9va2luZyBwYW50c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGaXQgUGFudHNcIixcbiAgICAgIHNsdWc6IFwiZml0LXBhbnRzXCIsXG4gICAgICBjYXRlZ29yeTogXCJQYW50c1wiLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wYW50czIuanBnXCIsXG4gICAgICBwcmljZTogOTUsXG4gICAgICBicmFuZDogXCJaYXJhXCIsXG4gICAgICByYXRpbmc6IDMuNSxcbiAgICAgIG51bVJldmlld3M6IDcsXG4gICAgICBjb3VudEluU3RvY2s6IDIwLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBwb3B1bGFyIHBhbnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNsYXNzaWMgUGFudHNcIixcbiAgICAgIHNsdWc6IFwiY2xhc3NpYy1wYW50c1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiUGFudHNcIixcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvcGFudHMzLmpwZ1wiLFxuICAgICAgcHJpY2U6IDc1LFxuICAgICAgYnJhbmQ6IFwiQ2FzZWx5XCIsXG4gICAgICByYXRpbmc6IDIuNCxcbiAgICAgIG51bVJldmlld3M6IDE0LFxuICAgICAgY291bnRJblN0b2NrOiAyMCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcG9wdWxhciBwYW50c1wiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIl0sIm5hbWVzIjpbImJjcnlwdCIsImRhdGEiLCJ1c2VycyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFzaFN5bmMiLCJpc0FkbWluIiwicHJvZHVjdHMiLCJzbHVnIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInByaWNlIiwiYnJhbmQiLCJyYXRpbmciLCJudW1SZXZpZXdzIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJpc0ZlYXR1cmVkIiwiYmFubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/data.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nconst connect = async ()=>{\n    if (connection.isConnected) {\n        console.log(\"already connected\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log(\"use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"new connection\");\n    connection.isConnected = db.connections[0].readyState;\n};\nconst disconnect = async ()=>{\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"not disconnected\");\n        }\n    }\n};\nconst db = {\n    connect,\n    disconnect\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLE1BQU1DLFVBQVUsVUFBWTtJQUMxQixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0YsQ0FBQztJQUNELElBQUlMLG9FQUEyQixHQUFHLEdBQUc7UUFDbkNDLFdBQVdFLFdBQVcsR0FBR0gsMkVBQWtDO1FBQzNELElBQUlDLFdBQVdFLFdBQVcsS0FBSyxHQUFHO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGLENBQUM7UUFDRCxNQUFNTCwwREFBbUI7SUFDM0IsQ0FBQztJQUNELE1BQU1VLEtBQUssTUFBTVYsdURBQWdCLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUN6RFQsUUFBUUMsR0FBRyxDQUFDO0lBQ1pKLFdBQVdFLFdBQVcsR0FBR08sR0FBR0osV0FBVyxDQUFDLEVBQUUsQ0FBQ0UsVUFBVTtBQUN2RDtBQUVBLE1BQU1DLGFBQWEsVUFBWTtJQUM3QixJQUFJUixXQUFXRSxXQUFXLEVBQUU7UUFDMUIsSUFBSVEsS0FBcUMsRUFBRSxFQUcxQyxNQUFNO1lBQ0xQLFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0FBQ0g7QUFFQSxNQUFNSyxLQUFLO0lBQUVSO0lBQVNPO0FBQVc7QUFDakMsaUVBQWVDLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b25hLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcImFscmVhZHkgY29ubmVjdGVkXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZSBwcmV2aW91cyBjb25uZWN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XG4gIH1cbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbiAgY29uc29sZS5sb2coXCJuZXcgY29ubmVjdGlvblwiKTtcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59O1xuXG5jb25zdCBkaXNjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3QgZGlzY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QgfTtcbmV4cG9ydCBkZWZhdWx0IGRiO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsImxlbmd0aCIsInJlYWR5U3RhdGUiLCJkaXNjb25uZWN0IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/seed.js"));
module.exports = __webpack_exports__;

})();