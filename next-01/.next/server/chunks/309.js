exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Home_card___LpL1",
	"login": "Home_login___4DHh"
};


/***/ }),

/***/ 9309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _state_stateSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9926);








function BlogCard({ title , description , imgUrl , author , time , id  }) {
    // console.log(author, jwt.decode(localStorage.getItem('token')).id)
    const apiUrl = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.all.apiUrl
    );
    const redirect = ()=>{
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
            pathname: "/blogs/" + id,
            query: {
                title,
                description,
                imgUrl,
                author,
                time,
                id
            }
        }, `/blogs/${id}`);
    };
    const deleteBlog = async ()=>{
        const deleteBlog = await fetch(`${apiUrl}/blogs/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
                id: id
            }
        });
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const blogId = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        var ref;
        return (ref = state.all) === null || ref === void 0 ? void 0 : ref.blogIdtoUpdate;
    });
    const updateBlog = ()=>{
        // const updateBlog = await fetch(`http://localhost:5000/blogs/update`, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: localStorage.getItem("token"),
        //     id: id,
        //   },
        // });
        dispatch((0,_state_stateSlice__WEBPACK_IMPORTED_MODULE_6__/* .setBlogIdtoUpdate */ .rD)(id));
        dispatch((0,_state_stateSlice__WEBPACK_IMPORTED_MODULE_6__/* .setShowCreate */ .dh)(true));
        console.log(blogId);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
        onClick: ()=>redirect()
        ,
        style: {
            minWidth: "18rem",
            maxHeight: "30rem"
        },
        className: `col-12 col-md-3 m-2 ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
                style: {
                    maxHeight: "10rem",
                    objectFit: "cover"
                },
                variant: "top",
                src: imgUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                        style: {
                            textOverflow: "elipsis",
                            overflow: "hidden",
                            maxHeight: "5rem"
                        },
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Footer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                        className: "text-muted",
                        children: [
                            "Last updated ",
                            time,
                            " ago"
                        ]
                    }),
                    author === jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(localStorage.getItem("token")).id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline-danger",
                                className: "me-3",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    deleteBlog();
                                },
                                children: "Delete"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline-info",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    updateBlog();
                                },
                                children: "Update"
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ })

};
;