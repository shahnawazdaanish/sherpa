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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Category) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Category\", CategorySchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsR0FBRyxJQUFJRCx3REFBZSxDQUN4QztJQUNFRyxLQUFLLEVBQUU7UUFDTEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixFQUNEO0lBQUVDLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FDckI7QUFFRCxpRUFBZVAsaUVBQXdCLElBQ3JDQSxxREFBYyxDQUFDLFVBQVUsRUFBRUMsY0FBYyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLy4vbW9kZWxzL0NhdGVnb3J5LmpzPzRjODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBDYXRlZ29yeVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5DYXRlZ29yeSB8fFxuICBtb25nb29zZS5tb2RlbChcIkNhdGVnb3J5XCIsIENhdGVnb3J5U2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNhdGVnb3J5U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiQ2F0ZWdvcnkiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/categories/index.js":
/*!***************************************!*\
  !*** ./pages/api/categories/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _util_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/dbConnect */ \"(api)/./util/dbConnect.js\");\n\n\nconst handler = async (req, res)=>{\n    await (0,_util_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { method  } = req;\n    if (method === \"GET\") {\n        try {\n            const categories = await _models_Category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n            res.status(200).json(categories);\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const newCategory = await _models_Category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(req.body);\n            res.status(200).json(newCategory);\n        } catch (err1) {\n            console.log(err1);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFDQTtBQUVoRCxNQUFNRSxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEMsTUFBTUgsMkRBQVMsRUFBRSxDQUFDO0lBQ2xCLE1BQU0sRUFBRUksTUFBTSxHQUFFLEdBQUdGLEdBQUc7SUFFdEIsSUFBSUUsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNwQixJQUFJO1lBQ0YsTUFBTUMsVUFBVSxHQUFHLE1BQU1OLDZEQUFhLEVBQUU7WUFDeENJLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILFVBQVUsQ0FBQyxDQUFDO1NBQ2xDLENBQUMsT0FBT0ksR0FBRyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztTQUNsQjtLQUNGO0lBRUQsSUFBSUwsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNyQixJQUFJO1lBQ0YsTUFBTVEsV0FBVyxHQUFHLE1BQU1iLCtEQUFlLENBQUNHLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDO1lBQ25EWCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSSxXQUFXLENBQUMsQ0FBQztTQUNuQyxDQUFDLE9BQU9ILElBQUcsRUFBRTtZQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBRyxDQUFDLENBQUM7U0FDbEI7S0FDRjtDQUNGO0FBRUQsaUVBQWVSLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmcvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcz8yN2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL0NhdGVnb3J5XCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlsL2RiQ29ubmVjdFwiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IENhdGVnb3J5LmZpbmQoKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNhdGVnb3JpZXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdDYXRlZ29yeSA9IGF3YWl0IENhdGVnb3J5LmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdDYXRlZ29yeSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsImRiQ29ubmVjdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjYXRlZ29yaWVzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibmV3Q2F0ZWdvcnkiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.js\n");

/***/ }),

/***/ "(api)/./util/dbConnect.js":
/*!***************************!*\
  !*** ./util/dbConnect.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\nconsole.log(\"Connected to MongoDB\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL2RiQ29ubmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLFdBQVcsRUFBRTtJQUNoQixNQUFNLElBQUlHLEtBQUssQ0FDYixzRUFBc0UsQ0FDdkUsQ0FBQztDQUNIO0FBRUQ7Ozs7Q0FJQyxHQUNELElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssTUFBTSxFQUFFO0lBQ1hBLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRLEdBQUc7UUFBRU8sSUFBSSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFLElBQUk7S0FBRSxDQUFDO0NBQzFEO0FBRUQsZUFBZUMsU0FBUyxHQUFHO0lBQ3pCLElBQUlKLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsTUFBTSxDQUFDRSxJQUFJLENBQUM7S0FDcEI7SUFFRCxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLElBQUksR0FBRztZQUNYQyxjQUFjLEVBQUUsS0FBSztTQUN0QjtRQUVETixNQUFNLENBQUNHLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVcsRUFBRVMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDYixRQUFRLEdBQUs7WUFDdEUsT0FBT0EsUUFBUSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztLQUNKO0lBQ0RLLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBQ25DLE9BQU9ILE1BQU0sQ0FBQ0UsSUFBSSxDQUFDO0NBQ3BCO0FBRURPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFcEMsaUVBQWVOLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmcvLi91dGlsL2RiQ29ubmVjdC5qcz9mZWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/index.js"));
module.exports = __webpack_exports__;

})();