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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
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

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtRQUFFRSxRQUFRLElBQUk7SUFBQztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUN6Q0ksU0FBUztRQUFFTixNQUFNTztRQUFTTCxVQUFVLElBQUk7UUFBRU0sU0FBUyxLQUFLO0lBQUM7QUFDM0QsR0FDQTtJQUNFQyxZQUFZLElBQUk7QUFDbEI7QUFHRixNQUFNQyxPQUFPZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQztBQUM1RCxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtYXpvbmEvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaXNBZG1pbjogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogZmFsc2UgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user?._id) token._id = user._id;\n            if (user?.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token?._id) session._id = token._id;\n            if (token?.isAdmin) session.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        image: \"f\",\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"Invalid email or password!\");\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQ0w7QUFDSDtBQUNrQztBQUVsRSxpRUFBZUEsZ0RBQVFBLENBQUM7SUFDdEJLLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEVBQUU7WUFDekIsSUFBSUEsTUFBTUMsS0FBS0YsTUFBTUUsR0FBRyxHQUFHRCxLQUFLQyxHQUFHO1lBQ25DLElBQUlELE1BQU1FLFNBQVNILE1BQU1HLE9BQU8sR0FBR0YsS0FBS0UsT0FBTztZQUMvQyxPQUFPSDtRQUNUO1FBQ0EsTUFBTUosU0FBUSxFQUFFQSxRQUFPLEVBQUVJLE1BQUssRUFBRSxFQUFFO1lBQ2hDLElBQUlBLE9BQU9FLEtBQUtOLFFBQVFNLEdBQUcsR0FBR0YsTUFBTUUsR0FBRztZQUN2QyxJQUFJRixPQUFPRyxTQUFTUCxRQUFRTyxPQUFPLEdBQUdILE1BQU1HLE9BQU87WUFDbkQsT0FBT1A7UUFDVDtJQUNGO0lBQ0FRLFdBQVc7UUFDVFQsc0VBQW1CQSxDQUFDO1lBQ2xCLE1BQU1VLFdBQVVDLFdBQVcsRUFBRTtnQkFDM0IsTUFBTWIseURBQVU7Z0JBQ2hCLE1BQU1RLE9BQU8sTUFBTVQsNERBQVksQ0FBQztvQkFDOUJpQixPQUFPSCxZQUFZRyxLQUFLO2dCQUMxQjtnQkFDQSxNQUFNaEIsNERBQWE7Z0JBQ25CLElBQUlRLFFBQVFQLDJEQUFvQixDQUFDWSxZQUFZTSxRQUFRLEVBQUVYLEtBQUtXLFFBQVEsR0FBRztvQkFDckUsT0FBTzt3QkFDTFYsS0FBS0QsS0FBS0MsR0FBRzt3QkFDYlcsTUFBTVosS0FBS1ksSUFBSTt3QkFDZkosT0FBT1IsS0FBS1EsS0FBSzt3QkFDakJLLE9BQU87d0JBQ1BYLFNBQVNGLEtBQUtFLE9BQU87b0JBQ3ZCO2dCQUNGLENBQUM7Z0JBQ0QsTUFBTSxJQUFJWSxNQUFNLDhCQUE4QjtZQUNoRDtRQUNGO0tBQ0Q7QUFDSCxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b25hLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJcIjtcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcj8uX2lkKSB0b2tlbi5faWQgPSB1c2VyLl9pZDtcbiAgICAgIGlmICh1c2VyPy5pc0FkbWluKSB0b2tlbi5pc0FkbWluID0gdXNlci5pc0FkbWluO1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbj8uX2lkKSBzZXNzaW9uLl9pZCA9IHRva2VuLl9pZDtcbiAgICAgIGlmICh0b2tlbj8uaXNBZG1pbikgc2Vzc2lvbi5pc0FkbWluID0gdG9rZW4uaXNBZG1pbjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGF3YWl0IGRiLmNvbm5lY3QoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xuICAgICAgICBpZiAodXNlciAmJiBiY3J5cHRqcy5jb21wYXJlU3luYyhjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgX2lkOiB1c2VyLl9pZCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgaW1hZ2U6IFwiZlwiLFxuICAgICAgICAgICAgaXNBZG1pbjogdXNlci5pc0FkbWluLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCFcIik7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsibmV4dEF1dGgiLCJVc2VyIiwiZGIiLCJiY3J5cHRqcyIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJfaWQiLCJpc0FkbWluIiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJjb25uZWN0IiwiZmluZE9uZSIsImVtYWlsIiwiZGlzY29ubmVjdCIsImNvbXBhcmVTeW5jIiwicGFzc3dvcmQiLCJuYW1lIiwiaW1hZ2UiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();