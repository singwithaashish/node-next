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

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBlog\": function() { return /* binding */ getBlog; },\n/* harmony export */   \"user\": function() { return /* binding */ user; },\n/* harmony export */   \"deleteBlog\": function() { return /* binding */ deleteBlog; }\n/* harmony export */ });\n/* harmony import */ var _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction getBlog(apiUrl, token) {\n    return _getBlog.apply(this, arguments);\n}\nfunction _getBlog() {\n    _getBlog = _asyncToGenerator(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(apiUrl, token) {\n        return _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"\".concat(apiUrl, \"/blogs\"), {\n                        method: \"GET\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: token\n                        }\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    //   return res;\n    }));\n    return _getBlog.apply(this, arguments);\n}\nfunction user(apiUrl, token) {\n    return _user.apply(this, arguments);\n}\nfunction _user() {\n    _user = _asyncToGenerator(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(apiUrl, token) {\n        return _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"\".concat(apiUrl, \"/users/me\"), {\n                        method: \"GET\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: localStorage.getItem(\"token\")\n                        }\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _user.apply(this, arguments);\n}\nvar deleteBlog = function() {\n    var _ref = _asyncToGenerator(_home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var apiUrl, deleteBlog1;\n        return _home_beautiful_Documents_web_node_next_next_01_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _s();\n                    apiUrl = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n                        return state.all.apiUrl;\n                    });\n                    _ctx.next = 4;\n                    return fetch(\"\".concat(apiUrl, \"/blogs/delete\"), {\n                        method: \"DELETE\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: localStorage.getItem(\"token\"),\n                            _id: _id\n                        }\n                    });\n                case 4:\n                    deleteBlog1 = _ctx.sent;\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function deleteBlog() {\n        return _ref.apply(this, arguments);\n    };\n}();\n_s(deleteBlog, \"X5GpxMaJ8tqyHcYqdUCZM/lPdzk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FJMUJDLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLO1dBQXJCRixRQUFPOztTQUFQQSxRQUFPO0lBQVBBLFFBQU8sZ0xBQXRCLFFBQVEsU0FBZUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7MkJBQ3hCQyxLQUFLLENBQUUsR0FBUyxNQUFNLENBQWJGLE1BQU0sRUFBQyxDQUFNLFVBQUcsQ0FBQzt3QkFDckNHLE1BQU0sRUFBRSxDQUFLO3dCQUNiQyxPQUFPLEVBQUUsQ0FBQzs0QkFDUixDQUFjLGVBQUUsQ0FBa0I7NEJBQ2xDQyxhQUFhLEVBQUVKLEtBQUs7d0JBQ3RCLENBQUM7b0JBQ0gsQ0FBQzs7Ozs7Ozs7SUFDSCxFQUFnQjtJQUNoQixDQUFDO1dBVGNGLFFBQU87O1NBWVBPLElBQUksQ0FBQ04sTUFBTSxFQUFFQyxLQUFLO1dBQWxCSyxLQUFJOztTQUFKQSxLQUFJO0lBQUpBLEtBQUksZ0xBQW5CLFFBQVEsU0FBWU4sTUFBTSxFQUFFQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7MkJBQ25CQyxLQUFLLENBQUUsR0FBUyxNQUFTLENBQWhCRixNQUFNLEVBQUMsQ0FBUyxhQUFHLENBQUM7d0JBQ3RDRyxNQUFNLEVBQUUsQ0FBSzt3QkFDYkMsT0FBTyxFQUFFLENBQUM7NEJBQ1IsQ0FBYyxlQUFFLENBQWtCOzRCQUNsQ0MsYUFBYSxFQUFFRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPO3dCQUM3QyxDQUFDO29CQUNILENBQUM7Ozs7Ozs7O0lBQ1AsQ0FBQztXQVJjRixLQUFJOztBQVVuQixHQUFLLENBQUNHLFVBQVU7NExBQUcsUUFBUSxXQUFJLENBQUM7WUFDeEJULE1BQU0sRUFDTlMsV0FBVTs7Ozs7b0JBRFZULE1BQU0sR0FBR0Ysd0RBQVcsQ0FBQyxRQUFRLENBQVBZLEtBQUs7d0JBQUtBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsR0FBRyxDQUFDWCxNQUFNOzs7MkJBQzdCRSxLQUFLLENBQUUsR0FBUyxNQUFhLENBQXBCRixNQUFNLEVBQUMsQ0FBYSxpQkFBRyxDQUFDO3dCQUN4REcsTUFBTSxFQUFFLENBQVE7d0JBQ2hCQyxPQUFPLEVBQUUsQ0FBQzs0QkFDUixDQUFjLGVBQUUsQ0FBa0I7NEJBQ2xDQyxhQUFhLEVBQUVFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU87NEJBQzNDSSxHQUFHLEVBQUVBLEdBQUc7d0JBQ1YsQ0FBQztvQkFDSCxDQUFDOztvQkFQS0gsV0FBVTs7Ozs7O0lBUWxCLENBQUM7b0JBVktBLFVBQVU7Ozs7R0FBVkEsVUFBVTs7UUFDQ1gsb0RBQVc7OztBQVlTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9hcGkuanM/YjZlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZyhhcGlVcmwsIHRva2VuKSB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jsb2dzYCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgIH0sXG4gIH0pO1xuLy8gICByZXR1cm4gcmVzO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHVzZXIoYXBpVXJsLCB0b2tlbikge1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgJHthcGlVcmx9L3VzZXJzL21lYCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG59XG5cbmNvbnN0IGRlbGV0ZUJsb2cgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwaVVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxsLmFwaVVybCk7XG4gIGNvbnN0IGRlbGV0ZUJsb2cgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jsb2dzL2RlbGV0ZWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgX2lkOiBfaWQsXG4gICAgfSxcbiAgfSk7XG59OyBcblxuXG5leHBvcnQgeyBnZXRCbG9nLCB1c2VyLCBkZWxldGVCbG9nIH07Il0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiZ2V0QmxvZyIsImFwaVVybCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVsZXRlQmxvZyIsInN0YXRlIiwiYWxsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/api.js\n");

/***/ })

});