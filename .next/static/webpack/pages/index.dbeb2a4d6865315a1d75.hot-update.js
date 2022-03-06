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

/***/ "./contracts/index.js":
/*!****************************!*\
  !*** ./contracts/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"v3Staker\": function() { return /* binding */ v3Staker; },\n/* harmony export */   \"v3Positions\": function() { return /* binding */ v3Positions; },\n/* harmony export */   \"v3Pool\": function() { return /* binding */ v3Pool; },\n/* harmony export */   \"ETH_USDC\": function() { return /* binding */ ETH_USDC; },\n/* harmony export */   \"BATCHER\": function() { return /* binding */ BATCHER; },\n/* harmony export */   \"ERC20\": function() { return /* binding */ ERC20; },\n/* harmony export */   \"BPNUR\": function() { return /* binding */ BPNUR; },\n/* harmony export */   \"bp\": function() { return /* binding */ bp; },\n/* harmony export */   \"CNDL\": function() { return /* binding */ CNDL; },\n/* harmony export */   \"WETH\": function() { return /* binding */ WETH; }\n/* harmony export */ });\n/* harmony import */ var _univ3Pool_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./univ3Pool.json */ \"./contracts/univ3Pool.json\");\n/* harmony import */ var _univ3Positions_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./univ3Positions.json */ \"./contracts/univ3Positions.json\");\n/* harmony import */ var _univ3Staker_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./univ3Staker.json */ \"./contracts/univ3Staker.json\");\n/* harmony import */ var _nftBatcher_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftBatcher.json */ \"./contracts/nftBatcher.json\");\n/* harmony import */ var _erc20_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./erc20.json */ \"./contracts/erc20.json\");\n/* harmony import */ var _burner_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./burner.json */ \"./contracts/burner.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar v3Staker = {\n  abi: _univ3Staker_json__WEBPACK_IMPORTED_MODULE_2__,\n  address: '0x1f98407aaB862CdDeF78Ed252D6f557aA5b0f00d'\n};\nvar v3Positions = {\n  abi: _univ3Positions_json__WEBPACK_IMPORTED_MODULE_1__,\n  address: '0xc36442b4a4522e871399cd717abdd847ab11fe88'\n};\nvar v3Pool = {\n  abi: _univ3Pool_json__WEBPACK_IMPORTED_MODULE_0__\n};\nvar ETH_USDC = {\n  1: {\n    abi: _univ3Pool_json__WEBPACK_IMPORTED_MODULE_0__,\n    address: '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8'\n  },\n  137: {\n    abi: _univ3Pool_json__WEBPACK_IMPORTED_MODULE_0__,\n    address: '0x45dda9cb7c25131df268515131f647d726f50608'\n  }\n};\nvar BATCHER = {\n  1: {\n    abi: _nftBatcher_json__WEBPACK_IMPORTED_MODULE_3__,\n    address: '0xF83eEE39E723526605d784917b6e38ebCF0f0207'\n  },\n  137: {\n    abi: _nftBatcher_json__WEBPACK_IMPORTED_MODULE_3__,\n    address: '0x43676E467781dC838C8F81C671c571179E38Aeed'\n  }\n};\nvar ERC20 = {\n  abi: _erc20_json__WEBPACK_IMPORTED_MODULE_4__\n};\nvar BPNUR = {\n  abi: _burner_json__WEBPACK_IMPORTED_MODULE_5__\n};\nvar bp = {\n  1: {\n    abi: _burner_json__WEBPACK_IMPORTED_MODULE_5__,\n    address: '0xf05DA838BCE31AA32F776b11a2De1B65AF15DbB6'\n  },\n  137: {\n    abi: _burner_json__WEBPACK_IMPORTED_MODULE_5__,\n    address: '0xAb1eeDf9283760940b8c15256983E98C42A3E356'\n  }\n};\nvar CNDL = {\n  1: {\n    abi: _erc20_json__WEBPACK_IMPORTED_MODULE_4__,\n    address: '0xbc138bD20C98186CC0342C8e380953aF0cb48BA8'\n  },\n  137: {\n    abi: _erc20_json__WEBPACK_IMPORTED_MODULE_4__,\n    address: '0x5423063af146F5abF88Eb490486E6B53FA135eC9'\n  }\n};\nvar WETH = {\n  1: {\n    abi: _erc20_json__WEBPACK_IMPORTED_MODULE_4__,\n    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'\n  },\n  137: {\n    abi: _erc20_json__WEBPACK_IMPORTED_MODULE_4__,\n    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250cmFjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNTSxRQUFRLEdBQUc7QUFDdEJDLEVBQUFBLEdBQUcsRUFBRUwsOENBRGlCO0FBRXRCTSxFQUFBQSxPQUFPLEVBQUU7QUFGYSxDQUFqQjtBQUlBLElBQU1DLFdBQVcsR0FBRztBQUN6QkYsRUFBQUEsR0FBRyxFQUFFTixpREFEb0I7QUFFekJPLEVBQUFBLE9BQU8sRUFBRTtBQUZnQixDQUFwQjtBQUlBLElBQU1FLE1BQU0sR0FBRztBQUFFSCxFQUFBQSxHQUFHLEVBQUVQLDRDQUFTQTtBQUFoQixDQUFmO0FBRUEsSUFBTVcsUUFBUSxHQUFHO0FBQ3RCLEtBQUc7QUFDREosSUFBQUEsR0FBRyxFQUFFUCw0Q0FESjtBQUVEUSxJQUFBQSxPQUFPLEVBQUU7QUFGUixHQURtQjtBQUt0QixPQUFLO0FBQ0hELElBQUFBLEdBQUcsRUFBRVAsNENBREY7QUFFSFEsSUFBQUEsT0FBTyxFQUFFO0FBRk47QUFMaUIsQ0FBakI7QUFXQSxJQUFNSSxPQUFPLEdBQUc7QUFDckIsS0FBRztBQUNETCxJQUFBQSxHQUFHLEVBQUVKLDZDQURKO0FBRURLLElBQUFBLE9BQU8sRUFBRTtBQUZSLEdBRGtCO0FBS3JCLE9BQUs7QUFDSEQsSUFBQUEsR0FBRyxFQUFFSiw2Q0FERjtBQUVISyxJQUFBQSxPQUFPLEVBQUU7QUFGTjtBQUxnQixDQUFoQjtBQVdBLElBQU1LLEtBQUssR0FBRztBQUNuQk4sRUFBQUEsR0FBRyxFQUFFSCx3Q0FBUUE7QUFETSxDQUFkO0FBSUEsSUFBTVUsS0FBSyxHQUFHO0FBQ25CUCxFQUFBQSxHQUFHLEVBQUVGLHlDQUFLQTtBQURTLENBQWQ7QUFJQSxJQUFNVSxFQUFFLEdBQUc7QUFDaEIsS0FBRztBQUNEUixJQUFBQSxHQUFHLEVBQUVGLHlDQURKO0FBRURHLElBQUFBLE9BQU8sRUFBRTtBQUZSLEdBRGE7QUFLaEIsT0FBSztBQUNIRCxJQUFBQSxHQUFHLEVBQUVGLHlDQURGO0FBRUhHLElBQUFBLE9BQU8sRUFBRTtBQUZOO0FBTFcsQ0FBWDtBQVdBLElBQU1RLElBQUksR0FBRztBQUNsQixLQUFHO0FBQ0RULElBQUFBLEdBQUcsRUFBRUgsd0NBREo7QUFFREksSUFBQUEsT0FBTyxFQUFFO0FBRlIsR0FEZTtBQUtsQixPQUFLO0FBQ0hELElBQUFBLEdBQUcsRUFBRUgsd0NBREY7QUFFSEksSUFBQUEsT0FBTyxFQUFFO0FBRk47QUFMYSxDQUFiO0FBV0EsSUFBTVMsSUFBSSxHQUFHO0FBQ2xCLEtBQUc7QUFDRFYsSUFBQUEsR0FBRyxFQUFFSCx3Q0FESjtBQUVESSxJQUFBQSxPQUFPLEVBQUU7QUFGUixHQURlO0FBS2xCLE9BQUs7QUFDSEQsSUFBQUEsR0FBRyxFQUFFSCx3Q0FERjtBQUVISSxJQUFBQSxPQUFPLEVBQUU7QUFGTjtBQUxhLENBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udHJhY3RzL2luZGV4LmpzP2VhZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHYzUG9vbEFCSSBmcm9tICcuL3VuaXYzUG9vbC5qc29uJ1xuaW1wb3J0IHYzUG9zaXRpb25zQUJJIGZyb20gJy4vdW5pdjNQb3NpdGlvbnMuanNvbidcbmltcG9ydCB2M1N0YWtlckFCSSBmcm9tICcuL3VuaXYzU3Rha2VyLmpzb24nXG5pbXBvcnQgYmF0Y2hlckFCSSBmcm9tICcuL25mdEJhdGNoZXIuanNvbidcbmltcG9ydCBlcmMyMEFCSSBmcm9tICcuL2VyYzIwLmpzb24nXG5pbXBvcnQgYnBBQkkgZnJvbSAnLi9idXJuZXIuanNvbidcblxuZXhwb3J0IGNvbnN0IHYzU3Rha2VyID0ge1xuICBhYmk6IHYzU3Rha2VyQUJJLFxuICBhZGRyZXNzOiAnMHgxZjk4NDA3YWFCODYyQ2REZUY3OEVkMjUyRDZmNTU3YUE1YjBmMDBkJ1xufVxuZXhwb3J0IGNvbnN0IHYzUG9zaXRpb25zID0ge1xuICBhYmk6IHYzUG9zaXRpb25zQUJJLFxuICBhZGRyZXNzOiAnMHhjMzY0NDJiNGE0NTIyZTg3MTM5OWNkNzE3YWJkZDg0N2FiMTFmZTg4J1xufVxuZXhwb3J0IGNvbnN0IHYzUG9vbCA9IHsgYWJpOiB2M1Bvb2xBQkkgfVxuXG5leHBvcnQgY29uc3QgRVRIX1VTREMgPSB7XG4gIDE6IHtcbiAgICBhYmk6IHYzUG9vbEFCSSxcbiAgICBhZGRyZXNzOiAnMHg4YWQ1OTljM2EwZmYxZGUwODIwMTFlZmRkYzU4ZjE5MDhlYjZlNmQ4J1xuICB9LFxuICAxMzc6IHtcbiAgICBhYmk6IHYzUG9vbEFCSSxcbiAgICBhZGRyZXNzOiAnMHg0NWRkYTljYjdjMjUxMzFkZjI2ODUxNTEzMWY2NDdkNzI2ZjUwNjA4J1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBCQVRDSEVSID0ge1xuICAxOiB7XG4gICAgYWJpOiBiYXRjaGVyQUJJLFxuICAgIGFkZHJlc3M6ICcweEY4M2VFRTM5RTcyMzUyNjYwNWQ3ODQ5MTdiNmUzOGViQ0YwZjAyMDcnXG4gIH0sXG4gIDEzNzoge1xuICAgIGFiaTogYmF0Y2hlckFCSSxcbiAgICBhZGRyZXNzOiAnMHg0MzY3NkU0Njc3ODFkQzgzOEM4RjgxQzY3MWM1NzExNzlFMzhBZWVkJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBFUkMyMCA9IHtcbiAgYWJpOiBlcmMyMEFCSVxufVxuXG5leHBvcnQgY29uc3QgQlBOVVIgPSB7XG4gIGFiaTogYnBBQklcbn1cblxuZXhwb3J0IGNvbnN0IGJwID0ge1xuICAxOiB7XG4gICAgYWJpOiBicEFCSSxcbiAgICBhZGRyZXNzOiAnMHhmMDVEQTgzOEJDRTMxQUEzMkY3NzZiMTFhMkRlMUI2NUFGMTVEYkI2J1xuICB9LFxuICAxMzc6IHtcbiAgICBhYmk6IGJwQUJJLFxuICAgIGFkZHJlc3M6ICcweEFiMWVlRGY5MjgzNzYwOTQwYjhjMTUyNTY5ODNFOThDNDJBM0UzNTYnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IENOREwgPSB7XG4gIDE6IHtcbiAgICBhYmk6IGVyYzIwQUJJLFxuICAgIGFkZHJlc3M6ICcweGJjMTM4YkQyMEM5ODE4NkNDMDM0MkM4ZTM4MDk1M2FGMGNiNDhCQTgnXG4gIH0sXG4gIDEzNzoge1xuICAgIGFiaTogZXJjMjBBQkksXG4gICAgYWRkcmVzczogJzB4NTQyMzA2M2FmMTQ2RjVhYkY4OEViNDkwNDg2RTZCNTNGQTEzNWVDOSdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV0VUSCA9IHtcbiAgMToge1xuICAgIGFiaTogZXJjMjBBQkksXG4gICAgYWRkcmVzczogJzB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMidcbiAgfSxcbiAgMTM3OiB7XG4gICAgYWJpOiBlcmMyMEFCSSxcbiAgICBhZGRyZXNzOiAnMHg3Y2VCMjNmRDZiQzBhZEQ1OUU2MmFjMjU1NzgyNzBjRmYxYjlmNjE5J1xuICB9XG59XG4iXSwibmFtZXMiOlsidjNQb29sQUJJIiwidjNQb3NpdGlvbnNBQkkiLCJ2M1N0YWtlckFCSSIsImJhdGNoZXJBQkkiLCJlcmMyMEFCSSIsImJwQUJJIiwidjNTdGFrZXIiLCJhYmkiLCJhZGRyZXNzIiwidjNQb3NpdGlvbnMiLCJ2M1Bvb2wiLCJFVEhfVVNEQyIsIkJBVENIRVIiLCJFUkMyMCIsIkJQTlVSIiwiYnAiLCJDTkRMIiwiV0VUSCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contracts/index.js\n");

/***/ })

});