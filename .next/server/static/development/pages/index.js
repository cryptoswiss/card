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
      class: "container-account",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "container",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "row",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "col-md-12",
      className: "jsx-183188917"
    }, __jsx("h1", {
      class: "text-center",
      className: "jsx-183188917"
    }, "Register")))), __jsx("div", {
      class: "container",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "row",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "col-md-10 m-auto",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "form-group",
      className: "jsx-183188917"
    }, __jsx("form", {
      class: "form-container",
      action: "/register",
      method: "POST",
      className: "jsx-183188917"
    }, __jsx("label", {
      for: "name",
      className: "jsx-183188917"
    }, "Name"), __jsx("input", {
      type: "text",
      name: "name",
      class: "form-control animated fadeIn",
      onChange: e => this.setState({
        name: e.target.value
      }),
      className: "jsx-183188917"
    }), __jsx("label", {
      for: "email",
      className: "jsx-183188917"
    }, "Email"), __jsx("input", {
      type: "email",
      name: "email",
      class: "form-control animated fadeIn",
      onChange: e => this.setState({
        email: e.target.value
      }),
      className: "jsx-183188917"
    }), __jsx("label", {
      for: "password",
      className: "jsx-183188917"
    }, "Password"), __jsx("input", {
      type: "password",
      id: "password",
      name: "password",
      class: "form-control animated fadeIn",
      className: "jsx-183188917"
    })), __jsx("div", {
      class: "modal-margins",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "row",
      className: "jsx-183188917"
    }, __jsx("div", {
      class: "col-md-8 m-auto",
      className: "jsx-183188917"
    }, __jsx("button", {
      type: "submit",
      class: "btn btn-primary btn-block",
      onClick: () => this.putDataToDB(this.state),
      className: "jsx-183188917"
    }, "Register")))), __jsx("p", {
      class: "lead mt-4",
      className: "jsx-183188917"
    }, "Have An Account?", " ", __jsx("a", {
      class: "register",
      href: "/users/login",
      className: "jsx-183188917"
    }, "Login"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "183188917"
    }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2h3YXJ6L3N1aXNzZS9jb21wb25lbnRzL1JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1LMEIiLCJmaWxlIjoiL1VzZXJzL3NjaHdhcnovc3Vpc3NlL2NvbXBvbmVudHMvUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgICAgICAvLyBpbml0aWFsaXplIG91ciBzdGF0ZVxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgaW50ZXJ2YWxJc1NldDogZmFsc2UsXG4gICAgICAgICAgaWRUb0RlbGV0ZTogbnVsbCxcbiAgICAgICAgICBpZFRvVXBkYXRlOiBudWxsLFxuICAgICAgICAgIG9iamVjdFRvVXBkYXRlOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIC8vIHdoZW4gY29tcG9uZW50IG1vdW50cywgZmlyc3QgdGhpbmcgaXQgZG9lcyBpcyBmZXRjaCBhbGwgZXhpc3RpbmcgZGF0YSBpbiBvdXIgZGJcbiAgICAgICAgLy8gdGhlbiB3ZSBpbmNvcnBvcmF0ZSBhIHBvbGxpbmcgbG9naWMgc28gdGhhdCB3ZSBjYW4gZWFzaWx5IHNlZSBpZiBvdXIgZGIgaGFzXG4gICAgICAgIC8vIGNoYW5nZWQgYW5kIGltcGxlbWVudCB0aG9zZSBjaGFuZ2VzIGludG8gb3VyIFVJXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIHRoaXMuZ2V0RGF0YUZyb21EYigpO1xuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbnRlcnZhbElzU2V0KSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmdldERhdGFGcm9tRGIsIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludGVydmFsSXNTZXQ6IGludGVydmFsIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIG5ldmVyIGxldCBhIHByb2Nlc3MgbGl2ZSBmb3JldmVyXG4gICAgICAgIC8vIGFsd2F5cyBraWxsIGEgcHJvY2VzcyBldmVyeXRpbWUgd2UgYXJlIGRvbmUgdXNpbmcgaXRcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW50ZXJ2YWxJc1NldCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsSXNTZXQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludGVydmFsSXNTZXQ6IG51bGwgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8ganVzdCBhIG5vdGUsIGhlcmUsIGluIHRoZSBmcm9udCBlbmQsIHdlIHVzZSB0aGUgaWQga2V5IG9mIG91ciBkYXRhIG9iamVjdFxuICAgICAgICAvLyBpbiBvcmRlciB0byBpZGVudGlmeSB3aGljaCB3ZSB3YW50IHRvIFVwZGF0ZSBvciBkZWxldGUuXG4gICAgICAgIC8vIGZvciBvdXIgYmFjayBlbmQsIHdlIHVzZSB0aGUgb2JqZWN0IGlkIGFzc2lnbmVkIGJ5IE1vbmdvREIgdG8gbW9kaWZ5XG4gICAgICAgIC8vIGRhdGEgYmFzZSBlbnRyaWVzXG4gICAgICBcbiAgICAgICAgLy8gb3VyIGZpcnN0IGdldCBtZXRob2QgdGhhdCB1c2VzIG91ciBiYWNrZW5kIGFwaSB0b1xuICAgICAgICAvLyBmZXRjaCBkYXRhIGZyb20gb3VyIGRhdGEgYmFzZVxuICAgICAgICBnZXREYXRhRnJvbURiID0gKCkgPT4ge1xuICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzLmpzJylcbiAgICAgICAgICAvLyBmZXRjaCgnL2FwaS9nZXREYXRhJylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXMuZGF0YSB9KSk7XG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICAgLy8gb3VyIHB1dCBtZXRob2QgdGhhdCB1c2VzIG91ciBiYWNrZW5kIGFwaVxuICAgICAgICAvLyB0byBjcmVhdGUgbmV3IHF1ZXJ5IGludG8gb3VyIGRhdGEgYmFzZVxuICAgICAgICBwdXREYXRhVG9EQiA9ICgpID0+IHtcbiAgICAgICAgICBsZXQgY3VycmVudElkcyA9IHRoaXMuc3RhdGUuZGF0YS5tYXAoKGRhdGEpID0+IGRhdGEuaWQpO1xuICAgICAgICAgIGxldCBpZFRvQmVBZGRlZCA9IDA7XG4gICAgICAgICAgd2hpbGUgKGN1cnJlbnRJZHMuaW5jbHVkZXMoaWRUb0JlQWRkZWQpKSB7XG4gICAgICAgICAgICArK2lkVG9CZUFkZGVkO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wdXREYXRhJyx7XG4gICAgICAgICAgICBuYW1lOnRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOnRoaXMuc3RhdGUuZW1haWxcbiAgICAgICAgICBcbiAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAvL29uIHN1Y2Nlc3NcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcik9PntcbiAgICAgICAgICAgIC8vb24gZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICAvLyByZW5kZXIgcGFnZVxuICAgICAgXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2RhdGEubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgID8gJ05PIERCIEVOVFJJRVMgWUVUJ1xuICAgICAgICAgICAgICAgICAgOiBkYXRhLm1hcCgoZGF0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0LmlkLCBkYXQubmFtZSwgZGF0LmVtYWlsIClcbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTAgbS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1jb250YWluZXJcIiBhY3Rpb249XCIvcmVnaXN0ZXJcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW1hcmdpbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtLWF1dG9cIj5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHV0RGF0YVRvREIodGhpcy5zdGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSGF2ZSBBbiBBY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJyZWdpc3RlclwiIGhyZWY9XCIvdXNlcnMvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdfQ== */\n/*@ sourceURL=/Users/schwarz/suisse/components/Register.js */"));
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
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2h3YXJ6L3N1aXNzZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGtCIiwiZmlsZSI6Ii9Vc2Vycy9zY2h3YXJ6L3N1aXNzZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWdpc3RlclwiXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJpY2VcIlxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXI+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPE5hdkJhcj5cbiAgICAgIDwvTmF2QmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2FyZC5zdmdcIiBhbHQ9XCJzd2lzc2NhcmRcIiBjbGFzc05hbWU9XCJpbWctY2FyZFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5zd2lzc2NhcmQ8L2gxPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXN3aXNzY2FyZFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIj5cbiAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFByaWNlPlxuICAgICAgPC9QcmljZT5cblxuXG5cbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cblxuICAgICAgPFJlZ2lzdGVyPlxuICAgICAgPC9SZWdpc3Rlcj5cbiAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLnNsaW0ubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LXE4aS9YKzk2NUR6TzByVDdhYks0MUpTdFFJQXFWZ1JWenBiem81c21YS3A0WWZSdkgrOGFidFRFMVBpNmppem9cIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjcvdW1kL3BvcHBlci5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVU8yZVQwQ3BIcWRTSlE2aEp0eTVLVnBodFBoeldqOVdPMWNsSFRNR2EzSkRad3JuUXE0c0Y4NmRJSE5EejBXMVwiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1KalNtVmd5ZDBwM3BYQjFyUmliWlVBWW9JSXk2T3JRNlZyaklFYUZmL25KR3pJeEZEc2Y0eDB4SU0rQjA3alJNXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ== */\n/*@ sourceURL=/Users/schwarz/suisse/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4158932565"
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zY2h3YXJ6L3N1aXNzZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RHlCIiwiZmlsZSI6Ii9Vc2Vycy9zY2h3YXJ6L3N1aXNzZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWdpc3RlclwiXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJpY2VcIlxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXI+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPE5hdkJhcj5cbiAgICAgIDwvTmF2QmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2FyZC5zdmdcIiBhbHQ9XCJzd2lzc2NhcmRcIiBjbGFzc05hbWU9XCJpbWctY2FyZFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5zd2lzc2NhcmQ8L2gxPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXN3aXNzY2FyZFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIj5cbiAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFByaWNlPlxuICAgICAgPC9QcmljZT5cblxuXG5cbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cblxuICAgICAgPFJlZ2lzdGVyPlxuICAgICAgPC9SZWdpc3Rlcj5cbiAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLnNsaW0ubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LXE4aS9YKzk2NUR6TzByVDdhYks0MUpTdFFJQXFWZ1JWenBiem81c21YS3A0WWZSdkgrOGFidFRFMVBpNmppem9cIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjcvdW1kL3BvcHBlci5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVU8yZVQwQ3BIcWRTSlE2aEp0eTVLVnBodFBoeldqOVdPMWNsSFRNR2EzSkRad3JuUXE0c0Y4NmRJSE5EejBXMVwiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1KalNtVmd5ZDBwM3BYQjFyUmliWlVBWW9JSXk2T3JRNlZyaklFYUZmL25KR3pJeEZEc2Y0eDB4SU0rQjA3alJNXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ== */\n/*@ sourceURL=/Users/schwarz/suisse/pages/index.js */"), __jsx("script", {
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

module.exports = __webpack_require__(/*! /Users/schwarz/suisse/pages/index.js */"./pages/index.js");


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