"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 9926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rD": () => (/* binding */ setBlogIdtoUpdate),
/* harmony export */   "Zz": () => (/* binding */ setAllBlogs),
/* harmony export */   "dh": () => (/* binding */ setShowCreate),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export stateSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    blogIdtoUpdate: null,
    allBlogs: [],
    showCreate: false,
    apiUrl: 'https://stark-spire-21384.herokuapp.com'
};
const stateSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'all',
    initialState,
    reducers: {
        setBlogIdtoUpdate: (state, action)=>{
            state.blogIdtoUpdate = action.payload;
            console.log(state.blogIdtoUpdate);
        },
        setAllBlogs: (state, action)=>{
            state.allBlogs = action.payload;
        },
        setShowCreate: (state, action)=>{
            state.showCreate = action.payload;
        }
    }
});
const { setBlogIdtoUpdate , setAllBlogs , setShowCreate  } = stateSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stateSlice.reducer);


/***/ })

};
;