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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onBurn; }\n/* harmony export */ });\n/* harmony import */ var _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contracts */ \"./contracts/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _utils_ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ethers */ \"./utils/ethers.js\");\n/* harmony import */ var _contexts_useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/useWeb3 */ \"./contexts/useWeb3.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/safahi/Documents/GitHub/cndlstaking/components/burn/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction onBurn() {\n  _s();\n\n  var _useWeb = (0,_contexts_useWeb3__WEBPACK_IMPORTED_MODULE_5__.useWeb3)([]),\n      chainId = _useWeb.chainId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(['']),\n      cndlAmount = _useState[0],\n      setCndlAmount = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(['']),\n      burnMessage = _useState2[0],\n      setburnMessage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  function onApprove() {\n    return _onApprove.apply(this, arguments);\n  }\n\n  function _onApprove() {\n    _onApprove = (0,_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var signer, cndlContract;\n      return _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(cndlAmount > 0)) {\n                _context.next = 5;\n                break;\n              }\n\n              signer = _utils_ethers__WEBPACK_IMPORTED_MODULE_4__.web3.getSigner();\n              cndlContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_contracts__WEBPACK_IMPORTED_MODULE_3__.CNDL[chainId].address, _contracts__WEBPACK_IMPORTED_MODULE_3__.ERC20.abi, signer);\n              _context.next = 5;\n              return cndlContract.approve(_contracts__WEBPACK_IMPORTED_MODULE_3__.bp[chainId].address, ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseUnits(cndlAmount, 18));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onApprove.apply(this, arguments);\n  }\n\n  function onBurn() {\n    return _onBurn.apply(this, arguments);\n  }\n\n  function _onBurn() {\n    _onBurn = (0,_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var signer, burnerContract;\n      return _Users_safahi_Documents_GitHub_cndlstaking_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(cndlAmount > 0)) {\n                _context2.next = 8;\n                break;\n              }\n\n              setLoading(true);\n              fetch(burnMessage);\n              fetch(cndlAmount).then(function (res) {\n                return res.json();\n              }).then(function (burnMessage) {\n                setData(setburnMessage);\n              }).then(function (cndlAmount) {\n                setData(setCndlAmount);\n              })[\"catch\"](function (err) {\n                console.log(err);\n              })[\"finally\"](function () {\n                setLoading(false);\n              });\n              signer = _utils_ethers__WEBPACK_IMPORTED_MODULE_4__.web3.getSigner();\n              burnerContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_contracts__WEBPACK_IMPORTED_MODULE_3__.bp[chainId].address, _contracts__WEBPACK_IMPORTED_MODULE_3__.bp.abi, signer);\n              _context2.next = 8;\n              return burnerContract.BurnWithMessage(ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseUnits(cndlAmount, 18), burnMessage);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _onBurn.apply(this, arguments);\n  }\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: \"Data is loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 14\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n      ml: \"4\",\n      mt: \"16\",\n      mb: \"4\",\n      size: \"md\",\n      children: \"Burn your CNDL\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n      children: \"CNDL Amount:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n      value: cndlAmount,\n      onChange: function onChange(e) {\n        return setCndlAmount(e.target.value);\n      },\n      placeholder: \"CNDL amount\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n      children: \"Message:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n      value: burnMessage,\n      onChange: function onChange(e) {\n        return setburnMessage(e.target.value);\n      },\n      placeholder: \"Note down your message\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n      direction: \"row\",\n      spaceing: 4,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n        onClick: onApprove,\n        colorScheme: \"blue\",\n        children: \"Approve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n        onClick: onBurn,\n        colorScheme: \"blue\",\n        children: \"Burn\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(onBurn, \"dJGj73tTUQAdX+z4jCkhaLc/RX0=\", false, function () {\n  return [_contexts_useWeb3__WEBPACK_IMPORTED_MODULE_5__.useWeb3];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBLGtCQURGO0FBd0JEOztHQW5FdUJBO1VBQ0ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnVybi9pbmRleC5qcz83NDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyBFUkMyMCwgQlBOVVIsIGJwLCBDTkRMIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzJ1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgSGVhZGluZyxcbiAgICBJbnB1dCxcbiAgICBTdGFjayxcbiAgICBUZXh0LFxuICAgIFRleHRhcmVhXG4gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbiAgaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uLy4uL3V0aWxzL2V0aGVycydcbiAgaW1wb3J0IHsgdXNlV2ViMyB9IGZyb20gJy4uLy4uL2NvbnRleHRzL3VzZVdlYjMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25CdXJuKCkge1xuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlV2ViMyhbXSlcbiAgICBjb25zdCBbY25kbEFtb3VudCwgc2V0Q25kbEFtb3VudF0gPSB1c2VTdGF0ZShbJyddKVxuICAgIGNvbnN0IFtidXJuTWVzc2FnZSwgc2V0YnVybk1lc3NhZ2VdID0gdXNlU3RhdGUoWycnXSlcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQXBwcm92ZSgpIHtcbiAgICAgICAgaWYgKGNuZGxBbW91bnQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSB3ZWIzLmdldFNpZ25lcigpXG4gICAgICAgICAgICBjb25zdCBjbmRsQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KENORExbY2hhaW5JZF0uYWRkcmVzcywgRVJDMjAuYWJpLCBzaWduZXIpXG4gICAgICAgICAgYXdhaXQgY25kbENvbnRyYWN0LmFwcHJvdmUoYnBbY2hhaW5JZF0uYWRkcmVzcywgZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMoY25kbEFtb3VudCwgMTgpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkJ1cm4oKSB7XG4gICAgICAgIGlmIChjbmRsQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGZldGNoKGJ1cm5NZXNzYWdlKVxuICAgICAgICAgICAgZmV0Y2goY25kbEFtb3VudClcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgLnRoZW4oKGJ1cm5NZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RGF0YShzZXRidXJuTWVzc2FnZSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKChjbmRsQW1vdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RGF0YShzZXRDbmRsQW1vdW50KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2lnbmVyID0gd2ViMy5nZXRTaWduZXIoKVxuICAgICAgICAgICAgY29uc3QgYnVybmVyQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGJwW2NoYWluSWRdLmFkZHJlc3MsIGJwLmFiaSwgc2lnbmVyKVxuICAgICAgICAgICAgYXdhaXQgYnVybmVyQ29udHJhY3QuQnVybldpdGhNZXNzYWdlKGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGNuZGxBbW91bnQsIDE4KSwgYnVybk1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxwPkRhdGEgaXMgbG9hZGluZy4uLjwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkaW5nIG1sPVwiNFwiIG10PVwiMTZcIiBtYj1cIjRcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICBCdXJuIHlvdXIgQ05ETFxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0PkNOREwgQW1vdW50OjwvVGV4dD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17Y25kbEFtb3VudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENuZGxBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDTkRMIGFtb3VudFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0Pk1lc3NhZ2U6PC9UZXh0PlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXtidXJuTWVzc2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldGJ1cm5NZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZSBkb3duIHlvdXIgbWVzc2FnZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0ncm93JyBzcGFjZWluZz17NH0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQXBwcm92ZX0gY29sb3JTY2hlbWU9J2JsdWUnPkFwcHJvdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25CdXJufSBjb2xvclNjaGVtZT0nYmx1ZSc+QnVybjwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJldGhlcnMiLCJFUkMyMCIsIkJQTlVSIiwiYnAiLCJDTkRMIiwiQnV0dG9uIiwiSGVhZGluZyIsIklucHV0IiwiU3RhY2siLCJUZXh0IiwiVGV4dGFyZWEiLCJ3ZWIzIiwidXNlV2ViMyIsIm9uQnVybiIsImNoYWluSWQiLCJjbmRsQW1vdW50Iiwic2V0Q25kbEFtb3VudCIsImJ1cm5NZXNzYWdlIiwic2V0YnVybk1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uQXBwcm92ZSIsInNpZ25lciIsImdldFNpZ25lciIsImNuZGxDb250cmFjdCIsIkNvbnRyYWN0IiwiYWRkcmVzcyIsImFiaSIsImFwcHJvdmUiLCJ1dGlscyIsInBhcnNlVW5pdHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0RGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJidXJuZXJDb250cmFjdCIsIkJ1cm5XaXRoTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/burn/index.js\n");

/***/ })

});