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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz8yYmU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api */ \"./src/service/api.ts\");\n/* harmony import */ var _service_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/stripe-js */ \"./src/service/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');\n            return;\n        }\n        if (session.activeSubscription) {\n            router.push('/posts');\n            return;\n        }\n        try {\n            const response = await _service_api__WEBPACK_IMPORTED_MODULE_3__.api.post('/subscribe');\n            const { sessionId  } = response.data;\n            const stripe = await (0,_service_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n        onClick: handleSubscribe,\n        __source: {\n            fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: \"Subscribe now\"\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNkO0FBQ0E7QUFDYztBQUNaO0FBTWxDLFNBQVNNLGVBQWUsQ0FBQyxDQUFDLENBQUNDLE9BQU8sRUFBdUIsQ0FBQyxFQUFFLENBQUM7SUFDbEUsS0FBSyxFQUFHQyxPQUFPLElBQUtQLDREQUFVO0lBQzlCLEtBQUssQ0FBQ1EsTUFBTSxHQUFHUCxzREFBUzttQkFFVFEsZUFBZSxHQUFHLENBQUM7UUFDaEMsRUFBRSxHQUFHRixPQUFPLEVBQUUsQ0FBQztZQUNiUix3REFBTSxDQUFDLENBQVE7WUFDZixNQUFNO1FBQ1IsQ0FBQztRQUVELEVBQUUsRUFBRVEsT0FBTyxDQUFDRyxrQkFBa0IsRUFBRSxDQUFDO1lBQy9CRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFRO1lBQ3BCLE1BQU07UUFDUixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNWLGtEQUFRLENBQUMsQ0FBWTtZQUU1QyxLQUFLLENBQUMsQ0FBQyxDQUFDWSxTQUFTLEVBQUMsQ0FBQyxHQUFHRixRQUFRLENBQUNHLElBQUk7WUFFbkMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDYiwrREFBVztZQUVoQyxLQUFLLENBQUNhLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztnQkFBQ0gsU0FBUztZQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEtBQUssRUFBQ0ksR0FBRyxFQUFFLENBQUM7WUFDWkMsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQU87UUFDbkIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHNFQUNIQyxDQUFNO1FBQ0xDLElBQUksRUFBQyxDQUFRO1FBQ2JDLFNBQVMsRUFBRW5CLDRFQUFzQjtRQUNqQ3FCLE9BQU8sRUFBRWhCLGVBQWU7Ozs7Ozs7a0JBQ3pCLENBRUQ7O0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/OTBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpJztcbmltcG9ydCB7IGdldFN0cmlwZUpzIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zdHJpcGUtanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcblxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcbiAgcHJpY2VJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b25Qcm9wcykge1xuICBjb25zdCBbIHNlc3Npb24gXSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgc2lnbkluKCdnaXRodWInKVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLmFjdGl2ZVN1YnNjcmlwdGlvbikge1xuICAgICAgcm91dGVyLnB1c2goJy9wb3N0cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJylcblxuICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZUpzKClcblxuICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZCB9KVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cbiAgICA+XG4gICAgICBTdWJzY3JpYmUgbm93XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic2lnbkluIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsImFwaSIsImdldFN0cmlwZUpzIiwic3R5bGVzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInNlc3Npb24iLCJyb3V0ZXIiLCJoYW5kbGVTdWJzY3JpYmUiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJwdXNoIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwiZGF0YSIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzdWJzY3JpYmVCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _service_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/stripe */ \"./src/service/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home | ig.news\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                __source: {\n                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        __source: {\n                            fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"👏 Hey, welcome\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                                __source: {\n                                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 30\n                                        },\n                                        __self: this,\n                                        children: \"React\"\n                                    }),\n                                    \" world.\"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    \"Get acess to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 47\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId,\n                                __source: {\n                                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\",\n                        __source: {\n                            fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ()=>{\n    const price = await _service_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1K1gSTA2nLfd14tbWIpNYaWT');\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat('env-US', {\n            style: 'currency',\n            currency: 'USD'\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ21DO0FBQ3JCO0FBRUg7QUFVeEIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbkQsTUFBTTs7aUZBRURMLGtEQUFJOzs7Ozs7OytGQUNGTSxDQUFLOzs7Ozs7OzhCQUFDLENBQWM7OztrRkFHdEJDLENBQUk7Z0JBQUNDLFNBQVMsRUFBRUwsMkVBQXVCOzs7Ozs7OzswRkFDckNPLENBQU87d0JBQUNGLFNBQVMsRUFBRUwsK0RBQVc7Ozs7Ozs7O2lHQUM1QlMsQ0FBSTs7Ozs7OzswQ0FBQyxDQUFjOztrR0FDbkJDLENBQUU7Ozs7Ozs7O29DQUFDLENBQWU7eUdBQUNELENBQUk7Ozs7Ozs7a0RBQUMsQ0FBSzs7b0NBQU8sQ0FBTzs7O2tHQUMzQ0UsQ0FBQzs7Ozs7Ozs7b0NBQUMsQ0FDaUM7eUdBQUNDLENBQUU7Ozs7Ozs7OzBHQUNwQ0gsQ0FBSTs7Ozs7Ozs7NENBQUMsQ0FBSTs0Q0FBQ1AsT0FBTyxDQUFDVyxNQUFNOzRDQUFDLENBQU07Ozs7O2lHQUVqQ2Ysd0VBQWU7Z0NBQUNnQixPQUFPLEVBQUdaLE9BQU8sQ0FBQ1ksT0FBTzs7Ozs7Ozs7Ozt5RkFHM0NDLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLENBQWE7Ozs7Ozs7Ozs7OztBQUl2RCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLGFBQThCLENBQUM7SUFDeEQsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDcEIsbUVBQXNCLENBQUMsQ0FBZ0M7SUFFM0UsS0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBQztRQUNmWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0csRUFBRTtRQUNqQlQsTUFBTSxFQUFFLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBUSxTQUFFLENBQUM7WUFDdkNDLEtBQUssRUFBRSxDQUFVO1lBQ2pCQyxRQUFRLEVBQUUsQ0FBSztRQUNqQixDQUFDLEVBQUVDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxXQUFXLEdBQUUsR0FBRztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTjNCLE9BQU87UUFDVCxDQUFDO1FBQ0Q0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzFCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24nXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi9zZXJ2aWNlL3N0cmlwZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9kdWN0OiB7XG4gICAgcHJpY2VJZDogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3QgfTpIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICA8c3Bhbj7wn5GPIEhleSwgd2VsY29tZTwvc3Bhbj5cbiAgICAgICAgICA8aDE+TmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLjwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPSB7cHJvZHVjdC5wcmljZUlkfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgY29kaW5nXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUsxZ1NUQTJuTGZkMTR0YldJcE5ZYVdUJylcblxuICBjb25zdCBwcm9kdWN0ID0ge1xuICAgIHByaWNlSWQ6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbnYtVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQvIDEwMCksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLzI0IGhvdXJzXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiU3Vic2NyaWJlQnV0dG9uIiwic3RyaXBlIiwic3R5bGVzIiwiSG9tZSIsInByb2R1Y3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250ZW50Q29udGFpbmVyIiwic2VjdGlvbiIsImhlcm8iLCJzcGFuIiwiaDEiLCJwIiwiYnIiLCJhbW91bnQiLCJwcmljZUlkIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInByaWNlcyIsInJldHJpZXZlIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/service/api.ts":
/*!****************************!*\
  !*** ./src/service/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: '/api'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRWxCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHRCxtREFBWSxDQUFDLENBQUM7SUFDN0JHLE9BQU8sRUFBQyxDQUFNO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZS9hcGkudHM/MGJmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6Jy9hcGknXG59KVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/service/api.ts\n");

/***/ }),

