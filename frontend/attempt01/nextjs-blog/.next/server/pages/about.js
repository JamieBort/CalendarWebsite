/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./components/BasicFunction.js":
/*!*************************************!*\
  !*** ./components/BasicFunction.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicFunction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/nextjs-blog/components/BasicFunction.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass BasicFunction extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"tempAPICall\", () => {\n      console.clear();\n      console.log(\"Cleared console.\");\n    });\n\n    _defineProperty(this, \"APICall\", params => {\n      console.log(\"api called\", params);\n      fetch('http://api.plos.org/search?q=title:DNA', {\n        // mode: 'no-cors',\n        headers: {\n          'Access-Control-Allow-Origin': '*',\n          // 'Access-Control-Allow-Origin': 'http://localhost:3000/',\n          // 'Access-Control-Allow-Origin': 'http://api.plos.org/search?q=title:DNA',\n          'Content-Type': 'application/json',\n          'Accept': 'application/json' // 'Content-Type': 'application/json',\n\n        }\n      }).then(response => {\n        console.log(\"response: \", response);\n\n        if (!response.ok) {\n          throw new Error('Network response was not ok');\n        } // console.log(\"response.blob(): \", response.blob());\n\n\n        return response.blob();\n      }).then(myBlob => {\n        myImage.src = URL.createObjectURL(myBlob);\n      }).catch(error => {\n        console.error('There has been a problem with your fetch operation:', error); // console.log(error.state)\n      }); // fetch('http://api.plos.org/search?q=title:DNA', {\n      //   mode: 'no-cors',\n      //   headers: {\n      //     'Content-Type': 'application/json',\n      //     'Accept': 'application/json',\n      //     // 'Content-Type': 'application/json',\n      //   },\n      //   // body: JSON.stringify(data),\n      // })\n    });\n\n    this.state = {\n      error: null,\n      isLoaded: false,\n      items: []\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Hello from inside BasicFunction. To be used to make an api call.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Test: \", this.props.test]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => this.tempAPICall(\"Bam!\"),\n        children: \"Clear console.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => this.APICall(\"Bam!\"),\n        children: \"APICall.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9CYXNpY0Z1bmN0aW9uLmpzP2Y4ZDIiXSwibmFtZXMiOlsiQmFzaWNGdW5jdGlvbiIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsInBhcmFtcyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJibG9iIiwibXlCbG9iIiwibXlJbWFnZSIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNhdGNoIiwiZXJyb3IiLCJzdGF0ZSIsImlzTG9hZGVkIiwiaXRlbXMiLCJyZW5kZXIiLCJ0ZXN0IiwidGVtcEFQSUNhbGwiLCJBUElDYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQSxhQUFOLFNBQTRCQyx3REFBNUIsQ0FBNEM7QUFDekRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLHlDQVNMLE1BQU07QUFDbEJDLGFBQU8sQ0FBQ0MsS0FBUjtBQUNBRCxhQUFPLENBQUNFLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEtBWmtCOztBQUFBLHFDQWNSQyxNQUFELElBQVk7QUFDcEJILGFBQU8sQ0FBQ0UsR0FBUixDQUFZLFlBQVosRUFBMEJDLE1BQTFCO0FBRUFDLFdBQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUM1QztBQUNFQyxlQUFPLEVBQUU7QUFDUCx5Q0FBK0IsR0FEeEI7QUFFUDtBQUNBO0FBQ0EsMEJBQWdCLGtCQUpUO0FBS1Asb0JBQVUsa0JBTEgsQ0FNUDs7QUFOTztBQUZpQyxPQUEzQyxDQUFMLENBWURDLElBWkMsQ0FZSUMsUUFBUSxJQUFJO0FBQ2hCUCxlQUFPLENBQUNFLEdBQVIsQ0FBWSxZQUFaLEVBQTBCSyxRQUExQjs7QUFDQSxZQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixnQkFBTSxJQUFJQyxLQUFKLENBQVUsNkJBQVYsQ0FBTjtBQUNELFNBSmUsQ0FLaEI7OztBQUNBLGVBQU9GLFFBQVEsQ0FBQ0csSUFBVCxFQUFQO0FBQ0QsT0FuQkMsRUFvQkRKLElBcEJDLENBb0JJSyxNQUFNLElBQUk7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLEdBQWNDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkosTUFBcEIsQ0FBZDtBQUNELE9BdEJDLEVBdUJESyxLQXZCQyxDQXVCS0MsS0FBSyxJQUFJO0FBQ2RqQixlQUFPLENBQUNpQixLQUFSLENBQWMscURBQWQsRUFBcUVBLEtBQXJFLEVBRGMsQ0FFZDtBQUNELE9BMUJDLEVBSG9CLENBaUNoQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLRCxLQTVEa0I7O0FBRWpCLFNBQUtDLEtBQUwsR0FBYTtBQUNYRCxXQUFLLEVBQUUsSUFESTtBQUVYRSxjQUFRLEVBQUUsS0FGQztBQUdYQyxXQUFLLEVBQUU7QUFISSxLQUFiO0FBS0Q7O0FBdUREQyxRQUFNLEdBQUc7QUFDUCx3QkFBTztBQUFBLDhCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREssZUFFTDtBQUFBLDZCQUFVLEtBQUt0QixLQUFMLENBQVd1QixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSyxlQUdMO0FBQVEsZUFBTyxFQUFFLE1BQU0sS0FBS0MsV0FBTCxDQUFpQixNQUFqQixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhLLGVBSUw7QUFBUSxlQUFPLEVBQUUsTUFBTSxLQUFLQyxPQUFMLENBQWEsTUFBYixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBTUQ7O0FBdEV3RCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmFzaWNGdW5jdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljRnVuY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICB9XG5cbiAgdGVtcEFQSUNhbGwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5jbGVhcigpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2xlYXJlZCBjb25zb2xlLlwiKTtcbiAgfVxuXG4gIEFQSUNhbGwgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJhcGkgY2FsbGVkXCIsIHBhcmFtcyk7XG4gICAgXG4gICAgZmV0Y2goJ2h0dHA6Ly9hcGkucGxvcy5vcmcvc2VhcmNoP3E9dGl0bGU6RE5BJywge1xuICAgICAgICAvLyBtb2RlOiAnbm8tY29ycycsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgIC8vICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXG4gICAgICAgICAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJ2h0dHA6Ly9hcGkucGxvcy5vcmcvc2VhcmNoP3E9dGl0bGU6RE5BJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICB9XG4gIClcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZS5ibG9iKCk6IFwiLCByZXNwb25zZS5ibG9iKCkpO1xuICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gIH0pXG4gIC50aGVuKG15QmxvYiA9PiB7XG4gICAgbXlJbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG15QmxvYik7XG4gIH0pXG4gIC5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnN0YXRlKVxuICB9KTtcbiAgICBcblxuXG4gICAgICAgIC8vIGZldGNoKCdodHRwOi8vYXBpLnBsb3Mub3JnL3NlYXJjaD9xPXRpdGxlOkROQScsIHtcbiAgICAvLyAgIG1vZGU6ICduby1jb3JzJyxcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAvLyB9KVxuXG5cblxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8cD5IZWxsbyBmcm9tIGluc2lkZSBCYXNpY0Z1bmN0aW9uLiBUbyBiZSB1c2VkIHRvIG1ha2UgYW4gYXBpIGNhbGwuPC9wPlxuICAgICAgPHA+VGVzdDoge3RoaXMucHJvcHMudGVzdH08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMudGVtcEFQSUNhbGwoXCJCYW0hXCIpfT5DbGVhciBjb25zb2xlLjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLkFQSUNhbGwoXCJCYW0hXCIpfT5BUElDYWxsLjwvYnV0dG9uPlxuICAgIDwvZGl2PjtcbiAgfVxuXG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BasicFunction.js\n");

/***/ }),

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Body; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BasicFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicFunction */ \"./components/BasicFunction.js\");\n\nvar _jsxFileName = \"/Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/nextjs-blog/components/Body.js\";\n\n\nclass Body extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"The Body inside of \", this.props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BasicFunction__WEBPACK_IMPORTED_MODULE_2__.default, {\n        test: this.props.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9Cb2R5LmpzP2ZlY2MiXSwibmFtZXMiOlsiQm9keSIsIlJlYWN0IiwicmVuZGVyIiwicHJvcHMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNQSxJQUFOLFNBQW1CQyx3REFBbkIsQ0FBbUM7QUFDaERDLFFBQU0sR0FBRztBQUNQLHdCQUFPO0FBQUEsOEJBQ1A7QUFBQSwwQ0FBdUIsS0FBS0MsS0FBTCxDQUFXQyxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxlQUVQLDhEQUFDLG1EQUFEO0FBQWUsWUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV0M7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBT0Q7O0FBVCtDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Cb2R5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNpY0Z1bmN0aW9uIGZyb20gJy4vQmFzaWNGdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgPHA+VGhlIEJvZHkgaW5zaWRlIG9mIHt0aGlzLnByb3BzLm5hbWV9PC9wPlxuICAgIDxCYXNpY0Z1bmN0aW9uIHRlc3Q9e3RoaXMucHJvcHMubmFtZX0+PC9CYXNpY0Z1bmN0aW9uPlxuICAgICAgey8qIDxCYXNpY0Z1bmN0aW9uIG5hbWU9XCJvb29vb1wiPjwvQmFzaWNGdW5jdGlvbj4gKi99XG4gICAgICB7LyogPEJhc2ljRnVuY3Rpb24gbmFtZT17dGhpcy5wcm9wcy5uYW1lfT48L0Jhc2ljRnVuY3Rpb24+XG4gICAgICA8QmFzaWNGdW5jdGlvbiBzZWNvbmROYW1lPXt0aGlzLnByb3BzLnNlY29uZE5hbWV9PjwvQmFzaWNGdW5jdGlvbj4gKi99XG4gICAgICA8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Body.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Link */ \"./components/Link.js\");\n\nvar _jsxFileName = \"/Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/nextjs-blog/components/Header.js\";\n\n\nclass Header extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  render(props) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"The Header inside of \", this.props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsInJlbmRlciIsInByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsTUFBTUEsTUFBTixTQUFxQkMsd0RBQXJCLENBQXFDO0FBQ2xEQyxRQUFNLENBQUNDLEtBQUQsRUFBUTtBQUNaLHdCQUFPO0FBQUEsOEJBQ0w7QUFBQSw0Q0FBeUIsS0FBS0EsS0FBTCxDQUFXQyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESyxlQUVQLDhEQUFDLHFEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBSUQ7O0FBTmlEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8cD5UaGUgSGVhZGVyIGluc2lkZSBvZiB7dGhpcy5wcm9wcy5uYW1lfTwvcD5cbiAgICA8TGluayBuYW1lPVwibGlua1wiPjwvTGluaz5cbiAgICA8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/nextjs-blog/components/Link.js\";\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      name: \"Link yo\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        name: \"pablo\",\n        href: \"/about\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          name: \"pablso\",\n          children: \"About Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/blog/hello-world\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Blog Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9MaW5rLmpzPzYwZDgiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUksVUFBSSxFQUFDLFNBQVQ7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLFlBQUksRUFBQyxRQUF4QjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0U7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxtQkFBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7QUFFRCwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGluay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBuYW1lPVwiTGluayB5b1wiPlxuICAgICAgICA8TGluayBuYW1lPVwicGFibG9cIiBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgbmFtZT1cInBhYmxzb1wiPkFib3V0IFVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvaGVsbG8td29ybGRcIj5cbiAgICAgICAgICA8YT5CbG9nIFBvc3Q8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Link.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ about; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Body */ \"./components/Body.js\");\n/* harmony import */ var _components_BasicFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BasicFunction */ \"./components/BasicFunction.js\");\n\nvar _jsxFileName = \"/Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/nextjs-blog/pages/about.js\";\n\n\n\n\nclass about extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Hello from inside about.js.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: \"about.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Body__WEBPACK_IMPORTED_MODULE_3__.default, {\n        secondName: \"abc\",\n        name: \"about.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYWJvdXQuanM/MjZlYyJdLCJuYW1lcyI6WyJhYm91dCIsIlJlYWN0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxLQUFOLFNBQW9CQyx3REFBcEIsQ0FBb0M7QUFDakRDLFFBQU0sR0FBRztBQUNQLHdCQUFPO0FBQUEsOEJBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESyxlQUVMLDhEQUFDLHVEQUFEO0FBQVEsWUFBSSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZLLGVBR0wsOERBQUMscURBQUQ7QUFBTSxrQkFBVSxFQUFDLEtBQWpCO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFNRDs7QUFSZ0QiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQm9keSc7XG5pbXBvcnQgQmFzaWNGdW5jdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2ljRnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxwPkhlbGxvIGZyb20gaW5zaWRlIGFib3V0LmpzLjwvcD5cbiAgICAgIDxIZWFkZXIgbmFtZT1cImFib3V0LmpzXCI+PC9IZWFkZXI+XG4gICAgICA8Qm9keSBzZWNvbmROYW1lPVwiYWJjXCIgbmFtZT1cImFib3V0LmpzXCI+PC9Cb2R5PlxuICAgICAgey8qIDxCb2R5IG5hbWUgPSBcImFib3V0LmpzXCI+PC9Cb2R5PiAqL31cbiAgICA8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/about.js"); });
module.exports = __webpack_exports__;

})();