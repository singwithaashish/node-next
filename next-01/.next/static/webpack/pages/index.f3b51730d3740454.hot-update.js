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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_CnavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/CnavBar */ \"./Components/CnavBar.jsx\");\n/* harmony import */ var _Components_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/HomePage */ \"./Components/HomePage.jsx\");\n/* harmony import */ var _Components_Authenticate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Authenticate */ \"./Components/Authenticate.jsx\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_stateSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state/stateSlice */ \"./state/stateSlice.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ \"./api/api.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var creating = param.creating, setCreating = param.setCreating;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), datas = ref1[0], setDatas = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), loading = ref2[0], SetLoading = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    var apiUrl = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function(state) {\n        return state.all.apiUrl;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_asyncToGenerator(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var token, res, data1;\n        return _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    !loading && SetLoading(true);\n                    token = localStorage.getItem(\"token\");\n                    console.log(token);\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return fetch(\"\".concat(apiUrl, \"/blogs\"), {\n                        method: \"GET\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: token\n                        }\n                    });\n                case 6:\n                    res = _ctx.sent;\n                    _ctx.next = 9;\n                    return res.json();\n                case 9:\n                    data1 = _ctx.sent;\n                    _ctx.next = 15;\n                    break;\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    console.log(_ctx.t0);\n                case 15:\n                    dispatch((0,_state_stateSlice__WEBPACK_IMPORTED_MODULE_9__.setAllBlogs)(data));\n                    setDatas(data);\n                    console.log(\"som\");\n                    if (token) {\n                        setUser(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().decode(token));\n                    // console.log(user)\n                    }\n                    console.log(\"here\");\n                    SetLoading(false);\n                case 21:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                12\n            ]\n        ]);\n    })), []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Topics\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-center align-items-center\",\n                    style: {\n                        height: \"100vh\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Spinner, {\n                        animation: \"border\",\n                        variant: \"info\"\n                    }, void 0, false, {\n                        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this) : user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_HomePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    datas: datas\n                }, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Authenticate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/beautiful/Documents/web/node-next/next-01/pages/index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n}; // ! content is dynamic so ssr is not necessary | required\n // export const getStaticProps = async () => {\n //   const res = await fetch('http://localhost:5000/blogs', {\n //     method: 'GET',\n //     headers: {\n //       'Content-Type': 'application/json',\n //       'Authorization': localStorage.getItem('token')\n //     },}\n //   );\n //   const data = await res.json();\n //   // console.log(data)\n //   if (!data) {\n //     return {\n //       notFound: true,\n //     }\n //   }\n //   return {\n //     props: {\n //       datas: data,\n //     },\n //   };\n // }\n_s(Home, \"+0mEGbmZuSxeqXl5bfhjWVznQ5g=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksK0VBQ0xYLDREQUFRO29CQUFDYSxLQUFLLEVBQUVBLEtBQUs7Ozs7O3VHQUVyQlosZ0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkIsQ0FBQyxDQUVELENBQTBEO0FBQzFELENBQThDO0FBQzlDLENBQTZEO0FBQzdELENBQXFCO0FBQ3JCLENBQWlCO0FBQ2pCLENBQTRDO0FBQzVDLENBQXVEO0FBQ3ZELENBQVU7QUFFVixDQUFPO0FBQ1AsQ0FBbUM7QUFDbkMsQ0FBeUI7QUFFekIsQ0FBaUI7QUFDakIsQ0FBZTtBQUNmLENBQXdCO0FBQ3hCLENBQVE7QUFDUixDQUFNO0FBQ04sQ0FBYTtBQUNiLENBQWU7QUFDZixDQUFxQjtBQUNyQixDQUFTO0FBQ1QsQ0FBTztBQUNQLENBQUk7R0F0Rm9CTyxJQUFJOztRQUlUTCxvREFBVztRQUNiQyxvREFBVzs7O0tBTEpJLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ25hdkJhciBmcm9tIFwiLi4vQ29tcG9uZW50cy9DbmF2QmFyXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL0NvbXBvbmVudHMvSG9tZVBhZ2VcIjtcbmltcG9ydCBBdXRoZW50aWNhdGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvQXV0aGVudGljYXRlXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWxsQmxvZ3MgfSBmcm9tIFwiLi4vc3RhdGUvc3RhdGVTbGljZVwiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBnZXRCbG9nIGZyb20gXCIuLi9hcGkvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjcmVhdGluZywgc2V0Q3JlYXRpbmcgfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RhdGFzLCBzZXREYXRhc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIFNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgYXBpVXJsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbGwuYXBpVXJsKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICFsb2FkaW5nICYmIFNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICB0cnl7XG5cbiAgICBcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jsb2dzYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGdldEJsb2coYXBpVXJsLCB0b2tlbik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIH1jYXRjaChlcnIpe1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbiAgICBkaXNwYXRjaChzZXRBbGxCbG9ncyhkYXRhKSk7XG4gICAgc2V0RGF0YXMoZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJzb21cIilcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldFVzZXIoand0LmRlY29kZSh0b2tlbikpO1xuICAgICAgLy8gY29uc29sZS5sb2codXNlcilcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgU2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRvcGljczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIHsvKiBpZiBsb2FkaW5nLCBzaG93IGxvYWRpbmcsIGVsc2UsIGlmIHVzZXIsIHNob3cgaG9tZSBlbHNlIHNob3cgYXV0aGVudGljYXRpb24gKi99XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJpbmZvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IHVzZXIgPyAoXG4gICAgICAgICAgPEhvbWVQYWdlIGRhdGFzPXtkYXRhc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QXV0aGVudGljYXRlIC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vICEgY29udGVudCBpcyBkeW5hbWljIHNvIHNzciBpcyBub3QgbmVjZXNzYXJ5IHwgcmVxdWlyZWRcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ibG9ncycsIHtcbi8vICAgICBtZXRob2Q6ICdHRVQnLFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAnQXV0aG9yaXphdGlvbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4vLyAgICAgfSx9XG5cbi8vICAgKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbi8vICAgaWYgKCFkYXRhKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBkYXRhczogZGF0YSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNuYXZCYXIiLCJIb21lUGFnZSIsIkF1dGhlbnRpY2F0ZSIsImp3dCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRBbGxCbG9ncyIsIlNwaW5uZXIiLCJnZXRCbG9nIiwiSG9tZSIsImNyZWF0aW5nIiwic2V0Q3JlYXRpbmciLCJ1c2VyIiwic2V0VXNlciIsImRhdGFzIiwic2V0RGF0YXMiLCJsb2FkaW5nIiwiU2V0TG9hZGluZyIsImRpc3BhdGNoIiwiYXBpVXJsIiwic3RhdGUiLCJhbGwiLCJ0b2tlbiIsInJlcyIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqc29uIiwiZGVjb2RlIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImFuaW1hdGlvbiIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});