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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_stateSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/stateSlice */ \"./state/stateSlice.js\");\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction Blogpost() {\n    var _this1 = this;\n    var ref1;\n    _s();\n    // console.log(prop);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // console.log(router.query.id);\n    var allLoadedBlogs = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        var ref;\n        return (ref = state.all) === null || ref === void 0 ? void 0 : ref.allBlogs;\n    });\n    var thisBlog = allLoadedBlogs.find(function(blog) {\n        return blog._id === router.query.id;\n    });\n    var redirect = function(_id) {\n        dispatch((0,_state_stateSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentBlog)(thisBlog));\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/blogs/\".concat(_id));\n    };\n    // useSelector((state) =>\n    //   state.all?.allBlogs.find((blog) => blog._id === router.query.id)\n    // );\n    // const next3Blogs = useSelector((state) =>\n    //   state.all?.allBlogs\n    //     .filter((blog) => blog._id !== router.query.id)\n    //     .slice(0, 3)\n    // );\n    // useSelector(state => state.all?.currentBlog)\n    // console.log(thisBlog)\n    // console.log()\n    // const id = \"62420a0a09a0e3d4ed3619e7\"\n    // router.query;\n    // console.log(id)\n    // const [thisBlog, setThisBlog] = React.useState(null);\n    // console.log(thisBlog);\n    // var date = new Date(time)\n    // .toISOString().substring(0, 10);\n    // useEffect(() => {\n    //   const id = \"62420a0a09a0e3d4ed3619e7\";\n    //   setThisBlog(\n    //     useSelector((state) =>\n    //       state.all?.allBlogs.find((blog) => blog._id === id)\n    //     )\n    //   );\n    //   console.log(thisBlog);\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        className: \"d-flex  bg-\".concat(theme),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-column align-items-center text-center w-75\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: thisBlog.title\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex ms-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-secondary me-2\",\n                                children: thisBlog === null || thisBlog === void 0 ? void 0 : thisBlog.author\n                            }, void 0, false, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-secondary\",\n                                children: (ref1 = thisBlog.createdAt) === null || ref1 === void 0 ? void 0 : ref1.substring(0, 10)\n                            }, void 0, false, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: thisBlog.image,\n                        className: \"rounded w-75 my-5\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: thisBlog.description\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-25 ms-2\",\n                style: {\n                    position: \"fixed\",\n                    right: 0,\n                    bottom: 0\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Up next\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    allLoadedBlogs && allLoadedBlogs.slice(0, 3).map(function(blog) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextBlog, {\n                            blog: blog,\n                            redirect: redirect\n                        }, blog._id, false, {\n                            fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                            lineNumber: 81,\n                            columnNumber: 20\n                        }, _this1));\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this));\n}\n_s(Blogpost, \"iqrmakS0aett7l8Hwdkt5YsUYoM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Blogpost;\nvar NextBlog = function(param) {\n    var blog = param.blog, redirect = param.redirect;\n    var ref;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: function() {\n            return redirect(blog._id);\n        },\n        className: \"d-flex flex-column col-md-12 my-2 p-1 rounded \",\n        style: {\n            background: \"linear-gradient(0deg, rgba(50, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\".concat(blog.image, \")\"),\n            backgroundSize: \"cover\",\n            height: \"10rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"fs-4 text-light fw-light\",\n                        children: blog.title\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Toggle, {\n                                id: \"dropdown-basic\",\n                                variant: \"secondary\"\n                            }, void 0, false, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Menu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Item, {\n                                        href: \"#/action-1\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Item, {\n                                        href: \"#/action-2\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Item, {\n                                        href: \"#/action-3\",\n                                        children: \"Hide\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    className: \"text-light fw-lighter\",\n                    children: (ref = blog.createdAt) === null || ref === void 0 ? void 0 : ref.substring(0, 10)\n                }, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/blogs/[id].jsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = NextBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogpost);\nvar _c, _c1;\n$RefreshReg$(_c, \"Blogpost\");\n$RefreshReg$(_c1, \"NextBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNDO0FBQ2E7QUFDQztBQUNDO0FBQ3ZCOzs7U0FFdkJTLFFBQVEsR0FBRyxDQUFDOztRQTJEUkMsSUFBa0I7O0lBMUQ3QixFQUFxQjtJQUNyQixHQUFLLENBQUNDLE1BQU0sR0FBR1gsc0RBQVM7SUFDeEIsR0FBSyxDQUFDWSxRQUFRLEdBQUdQLHdEQUFXO0lBQzVCLEVBQWdDO0lBRWhDLEdBQUssQ0FBQ1EsY0FBYyxHQUFHUCx3REFBVyxDQUFDLFFBQVEsQ0FBUFEsS0FBSztZQUFLQSxHQUFTO1FBQVRBLE1BQU1DLEVBQU5ELEdBQVMsR0FBVEEsS0FBSyxDQUFDQyxHQUFHLGNBQVRELEdBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsR0FBUyxDQUFFRSxRQUFROztJQUVqRSxHQUFLLENBQUNOLFFBQVEsR0FBR0csY0FBYyxDQUFDSSxJQUFJLENBQUMsUUFBUSxDQUFQQyxJQUFJO1FBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxHQUFHLEtBQUtSLE1BQU0sQ0FBQ1MsS0FBSyxDQUFDQyxFQUFFOztJQUUzRSxHQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRLENBQVBILEdBQUcsRUFBSyxDQUFDO1FBQ3pCUCxRQUFRLENBQ05MLGlFQUFjLENBQUNHLFFBQVE7UUFFekJGLHVEQUFXLENBQUUsQ0FBTyxTQUFNLE9BQUpXLEdBQUc7SUFDM0IsQ0FBQztJQUVELEVBQXlCO0lBQ3pCLEVBQXFFO0lBQ3JFLEVBQUs7SUFFTCxFQUE0QztJQUM1QyxFQUF3QjtJQUN4QixFQUFzRDtJQUN0RCxFQUFtQjtJQUNuQixFQUFLO0lBRUwsRUFBK0M7SUFDL0MsRUFBd0I7SUFDeEIsRUFBZ0I7SUFFaEIsRUFBd0M7SUFDeEMsRUFBZ0I7SUFFaEIsRUFBa0I7SUFFbEIsRUFBd0Q7SUFDeEQsRUFBeUI7SUFDekIsRUFBNEI7SUFDNUIsRUFBbUM7SUFFbkMsRUFBb0I7SUFDcEIsRUFBMkM7SUFDM0MsRUFBaUI7SUFDakIsRUFBNkI7SUFDN0IsRUFBNEQ7SUFDNUQsRUFBUTtJQUNSLEVBQU87SUFFUCxFQUEyQjtJQUMzQixFQUFVO0lBRVYsTUFBTSw2RUFDSGhCLHNEQUFTO1FBQUNxQixTQUFTLEVBQUcsQ0FBVyxhQUFRLE9BQU5DLEtBQUs7O3dGQUN0Q0MsQ0FBRztnQkFBQ0YsU0FBUyxFQUFDLENBQXdEOztnR0FDcEVHLENBQUU7a0NBQUVqQixRQUFRLENBQUNrQixLQUFLOzs7Ozs7Z0dBQ2xCRixDQUFHO3dCQUFDRixTQUFTLEVBQUMsQ0FBZ0I7O3dHQUM1QkssQ0FBRTtnQ0FBQ0wsU0FBUyxFQUFDLENBQXFCOzBDQUFFZCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsUUFBUSxDQUFFb0IsTUFBTTs7Ozs7O3dHQUNwREQsQ0FBRTtnQ0FBQ0wsU0FBUyxFQUFDLENBQWdCOzJDQUMzQmQsSUFBa0IsR0FBbEJBLFFBQVEsQ0FBQ3FCLFNBQVMsY0FBbEJyQixJQUFrQixLQUFsQkEsSUFBSSxDQUFKQSxDQUE2QixHQUE3QkEsSUFBSSxDQUFKQSxDQUE2QixHQUE3QkEsSUFBa0IsQ0FBRXNCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7O2dHQUl2Q0MsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFeEIsUUFBUSxDQUFDeUIsS0FBSzt3QkFBRVgsU0FBUyxFQUFDLENBQW1COzs7Ozs7Z0dBQ3REWSxDQUFDO2tDQUFFMUIsUUFBUSxDQUFDMkIsV0FBVzs7Ozs7Ozs7Ozs7O3dGQUV6QlgsQ0FBRztnQkFDRkYsU0FBUyxFQUFDLENBQVc7Z0JBQ3JCYyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsUUFBUSxFQUFFLENBQU87b0JBQUVDLEtBQUssRUFBRSxDQUFDO29CQUFFQyxNQUFNLEVBQUUsQ0FBQztnQkFBQyxDQUFDOztnR0FFaERDLENBQUU7a0NBQUMsQ0FBTzs7Ozs7O29CQUNWN0IsY0FBYyxJQUNiQSxjQUFjLENBQUM4QixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUMsR0FBRyxDQUFDLFFBQVEsQ0FBUDFCLElBQUksRUFBSyxDQUFDO3dCQUN4QyxNQUFNLDZFQUFFMkIsUUFBUTs0QkFBQzNCLElBQUksRUFBRUEsSUFBSTs0QkFBRUksUUFBUSxFQUFFQSxRQUFROzJCQUFPSixJQUFJLENBQUNDLEdBQUc7Ozs7O29CQUNoRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSVgsQ0FBQztHQTlFUVYsUUFBUTs7UUFFQVQsa0RBQVM7UUFDUEssb0RBQVc7UUFHTEMsb0RBQVc7OztLQU4zQkcsUUFBUTtBQWdGakIsR0FBSyxDQUFDb0MsUUFBUSxHQUFHLFFBQVEsUUFBZ0IsQ0FBQztRQUF0QjNCLElBQUksU0FBSkEsSUFBSSxFQUFFSSxRQUFRLFNBQVJBLFFBQVE7UUE0QnZCSixHQUFjO0lBM0J2QixNQUFNLDZFQUNIUSxDQUFHO1FBQ0pvQixPQUFPLEVBQUUsUUFBUTtZQUFGeEIsTUFBTSxDQUFOQSxRQUFRLENBQUNKLElBQUksQ0FBQ0MsR0FBRzs7UUFDOUJLLFNBQVMsRUFBQyxDQUFnRDtRQUMxRGMsS0FBSyxFQUFFLENBQUM7WUFDTlMsVUFBVSxFQUFHLENBQW9FLHNFQUFhLE1BQUMsQ0FBWjdCLElBQUksQ0FBQ2lCLEtBQUssRUFBQyxDQUFDO1lBQy9GYSxjQUFjLEVBQUUsQ0FBTztZQUN2QkMsTUFBTSxFQUFFLENBQU87UUFDakIsQ0FBQzs7d0ZBRUF2QixDQUFHO2dCQUFDRixTQUFTLEVBQUMsQ0FBZ0M7O2dHQUM1Q0csQ0FBRTt3QkFBQ0gsU0FBUyxFQUFDLENBQTBCO2tDQUFFTixJQUFJLENBQUNVLEtBQUs7Ozs7OztnR0FDbkR4QixxREFBUTs7d0dBQ05BLDREQUFlO2dDQUFDaUIsRUFBRSxFQUFDLENBQWdCO2dDQUFDOEIsT0FBTyxFQUFDLENBQVc7Ozs7Ozt3R0FJdkQvQywwREFBYTs7Z0hBQ1hBLDBEQUFhO3dDQUFDa0QsSUFBSSxFQUFDLENBQVk7a0RBQUMsQ0FBTTs7Ozs7O2dIQUN0Q2xELDBEQUFhO3dDQUFDa0QsSUFBSSxFQUFDLENBQVk7a0RBQUMsQ0FBTTs7Ozs7O2dIQUN0Q2xELDBEQUFhO3dDQUFDa0QsSUFBSSxFQUFDLENBQVk7a0RBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUkxQzVCLENBQUc7Z0JBQUNGLFNBQVMsRUFBQyxDQUFRO3NHQUVwQkssQ0FBRTtvQkFBQ0wsU0FBUyxFQUFDLENBQXVCOytCQUNsQ04sR0FBYyxHQUFkQSxJQUFJLENBQUNhLFNBQVMsY0FBZGIsR0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxHQUFjLENBQUVjLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUMsQ0FBQztNQWpDS2EsUUFBUTtBQW1DZCwrREFBZXBDLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9ncy9baWRdLmpzeD8zNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudEJsb2cgfSBmcm9tIFwiLi4vLi4vc3RhdGUvc3RhdGVTbGljZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZnVuY3Rpb24gQmxvZ3Bvc3QoKSB7XG4gIC8vIGNvbnNvbGUubG9nKHByb3ApO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpO1xuXG4gIGNvbnN0IGFsbExvYWRlZEJsb2dzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbGw/LmFsbEJsb2dzKTtcblxuICBjb25zdCB0aGlzQmxvZyA9IGFsbExvYWRlZEJsb2dzLmZpbmQoKGJsb2cpID0+IGJsb2cuX2lkID09PSByb3V0ZXIucXVlcnkuaWQpO1xuXG4gIGNvbnN0IHJlZGlyZWN0ID0gKF9pZCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgc2V0Q3VycmVudEJsb2codGhpc0Jsb2cpXG4gICAgKTtcbiAgICBSb3V0ZXIucHVzaChgL2Jsb2dzLyR7X2lkfWApO1xuICB9O1xuXG4gIC8vIHVzZVNlbGVjdG9yKChzdGF0ZSkgPT5cbiAgLy8gICBzdGF0ZS5hbGw/LmFsbEJsb2dzLmZpbmQoKGJsb2cpID0+IGJsb2cuX2lkID09PSByb3V0ZXIucXVlcnkuaWQpXG4gIC8vICk7XG5cbiAgLy8gY29uc3QgbmV4dDNCbG9ncyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT5cbiAgLy8gICBzdGF0ZS5hbGw/LmFsbEJsb2dzXG4gIC8vICAgICAuZmlsdGVyKChibG9nKSA9PiBibG9nLl9pZCAhPT0gcm91dGVyLnF1ZXJ5LmlkKVxuICAvLyAgICAgLnNsaWNlKDAsIDMpXG4gIC8vICk7XG5cbiAgLy8gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWxsPy5jdXJyZW50QmxvZylcbiAgLy8gY29uc29sZS5sb2codGhpc0Jsb2cpXG4gIC8vIGNvbnNvbGUubG9nKClcblxuICAvLyBjb25zdCBpZCA9IFwiNjI0MjBhMGEwOWEwZTNkNGVkMzYxOWU3XCJcbiAgLy8gcm91dGVyLnF1ZXJ5O1xuXG4gIC8vIGNvbnNvbGUubG9nKGlkKVxuXG4gIC8vIGNvbnN0IFt0aGlzQmxvZywgc2V0VGhpc0Jsb2ddID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXNCbG9nKTtcbiAgLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lKVxuICAvLyAudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaWQgPSBcIjYyNDIwYTBhMDlhMGUzZDRlZDM2MTllN1wiO1xuICAvLyAgIHNldFRoaXNCbG9nKFxuICAvLyAgICAgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PlxuICAvLyAgICAgICBzdGF0ZS5hbGw/LmFsbEJsb2dzLmZpbmQoKGJsb2cpID0+IGJsb2cuX2lkID09PSBpZClcbiAgLy8gICAgIClcbiAgLy8gICApO1xuXG4gIC8vICAgY29uc29sZS5sb2codGhpc0Jsb2cpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17YGQtZmxleCAgYmctJHt0aGVtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciB3LTc1XCI+XG4gICAgICAgIDxoMj57dGhpc0Jsb2cudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXMtYXV0b1wiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBtZS0yXCI+e3RoaXNCbG9nPy5hdXRob3J9PC9oNj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHt0aGlzQmxvZy5jcmVhdGVkQXQ/LnN1YnN0cmluZygwLCAxMCl9XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGltZyBzcmM9e3RoaXNCbG9nLmltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkIHctNzUgbXktNVwiIC8+XG4gICAgICAgIDxwPnt0aGlzQmxvZy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidy0yNSBtcy0yXCJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgcmlnaHQ6IDAsIGJvdHRvbTogMCB9fVxuICAgICAgPlxuICAgICAgICA8aDM+VXAgbmV4dDwvaDM+XG4gICAgICAgIHthbGxMb2FkZWRCbG9ncyAmJlxuICAgICAgICAgIGFsbExvYWRlZEJsb2dzLnNsaWNlKDAsIDMpLm1hcCgoYmxvZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxOZXh0QmxvZyBibG9nPXtibG9nfSByZWRpcmVjdD17cmVkaXJlY3R9IGtleT17YmxvZy5faWR9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IE5leHRCbG9nID0gKHsgYmxvZywgcmVkaXJlY3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChibG9nLl9pZCl9XG4gICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gY29sLW1kLTEyIG15LTIgcC0xIHJvdW5kZWQgXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1MCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKCR7YmxvZy5pbWFnZX0pYCxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwcmVtXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00IHRleHQtbGlnaHQgZnctbGlnaHRcIj57YmxvZy50aXRsZX08L2gyPlxuICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBpZD1cImRyb3Bkb3duLWJhc2ljXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuXG4gICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPlVwZGF0ZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0yXCI+RGVsZXRlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5IaWRlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgbWUtMlwiPntibG9nLmF1dGhvcn08L2g2PiAqL31cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtbGlnaHQgZnctbGlnaHRlclwiPlxuICAgICAgICAgIHtibG9nLmNyZWF0ZWRBdD8uc3Vic3RyaW5nKDAsIDEwKX1cbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ3Bvc3Q7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJEcm9wZG93biIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRDdXJyZW50QmxvZyIsIlJvdXRlciIsIkJsb2dwb3N0IiwidGhpc0Jsb2ciLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImFsbExvYWRlZEJsb2dzIiwic3RhdGUiLCJhbGwiLCJhbGxCbG9ncyIsImZpbmQiLCJibG9nIiwiX2lkIiwicXVlcnkiLCJpZCIsInJlZGlyZWN0IiwicHVzaCIsImNsYXNzTmFtZSIsInRoZW1lIiwiZGl2IiwiaDIiLCJ0aXRsZSIsImg2IiwiYXV0aG9yIiwiY3JlYXRlZEF0Iiwic3Vic3RyaW5nIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJwIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJoMyIsInNsaWNlIiwibWFwIiwiTmV4dEJsb2ciLCJvbkNsaWNrIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0IiwiVG9nZ2xlIiwidmFyaWFudCIsIk1lbnUiLCJJdGVtIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogs/[id].jsx\n");

/***/ })

});