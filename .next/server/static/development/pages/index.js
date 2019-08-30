module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title = 'The European Crypto Card'
}) => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
  crossorigin: "anonymous"
}), __jsx("link", {
  href: "/static/css/styles.css",
  rel: "stylesheet",
  type: "text/css"
}))));

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class NavBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", null, __jsx("nav", {
      class: "navbar navbar-expand-lg navbar-light bg-light"
    }, __jsx("a", {
      class: "navbar-brand",
      href: "/"
    }, __jsx("img", {
      src: "/static/img/swisscard-brand.svg",
      alt: "swisscard-brand",
      className: "img-brand"
    }), "swisscard"), __jsx("button", {
      class: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      class: "navbar-toggler-icon"
    })), __jsx("div", {
      class: "collapse navbar-collapse",
      id: "navbarNav"
    }, __jsx("ul", {
      class: "navbar-nav ml-auto"
    }, __jsx("li", {
      class: "nav-item"
    }, __jsx("a", {
      class: "nav-link",
      href: "#"
    }, "About Us"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/Price.js":
/*!*****************************!*\
  !*** ./components/Price.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

class Price extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      inDollars: '',
      inEuro: '',
      inPounds: ''
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL).then(response => response.data).then(data => {
      this.setState({
        inDollars: data.bpi.USD.rate,
        inEuro: data.bpi.EUR.rate,
        inPounds: data.bpi.GBP.rate
      });
    });
  }

  render() {
    const {
      inDollars,
      inEuro,
      inPounds
    } = this.state;
    return __jsx("div", null, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-4 container-separate"
    }, __jsx("p", {
      class: "light"
    }, __jsx("span", {
      className: "lightThin"
    }, "BTC/USD:"), __jsx("br", null), " ", inDollars)), __jsx("div", {
      className: "col-md-4 container-separate"
    }, __jsx("p", {
      class: "light"
    }, __jsx("span", {
      className: "lightThin"
    }, "BTC/EUR:"), __jsx("br", null), " ", inEuro)), __jsx("div", {
      className: "col-md-4"
    }, __jsx("p", {
      class: "light"
    }, __jsx("span", {
      className: "lightThin"
    }, "BTC/GBP:"), __jsx("br", null), " ", inPounds)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./components/Register.js":
/*!********************************!*\
  !*** ./components/Register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class Register extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      data: [],
      id: 0,
      name: '',
      email: '',
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getDataFromDb", () => {
      fetch('http://localhost:3000/api/users.js') // fetch('/api/getData')
      .then(data => data.json()).then(res => this.setState({
        data: res.data
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "putDataToDB", () => {
      let currentIds = this.state.data.map(data => data.id);
      let idToBeAdded = 0;

      while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
      }

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3000/api/putData', {
        name: this.state.name,
        email: this.state.email
      }).then(res => {//on success
      }).catch(error => {//on error
      });
    });
  }

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();

    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({
        intervalIsSet: interval
      });
    }
  } // never let a process live forever
  // always kill a process everytime we are done using it


  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({
        intervalIsSet: null
      });
    }
  } // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries
  // our first get method that uses our backend api to
  // fetch data from our data base


  // render page
  render() {
    const {
      data
    } = this.state;
    return __jsx("div", {
      className: "jsx-183188917"
    }, data.length <= 0 ? 'NO DB ENTRIES YET' : data.map(dat => console.log(dat.id, dat.name, dat.email)), __jsx("div", {
      className: "jsx-183188917" + " " + "container-account"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "container"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "row"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "col-md-12"
    }, __jsx("h1", {
      className: "jsx-183188917" + " " + "text-center"
    }, "Register")))), __jsx("div", {
      className: "jsx-183188917" + " " + "container"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "row"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "col-md-10 m-auto"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "form-group"
    }, __jsx("form", {
      action: "/register",
      method: "POST",
      className: "jsx-183188917" + " " + "form-container"
    }, __jsx("label", {
      for: "name",
      className: "jsx-183188917"
    }, "Name"), __jsx("input", {
      type: "text",
      name: "name",
      onChange: e => this.setState({
        name: e.target.value
      }),
      className: "jsx-183188917" + " " + "form-control animated fadeIn"
    }), __jsx("label", {
      for: "email",
      className: "jsx-183188917"
    }, "Email"), __jsx("input", {
      type: "email",
      name: "email",
      onChange: e => this.setState({
        email: e.target.value
      }),
      className: "jsx-183188917" + " " + "form-control animated fadeIn"
    }), __jsx("label", {
      for: "password",
      className: "jsx-183188917"
    }, "Password"), __jsx("input", {
      type: "password",
      id: "password",
      name: "password",
      className: "jsx-183188917" + " " + "form-control animated fadeIn"
    })), __jsx("div", {
      className: "jsx-183188917" + " " + "modal-margins"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "row"
    }, __jsx("div", {
      className: "jsx-183188917" + " " + "col-md-8 m-auto"
    }, __jsx("button", {
      type: "submit",
      onClick: () => this.putDataToDB(this.state),
      className: "jsx-183188917" + " " + "btn btn-primary btn-block"
    }, "Register")))), __jsx("p", {
      className: "jsx-183188917" + " " + "lead mt-4"
    }, "Have An Account?", " ", __jsx("a", {
      href: "/users/login",
      className: "jsx-183188917" + " " + "register"
    }, "Login"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "183188917"
    }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2h3YXJ6L2NhcmQvY29tcG9uZW50cy9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSzBCIiwiZmlsZSI6Ii9Vc2Vycy9zY2h3YXJ6L2NhcmQvY29tcG9uZW50cy9SZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgb3VyIHN0YXRlXG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBpbnRlcnZhbElzU2V0OiBmYWxzZSxcbiAgICAgICAgICBpZFRvRGVsZXRlOiBudWxsLFxuICAgICAgICAgIGlkVG9VcGRhdGU6IG51bGwsXG4gICAgICAgICAgb2JqZWN0VG9VcGRhdGU6IG51bGwsXG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICAgLy8gd2hlbiBjb21wb25lbnQgbW91bnRzLCBmaXJzdCB0aGluZyBpdCBkb2VzIGlzIGZldGNoIGFsbCBleGlzdGluZyBkYXRhIGluIG91ciBkYlxuICAgICAgICAvLyB0aGVuIHdlIGluY29ycG9yYXRlIGEgcG9sbGluZyBsb2dpYyBzbyB0aGF0IHdlIGNhbiBlYXNpbHkgc2VlIGlmIG91ciBkYiBoYXNcbiAgICAgICAgLy8gY2hhbmdlZCBhbmQgaW1wbGVtZW50IHRob3NlIGNoYW5nZXMgaW50byBvdXIgVUlcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5nZXREYXRhRnJvbURiKCk7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmludGVydmFsSXNTZXQpIHtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2V0RGF0YUZyb21EYiwgMTAwMCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW50ZXJ2YWxJc1NldDogaW50ZXJ2YWwgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gbmV2ZXIgbGV0IGEgcHJvY2VzcyBsaXZlIGZvcmV2ZXJcbiAgICAgICAgLy8gYWx3YXlzIGtpbGwgYSBwcm9jZXNzIGV2ZXJ5dGltZSB3ZSBhcmUgZG9uZSB1c2luZyBpdFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcnZhbElzU2V0KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWxJc1NldCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW50ZXJ2YWxJc1NldDogbnVsbCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBqdXN0IGEgbm90ZSwgaGVyZSwgaW4gdGhlIGZyb250IGVuZCwgd2UgdXNlIHRoZSBpZCBrZXkgb2Ygb3VyIGRhdGEgb2JqZWN0XG4gICAgICAgIC8vIGluIG9yZGVyIHRvIGlkZW50aWZ5IHdoaWNoIHdlIHdhbnQgdG8gVXBkYXRlIG9yIGRlbGV0ZS5cbiAgICAgICAgLy8gZm9yIG91ciBiYWNrIGVuZCwgd2UgdXNlIHRoZSBvYmplY3QgaWQgYXNzaWduZWQgYnkgTW9uZ29EQiB0byBtb2RpZnlcbiAgICAgICAgLy8gZGF0YSBiYXNlIGVudHJpZXNcbiAgICAgIFxuICAgICAgICAvLyBvdXIgZmlyc3QgZ2V0IG1ldGhvZCB0aGF0IHVzZXMgb3VyIGJhY2tlbmQgYXBpIHRvXG4gICAgICAgIC8vIGZldGNoIGRhdGEgZnJvbSBvdXIgZGF0YSBiYXNlXG4gICAgICAgIGdldERhdGFGcm9tRGIgPSAoKSA9PiB7XG4gICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMuanMnKVxuICAgICAgICAgIC8vIGZldGNoKCcvYXBpL2dldERhdGEnKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlcy5kYXRhIH0pKTtcbiAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICAvLyBvdXIgcHV0IG1ldGhvZCB0aGF0IHVzZXMgb3VyIGJhY2tlbmQgYXBpXG4gICAgICAgIC8vIHRvIGNyZWF0ZSBuZXcgcXVlcnkgaW50byBvdXIgZGF0YSBiYXNlXG4gICAgICAgIHB1dERhdGFUb0RCID0gKCkgPT4ge1xuICAgICAgICAgIGxldCBjdXJyZW50SWRzID0gdGhpcy5zdGF0ZS5kYXRhLm1hcCgoZGF0YSkgPT4gZGF0YS5pZCk7XG4gICAgICAgICAgbGV0IGlkVG9CZUFkZGVkID0gMDtcbiAgICAgICAgICB3aGlsZSAoY3VycmVudElkcy5pbmNsdWRlcyhpZFRvQmVBZGRlZCkpIHtcbiAgICAgICAgICAgICsraWRUb0JlQWRkZWQ7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1dERhdGEnLHtcbiAgICAgICAgICAgIG5hbWU6dGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6dGhpcy5zdGF0ZS5lbWFpbFxuICAgICAgICAgIFxuICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIC8vb24gc3VjY2Vzc1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICAgICAgLy9vbiBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIC8vIHJlbmRlciBwYWdlXG4gICAgICBcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7ZGF0YS5sZW5ndGggPD0gMFxuICAgICAgICAgICAgICAgICAgPyAnTk8gREIgRU5UUklFUyBZRVQnXG4gICAgICAgICAgICAgICAgICA6IGRhdGEubWFwKChkYXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXQuaWQsIGRhdC5uYW1lLCBkYXQuZW1haWwgKVxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG0tYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBhY3Rpb249XCIvcmVnaXN0ZXJcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1tYXJnaW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBtLWF1dG9cIj5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnB1dERhdGFUb0RCKHRoaXMuc3RhdGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBIYXZlIEFuIEFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWdpc3RlclwiIGhyZWY9XCIvdXNlcnMvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdfQ== */\n/*@ sourceURL=/Users/schwarz/card/components/Register.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Register */ "./components/Register.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Price */ "./components/Price.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function App() {
  return __jsx("div", {
    className: "jsx-1556347581"
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
    className: "jsx-1556347581" + " " + "centered"
  }, __jsx("img", {
    src: "/static/img/card.svg",
    alt: "swisscard",
    className: "jsx-1556347581" + " " + "img-card"
  })), __jsx("div", {
    className: "jsx-1556347581" + " " + "centered"
  }, __jsx("h1", {
    className: "jsx-1556347581" + " " + "title"
  }, "swisscard"), __jsx("button", {
    type: "button",
    "data-toggle": "modal",
    "data-target": "#exampleModal",
    className: "jsx-1556347581" + " " + "btn btn-primary btn-swisscard"
  }, "Get Started")), __jsx(_components_Price__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    id: "exampleModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    className: "jsx-1556347581" + " " + "modal fade"
  }, __jsx("div", {
    role: "document",
    className: "jsx-1556347581" + " " + "modal-dialog"
  }, __jsx("div", {
    className: "jsx-1556347581" + " " + "modal-content"
  }, __jsx("div", {
    className: "jsx-1556347581" + " " + "modal-header"
  }, __jsx("button", {
    type: "button",
    "data-dismiss": "modal",
    "aria-label": "Close",
    className: "jsx-1556347581" + " " + "close"
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-1556347581"
  }, "\xD7"))), __jsx("div", {
    className: "jsx-1556347581" + " " + "modal-body"
  }, __jsx(_components_Register__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx("div", {
    className: "jsx-1556347581" + " " + "modal-footer"
  }, __jsx("button", {
    type: "button",
    "data-dismiss": "modal",
    className: "jsx-1556347581" + " " + "btn btn-secondary"
  }, "Close"), __jsx("button", {
    type: "button",
    className: "jsx-1556347581" + " " + "btn btn-primary"
  }, "Save changes"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3782269665"
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2h3YXJ6L2NhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQiIsImZpbGUiOiIvVXNlcnMvc2Nod2Fyei9jYXJkL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlZ2lzdGVyXCJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCJcbmltcG9ydCBQcmljZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QcmljZVwiXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICA8TmF2QmFyPlxuICAgICAgPC9OYXZCYXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJkLnN2Z1wiIGFsdD1cInN3aXNzY2FyZFwiIGNsYXNzTmFtZT1cImltZy1jYXJkXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnN3aXNzY2FyZDwvaDE+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc3dpc3NjYXJkXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiPlxuICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UHJpY2U+XG4gICAgICA8L1ByaWNlPlxuXG5cblxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuXG4gICAgICA8UmVnaXN0ZXI+XG4gICAgICA8L1JlZ2lzdGVyPlxuICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEuc2xpbS5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtcThpL1grOTY1RHpPMHJUN2FiSzQxSlN0UUlBcVZnUlZ6cGJ6bzVzbVhLcDRZZlJ2SCs4YWJ0VEUxUGk2aml6b1wiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuNy91bWQvcG9wcGVyLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1VTzJlVDBDcEhxZFNKUTZoSnR5NUtWcGh0UGh6V2o5V08xY2xIVE1HYTNKRFp3cm5RcTRzRjg2ZElITkR6MFcxXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUpqU21WZ3lkMHAzcFhCMXJSaWJaVUFZb0lJeTZPclE2VnJqSUVhRmYvbkpHekl4RkRzZjR4MHhJTStCMDdqUk1cIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl19 */\n/*@ sourceURL=/Users/schwarz/card/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4158932565"
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2h3YXJ6L2NhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR5QiIsImZpbGUiOiIvVXNlcnMvc2Nod2Fyei9jYXJkL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlZ2lzdGVyXCJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCJcbmltcG9ydCBQcmljZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QcmljZVwiXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICA8TmF2QmFyPlxuICAgICAgPC9OYXZCYXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJkLnN2Z1wiIGFsdD1cInN3aXNzY2FyZFwiIGNsYXNzTmFtZT1cImltZy1jYXJkXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnN3aXNzY2FyZDwvaDE+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc3dpc3NjYXJkXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiPlxuICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UHJpY2U+XG4gICAgICA8L1ByaWNlPlxuXG5cblxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuXG4gICAgICA8UmVnaXN0ZXI+XG4gICAgICA8L1JlZ2lzdGVyPlxuICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEuc2xpbS5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtcThpL1grOTY1RHpPMHJUN2FiSzQxSlN0UUlBcVZnUlZ6cGJ6bzVzbVhLcDRZZlJ2SCs4YWJ0VEUxUGk2aml6b1wiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuNy91bWQvcG9wcGVyLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1VTzJlVDBDcEhxZFNKUTZoSnR5NUtWcGh0UGh6V2o5V08xY2xIVE1HYTNKRFp3cm5RcTRzRjg2ZElITkR6MFcxXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUpqU21WZ3lkMHAzcFhCMXJSaWJaVUFZb0lJeTZPclE2VnJqSUVhRmYvbkpHekl4RkRzZjR4MHhJTStCMDdqUk1cIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl19 */\n/*@ sourceURL=/Users/schwarz/card/pages/index.js */"), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossorigin: "anonymous",
    className: "jsx-1556347581"
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
    crossorigin: "anonymous",
    className: "jsx-1556347581"
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
    crossorigin: "anonymous",
    className: "jsx-1556347581"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/schwarz/card/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map