/***/ "./src/service/stripe-js.ts":
/*!**********************************!*\
  !*** ./src/service/stripe-js.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51K1gO7A2nLfd14tb621oAtFloLWyNzdAxeWs0CmDjpw3atPX2z1skGmVPQp0dutMv912mkpYleQ07dL5cS2n81GC003xnGCTrA\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9zdHJpcGUtanMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLGVBQWVDLFdBQVcsR0FBRSxDQUFDO0lBQ2hDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0YsNkRBQVUsQ0FBQ0csNkdBQXlDO0lBRTNFLE1BQU0sQ0FBQ0QsUUFBUTtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2Uvc3RyaXBlLWpzLnRzP2IzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaXBlSnMoKXtcbiAgICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpO1xuXG4gICAgcmV0dXJuIHN0cmlwZUpzO1xufVxuIl0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZUpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/stripe-js.ts\n");

/***/ }),

/***/ "./src/service/stripe.ts":
/*!*******************************!*\
  !*** ./src/service/stripe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: 'Ignews',\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9zdHJpcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLCtDQUFNLENBQzlCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQixDQUFDO0lBQ0NDLFVBQVUsRUFBRSxDQUFZO0lBQ3hCQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxJQUFJLEVBQUUsQ0FBUTtRQUNkUCxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZS9zdHJpcGUudHM/ZDhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSdcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcbiAge1xuICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcbiAgICBhcHBJbmZvOiB7XG4gICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgIHZlcnNpb25cbiAgICB9XG4gIH1cbilcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","private":true,"version":"0.1.1","scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint","stripe":"stripe-cli/stripe.exe listen  --forward-to localhost:3000/api/webhooks"},"dependencies":{"@prismicio/client":"^5.1.0","@prismicio/react":"^2.0.2","@stripe/stripe-js":"^1.21.2","axios":"^0.24.0","faunadb":"^4.4.1","next":"12.0.4","next-auth":"3.13.2","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.3.1","sass":"^1.43.5","stripe":"^8.193.0"},"devDependencies":{"@types/next-auth":"^3.13.0","@types/node":"^16.11.10","@types/prismic-dom":"^2.1.1","@types/react":"^17.0.37","typescript":"^4.5.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();