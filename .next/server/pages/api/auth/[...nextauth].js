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

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _service_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/fauna */ \"./src/service/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            scope: 'read:user'\n        }), \n    ],\n    callbacks: {\n        async session (session) {\n            session.user.email;\n            try {\n                const userActiveSubscription = await _service_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))),\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_status'), \"active\")\n                ])));\n                return {\n                    ...session,\n                    activeSubscription: userActiveSubscription\n                };\n            } catch  {\n                return {\n                    ...session,\n                    activeSubscription: null\n                };\n            }\n        },\n        async signIn (user) {\n            const { email  } = user;\n            try {\n                await _service_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email: faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtQztBQUVIO0FBQ1c7QUFFRztBQUU5QyxpRUFBZUUsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3JCRyxTQUFTLEVBQUUsQ0FBQztRQUNSRixpRUFBZ0IsQ0FBQyxDQUFDO1lBQ2RJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxLQUFLLEVBQUUsQ0FBVztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztjQUNKQyxPQUFPLEVBQUNBLE9BQU8sRUFBRSxDQUFDO1lBQ3RCQSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsS0FBSztZQUVsQixHQUFHLENBQUMsQ0FBQztnQkFDRCxLQUFLLENBQUNDLHNCQUFzQixHQUFHLEtBQUssQ0FBQ2QsdURBQVcsQ0FDNUNILDhDQUFLLENBQ0RBLHVEQUFjLENBQUMsQ0FBQztvQkFDWkEsZ0RBQU8sQ0FDSEEsZ0RBQU8sQ0FBQyxDQUEwQiw0QkFDbENBLGlEQUFRLENBQ0osQ0FBSyxNQUNMQSw4Q0FBSyxDQUNEQSxnREFBTyxDQUNIQSxnREFBTyxDQUFDLENBQWUsaUJBQ3ZCQSxtREFBVSxDQUFDYyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsS0FBSztvQkFLN0NoQixnREFBTyxDQUNIQSxnREFBTyxDQUFDLENBQXdCLDBCQUNoQyxDQUFRO2dCQUVoQixDQUFDO2dCQUlULE1BQU0sQ0FBQyxDQUFDO3VCQUNEYyxPQUFPO29CQUNWVSxrQkFBa0IsRUFBRVAsc0JBQXNCO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxDQUFDO3VCQUNESCxPQUFPO29CQUNWVSxrQkFBa0IsRUFBRSxJQUFJO2dCQUM1QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7Y0FDT0MsTUFBTSxFQUFDVixJQUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxHQUFHRCxJQUFJO1lBRXRCLEdBQUcsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQ1osdURBQVcsQ0FDZkgsNkNBQUksQ0FDRkEsOENBQUssQ0FDSEEsaURBQVEsQ0FDTkEsZ0RBQU8sQ0FBQ0EsZ0RBQU8sQ0FBQyxDQUFlLGlCQUFHQSxtREFBVSxDQUFDZSxJQUFJLENBQUNDLEtBQUssTUFJM0RoQixpREFBUSxDQUFDQSxxREFBWSxDQUFDLENBQU8sU0FBRyxDQUFDO29CQUMvQitCLElBQUksRUFBRSxDQUFDO3dCQUNMZixLQUFLLEVBQUVoQixtREFBVSxDQUFDZSxJQUFJLENBQUNDLEtBQUs7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQyxHQUNEaEIsOENBQUssQ0FBQ0EsZ0RBQU8sQ0FBQ0EsZ0RBQU8sQ0FBQyxDQUFlLGlCQUFHQSxtREFBVSxDQUFDZSxJQUFJLENBQUNDLEtBQUs7Z0JBSWpFLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxLQUFLO1lBQ2QsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxfSBmcm9tICdmYXVuYWRiJ1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCJcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL2ZhdW5hJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlckFjdGl2ZVN1YnNjcmlwdGlvbiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICAgICAgICBxLkludGVyc2VjdGlvbihbXG4gICAgICAgICAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV91c2VyX3JlZicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuU2VsZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3N0YXR1cycpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogdXNlckFjdGl2ZVN1YnNjcmlwdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgICBhc3luYyBzaWduSW4odXNlcikge1xuICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyXG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgICAgcS5JZihcbiAgICAgICAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgICAgICBxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgXG4gICAgICAgICAgICAgIHEuQ3JlYXRlKHEuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgZW1haWw6IHEuQ2FzZWZvbGQodXNlci5lbWFpbCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHEuR2V0KHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQodXNlci5lbWFpbCkpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG59KVxuIl0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJHaXRIdWIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJ1c2VyQWN0aXZlU3Vic2NyaXB0aW9uIiwiR2V0IiwiSW50ZXJzZWN0aW9uIiwiTWF0Y2giLCJJbmRleCIsIlNlbGVjdCIsIkNhc2Vmb2xkIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwic2lnbkluIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/service/fauna.ts":
/*!******************************!*\
  !*** ./src/service/fauna.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY,\n    domain: \"db.us.fauna.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9mYXVuYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsS0FBSyxDQUFDQyxLQUFLLEdBQUcsR0FBRyxDQUFDRCwyQ0FBTSxDQUFDLENBQUM7SUFDL0JFLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7SUFDL0JDLE1BQU0sRUFBRSxDQUFpQjtBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2UvZmF1bmEudHM/N2QwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWSxcbiAgZG9tYWluOiBcImRiLnVzLmZhdW5hLmNvbVwiLFxufSlcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSIsImRvbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/service/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();