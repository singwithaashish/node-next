"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_CnavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/CnavBar */ \"./Components/CnavBar.jsx\");\n/* harmony import */ var _Components_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/HomePage */ \"./Components/HomePage.jsx\");\n/* harmony import */ var _Components_Authenticate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Authenticate */ \"./Components/Authenticate.jsx\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_stateSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state/stateSlice */ \"./state/stateSlice.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ \"./api/api.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var creating = param.creating, setCreating = param.setCreating;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), datas = ref1[0], setDatas = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), loading = ref2[0], SetLoading = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    var apiUrl = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function(state) {\n        return state.all.apiUrl;\n    });\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_11__.useTheme)();\n    console.log(theme);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_asyncToGenerator(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var token, res, data;\n        return _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    !loading && SetLoading(true);\n                    token = localStorage.getItem(\"token\");\n                    console.log(token);\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return fetch(\"\".concat(apiUrl, \"/blogs\"), {\n                        method: \"GET\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: token\n                        }\n                    });\n                case 6:\n                    res = _ctx.sent;\n                    _ctx.next = 9;\n                    return res.json();\n                case 9:\n                    data = _ctx.sent;\n                    dispatch((0,_state_stateSlice__WEBPACK_IMPORTED_MODULE_9__.setAllBlogs)(data));\n                    setDatas(data);\n                    _ctx.next = 17;\n                    break;\n                case 14:\n                    _ctx.prev = 14;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    console.log(_ctx.t0);\n                case 17:\n                    // console.log(\"som\");\n                    if (token) {\n                        setUser(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().decode(token));\n                    // console.log(user)\n                    }\n                    // console.log(\"here\");\n                    SetLoading(false);\n                case 19:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                14\n            ]\n        ]);\n    })), []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Topics\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-center align-items-center\",\n                    style: {\n                        height: \"100vh\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Spinner, {\n                        animation: \"border\",\n                        variant: \"info\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this) : user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_HomePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    datas: datas\n                }, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Authenticate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this));\n}; // ! content is dynamic so ssr is not necessary | required\n // export const getStaticProps = async () => {\n //   const res = await fetch('http://localhost:5000/blogs', {\n //     method: 'GET',\n //     headers: {\n //       'Content-Type': 'application/json',\n //       'Authorization': localStorage.getItem('token')\n //     },}\n //   );\n //   const data = await res.json();\n //   // console.log(data)\n //   if (!data) {\n //     return {\n //       notFound: true,\n //     }\n //   }\n //   return {\n //     props: {\n //       datas: data,\n //     },\n //   };\n // }\n_s(Home, \"hayOkNDYSTe2xp4vktGVaJJ1KDc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        next_themes__WEBPACK_IMPORTED_MODULE_11__.useTheme\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE9BQU8sRUFBQyxDQUFNOzs7Ozs7Ozs7OzJCQUUxQ3JDLElBQUksK0VBQ0xaLDREQUFRO29CQUFDYyxLQUFLLEVBQUVBLEtBQUs7Ozs7O3VHQUVyQmIsZ0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkIsQ0FBQyxDQUVELENBQTBEO0FBQzFELENBQThDO0FBQzlDLENBQTZEO0FBQzdELENBQXFCO0FBQ3JCLENBQWlCO0FBQ2pCLENBQTRDO0FBQzVDLENBQXVEO0FBQ3ZELENBQVU7QUFFVixDQUFPO0FBQ1AsQ0FBbUM7QUFDbkMsQ0FBeUI7QUFFekIsQ0FBaUI7QUFDakIsQ0FBZTtBQUNmLENBQXdCO0FBQ3hCLENBQVE7QUFDUixDQUFNO0FBQ04sQ0FBYTtBQUNiLENBQWU7QUFDZixDQUFxQjtBQUNyQixDQUFTO0FBQ1QsQ0FBTztBQUNQLENBQUk7R0F4Rm9CUSxJQUFJOztRQUlUTixvREFBVztRQUNiQyxvREFBVztRQUNaSSxrREFBUTs7O0tBTkFDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ25hdkJhciBmcm9tIFwiLi4vQ29tcG9uZW50cy9DbmF2QmFyXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL0NvbXBvbmVudHMvSG9tZVBhZ2VcIjtcbmltcG9ydCBBdXRoZW50aWNhdGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvQXV0aGVudGljYXRlXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWxsQmxvZ3MgfSBmcm9tIFwiLi4vc3RhdGUvc3RhdGVTbGljZVwiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBnZXRCbG9nIGZyb20gXCIuLi9hcGkvYXBpXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY3JlYXRpbmcsIHNldENyZWF0aW5nIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkYXRhcywgc2V0RGF0YXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBTZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGFwaVVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxsLmFwaVVybCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc29sZS5sb2codGhlbWUpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgIWxvYWRpbmcgJiYgU2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jsb2dzYCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZ2V0QmxvZyhhcGlVcmwsIHRva2VuKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgZGlzcGF0Y2goc2V0QWxsQmxvZ3MoZGF0YSkpO1xuICAgICAgc2V0RGF0YXMoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwic29tXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0VXNlcihqd3QuZGVjb2RlKHRva2VuKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgU2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRvcGljczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICBcbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICB7LyogaWYgbG9hZGluZywgc2hvdyBsb2FkaW5nLCBlbHNlLCBpZiB1c2VyLCBzaG93IGhvbWUgZWxzZSBzaG93IGF1dGhlbnRpY2F0aW9uICovfVxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwiaW5mb1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiB1c2VyID8gKFxuICAgICAgICAgIDxIb21lUGFnZSBkYXRhcz17ZGF0YXN9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEF1dGhlbnRpY2F0ZSAvPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyAhIGNvbnRlbnQgaXMgZHluYW1pYyBzbyBzc3IgaXMgbm90IG5lY2Vzc2FyeSB8IHJlcXVpcmVkXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYmxvZ3MnLCB7XG4vLyAgICAgbWV0aG9kOiAnR0VUJyxcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgJ0F1dGhvcml6YXRpb24nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuLy8gICAgIH0sfVxuXG4vLyAgICk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuXG4vLyAgIGlmICghZGF0YSkge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBub3RGb3VuZDogdHJ1ZSxcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZGF0YXM6IGRhdGEsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDbmF2QmFyIiwiSG9tZVBhZ2UiLCJBdXRoZW50aWNhdGUiLCJqd3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0QWxsQmxvZ3MiLCJTcGlubmVyIiwiZ2V0QmxvZyIsInVzZVRoZW1lIiwiSG9tZSIsImNyZWF0aW5nIiwic2V0Q3JlYXRpbmciLCJ1c2VyIiwic2V0VXNlciIsImRhdGFzIiwic2V0RGF0YXMiLCJsb2FkaW5nIiwiU2V0TG9hZGluZyIsImRpc3BhdGNoIiwiYXBpVXJsIiwic3RhdGUiLCJhbGwiLCJ0aGVtZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInJlcyIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImpzb24iLCJkZWNvZGUiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});