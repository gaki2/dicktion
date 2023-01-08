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

/***/ "./components/dataView.tsx":
/*!*********************************!*\
  !*** ./components/dataView.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction DataView(param) {\n    var data = param.data;\n    _s();\n    var $audio = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), disable = ref[0], setDisalbe = ref[1];\n    var play = function() {\n        if ($audio.current) {\n            try {\n                $audio.current.play();\n            } catch (err) {\n                console.log(err);\n            }\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto mt-5 \".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default().div_width_50)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-3 mt-5\",\n                children: data && \"검색결과\"\n            }, void 0, false, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"m-1 mt-4 text-success\",\n                children: data && \"발음\"\n            }, void 0, false, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"d-inline m-1\",\n                        children: [\n                            data && data.name,\n                            \"          \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"d-inline m-2\",\n                        children: data && data.phonetic\n                    }, void 0, false, {\n                        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                        src: \"\".concat(data && data.audio),\n                        ref: $audio\n                    }, void 0, false, {\n                        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default().play),\n                        onClick: play,\n                        disabled: data.audio === null ? true : false,\n                        children: \"듣기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"m-1 mt-5 text-success\",\n                children: data && \"정의\"\n            }, void 0, false, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"d-inline m-1\",\n                        children: data && data.meaning.partOfSpeech\n                    }, void 0, false, {\n                        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"d-inline m-4\",\n                        children: data && data.meaning.definition\n                    }, void 0, false, {\n                        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://dictionary.cambridge.org/ko/%EC%82%AC%EC%A0%84/%EC%98%81%EC%96%B4/\".concat(data === null || data === void 0 ? void 0 : data.name),\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: data && \"자세히 보러가기\"\n                }, void 0, false, {\n                    fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/byeonggakyu/diction/components/dataView.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n}\n_s(DataView, \"bNrSKIifEtYO/PcwoyiV2qk8fiY=\");\n_c = DataView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(DataView));\nvar _c, _c1;\n$RefreshReg$(_c, \"DataView\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDRyxRQUFRLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGFWaWV3LnRzeD8xNWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaGVkRGF0YSB9IGZyb20gXCIuLi9wYXJlbnRjb21wb25lbnRzL2luZGV4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgbWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBEYXRhVmlldyh7IGRhdGEgfTogeyBkYXRhOiBTZWFyY2hlZERhdGEgfCBudWxsIH0pIHtcbiAgY29uc3QgJGF1ZGlvID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWxiZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgaWYgKCRhdWRpby5jdXJyZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAkYXVkaW8uY3VycmVudC5wbGF5KCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbS1hdXRvIG10LTUgJHtzdHlsZXMuZGl2X3dpZHRoXzUwfWB9PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTMgbXQtNVwiPntkYXRhICYmIFwi6rKA7IOJ6rKw6rO8XCJ9PC9oMT5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMSBtdC00IHRleHQtc3VjY2Vzc1wiPntkYXRhICYmIFwi67Cc7J2MXCJ9PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbS0xXCI+XG4gICAgICAgICAge2RhdGEgJiYgZGF0YS5uYW1lfVxuICAgICAgICAgIHtcIiAgICAgICAgICBcIn1cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtaW5saW5lIG0tMlwiPntkYXRhICYmIGRhdGEucGhvbmV0aWN9PC9oMz5cbiAgICAgICAgPGF1ZGlvIHNyYz17YCR7ZGF0YSAmJiBkYXRhLmF1ZGlvfWB9IHJlZj17JGF1ZGlvfT48L2F1ZGlvPlxuICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3BsYXl9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGF0YS5hdWRpbyA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDrk6PquLBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMSBtdC01IHRleHQtc3VjY2Vzc1wiPntkYXRhICYmIFwi7KCV7J2YXCJ9PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbS0xXCI+e2RhdGEgJiYgZGF0YS5tZWFuaW5nLnBhcnRPZlNwZWVjaH08L2gzPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbS00XCI+e2RhdGEgJiYgZGF0YS5tZWFuaW5nLmRlZmluaXRpb259PC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kaWN0aW9uYXJ5LmNhbWJyaWRnZS5vcmcva28vJUVDJTgyJUFDJUVDJUEwJTg0LyVFQyU5OCU4MSVFQyU5NiVCNC8ke2RhdGE/Lm5hbWV9YH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEgJiYgXCLsnpDshLjtnogg67O065+s6rCA6riwXCJ9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaDM+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRGF0YVZpZXcpO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIm1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRhdGFWaWV3IiwiZGF0YSIsIiRhdWRpbyIsImRpc2FibGUiLCJzZXREaXNhbGJlIiwicGxheSIsImN1cnJlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGl2X3dpZHRoXzUwIiwiaDEiLCJociIsImgyIiwiaDMiLCJuYW1lIiwicGhvbmV0aWMiLCJhdWRpbyIsInNyYyIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm1lYW5pbmciLCJwYXJ0T2ZTcGVlY2giLCJoNCIsImRlZmluaXRpb24iLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dataView.tsx\n");

/***/ })

});