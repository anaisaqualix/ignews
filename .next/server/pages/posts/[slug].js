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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"post_content__eM_iO\",\n\t\"post\": \"post_post__ejhnw\",\n\t\"postContent\": \"post_postContent__B93C3\",\n\t\"previewContent\": \"post_previewContent__2mmIt\",\n\t\"continuaReading\": \"post_continuaReading__Gr1qx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL3Bvc3QubW9kdWxlLnNjc3M/OTJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwicG9zdF9jb250ZW50X19lTV9pT1wiLFxuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfX2VqaG53XCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X19COTNDM1wiLFxuXHRcInByZXZpZXdDb250ZW50XCI6IFwicG9zdF9wcmV2aWV3Q29udGVudF9fMm1tSXRcIixcblx0XCJjb250aW51YVJlYWRpbmdcIjogXCJwb3N0X2NvbnRpbnVhUmVhZGluZ19fR3IxcXhcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _service_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/prismic */ \"./src/service/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Post({ post  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        post.title,\n                        \" | Ignews\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),\n                __source: {\n                    fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),\n                    __source: {\n                        fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: post.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"time\", {\n                            __source: {\n                                fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: post.updatedAt\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n                            dangerouslySetInnerHTML: {\n                                __html: post.content\n                            },\n                            __source: {\n                                fileName: \"C:\\\\ignite-aulas\\\\reactjs\\\\ignews\\\\src\\\\pages\\\\posts\\\\[slug].tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\nconst getServerSideProps = async ({ req , params ,  })=>{\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const { slug  } = params;\n    console.log(session);\n    if (!(session === null || session === void 0 ? void 0 : session.activeSubscription)) {\n        return {\n            redirect: {\n                destination: '/',\n                permanent: false\n            }\n        };\n    }\n    const prismic = (0,_service_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)(req);\n    const response = await prismic.getByUID('post', String(slug), {\n    });\n    const post = {\n        slug,\n        title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asText(response.data.title),\n        content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asHtml(response.data.content),\n        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {\n            day: '2-digit',\n            month: 'long',\n            year: 'numeric'\n        })\n    };\n    return {\n        props: {\n            post\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QztBQUNqQjtBQUNVO0FBRWtCO0FBRWpCO0FBV3hCLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFZLENBQUMsRUFBRSxDQUFDO0lBQ2pELE1BQU07O2lGQUVETCxrREFBSTs7Ozs7OztnR0FDRk0sQ0FBSzs7Ozs7Ozs7d0JBQUVELElBQUksQ0FBQ0MsS0FBSzt3QkFBQyxDQUFTOzs7O2lGQUU3QkMsQ0FBSTtnQkFBQ0MsU0FBUyxFQUFFTCxrRUFBYzs7Ozs7OztnR0FDNUJPLENBQU87b0JBQUNGLFNBQVMsRUFBRUwsK0RBQVc7Ozs7Ozs7OzZGQUM1QlEsQ0FBRTs7Ozs7OztzQ0FBRU4sSUFBSSxDQUFDQyxLQUFLOzs2RkFDZE0sQ0FBSTs7Ozs7OztzQ0FBRVAsSUFBSSxDQUFDUSxTQUFTOzs2RkFDcEJDLENBQUc7NEJBQ0ZOLFNBQVMsRUFBRUwsc0VBQWtCOzRCQUM3QmEsdUJBQXVCLEVBQUUsQ0FBQztnQ0FBQ0MsTUFBTSxFQUFFWixJQUFJLENBQUNJLE9BQU87NEJBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQU03RCxDQUFDO0FBRU0sS0FBSyxDQUFDUyxrQkFBa0IsVUFBOEIsQ0FBQyxDQUM1REMsR0FBRyxHQUNIQyxNQUFNLElBQ1IsQ0FBQyxHQUFLLENBQUM7SUFDTCxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUN0Qiw0REFBVSxDQUFDLENBQUM7UUFBQ29CLEdBQUc7SUFBQyxDQUFDO0lBQ3hDLEtBQUssQ0FBQyxDQUFDLENBQUNHLElBQUksRUFBQyxDQUFDLEdBQUdGLE1BQU07SUFFdkJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPO0lBRW5CLEVBQUUsSUFBR0EsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBMkIsR0FBM0JBLElBQUksQ0FBSkEsQ0FBMkIsR0FBM0JBLE9BQU8sQ0FBRUksa0JBQWtCLEdBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsQ0FBQztZQUNOQyxRQUFRLEVBQUUsQ0FBQztnQkFDVEMsV0FBVyxFQUFFLENBQUc7Z0JBQ2hCQyxTQUFTLEVBQUUsS0FBSztZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNDLE9BQU8sR0FBRzNCLGtFQUFnQixDQUFDaUIsR0FBRztJQUVwQyxLQUFLLENBQUNXLFFBQVEsR0FBRyxLQUFLLENBQUNELE9BQU8sQ0FBQ0UsUUFBUSxDQUFDLENBQU0sT0FBRUMsTUFBTSxDQUFDVixJQUFJLEdBQUcsQ0FBQztJQUFBLENBQUM7SUFFaEUsS0FBSyxDQUFDakIsSUFBSSxHQUFHLENBQUM7UUFDWmlCLElBQUk7UUFDSmhCLEtBQUssRUFBRUwsd0RBQWUsQ0FBQzZCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDNUIsS0FBSztRQUMxQ0csT0FBTyxFQUFFUix3REFBZSxDQUFDNkIsUUFBUSxDQUFDSSxJQUFJLENBQUN6QixPQUFPO1FBQzlDSSxTQUFTLEVBQUUsR0FBRyxDQUFDdUIsSUFBSSxDQUFDTixRQUFRLENBQUNPLHFCQUFxQixFQUFFQyxrQkFBa0IsQ0FDcEUsQ0FBTyxRQUNQLENBQUM7WUFDQ0MsR0FBRyxFQUFFLENBQVM7WUFDZEMsS0FBSyxFQUFFLENBQU07WUFDYkMsSUFBSSxFQUFFLENBQVM7UUFDakIsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOckMsSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9wb3N0cy9bc2x1Z10udHN4Pzc3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSc7XG5cbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3ByaXNtaWMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBwb3N0OiB7XG4gICAgc2x1Zzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfTogUG9zdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9IHwgSWduZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb250ZW50fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7XG4gIHJlcSxcbiAgcGFyYW1zLFxufSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG5cbiAgY29uc29sZS5sb2coc2Vzc2lvbilcblxuICBpZiAoIXNlc3Npb24/LmFjdGl2ZVN1YnNjcmlwdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQocmVxKTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlVSUQoJ3Bvc3QnLCBTdHJpbmcoc2x1ZyksIHt9KTtcblxuICBjb25zdCBwb3N0ID0ge1xuICAgIHNsdWcsXG4gICAgdGl0bGU6IFJpY2hUZXh0LmFzVGV4dChyZXNwb25zZS5kYXRhLnRpdGxlKSxcbiAgICBjb250ZW50OiBSaWNoVGV4dC5hc0h0bWwocmVzcG9uc2UuZGF0YS5jb250ZW50KSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKHJlc3BvbnNlLmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgJ3B0LUJSJyxcbiAgICAgIHtcbiAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgIH1cbiAgICApLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIkhlYWQiLCJSaWNoVGV4dCIsImdldFByaXNtaWNDbGllbnQiLCJzdHlsZXMiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJhcnRpY2xlIiwiaDEiLCJ0aW1lIiwidXBkYXRlZEF0IiwiZGl2IiwicG9zdENvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInBhcmFtcyIsInNlc3Npb24iLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcmlzbWljIiwicmVzcG9uc2UiLCJnZXRCeVVJRCIsIlN0cmluZyIsImFzVGV4dCIsImRhdGEiLCJhc0h0bWwiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/service/prismic.ts":
/*!********************************!*\
  !*** ./src/service/prismic.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n    const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_URL, {\n        req,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN\n    });\n    return prismic;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9wcmlzbWljLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUVoQyxTQUFTQyxnQkFBZ0IsQ0FBQ0MsR0FBWSxFQUFDLENBQUM7SUFDM0MsS0FBSyxDQUFDQyxPQUFPLEdBQUdILCtEQUFjLENBQzFCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUN2QixDQUFDO1FBQ0dMLEdBQUc7UUFDSE0sV0FBVyxFQUFDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO0lBQ2hELENBQUM7SUFHTCxNQUFNLENBQUNOLE9BQU87QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlL3ByaXNtaWMudHM/OTNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlzbWljQ2xpZW50KHJlcT86dW5rbm93bil7XG4gICAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KFxuICAgICAgICBwcm9jZXNzLmVudi5QUklTTUlDX1VSTCxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46cHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU4sXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHByaXNtaWM7XG59XG4iXSwibmFtZXMiOlsiUHJpc21pYyIsImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfVVJMIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/service/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

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

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();