"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs/[id]",{

/***/ "./pages/blogs/[id].jsx":
/*!******************************!*\
  !*** ./pages/blogs/[id].jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_stateSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/stateSlice */ \"./state/stateSlice.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction Blogpost() {\n    var _this1 = this;\n    var ref1;\n    _s();\n    // console.log(prop);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // console.log(router.query.id);\n    var allLoadedBlogs = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        var ref;\n        return (ref = state.all) === null || ref === void 0 ? void 0 : ref.allBlogs;\n    });\n    var thisBlog = allLoadedBlogs.find(function(blog) {\n        return blog._id === router.query.id;\n    });\n    var redirect = function(_id) {\n        dispatch((0,_state_stateSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentBlog)(thisBlog));\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/blogs/\".concat(_id));\n    };\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme)().theme;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        className: \"d-flex  bg-\".concat(theme),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-column align-items-center text-center w-75\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: thisBlog.title\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex ms-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-secondary me-2\",\n                                children: thisBlog === null || thisBlog === void 0 ? void 0 : thisBlog.author\n                            }, void 0, false, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-secondary\",\n                                children: (ref1 = thisBlog.createdAt) === null || ref1 === void 0 ? void 0 : ref1.substring(0, 10)\n                            }, void 0, false, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: thisBlog.image,\n                        className: \"rounded w-75 my-5\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: thisBlog.description\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-25 ms-2\",\n                style: {\n                    position: \"fixed\",\n                    right: 0,\n                    bottom: 0\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Up next\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    allLoadedBlogs && allLoadedBlogs.slice(0, 3).map(function(blog) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextBlog, {\n                            blog: blog,\n                            redirect: redirect\n                        }, blog._id, false, {\n                            fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                            lineNumber: 49,\n                            columnNumber: 20\n                        }, _this1));\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n_s(Blogpost, \"a5/xbs9NMNFyapz5ylGNpj+Drho=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = Blogpost;\nvar NextBlog = function(param) {\n    var blog = param.blog, redirect = param.redirect;\n    var ref;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: function() {\n            return redirect(blog._id);\n        },\n        className: \"d-flex flex-column col-md-12 my-2 p-1 rounded \",\n        style: {\n            background: \"linear-gradient(0deg, rgba(50, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\".concat(blog.image, \")\"),\n            backgroundSize: \"cover\",\n            height: \"10rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"fs-4 text-light fw-light\",\n                        children: blog.title\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Toggle, {\n                                id: \"dropdown-basic\",\n                                variant: \"secondary\"\n                            }, void 0, false, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Menu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Item, {\n                                        href: \"#/action-1\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Item, {\n                                        href: \"#/action-2\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Dropdown.Item, {\n                                        href: \"#/action-3\",\n                                        children: \"Hide\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    className: \"text-light fw-lighter\",\n                    children: (ref = blog.createdAt) === null || ref === void 0 ? void 0 : ref.substring(0, 10)\n                }, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = NextBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogpost);\nvar _c, _c1;\n$RefreshReg$(_c, \"Blogpost\");\n$RefreshReg$(_c1, \"NextBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxjQUFkYixHQUFjLEtBQWRBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLEdBQWMsQ0FBRWMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO01BakNLYSxRQUFRO0FBbUNkLCtEQUFlcEMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dzL1tpZF0uanN4PzM1OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50QmxvZyB9IGZyb20gXCIuLi8uLi9zdGF0ZS9zdGF0ZVNsaWNlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuZnVuY3Rpb24gQmxvZ3Bvc3QoKSB7XG4gIC8vIGNvbnNvbGUubG9nKHByb3ApO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpO1xuXG4gIGNvbnN0IGFsbExvYWRlZEJsb2dzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbGw/LmFsbEJsb2dzKTtcblxuICBjb25zdCB0aGlzQmxvZyA9IGFsbExvYWRlZEJsb2dzLmZpbmQoKGJsb2cpID0+IGJsb2cuX2lkID09PSByb3V0ZXIucXVlcnkuaWQpO1xuXG4gIGNvbnN0IHJlZGlyZWN0ID0gKF9pZCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgc2V0Q3VycmVudEJsb2codGhpc0Jsb2cpXG4gICAgKTtcbiAgICBSb3V0ZXIucHVzaChgL2Jsb2dzLyR7X2lkfWApO1xuICB9O1xuXG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VUaGVtZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17YGQtZmxleCAgYmctJHt0aGVtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciB3LTc1XCI+XG4gICAgICAgIDxoMj57dGhpc0Jsb2cudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXMtYXV0b1wiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBtZS0yXCI+e3RoaXNCbG9nPy5hdXRob3J9PC9oNj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHt0aGlzQmxvZy5jcmVhdGVkQXQ/LnN1YnN0cmluZygwLCAxMCl9XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGltZyBzcmM9e3RoaXNCbG9nLmltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkIHctNzUgbXktNVwiIC8+XG4gICAgICAgIDxwPnt0aGlzQmxvZy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidy0yNSBtcy0yXCJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgcmlnaHQ6IDAsIGJvdHRvbTogMCB9fVxuICAgICAgPlxuICAgICAgICA8aDM+VXAgbmV4dDwvaDM+XG4gICAgICAgIHthbGxMb2FkZWRCbG9ncyAmJlxuICAgICAgICAgIGFsbExvYWRlZEJsb2dzLnNsaWNlKDAsIDMpLm1hcCgoYmxvZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxOZXh0QmxvZyBibG9nPXtibG9nfSByZWRpcmVjdD17cmVkaXJlY3R9IGtleT17YmxvZy5faWR9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IE5leHRCbG9nID0gKHsgYmxvZywgcmVkaXJlY3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChibG9nLl9pZCl9XG4gICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gY29sLW1kLTEyIG15LTIgcC0xIHJvdW5kZWQgXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1MCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKCR7YmxvZy5pbWFnZX0pYCxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwcmVtXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00IHRleHQtbGlnaHQgZnctbGlnaHRcIj57YmxvZy50aXRsZX08L2gyPlxuICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBpZD1cImRyb3Bkb3duLWJhc2ljXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuXG4gICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPlVwZGF0ZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0yXCI+RGVsZXRlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5IaWRlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgbWUtMlwiPntibG9nLmF1dGhvcn08L2g2PiAqL31cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtbGlnaHQgZnctbGlnaHRlclwiPlxuICAgICAgICAgIHtibG9nLmNyZWF0ZWRBdD8uc3Vic3RyaW5nKDAsIDEwKX1cbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ3Bvc3Q7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJEcm9wZG93biIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRDdXJyZW50QmxvZyIsIlJvdXRlciIsInVzZVRoZW1lIiwiQmxvZ3Bvc3QiLCJ0aGlzQmxvZyIsInJvdXRlciIsImRpc3BhdGNoIiwiYWxsTG9hZGVkQmxvZ3MiLCJzdGF0ZSIsImFsbCIsImFsbEJsb2dzIiwiZmluZCIsImJsb2ciLCJfaWQiLCJxdWVyeSIsImlkIiwicmVkaXJlY3QiLCJwdXNoIiwidGhlbWUiLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInRpdGxlIiwiaDYiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJzdWJzdHJpbmciLCJpbWciLCJzcmMiLCJpbWFnZSIsInAiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImgzIiwic2xpY2UiLCJtYXAiLCJOZXh0QmxvZyIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJoZWlnaHQiLCJUb2dnbGUiLCJ2YXJpYW50IiwiTWVudSIsIkl0ZW0iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs/[id].jsx\n");

/***/ })

});