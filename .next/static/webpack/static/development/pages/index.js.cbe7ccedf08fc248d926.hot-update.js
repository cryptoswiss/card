webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Price.js":
/*!*****************************!*\
  !*** ./components/Price.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

var Price =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Price, _Component);

  function Price(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Price);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Price).call(this, props));
    _this.state = {
      inDollars: '',
      inEuro: '',
      inPounds: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Price, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(URL).then(function (response) {
        return response.data;
      }).then(function (data) {
        _this2.setState({
          inDollars: data.bpi.USD.rate,
          inEuro: data.bpi.EUR.rate,
          inPounds: data.bpi.GBP.rate
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          inDollars = _this$state.inDollars,
          inEuro = _this$state.inEuro,
          inPounds = _this$state.inPounds;
      return __jsx("div", null, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-md-4 container separate"
      }, __jsx("p", {
        "class": "light"
      }, __jsx("span", {
        className: "lightThin"
      }, "BTC/USD:"), __jsx("br", null), " ", inDollars)), __jsx("div", {
        className: "col-md-4 container separate"
      }, __jsx("p", {
        "class": "light"
      }, __jsx("span", {
        className: "lightThin"
      }, "BTC/EUR:"), __jsx("br", null), " ", inEuro)), __jsx("div", {
        className: "col-md-4"
      }, __jsx("p", {
        "class": "light"
      }, __jsx("span", {
        className: "lightThin"
      }, "BTC/GBP:"), __jsx("br", null), " ", inPounds)))));
    }
  }]);

  return Price;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ })

})
//# sourceMappingURL=index.js.cbe7ccedf08fc248d926.hot-update.js.map