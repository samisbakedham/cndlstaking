"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/burn",{

/***/ "./components/burn/index.js":
/*!**********************************!*\
  !*** ./components/burn/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Burn; }\n/* harmony export */ });\n/* harmony import */ var _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contracts */ \"./contracts/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _utils_ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ethers */ \"./utils/ethers.js\");\n/* harmony import */ var _contexts_useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/useWeb3 */ \"./contexts/useWeb3.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/safahi/Documents/GitHub/cndlstaking/components/burn/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Burn() {\n  _s();\n\n  var _useWeb = (0,_contexts_useWeb3__WEBPACK_IMPORTED_MODULE_5__.useWeb3)(),\n      chainId = _useWeb.chainId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      cndlAmount = _useState[0],\n      setCndlAmount = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      burnMessage = _useState2[0],\n      setburnMessage = _useState2[1];\n\n  function onApprove() {\n    return _onApprove.apply(this, arguments);\n  }\n\n  function _onApprove() {\n    _onApprove = (0,_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var signer, cndlContract;\n      return _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(cndlAmount > 0)) {\n                _context.next = 5;\n                break;\n              }\n\n              signer = _utils_ethers__WEBPACK_IMPORTED_MODULE_4__.web3.getSigner();\n              cndlContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_contracts__WEBPACK_IMPORTED_MODULE_3__.CNDL[chainId].address, _contracts__WEBPACK_IMPORTED_MODULE_3__.ERC20.abi, signer);\n              _context.next = 5;\n              return cndlContract.approve(_contracts__WEBPACK_IMPORTED_MODULE_3__.bp[chainId].address, ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseUnits(cndlAmount, 18));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onApprove.apply(this, arguments);\n  }\n\n  function onBurn() {\n    return _onBurn.apply(this, arguments);\n  }\n\n  function _onBurn() {\n    _onBurn = (0,_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var signer, burnerContract;\n      return _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(cndlAmount > 0)) {\n                _context2.next = 5;\n                break;\n              }\n\n              signer = _utils_ethers__WEBPACK_IMPORTED_MODULE_4__.web3.getSigner();\n              burnerContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_contracts__WEBPACK_IMPORTED_MODULE_3__.bp[chainId].address, _contracts__WEBPACK_IMPORTED_MODULE_3__.bp.abi, signer);\n              _context2.next = 5;\n              return burnerContract.burnWithMessage(ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseUnits(cndlAmount, 18), burnMessage);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _onBurn.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n      ml: \"4\",\n      mt: \"16\",\n      mb: \"4\",\n      size: \"md\",\n      children: \"Burn your CNDL\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n      children: \"CNDL Amount:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n      value: cndlAmount,\n      onChange: function onChange(e) {\n        return setCndlAmount(e.target.value);\n      },\n      placeholder: \"CNDL amount\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n      children: \"Message:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n      value: burnMessage,\n      onChange: function onChange(e) {\n        return setburnMessage(e.target.value);\n      },\n      placeholder: \"Note down your message\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n      direction: \"row\",\n      spaceing: 4,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n        onClick: onApprove,\n        colorScheme: \"blue\",\n        children: \"Approve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n        onClick: onBurn,\n        colorScheme: \"blue\",\n        children: \"Burn\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Burn, \"IMNs1L2AFgQkF3QP71IoA9eRjq0=\", false, function () {\n  return [_contexts_useWeb3__WEBPACK_IMPORTED_MODULE_5__.useWeb3];\n});\n\n_c = Burn;\n\nvar _c;\n\n$RefreshReg$(_c, \"Burn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBLFlBWEYsZUFpQkUsOERBQUMsbURBQUQ7QUFBTyxlQUFTLEVBQUMsS0FBakI7QUFBdUIsY0FBUSxFQUFFLENBQWpDO0FBQUEsOEJBQ0ksOERBQUMsb0RBQUQ7QUFBUSxlQUFPLEVBQUVmLFNBQWpCO0FBQTRCLG1CQUFXLEVBQUMsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLG9EQUFEO0FBQVEsZUFBTyxFQUFFVSxNQUFqQjtBQUF5QixtQkFBVyxFQUFDLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUEsa0JBREY7QUF3QkQ7O0dBL0N1QmhCO1VBQ0ZEOzs7S0FERUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXJuL2luZGV4LmpzPzc0MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IEVSQzIwLCBidXJuZXJQb2x5Z29uLCBDTkRMIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzJ1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgSGVhZGluZyxcbiAgICBJbnB1dCxcbiAgICBTdGFjayxcbiAgICBUZXh0LFxuICAgIFRleHRhcmVhXG4gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbiAgaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uLy4uL3V0aWxzL2V0aGVycydcbiAgaW1wb3J0IHsgdXNlV2ViMyB9IGZyb20gJy4uLy4uL2NvbnRleHRzL3VzZVdlYjMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVybigpIHtcbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjMoKVxuICAgIGNvbnN0IFtjbmRsQW1vdW50LCBzZXRDbmRsQW1vdW50XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtidXJuTWVzc2FnZSwgc2V0YnVybk1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQXBwcm92ZSgpIHtcbiAgICAgICAgaWYgKGNuZGxBbW91bnQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSB3ZWIzLmdldFNpZ25lcigpXG4gICAgICAgICAgICBjb25zdCBjbmRsQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KENORExbY2hhaW5JZF0uYWRkcmVzcywgRVJDMjAuYWJpLCBzaWduZXIpXG4gICAgICAgICAgYXdhaXQgY25kbENvbnRyYWN0LmFwcHJvdmUoYnVybmVyUG9seWdvbltjaGFpbklkXS5hZGRyZXNzLCBldGhlcnMudXRpbHMucGFyc2VVbml0cyhjbmRsQW1vdW50LCAxOCkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQnVybigpIHtcbiAgICAgICAgaWYgKGNuZGxBbW91bnQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSB3ZWIzLmdldFNpZ25lcigpXG4gICAgICAgICAgICBjb25zdCBidXJuZXJDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoYnVybmVyUG9seWdvbltjaGFpbklkXS5hZGRyZXNzLCBidXJuZXJQb2x5Z29uLmFiaSwgc2lnbmVyKVxuICAgICAgICAgICAgYXdhaXQgYnVybmVyQ29udHJhY3QuYnVybldpdGhNZXNzYWdlKGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGNuZGxBbW91bnQsIDE4KSwgYnVybk1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZGluZyBtbD1cIjRcIiBtdD1cIjE2XCIgbWI9XCI0XCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgQnVybiB5b3VyIENORExcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dD5DTkRMIEFtb3VudDo8L1RleHQ+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2NuZGxBbW91bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDbmRsQW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ05ETCBhbW91bnRcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD5NZXNzYWdlOjwvVGV4dD5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17YnVybk1lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRidXJuTWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgZG93biB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249J3Jvdycgc3BhY2Vpbmc9ezR9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkFwcHJvdmV9IGNvbG9yU2NoZW1lPSdibHVlJz5BcHByb3ZlPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQnVybn0gY29sb3JTY2hlbWU9J2JsdWUnPkJ1cm48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXRoZXJzIiwiRVJDMjAiLCJidXJuZXJQb2x5Z29uIiwiQ05ETCIsIkJ1dHRvbiIsIkhlYWRpbmciLCJJbnB1dCIsIlN0YWNrIiwiVGV4dCIsIlRleHRhcmVhIiwid2ViMyIsInVzZVdlYjMiLCJCdXJuIiwiY2hhaW5JZCIsImNuZGxBbW91bnQiLCJzZXRDbmRsQW1vdW50IiwiYnVybk1lc3NhZ2UiLCJzZXRidXJuTWVzc2FnZSIsIm9uQXBwcm92ZSIsInNpZ25lciIsImdldFNpZ25lciIsImNuZGxDb250cmFjdCIsIkNvbnRyYWN0IiwiYWRkcmVzcyIsImFiaSIsImFwcHJvdmUiLCJ1dGlscyIsInBhcnNlVW5pdHMiLCJvbkJ1cm4iLCJidXJuZXJDb250cmFjdCIsImJ1cm5XaXRoTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/burn/index.js\n");

/***/ })

});