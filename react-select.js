module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(4);
var createClass = __webpack_require__(7);

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var AutosizeInput = createClass({
	propTypes: {
		className: PropTypes.string, // className for the outer element
		defaultValue: PropTypes.any, // default field value
		inputClassName: PropTypes.string, // className for the input element
		inputRef: PropTypes.func, // ref callback for the input element
		inputStyle: PropTypes.object, // css styles for the input element
		minWidth: PropTypes.oneOfType([// minimum width for input element
		PropTypes.number, PropTypes.string]),
		onAutosize: PropTypes.func, // onAutosize handler: function(newWidth) {}
		onChange: PropTypes.func, // onChange handler: function(newValue) {}
		placeholder: PropTypes.string, // placeholder text
		placeholderIsMinWidth: PropTypes.bool, // don't collapse size to less than the placeholder
		style: PropTypes.object, // css styles for the outer element
		value: PropTypes.any },
	// field value
	getDefaultProps: function getDefaultProps() {
		return {
			minWidth: 1
		};
	},
	getInitialState: function getInitialState() {
		return {
			inputWidth: this.props.minWidth,
			inputId: '_' + Math.random().toString(36).substr(2, 12)
		};
	},
	componentDidMount: function componentDidMount() {
		this.mounted = true;
		this.copyInputStyles();
		this.updateInputWidth();
	},
	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		if (prevState.inputWidth !== this.state.inputWidth) {
			if (typeof this.props.onAutosize === 'function') {
				this.props.onAutosize(this.state.inputWidth);
			}
		}
		this.updateInputWidth();
	},
	componentWillUnmount: function componentWillUnmount() {
		this.mounted = false;
	},
	inputRef: function inputRef(el) {
		this.input = el;
		if (typeof this.props.inputRef === 'function') {
			this.props.inputRef(el);
		}
	},
	placeHolderSizerRef: function placeHolderSizerRef(el) {
		this.placeHolderSizer = el;
	},
	sizerRef: function sizerRef(el) {
		this.sizer = el;
	},
	copyInputStyles: function copyInputStyles() {
		if (!this.mounted || !window.getComputedStyle) {
			return;
		}
		var inputStyle = this.input && window.getComputedStyle(this.input);
		if (!inputStyle) {
			return;
		}
		var widthNode = this.sizer;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
		widthNode.style.fontWeight = inputStyle.fontWeight;
		widthNode.style.fontStyle = inputStyle.fontStyle;
		widthNode.style.letterSpacing = inputStyle.letterSpacing;
		widthNode.style.textTransform = inputStyle.textTransform;
		if (this.props.placeholder) {
			var placeholderNode = this.placeHolderSizer;
			placeholderNode.style.fontSize = inputStyle.fontSize;
			placeholderNode.style.fontFamily = inputStyle.fontFamily;
			placeholderNode.style.fontWeight = inputStyle.fontWeight;
			placeholderNode.style.fontStyle = inputStyle.fontStyle;
			placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			placeholderNode.style.textTransform = inputStyle.textTransform;
		}
	},
	updateInputWidth: function updateInputWidth() {
		if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
			return;
		}
		var newInputWidth = undefined;
		if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
			newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
		} else {
			newInputWidth = this.sizer.scrollWidth + 2;
		}
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth
			});
		}
	},
	getInput: function getInput() {
		return this.input;
	},
	focus: function focus() {
		this.input.focus();
	},
	blur: function blur() {
		this.input.blur();
	},
	select: function select() {
		this.input.select();
	},
	render: function render() {
		var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
			if (previousValue !== null && previousValue !== undefined) {
				return previousValue;
			}
			return currentValue;
		});

		var wrapperStyle = this.props.style || {};
		if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
		var inputStyle = _extends({}, this.props.inputStyle);
		inputStyle.width = this.state.inputWidth + 'px';
		inputStyle.boxSizing = 'content-box';
		var inputProps = _extends({}, this.props);
		inputProps.className = this.props.inputClassName;
		inputProps.style = inputStyle;
		// ensure props meant for `AutosizeInput` don't end up on the `input`
		delete inputProps.inputClassName;
		delete inputProps.inputStyle;
		delete inputProps.minWidth;
		delete inputProps.onAutosize;
		delete inputProps.placeholderIsMinWidth;
		delete inputProps.inputRef;
		return React.createElement(
			'div',
			{ className: this.props.className, style: wrapperStyle },
			React.createElement('style', { dangerouslySetInnerHTML: {
					__html: ['input#' + this.state.id + '::-ms-clear {display: none;}'].join('\n')
				} }),
			React.createElement('input', _extends({ id: this.state.id }, inputProps, { ref: this.inputRef })),
			React.createElement(
				'div',
				{ ref: this.sizerRef, style: sizerStyle },
				sizerValue
			),
			this.props.placeholder ? React.createElement(
				'div',
				{ ref: this.placeHolderSizerRef, style: sizerStyle },
				this.props.placeholder
			) : null
		);
	}
});

module.exports = AutosizeInput;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("create-react-class");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs2":"react"}
var external_commonjs2_react_ = __webpack_require__(0);
var external_commonjs2_react_default = /*#__PURE__*/__webpack_require__.n(external_commonjs2_react_);

// EXTERNAL MODULE: external {"commonjs2":"react-dom"}
var external_commonjs2_react_dom_ = __webpack_require__(2);
var external_commonjs2_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_commonjs2_react_dom_);

// EXTERNAL MODULE: ./node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(3);
var AutosizeInput_default = /*#__PURE__*/__webpack_require__.n(AutosizeInput);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/utils/defaultArrowRenderer.js

function arrowRenderer(_ref) {
  var onMouseDown = _ref.onMouseDown;
  return external_commonjs2_react_default.a.createElement("span", {
    className: "Select-arrow",
    onMouseDown: onMouseDown
  });
}
;
// CONCATENATED MODULE: ./src/utils/stripDiacritics.js
var map = [{
  'base': 'A',
  'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  'base': 'AA',
  'letters': /[\uA732]/g
}, {
  'base': 'AE',
  'letters': /[\u00C6\u01FC\u01E2]/g
}, {
  'base': 'AO',
  'letters': /[\uA734]/g
}, {
  'base': 'AU',
  'letters': /[\uA736]/g
}, {
  'base': 'AV',
  'letters': /[\uA738\uA73A]/g
}, {
  'base': 'AY',
  'letters': /[\uA73C]/g
}, {
  'base': 'B',
  'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  'base': 'C',
  'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  'base': 'D',
  'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  'base': 'DZ',
  'letters': /[\u01F1\u01C4]/g
}, {
  'base': 'Dz',
  'letters': /[\u01F2\u01C5]/g
}, {
  'base': 'E',
  'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  'base': 'F',
  'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  'base': 'G',
  'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  'base': 'H',
  'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  'base': 'I',
  'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  'base': 'J',
  'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  'base': 'K',
  'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  'base': 'L',
  'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  'base': 'LJ',
  'letters': /[\u01C7]/g
}, {
  'base': 'Lj',
  'letters': /[\u01C8]/g
}, {
  'base': 'M',
  'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  'base': 'N',
  'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  'base': 'NJ',
  'letters': /[\u01CA]/g
}, {
  'base': 'Nj',
  'letters': /[\u01CB]/g
}, {
  'base': 'O',
  'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  'base': 'OI',
  'letters': /[\u01A2]/g
}, {
  'base': 'OO',
  'letters': /[\uA74E]/g
}, {
  'base': 'OU',
  'letters': /[\u0222]/g
}, {
  'base': 'P',
  'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  'base': 'Q',
  'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  'base': 'R',
  'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  'base': 'S',
  'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  'base': 'T',
  'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  'base': 'TZ',
  'letters': /[\uA728]/g
}, {
  'base': 'U',
  'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  'base': 'V',
  'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  'base': 'VY',
  'letters': /[\uA760]/g
}, {
  'base': 'W',
  'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  'base': 'X',
  'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  'base': 'Y',
  'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  'base': 'Z',
  'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  'base': 'a',
  'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  'base': 'aa',
  'letters': /[\uA733]/g
}, {
  'base': 'ae',
  'letters': /[\u00E6\u01FD\u01E3]/g
}, {
  'base': 'ao',
  'letters': /[\uA735]/g
}, {
  'base': 'au',
  'letters': /[\uA737]/g
}, {
  'base': 'av',
  'letters': /[\uA739\uA73B]/g
}, {
  'base': 'ay',
  'letters': /[\uA73D]/g
}, {
  'base': 'b',
  'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  'base': 'c',
  'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  'base': 'd',
  'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  'base': 'dz',
  'letters': /[\u01F3\u01C6]/g
}, {
  'base': 'e',
  'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  'base': 'f',
  'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  'base': 'g',
  'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  'base': 'h',
  'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  'base': 'hv',
  'letters': /[\u0195]/g
}, {
  'base': 'i',
  'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  'base': 'j',
  'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  'base': 'k',
  'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  'base': 'l',
  'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  'base': 'lj',
  'letters': /[\u01C9]/g
}, {
  'base': 'm',
  'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  'base': 'n',
  'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  'base': 'nj',
  'letters': /[\u01CC]/g
}, {
  'base': 'o',
  'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  'base': 'oi',
  'letters': /[\u01A3]/g
}, {
  'base': 'ou',
  'letters': /[\u0223]/g
}, {
  'base': 'oo',
  'letters': /[\uA74F]/g
}, {
  'base': 'p',
  'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  'base': 'q',
  'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  'base': 'r',
  'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  'base': 's',
  'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  'base': 't',
  'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  'base': 'tz',
  'letters': /[\uA729]/g
}, {
  'base': 'u',
  'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  'base': 'v',
  'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  'base': 'vy',
  'letters': /[\uA761]/g
}, {
  'base': 'w',
  'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  'base': 'x',
  'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  'base': 'y',
  'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  'base': 'z',
  'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
function stripDiacritics(str) {
  for (var i = 0; i < map.length; i++) {
    str = str.replace(map[i].letters, map[i].base);
  }

  return str;
}
;
// CONCATENATED MODULE: ./src/utils/defaultFilterOptions.js


function defaultFilterOptions_filterOptions(options, filterValue, excludeOptions, props) {
  var _this = this;

  if (props.ignoreAccents) {
    filterValue = stripDiacritics(filterValue);
  }

  if (props.ignoreCase) {
    filterValue = filterValue.toLowerCase();
  }

  if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
    return i[props.valueKey];
  });
  return options.filter(function (option) {
    if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
    if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
    if (!filterValue) return true;
    var valueTest = String(option[props.valueKey]);
    var labelTest = String(option[props.labelKey]);

    if (props.ignoreAccents) {
      if (props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
      if (props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
    }

    if (props.ignoreCase) {
      if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
      if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
    }

    return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
  });
}

/* harmony default export */ var defaultFilterOptions = (defaultFilterOptions_filterOptions);
// CONCATENATED MODULE: ./src/utils/defaultMenuRenderer.js



function menuRenderer(_ref) {
  var focusedOption = _ref.focusedOption,
      instancePrefix = _ref.instancePrefix,
      labelKey = _ref.labelKey,
      onFocus = _ref.onFocus,
      onSelect = _ref.onSelect,
      optionClassName = _ref.optionClassName,
      optionComponent = _ref.optionComponent,
      optionRenderer = _ref.optionRenderer,
      options = _ref.options,
      valueArray = _ref.valueArray,
      valueKey = _ref.valueKey,
      onOptionRef = _ref.onOptionRef;
  var Option = optionComponent;
  return options.map(function (option, i) {
    var isSelected = valueArray && valueArray.indexOf(option) > -1;
    var isFocused = option === focusedOption;
    var optionClass = classnames_default()(optionClassName, {
      'Select-option': true,
      'is-selected': isSelected,
      'is-focused': isFocused,
      'is-disabled': option.disabled
    });
    return external_commonjs2_react_default.a.createElement(Option, {
      className: optionClass,
      instancePrefix: instancePrefix,
      isDisabled: option.disabled,
      isFocused: isFocused,
      isSelected: isSelected,
      key: "option-".concat(i, "-").concat(option[valueKey]),
      onFocus: onFocus,
      onSelect: onSelect,
      option: option,
      optionIndex: i,
      ref: function ref(_ref2) {
        onOptionRef(_ref2, isFocused);
      }
    }, optionRenderer(option, i));
  });
}

/* harmony default export */ var defaultMenuRenderer = (menuRenderer);
// CONCATENATED MODULE: ./src/utils/defaultClearRenderer.js

function clearRenderer() {
  return external_commonjs2_react_default.a.createElement("span", {
    className: "Select-clear",
    dangerouslySetInnerHTML: {
      __html: '&times;'
    }
  });
}
;
// CONCATENATED MODULE: ./src/Async.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var propTypes = {
  autoload: external_commonjs2_react_default.a.PropTypes.bool.isRequired,
  // automatically call the `loadOptions` prop on-mount; defaults to true
  cache: external_commonjs2_react_default.a.PropTypes.any,
  // object to use to cache results; set to null/false to disable caching
  children: external_commonjs2_react_default.a.PropTypes.func.isRequired,
  // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
  ignoreAccents: external_commonjs2_react_default.a.PropTypes.bool,
  // strip diacritics when filtering; defaults to true
  ignoreCase: external_commonjs2_react_default.a.PropTypes.bool,
  // perform case-insensitive filtering; defaults to true
  loadingPlaceholder: external_commonjs2_react_default.a.PropTypes.oneOfType([// replaces the placeholder while options are loading
  external_commonjs2_react_default.a.PropTypes.string, external_commonjs2_react_default.a.PropTypes.node]),
  loadOptions: external_commonjs2_react_default.a.PropTypes.func.isRequired,
  // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
  options: external_commonjs2_react_["PropTypes"].array.isRequired,
  // array of options
  placeholder: external_commonjs2_react_default.a.PropTypes.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
  external_commonjs2_react_default.a.PropTypes.string, external_commonjs2_react_default.a.PropTypes.node]),
  noResultsText: external_commonjs2_react_default.a.PropTypes.oneOfType([// field noResultsText, displayed when no options come back from the server
  external_commonjs2_react_default.a.PropTypes.string, external_commonjs2_react_default.a.PropTypes.node]),
  onChange: external_commonjs2_react_default.a.PropTypes.func,
  // onChange handler: function (newValue) {}
  searchPromptText: external_commonjs2_react_default.a.PropTypes.oneOfType([// label to prompt for search input
  external_commonjs2_react_default.a.PropTypes.string, external_commonjs2_react_default.a.PropTypes.node]),
  onInputChange: external_commonjs2_react_default.a.PropTypes.func,
  // optional for keeping track of what is being typed
  value: external_commonjs2_react_default.a.PropTypes.any // initial field value

};
var defaultCache = {};
var defaultProps = {
  autoload: true,
  cache: defaultCache,
  children: defaultChildren,
  ignoreAccents: true,
  ignoreCase: true,
  loadingPlaceholder: 'Loading...',
  options: [],
  searchPromptText: 'Type to search'
};

var Async_Async =
/*#__PURE__*/
function (_Component) {
  _inherits(Async, _Component);

  function Async(props, context) {
    var _this;

    _classCallCheck(this, Async);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Async).call(this, props, context));
    _this._cache = props.cache === defaultCache ? {} : props.cache;
    _this.state = {
      isLoading: false,
      options: props.options
    };
    _this._onInputChange = _this._onInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Async, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoload = this.props.autoload;

      if (autoload) {
        this.loadOptions('');
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      var _this2 = this;

      var propertiesToSync = ['options'];
      propertiesToSync.forEach(function (prop) {
        if (_this2.props[prop] !== nextProps[prop]) {
          _this2.setState(_defineProperty({}, prop, nextProps[prop]));
        }
      });
    }
  }, {
    key: "clearOptions",
    value: function clearOptions() {
      this.setState({
        options: []
      });
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(inputValue) {
      var _this3 = this;

      var loadOptions = this.props.loadOptions;
      var cache = this._cache;

      if (cache && cache.hasOwnProperty(inputValue)) {
        this.setState({
          options: cache[inputValue]
        });
        return;
      }

      var callback = function callback(error, data) {
        if (callback === _this3._callback) {
          _this3._callback = null;
          var options = data && data.options || [];

          if (cache) {
            cache[inputValue] = options;
          }

          _this3.setState({
            isLoading: false,
            options: options
          });
        }
      }; // Ignore all but the most recent request


      this._callback = callback;
      var promise = loadOptions(inputValue, callback);

      if (promise) {
        promise.then(function (data) {
          return callback(null, data);
        }, function (error) {
          return callback(error);
        });
      }

      if (this._callback && !this.state.isLoading) {
        this.setState({
          isLoading: true
        });
      }

      return inputValue;
    }
  }, {
    key: "_onInputChange",
    value: function _onInputChange(inputValue) {
      var _this$props = this.props,
          ignoreAccents = _this$props.ignoreAccents,
          ignoreCase = _this$props.ignoreCase,
          onInputChange = _this$props.onInputChange;

      if (ignoreAccents) {
        inputValue = stripDiacritics(inputValue);
      }

      if (ignoreCase) {
        inputValue = inputValue.toLowerCase();
      }

      if (onInputChange) {
        onInputChange(inputValue);
      }

      return this.loadOptions(inputValue);
    }
  }, {
    key: "inputValue",
    value: function inputValue() {
      if (this.select) {
        return this.select.state.inputValue;
      }

      return '';
    }
  }, {
    key: "noResultsText",
    value: function noResultsText() {
      var _this$props2 = this.props,
          loadingPlaceholder = _this$props2.loadingPlaceholder,
          noResultsText = _this$props2.noResultsText,
          searchPromptText = _this$props2.searchPromptText;
      var isLoading = this.state.isLoading;
      var inputValue = this.inputValue();

      if (isLoading) {
        return loadingPlaceholder;
      }

      if (inputValue && noResultsText) {
        return noResultsText;
      }

      return searchPromptText;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.select.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          loadingPlaceholder = _this$props3.loadingPlaceholder,
          placeholder = _this$props3.placeholder;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          options = _this$state.options;
      var props = {
        noResultsText: this.noResultsText(),
        placeholder: isLoading ? loadingPlaceholder : placeholder,
        options: isLoading && loadingPlaceholder ? [] : options,
        ref: function ref(_ref) {
          return _this4.select = _ref;
        },
        onChange: function onChange(newValues) {
          if (_this4.props.multi && _this4.props.value && newValues.length > _this4.props.value.length) {
            _this4.clearOptions();
          }

          _this4.props.onChange(newValues);
        }
      };
      return children(_objectSpread({}, this.props, props, {
        isLoading: isLoading,
        onInputChange: this._onInputChange
      }));
    }
  }]);

  return Async;
}(external_commonjs2_react_["Component"]);


Async_Async.propTypes = propTypes;
Async_Async.defaultProps = defaultProps;

function defaultChildren(props) {
  return external_commonjs2_react_default.a.createElement(src_Select, props);
}

;
// CONCATENATED MODULE: ./src/AsyncCreatable.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function reduce(obj) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(obj).reduce(function (props, key) {
    var value = obj[key];
    if (value !== undefined) props[key] = value;
    return props;
  }, props);
}

var AsyncCreatable = external_commonjs2_react_default.a.createClass({
  displayName: 'AsyncCreatableSelect',
  render: function render() {
    var _this = this;

    return external_commonjs2_react_default.a.createElement(src_Select.Async, this.props, function (asyncProps) {
      return external_commonjs2_react_default.a.createElement(src_Select.Creatable, _this.props, function (creatableProps) {
        return external_commonjs2_react_default.a.createElement(src_Select, _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
          onInputChange: function onInputChange(input) {
            creatableProps.onInputChange(input);
            return asyncProps.onInputChange(input);
          },
          ref: function ref(_ref) {
            creatableProps.ref(_ref);
            asyncProps.ref(_ref);
          }
        }));
      });
    });
  }
});
/* harmony default export */ var src_AsyncCreatable = (AsyncCreatable);
// CONCATENATED MODULE: ./src/Creatable.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Creatable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Creatable_defineProperty(target, key, source[key]); }); } return target; }

function Creatable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Creatable = external_commonjs2_react_default.a.createClass({
  displayName: 'CreatableSelect',
  propTypes: {
    // Child function responsible for creating the inner Select component
    // This component can be used to compose HOCs (eg Creatable and Async)
    // (props: Object): PropTypes.element
    children: external_commonjs2_react_default.a.PropTypes.func,
    // See Select.propTypes.filterOptions
    filterOptions: external_commonjs2_react_default.a.PropTypes.any,
    // Searches for any matching option within the set of options.
    // This function prevents duplicate options from being created.
    // ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
    isOptionUnique: external_commonjs2_react_default.a.PropTypes.func,
    // Determines if the current input text represents a valid option.
    // ({ label: string }): boolean
    isValidNewOption: external_commonjs2_react_default.a.PropTypes.func,
    // See Select.propTypes.menuRenderer
    menuRenderer: external_commonjs2_react_default.a.PropTypes.any,
    // Factory to create new option.
    // ({ label: string, labelKey: string, valueKey: string }): Object
    newOptionCreator: external_commonjs2_react_default.a.PropTypes.func,
    // input change handler: function (inputValue) {}
    onInputChange: external_commonjs2_react_default.a.PropTypes.func,
    // input keyDown handler: function (event) {}
    onInputKeyDown: external_commonjs2_react_default.a.PropTypes.func,
    // new option click handler: function (option) {}
    onNewOptionClick: external_commonjs2_react_default.a.PropTypes.func,
    // See Select.propTypes.options
    options: external_commonjs2_react_default.a.PropTypes.array,
    // Creates prompt/placeholder option text.
    // (filterText: string): string
    promptTextCreator: external_commonjs2_react_default.a.PropTypes.func,
    // Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
    shouldKeyDownEventCreateNewOption: external_commonjs2_react_default.a.PropTypes.func
  },
  // Default prop methods
  statics: {
    isOptionUnique: isOptionUnique,
    isValidNewOption: isValidNewOption,
    newOptionCreator: newOptionCreator,
    promptTextCreator: promptTextCreator,
    shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
  },
  getDefaultProps: function getDefaultProps() {
    return {
      filterOptions: defaultFilterOptions,
      isOptionUnique: isOptionUnique,
      isValidNewOption: isValidNewOption,
      menuRenderer: defaultMenuRenderer,
      newOptionCreator: newOptionCreator,
      promptTextCreator: promptTextCreator,
      shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
    };
  },
  createNewOption: function createNewOption() {
    var _this$props = this.props,
        isValidNewOption = _this$props.isValidNewOption,
        newOptionCreator = _this$props.newOptionCreator,
        onNewOptionClick = _this$props.onNewOptionClick,
        _this$props$options = _this$props.options,
        options = _this$props$options === void 0 ? [] : _this$props$options,
        shouldKeyDownEventCreateNewOption = _this$props.shouldKeyDownEventCreateNewOption;

    if (isValidNewOption({
      label: this.inputValue
    })) {
      var option = newOptionCreator({
        label: this.inputValue,
        labelKey: this.labelKey,
        valueKey: this.valueKey
      });

      var _isOptionUnique = this.isOptionUnique({
        option: option
      }); // Don't add the same option twice.


      if (_isOptionUnique) {
        if (onNewOptionClick) {
          onNewOptionClick(option);
        } else {
          options.unshift(option);
          this.select.selectValue(option);
        }
      }
    }
  },
  filterOptions: function filterOptions() {
    var _this$props2 = this.props,
        filterOptions = _this$props2.filterOptions,
        isValidNewOption = _this$props2.isValidNewOption,
        options = _this$props2.options,
        promptTextCreator = _this$props2.promptTextCreator; // TRICKY Check currently selected options as well.
    // Don't display a create-prompt for a value that's selected.
    // This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

    var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];
    var filteredOptions = filterOptions.apply(void 0, arguments) || [];

    if (isValidNewOption({
      label: this.inputValue
    })) {
      var _newOptionCreator = this.props.newOptionCreator;

      var option = _newOptionCreator({
        label: this.inputValue,
        labelKey: this.labelKey,
        valueKey: this.valueKey
      }); // TRICKY Compare to all options (not just filtered options) in case option has already been selected).
      // For multi-selects, this would remove it from the filtered list.


      var _isOptionUnique2 = this.isOptionUnique({
        option: option,
        options: excludeOptions.concat(filteredOptions)
      });

      if (_isOptionUnique2) {
        var prompt = promptTextCreator(this.inputValue);
        this._createPlaceholderOption = _newOptionCreator({
          label: prompt,
          labelKey: this.labelKey,
          valueKey: this.valueKey
        });
        filteredOptions.unshift(this._createPlaceholderOption);
      }
    }

    return filteredOptions;
  },
  isOptionUnique: function isOptionUnique(_ref) {
    var option = _ref.option,
        options = _ref.options;
    var isOptionUnique = this.props.isOptionUnique;
    options = options || this.select.filterOptions();
    return isOptionUnique({
      labelKey: this.labelKey,
      option: option,
      options: options,
      valueKey: this.valueKey
    });
  },
  menuRenderer: function menuRenderer(params) {
    var menuRenderer = this.props.menuRenderer;
    return menuRenderer(Creatable_objectSpread({}, params, {
      onSelect: this.onOptionSelect,
      selectValue: this.onOptionSelect
    }));
  },
  onInputChange: function onInputChange(input) {
    var onInputChange = this.props.onInputChange;

    if (onInputChange) {
      onInputChange(input);
    } // This value may be needed in between Select mounts (when this.select is null)


    this.inputValue = input;
  },
  onInputKeyDown: function onInputKeyDown(event) {
    var _this$props3 = this.props,
        shouldKeyDownEventCreateNewOption = _this$props3.shouldKeyDownEventCreateNewOption,
        onInputKeyDown = _this$props3.onInputKeyDown;
    var focusedOption = this.select.getFocusedOption();

    if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({
      keyCode: event.keyCode
    })) {
      this.createNewOption(); // Prevent decorated Select from doing anything additional with this keyDown event

      event.preventDefault();
    } else if (onInputKeyDown) {
      onInputKeyDown(event);
    }
  },
  onOptionSelect: function onOptionSelect(option, event) {
    if (option === this._createPlaceholderOption) {
      this.createNewOption();
    } else {
      this.select.selectValue(option);
    }
  },
  render: function render() {
    var _this = this;

    var _this$props4 = this.props,
        newOptionCreator = _this$props4.newOptionCreator,
        shouldKeyDownEventCreateNewOption = _this$props4.shouldKeyDownEventCreateNewOption,
        restProps = _objectWithoutProperties(_this$props4, ["newOptionCreator", "shouldKeyDownEventCreateNewOption"]);

    var children = this.props.children; // We can't use destructuring default values to set the children,
    // because it won't apply work if `children` is null. A falsy check is
    // more reliable in real world use-cases.

    if (!children) {
      children = Creatable_defaultChildren;
    }

    var props = Creatable_objectSpread({}, restProps, {
      allowCreate: true,
      filterOptions: this.filterOptions,
      menuRenderer: this.menuRenderer,
      onInputChange: this.onInputChange,
      onInputKeyDown: this.onInputKeyDown,
      ref: function ref(_ref2) {
        _this.select = _ref2; // These values may be needed in between Select mounts (when this.select is null)

        if (_ref2) {
          _this.labelKey = _ref2.props.labelKey;
          _this.valueKey = _ref2.props.valueKey;
        }
      }
    });

    return children(props);
  }
});

function Creatable_defaultChildren(props) {
  return external_commonjs2_react_default.a.createElement(src_Select, props);
}

;

function isOptionUnique(_ref3) {
  var option = _ref3.option,
      options = _ref3.options,
      labelKey = _ref3.labelKey,
      valueKey = _ref3.valueKey;
  return options.filter(function (existingOption) {
    return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
  }).length === 0;
}

;

function isValidNewOption(_ref4) {
  var label = _ref4.label;
  return !!label;
}

;

function newOptionCreator(_ref5) {
  var label = _ref5.label,
      labelKey = _ref5.labelKey,
      valueKey = _ref5.valueKey;
  var option = {};
  option[valueKey] = label;
  option[labelKey] = label;
  option.className = 'Select-create-option-placeholder';
  return option;
}

;

function promptTextCreator(label) {
  return "Create option \"".concat(label, "\"");
}

function shouldKeyDownEventCreateNewOption(_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 9: // TAB

    case 13: // ENTER

    case 188:
      // COMMA
      return true;
  }

  return false;
}

;
/* harmony default export */ var src_Creatable = (Creatable);
// CONCATENATED MODULE: ./src/Option.js


var Option_Option = external_commonjs2_react_default.a.createClass({
  displayName: "Option",
  propTypes: {
    children: external_commonjs2_react_default.a.PropTypes.node,
    className: external_commonjs2_react_default.a.PropTypes.string,
    // className (based on mouse position)
    instancePrefix: external_commonjs2_react_default.a.PropTypes.string.isRequired,
    // unique prefix for the ids (used for aria)
    isDisabled: external_commonjs2_react_default.a.PropTypes.bool,
    // the option is disabled
    isFocused: external_commonjs2_react_default.a.PropTypes.bool,
    // the option is focused
    isSelected: external_commonjs2_react_default.a.PropTypes.bool,
    // the option is selected
    onFocus: external_commonjs2_react_default.a.PropTypes.func,
    // method to handle mouseEnter on option element
    onSelect: external_commonjs2_react_default.a.PropTypes.func,
    // method to handle click on option element
    onUnfocus: external_commonjs2_react_default.a.PropTypes.func,
    // method to handle mouseLeave on option element
    option: external_commonjs2_react_default.a.PropTypes.object.isRequired,
    // object that is base for that option
    optionIndex: external_commonjs2_react_default.a.PropTypes.number // index of the option, used to generate unique ids for aria

  },
  blockEvent: function blockEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.target.tagName !== 'A' || !('href' in event.target)) {
      return;
    }

    if (event.target.target) {
      window.open(event.target.href, event.target.target);
    } else {
      window.location.href = event.target.href;
    }
  },
  handleMouseDown: function handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  },
  handleMouseEnter: function handleMouseEnter(event) {
    this.onFocus(event);
  },
  handleMouseMove: function handleMouseMove(event) {
    this.onFocus(event);
  },
  handleTouchEnd: function handleTouchEnd(event) {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return;
    this.handleMouseDown(event);
  },
  handleTouchMove: function handleTouchMove(event) {
    // Set a flag that the view is being dragged
    this.dragging = true;
  },
  handleTouchStart: function handleTouchStart(event) {
    // Set a flag that the view is not being dragged
    this.dragging = false;
  },
  onFocus: function onFocus(event) {
    if (!this.props.isFocused) {
      this.props.onFocus(this.props.option, event);
    }
  },
  render: function render() {
    var _this$props = this.props,
        option = _this$props.option,
        instancePrefix = _this$props.instancePrefix,
        optionIndex = _this$props.optionIndex;
    var className = classnames_default()(this.props.className, option.className);
    return option.disabled ? external_commonjs2_react_default.a.createElement("div", {
      className: className,
      onMouseDown: this.blockEvent,
      onClick: this.blockEvent
    }, this.props.children) : external_commonjs2_react_default.a.createElement("div", {
      className: className,
      style: option.style,
      role: "option",
      onMouseDown: this.handleMouseDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseMove: this.handleMouseMove,
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd,
      id: instancePrefix + '-option-' + optionIndex,
      title: option.title
    }, this.props.children);
  }
});
/* harmony default export */ var src_Option = (Option_Option);
// CONCATENATED MODULE: ./src/Value.js


var Value = external_commonjs2_react_default.a.createClass({
  displayName: 'Value',
  propTypes: {
    children: external_commonjs2_react_default.a.PropTypes.node,
    disabled: external_commonjs2_react_default.a.PropTypes.bool,
    // disabled prop passed to ReactSelect
    id: external_commonjs2_react_default.a.PropTypes.string,
    // Unique id for the value - used for aria
    onClick: external_commonjs2_react_default.a.PropTypes.func,
    // method to handle click on value label
    onRemove: external_commonjs2_react_default.a.PropTypes.func,
    // method to handle removal of the value
    value: external_commonjs2_react_default.a.PropTypes.object.isRequired // the option object for this value

  },
  handleMouseDown: function handleMouseDown(event) {
    if (event.type === 'mousedown' && event.button !== 0) {
      return;
    }

    if (this.props.onClick) {
      event.stopPropagation();
      this.props.onClick(this.props.value, event);
      return;
    }

    if (this.props.value.href) {
      event.stopPropagation();
    }
  },
  onRemove: function onRemove(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onRemove(this.props.value);
  },
  handleTouchEndRemove: function handleTouchEndRemove(event) {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return; // Fire the mouse events

    this.onRemove(event);
  },
  handleTouchMove: function handleTouchMove(event) {
    // Set a flag that the view is being dragged
    this.dragging = true;
  },
  handleTouchStart: function handleTouchStart(event) {
    // Set a flag that the view is not being dragged
    this.dragging = false;
  },
  renderRemoveIcon: function renderRemoveIcon() {
    if (this.props.disabled || !this.props.onRemove) return;
    return external_commonjs2_react_default.a.createElement("span", {
      className: "Select-value-icon",
      "aria-hidden": "true",
      onMouseDown: this.onRemove,
      onTouchEnd: this.handleTouchEndRemove,
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove
    }, "\xD7");
  },
  renderLabel: function renderLabel() {
    var className = 'Select-value-label';
    return this.props.onClick || this.props.value.href ? external_commonjs2_react_default.a.createElement("a", {
      className: className,
      href: this.props.value.href,
      target: this.props.value.target,
      onMouseDown: this.handleMouseDown,
      onTouchEnd: this.handleMouseDown
    }, this.props.children) : external_commonjs2_react_default.a.createElement("span", {
      className: className,
      role: "option",
      "aria-selected": "true",
      id: this.props.id
    }, this.props.children);
  },
  render: function render() {
    return external_commonjs2_react_default.a.createElement("div", {
      className: classnames_default()('Select-value', this.props.value.className),
      style: this.props.value.style,
      title: this.props.value.title
    }, this.renderRemoveIcon(), this.renderLabel());
  }
});
/* harmony default export */ var src_Value = (Value);
// CONCATENATED MODULE: ./src/Select.js
function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Select_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Select_typeof = function _typeof(obj) { return typeof obj; }; } else { Select_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Select_typeof(obj); }

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/














function stringifyValue(value) {
  var valueType = Select_typeof(value);

  if (valueType === 'string') {
    return value;
  } else if (valueType === 'object') {
    return JSON.stringify(value);
  } else if (valueType === 'number' || valueType === 'boolean') {
    return String(value);
  } else {
    return '';
  }
}

var stringOrNode = external_commonjs2_react_default.a.PropTypes.oneOfType([external_commonjs2_react_default.a.PropTypes.string, external_commonjs2_react_default.a.PropTypes.node]);
var instanceId = 1;
var Select = external_commonjs2_react_default.a.createClass({
  displayName: 'Select',
  propTypes: {
    addLabelText: external_commonjs2_react_default.a.PropTypes.string,
    // placeholder displayed when you want to add a label on a multi-value input
    'aria-label': external_commonjs2_react_default.a.PropTypes.string,
    // Aria label (for assistive tech)
    'aria-labelledby': external_commonjs2_react_default.a.PropTypes.string,
    // HTML ID of an element that should be used as the label (for assistive tech)
    arrowRenderer: external_commonjs2_react_default.a.PropTypes.func,
    // Create drop-down caret element
    autoBlur: external_commonjs2_react_default.a.PropTypes.bool,
    // automatically blur the component when an option is selected
    autofocus: external_commonjs2_react_default.a.PropTypes.bool,
    // autofocus the component on mount
    autosize: external_commonjs2_react_default.a.PropTypes.bool,
    // whether to enable autosizing or not
    backspaceRemoves: external_commonjs2_react_default.a.PropTypes.bool,
    // whether backspace removes an item if there is no text input
    backspaceToRemoveMessage: external_commonjs2_react_default.a.PropTypes.string,
    // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
    className: external_commonjs2_react_default.a.PropTypes.string,
    // className for the outer element
    clearAllText: stringOrNode,
    // title for the "clear" control when multi: true
    clearRenderer: external_commonjs2_react_default.a.PropTypes.func,
    // create clearable x element
    clearValueText: stringOrNode,
    // title for the "clear" control
    clearable: external_commonjs2_react_default.a.PropTypes.bool,
    // should it be possible to reset value
    deleteRemoves: external_commonjs2_react_default.a.PropTypes.bool,
    // whether backspace removes an item if there is no text input
    delimiter: external_commonjs2_react_default.a.PropTypes.string,
    // delimiter to use to join multiple values for the hidden field value
    disabled: external_commonjs2_react_default.a.PropTypes.bool,
    // whether the Select is disabled or not
    escapeClearsValue: external_commonjs2_react_default.a.PropTypes.bool,
    // whether escape clears the value when the menu is closed
    filterOption: external_commonjs2_react_default.a.PropTypes.func,
    // method to filter a single option (option, filterString)
    filterOptions: external_commonjs2_react_default.a.PropTypes.any,
    // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
    ignoreAccents: external_commonjs2_react_default.a.PropTypes.bool,
    // whether to strip diacritics when filtering
    ignoreCase: external_commonjs2_react_default.a.PropTypes.bool,
    // whether to perform case-insensitive filtering
    inputProps: external_commonjs2_react_default.a.PropTypes.object,
    // custom attributes for the Input
    inputRenderer: external_commonjs2_react_default.a.PropTypes.func,
    // returns a custom input component
    instanceId: external_commonjs2_react_default.a.PropTypes.string,
    // set the components instanceId
    isLoading: external_commonjs2_react_default.a.PropTypes.bool,
    // whether the Select is loading externally or not (such as options being loaded)
    joinValues: external_commonjs2_react_default.a.PropTypes.bool,
    // joins multiple values into a single form field with the delimiter (legacy mode)
    labelKey: external_commonjs2_react_default.a.PropTypes.string,
    // path of the label value in option objects
    matchPos: external_commonjs2_react_default.a.PropTypes.string,
    // (any|start) match the start or entire string when filtering
    matchProp: external_commonjs2_react_default.a.PropTypes.string,
    // (any|label|value) which option property to filter on
    menuBuffer: external_commonjs2_react_default.a.PropTypes.number,
    // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
    menuContainerStyle: external_commonjs2_react_default.a.PropTypes.object,
    // optional style to apply to the menu container
    menuRenderer: external_commonjs2_react_default.a.PropTypes.func,
    // renders a custom menu with options
    menuStyle: external_commonjs2_react_default.a.PropTypes.object,
    // optional style to apply to the menu
    multi: external_commonjs2_react_default.a.PropTypes.bool,
    // multi-value input
    name: external_commonjs2_react_default.a.PropTypes.string,
    // generates a hidden <input /> tag with this field name for html forms
    noResultsText: stringOrNode,
    // placeholder displayed when there are no matching search results
    onBlur: external_commonjs2_react_default.a.PropTypes.func,
    // onBlur handler: function (event) {}
    onBlurResetsInput: external_commonjs2_react_default.a.PropTypes.bool,
    // whether input is cleared on blur
    onChange: external_commonjs2_react_default.a.PropTypes.func,
    // onChange handler: function (newValue) {}
    onClose: external_commonjs2_react_default.a.PropTypes.func,
    // fires when the menu is closed
    onCloseResetsInput: external_commonjs2_react_default.a.PropTypes.bool,
    // whether input is cleared when menu is closed through the arrow
    onFocus: external_commonjs2_react_default.a.PropTypes.func,
    // onFocus handler: function (event) {}
    onInputChange: external_commonjs2_react_default.a.PropTypes.func,
    // onInputChange handler: function (inputValue) {}
    onInputKeyDown: external_commonjs2_react_default.a.PropTypes.func,
    // input keyDown handler: function (event) {}
    onMenuScrollToBottom: external_commonjs2_react_default.a.PropTypes.func,
    // fires when the menu is scrolled to the bottom; can be used to paginate options
    onOpen: external_commonjs2_react_default.a.PropTypes.func,
    // fires when the menu is opened
    onValueClick: external_commonjs2_react_default.a.PropTypes.func,
    // onClick handler for value labels: function (value, event) {}
    openAfterFocus: external_commonjs2_react_default.a.PropTypes.bool,
    // boolean to enable opening dropdown when focused
    openOnFocus: external_commonjs2_react_default.a.PropTypes.bool,
    // always open options menu on focus
    optionClassName: external_commonjs2_react_default.a.PropTypes.string,
    // additional class(es) to apply to the <Option /> elements
    optionComponent: external_commonjs2_react_default.a.PropTypes.func,
    // option component to render in dropdown
    optionRenderer: external_commonjs2_react_default.a.PropTypes.func,
    // optionRenderer: function (option) {}
    options: external_commonjs2_react_default.a.PropTypes.array,
    // array of options
    pageSize: external_commonjs2_react_default.a.PropTypes.number,
    // number of entries to page when using page up/down keys
    placeholder: stringOrNode,
    // field placeholder, displayed when there's no value
    required: external_commonjs2_react_default.a.PropTypes.bool,
    // applies HTML5 required attribute when needed
    resetValue: external_commonjs2_react_default.a.PropTypes.any,
    // value to use when you clear the control
    scrollMenuIntoView: external_commonjs2_react_default.a.PropTypes.bool,
    // boolean to enable the viewport to shift so that the full menu fully visible when engaged
    searchable: external_commonjs2_react_default.a.PropTypes.bool,
    // whether to enable searching feature or not
    simpleValue: external_commonjs2_react_default.a.PropTypes.bool,
    // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
    style: external_commonjs2_react_default.a.PropTypes.object,
    // optional style to apply to the control
    tabIndex: external_commonjs2_react_default.a.PropTypes.string,
    // optional tab index of the control
    tabSelectsValue: external_commonjs2_react_default.a.PropTypes.bool,
    // whether to treat tabbing out while focused to be value selection
    value: external_commonjs2_react_default.a.PropTypes.any,
    // initial field value
    valueComponent: external_commonjs2_react_default.a.PropTypes.func,
    // value component to render
    valueKey: external_commonjs2_react_default.a.PropTypes.string,
    // path of the label value in option objects
    valueRenderer: external_commonjs2_react_default.a.PropTypes.func,
    // valueRenderer: function (option) {}
    wrapperStyle: external_commonjs2_react_default.a.PropTypes.object // optional style to apply to the component wrapper

  },
  statics: {
    Async: Async_Async,
    AsyncCreatable: src_AsyncCreatable,
    Creatable: src_Creatable
  },
  getDefaultProps: function getDefaultProps() {
    return {
      addLabelText: 'Add "{label}"?',
      arrowRenderer: arrowRenderer,
      autosize: true,
      backspaceRemoves: true,
      backspaceToRemoveMessage: 'Press backspace to remove {label}',
      clearable: true,
      clearAllText: 'Clear all',
      clearRenderer: clearRenderer,
      clearValueText: 'Clear value',
      deleteRemoves: true,
      delimiter: ',',
      disabled: false,
      escapeClearsValue: true,
      filterOptions: defaultFilterOptions,
      ignoreAccents: true,
      ignoreCase: true,
      inputProps: {},
      isLoading: false,
      joinValues: false,
      labelKey: 'label',
      matchPos: 'any',
      matchProp: 'any',
      menuBuffer: 0,
      menuRenderer: defaultMenuRenderer,
      multi: false,
      noResultsText: 'No results found',
      onBlurResetsInput: true,
      onCloseResetsInput: true,
      openAfterFocus: false,
      optionComponent: src_Option,
      pageSize: 5,
      placeholder: 'Select...',
      required: false,
      scrollMenuIntoView: true,
      searchable: true,
      simpleValue: false,
      tabSelectsValue: true,
      valueComponent: src_Value,
      valueKey: 'value'
    };
  },
  getInitialState: function getInitialState() {
    return {
      inputValue: '',
      isFocused: false,
      isOpen: false,
      isPseudoFocused: false,
      required: false
    };
  },
  componentWillMount: function componentWillMount() {
    this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
    var valueArray = this.getValueArray(this.props.value);

    if (this.props.required) {
      this.setState({
        required: this.handleRequired(valueArray[0], this.props.multi)
      });
    }
  },
  componentDidMount: function componentDidMount() {
    if (this.props.autofocus) {
      this.focus();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var valueArray = this.getValueArray(nextProps.value, nextProps);

    if (nextProps.required) {
      this.setState({
        required: this.handleRequired(valueArray[0], nextProps.multi)
      });
    }
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen !== this.state.isOpen) {
      this.toggleTouchOutsideEvent(nextState.isOpen);
      var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
      handler && handler();
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // focus to the selected option
    if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
      var focusedOptionNode = external_commonjs2_react_dom_default.a.findDOMNode(this.focused);
      var menuNode = external_commonjs2_react_dom_default.a.findDOMNode(this.menu);
      menuNode.scrollTop = focusedOptionNode.offsetTop;
      this.hasScrolledToOption = true;
    } else if (!this.state.isOpen) {
      this.hasScrolledToOption = false;
    }

    if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
      this._scrollToFocusedOptionOnUpdate = false;
      var focusedDOM = external_commonjs2_react_dom_default.a.findDOMNode(this.focused);
      var menuDOM = external_commonjs2_react_dom_default.a.findDOMNode(this.menu);
      var focusedRect = focusedDOM.getBoundingClientRect();
      var menuRect = menuDOM.getBoundingClientRect();

      if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
        menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
      }
    }

    if (this.props.scrollMenuIntoView && this.menuContainer) {
      var menuContainerRect = this.menuContainer.getBoundingClientRect();

      if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
        window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
      }
    }

    if (prevProps.disabled !== this.props.disabled) {
      this.setState({
        isFocused: false
      }); // eslint-disable-line react/no-did-update-set-state

      this.closeMenu();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (!document.removeEventListener && document.detachEvent) {
      document.detachEvent('ontouchstart', this.handleTouchOutside);
    } else {
      document.removeEventListener('touchstart', this.handleTouchOutside);
    }
  },
  toggleTouchOutsideEvent: function toggleTouchOutsideEvent(enabled) {
    if (enabled) {
      if (!document.addEventListener && document.attachEvent) {
        document.attachEvent('ontouchstart', this.handleTouchOutside);
      } else {
        document.addEventListener('touchstart', this.handleTouchOutside);
      }
    } else {
      if (!document.removeEventListener && document.detachEvent) {
        document.detachEvent('ontouchstart', this.handleTouchOutside);
      } else {
        document.removeEventListener('touchstart', this.handleTouchOutside);
      }
    }
  },
  handleTouchOutside: function handleTouchOutside(event) {
    // handle touch outside on ios to dismiss menu
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.closeMenu();
    }
  },
  focus: function focus() {
    if (!this.input) return;
    this.input.focus();

    if (this.props.openAfterFocus) {
      this.setState({
        isOpen: true
      });
    }
  },
  blurInput: function blurInput() {
    if (!this.input) return;
    this.input.blur();
  },
  handleTouchMove: function handleTouchMove(event) {
    // Set a flag that the view is being dragged
    this.dragging = true;
  },
  handleTouchStart: function handleTouchStart(event) {
    // Set a flag that the view is not being dragged
    this.dragging = false;
  },
  handleTouchEnd: function handleTouchEnd(event) {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return; // Fire the mouse events

    this.handleMouseDown(event);
  },
  handleTouchEndClearValue: function handleTouchEndClearValue(event) {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return; // Clear the value

    this.clearValue(event);
  },
  handleMouseDown: function handleMouseDown(event) {
    // if the event was triggered by a mousedown and not the primary
    // button, or if the component is disabled, ignore it.
    if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
      return;
    }

    if (event.target.tagName === 'INPUT') {
      return;
    } // prevent default event handlers


    event.stopPropagation();
    event.preventDefault(); // for the non-searchable select, toggle the menu

    if (!this.props.searchable) {
      this.focus();
      return this.setState({
        isOpen: !this.state.isOpen
      });
    }

    if (this.state.isFocused) {
      // On iOS, we can get into a state where we think the input is focused but it isn't really,
      // since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
      // Call focus() again here to be safe.
      this.focus();
      var input = this.input;

      if (typeof input.getInput === 'function') {
        // Get the actual DOM input if the ref is an <AutosizeInput /> component
        input = input.getInput();
      } // clears the value so that the cursor will be at the end of input when the component re-renders


      input.value = ''; // if the input is focused, ensure the menu is open

      this.setState({
        isOpen: true,
        isPseudoFocused: false
      });
    } else {
      // otherwise, focus the input and open the menu
      this._openAfterFocus = this.props.openOnFocus;
      this.focus();
    }
  },
  handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
    // if the event was triggered by a mousedown and not the primary
    // button, or if the component is disabled, ignore it.
    if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
      return;
    } // If the menu isn't open, let the event bubble to the main handleMouseDown


    if (!this.state.isOpen) {
      return;
    } // prevent default event handlers


    event.stopPropagation();
    event.preventDefault(); // close the menu

    this.closeMenu();
  },
  handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
    // if the event was triggered by a mousedown and not the primary
    // button, or if the component is disabled, ignore it.
    if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();
    this._openAfterFocus = true;
    this.focus();
  },
  closeMenu: function closeMenu() {
    if (this.props.onCloseResetsInput) {
      this.setState({
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi,
        inputValue: ''
      });
    } else {
      this.setState({
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi,
        inputValue: this.state.inputValue
      });
    }

    this.hasScrolledToOption = false;
  },
  handleInputFocus: function handleInputFocus(event) {
    if (this.props.disabled) return;
    var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    this.setState({
      isFocused: true,
      isOpen: isOpen
    });
    this._openAfterFocus = false;
  },
  handleInputBlur: function handleInputBlur(event) {
    // The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
    if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
      this.focus();
      return;
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    var onBlurredState = {
      isFocused: false,
      isOpen: false,
      isPseudoFocused: false
    };

    if (this.props.onBlurResetsInput) {
      onBlurredState.inputValue = '';
    }

    this.setState(onBlurredState);
  },
  handleInputChange: function handleInputChange(event) {
    var newInputValue = event.target.value;

    if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
      var nextState = this.props.onInputChange(newInputValue); // Note: != used deliberately here to catch undefined and null

      if (nextState != null && Select_typeof(nextState) !== 'object') {
        newInputValue = '' + nextState;
      }
    }

    this.setState({
      isOpen: true,
      isPseudoFocused: false,
      inputValue: newInputValue
    });
  },
  handleKeyDown: function handleKeyDown(event) {
    if (this.props.disabled) return;

    if (typeof this.props.onInputKeyDown === 'function') {
      this.props.onInputKeyDown(event);

      if (event.defaultPrevented) {
        return;
      }
    }

    switch (event.keyCode) {
      case 8:
        // backspace
        if (!this.state.inputValue && this.props.backspaceRemoves) {
          event.preventDefault();
          this.popValue();
        }

        return;

      case 9:
        // tab
        if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
          return;
        }

        this.selectFocusedOption();
        return;

      case 13:
        // enter
        if (!this.state.isOpen) return;
        event.stopPropagation();
        this.selectFocusedOption();
        break;

      case 27:
        // escape
        if (this.state.isOpen) {
          this.closeMenu();
          event.stopPropagation();
        } else if (this.props.clearable && this.props.escapeClearsValue) {
          this.clearValue(event);
          event.stopPropagation();
        }

        break;

      case 38:
        // up
        this.focusPreviousOption();
        break;

      case 40:
        // down
        this.focusNextOption();
        break;

      case 33:
        // page up
        this.focusPageUpOption();
        break;

      case 34:
        // page down
        this.focusPageDownOption();
        break;

      case 35:
        // end key
        if (event.shiftKey) {
          return;
        }

        this.focusEndOption();
        break;

      case 36:
        // home key
        if (event.shiftKey) {
          return;
        }

        this.focusStartOption();
        break;

      case 46:
        // backspace
        if (!this.state.inputValue && this.props.deleteRemoves) {
          event.preventDefault();
          this.popValue();
        }

        return;

      default:
        return;
    }

    event.preventDefault();
  },
  handleValueClick: function handleValueClick(option, event) {
    if (!this.props.onValueClick) return;
    this.props.onValueClick(option, event);
  },
  handleMenuScroll: function handleMenuScroll(event) {
    if (!this.props.onMenuScrollToBottom) return;
    var target = event.target;

    if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
      this.props.onMenuScrollToBottom();
    }
  },
  handleRequired: function handleRequired(value, multi) {
    if (!value) return true;
    return multi ? value.length === 0 : Object.keys(value).length === 0;
  },
  getOptionLabel: function getOptionLabel(op) {
    return op[this.props.labelKey];
  },

  /**
   * Turns a value into an array from the given options
   * @param	{String|Number|Array}	value		- the value of the select input
   * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */
  getValueArray: function getValueArray(value, nextProps) {
    var _this = this;

    /** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
    var props = Select_typeof(nextProps) === 'object' ? nextProps : this.props;

    if (props.multi) {
      if (typeof value === 'string') value = value.split(props.delimiter);

      if (!Array.isArray(value)) {
        if (value === null || value === undefined) return [];
        value = [value];
      }

      return value.map(function (value) {
        return _this.expandValue(value, props);
      }).filter(function (i) {
        return i;
      });
    }

    var expandedValue = this.expandValue(value, props);
    return expandedValue ? [expandedValue] : [];
  },

  /**
   * Retrieve a value from the given options and valueKey
   * @param	{String|Number|Array}	value	- the selected value(s)
   * @param	{Object}		props	- the Select component's props (or nextProps)
   */
  expandValue: function expandValue(value, props) {
    var valueType = Select_typeof(value);

    if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
    var options = props.options,
        valueKey = props.valueKey;
    if (!options) return;

    for (var i = 0; i < options.length; i++) {
      if (options[i][valueKey] === value) return options[i];
    }
  },
  setValue: function setValue(value) {
    var _this2 = this;

    if (this.props.autoBlur) {
      this.blurInput();
    }

    if (!this.props.onChange) return;

    if (this.props.required) {
      var required = this.handleRequired(value, this.props.multi);
      this.setState({
        required: required
      });
    }

    if (this.props.simpleValue && value) {
      value = this.props.multi ? value.map(function (i) {
        return i[_this2.props.valueKey];
      }).join(this.props.delimiter) : value[this.props.valueKey];
    }

    this.props.onChange(value);
  },
  selectValue: function selectValue(value) {
    var _this3 = this;

    //NOTE: update value in the callback to make sure the input value is empty so that there are no styling issues (Chrome had issue otherwise)
    this.hasScrolledToOption = false;

    if (this.props.multi) {
      this.setState({
        inputValue: '',
        focusedIndex: null
      }, function () {
        _this3.addValue(value);
      });
    } else {
      this.setState({
        isOpen: false,
        inputValue: '',
        isPseudoFocused: this.state.isFocused
      }, function () {
        _this3.setValue(value);
      });
    }
  },
  addValue: function addValue(value) {
    var valueArray = this.getValueArray(this.props.value);

    var visibleOptions = this._visibleOptions.filter(function (val) {
      return !val.disabled;
    });

    var lastValueIndex = visibleOptions.indexOf(value);
    this.setValue(valueArray.concat(value));

    if (visibleOptions.length - 1 === lastValueIndex) {
      // the last option was selected; focus the second-last one
      this.focusOption(visibleOptions[lastValueIndex - 1]);
    } else if (visibleOptions.length > lastValueIndex) {
      // focus the option below the selected one
      this.focusOption(visibleOptions[lastValueIndex + 1]);
    }
  },
  popValue: function popValue() {
    var valueArray = this.getValueArray(this.props.value);
    if (!valueArray.length) return;
    if (valueArray[valueArray.length - 1].clearableValue === false) return;
    this.setValue(valueArray.slice(0, valueArray.length - 1));
  },
  removeValue: function removeValue(value) {
    var valueArray = this.getValueArray(this.props.value);
    this.setValue(valueArray.filter(function (i) {
      return i !== value;
    }));
    this.focus();
  },
  clearValue: function clearValue(event) {
    // if the event was triggered by a mousedown and not the primary
    // button, ignore it.
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();
    this.setValue(this.getResetValue());
    this.setState({
      isOpen: false,
      inputValue: ''
    }, this.focus);
  },
  getResetValue: function getResetValue() {
    if (this.props.resetValue !== undefined) {
      return this.props.resetValue;
    } else if (this.props.multi) {
      return [];
    } else {
      return null;
    }
  },
  focusOption: function focusOption(option) {
    this.setState({
      focusedOption: option
    });
  },
  focusNextOption: function focusNextOption() {
    this.focusAdjacentOption('next');
  },
  focusPreviousOption: function focusPreviousOption() {
    this.focusAdjacentOption('previous');
  },
  focusPageUpOption: function focusPageUpOption() {
    this.focusAdjacentOption('page_up');
  },
  focusPageDownOption: function focusPageDownOption() {
    this.focusAdjacentOption('page_down');
  },
  focusStartOption: function focusStartOption() {
    this.focusAdjacentOption('start');
  },
  focusEndOption: function focusEndOption() {
    this.focusAdjacentOption('end');
  },
  focusAdjacentOption: function focusAdjacentOption(dir) {
    var options = this._visibleOptions.map(function (option, index) {
      return {
        option: option,
        index: index
      };
    }).filter(function (option) {
      return !option.option.disabled;
    });

    this._scrollToFocusedOptionOnUpdate = true;

    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
        inputValue: '',
        focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
      });
      return;
    }

    if (!options.length) return;
    var focusedIndex = -1;

    for (var i = 0; i < options.length; i++) {
      if (this._focusedOption === options[i].option) {
        focusedIndex = i;
        break;
      }
    }

    if (dir === 'next' && focusedIndex !== -1) {
      focusedIndex = (focusedIndex + 1) % options.length;
    } else if (dir === 'previous') {
      if (focusedIndex > 0) {
        focusedIndex = focusedIndex - 1;
      } else {
        focusedIndex = options.length - 1;
      }
    } else if (dir === 'start') {
      focusedIndex = 0;
    } else if (dir === 'end') {
      focusedIndex = options.length - 1;
    } else if (dir === 'page_up') {
      var potentialIndex = focusedIndex - this.props.pageSize;

      if (potentialIndex < 0) {
        focusedIndex = 0;
      } else {
        focusedIndex = potentialIndex;
      }
    } else if (dir === 'page_down') {
      var potentialIndex = focusedIndex + this.props.pageSize;

      if (potentialIndex > options.length - 1) {
        focusedIndex = options.length - 1;
      } else {
        focusedIndex = potentialIndex;
      }
    }

    if (focusedIndex === -1) {
      focusedIndex = 0;
    }

    this.setState({
      focusedIndex: options[focusedIndex].index,
      focusedOption: options[focusedIndex].option
    });
  },
  getFocusedOption: function getFocusedOption() {
    return this._focusedOption;
  },
  getInputValue: function getInputValue() {
    return this.state.inputValue;
  },
  selectFocusedOption: function selectFocusedOption() {
    if (this._focusedOption) {
      return this.selectValue(this._focusedOption);
    }
  },
  renderLoading: function renderLoading() {
    if (!this.props.isLoading) return;
    return external_commonjs2_react_default.a.createElement("span", {
      className: "Select-loading-zone",
      "aria-hidden": "true"
    }, external_commonjs2_react_default.a.createElement("span", {
      className: "Select-loading"
    }));
  },
  renderValue: function renderValue(valueArray, isOpen) {
    var _this4 = this;

    var renderLabel = this.props.valueRenderer || this.getOptionLabel;
    var ValueComponent = this.props.valueComponent;

    if (!valueArray.length) {
      return !this.state.inputValue ? external_commonjs2_react_default.a.createElement("div", {
        className: "Select-placeholder"
      }, this.props.placeholder) : null;
    }

    var onClick = this.props.onValueClick ? this.handleValueClick : null;

    if (this.props.multi) {
      return valueArray.map(function (value, i) {
        return external_commonjs2_react_default.a.createElement(ValueComponent, {
          id: _this4._instancePrefix + '-value-' + i,
          instancePrefix: _this4._instancePrefix,
          disabled: _this4.props.disabled || value.clearableValue === false,
          key: "value-".concat(i, "-").concat(value[_this4.props.valueKey]),
          onClick: onClick,
          onRemove: _this4.removeValue,
          value: value
        }, renderLabel(value, i), external_commonjs2_react_default.a.createElement("span", {
          className: "Select-aria-only"
        }, "\xA0"));
      });
    } else if (!this.state.inputValue) {
      if (isOpen) onClick = null;
      return external_commonjs2_react_default.a.createElement(ValueComponent, {
        id: this._instancePrefix + '-value-item',
        disabled: this.props.disabled,
        instancePrefix: this._instancePrefix,
        onClick: onClick,
        value: valueArray[0]
      }, renderLabel(valueArray[0]));
    }
  },
  renderInput: function renderInput(valueArray, focusedOptionIndex) {
    var _classNames,
        _this5 = this;

    var className = classnames_default()('Select-input', this.props.inputProps.className);
    var isOpen = !!this.state.isOpen;
    var ariaOwns = classnames_default()((_classNames = {}, Select_defineProperty(_classNames, this._instancePrefix + '-list', isOpen), Select_defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames)); // TODO: Check how this project includes Object.assign()

    var inputProps = Object.assign({}, this.props.inputProps, {
      role: 'combobox',
      'aria-expanded': '' + isOpen,
      'aria-owns': ariaOwns,
      'aria-haspopup': '' + isOpen,
      'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
      'aria-labelledby': this.props['aria-labelledby'],
      'aria-label': this.props['aria-label'],
      className: className,
      tabIndex: this.props.tabIndex,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      ref: function ref(_ref) {
        return _this5.input = _ref;
      },
      required: this.state.required,
      value: this.state.inputValue
    });

    if (this.props.inputRenderer) {
      return this.props.inputRenderer(inputProps);
    }

    if (this.props.disabled || !this.props.searchable) {
      var _this$props$inputProp = this.props.inputProps,
          inputClassName = _this$props$inputProp.inputClassName,
          divProps = Select_objectWithoutProperties(_this$props$inputProp, ["inputClassName"]);

      return external_commonjs2_react_default.a.createElement("div", Select_extends({}, divProps, {
        role: "combobox",
        "aria-expanded": isOpen,
        "aria-owns": isOpen ? this._instancePrefix + '-list' : this._instancePrefix + '-value',
        "aria-activedescendant": isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
        className: className,
        tabIndex: this.props.tabIndex || 0,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        ref: function ref(_ref2) {
          return _this5.input = _ref2;
        },
        "aria-readonly": '' + !!this.props.disabled,
        style: {
          border: 0,
          width: 1,
          display: 'inline-block'
        }
      }));
    }

    if (this.props.autosize) {
      return external_commonjs2_react_default.a.createElement(AutosizeInput_default.a, Select_extends({}, inputProps, {
        minWidth: "5"
      }));
    }

    return external_commonjs2_react_default.a.createElement("div", {
      className: className
    }, external_commonjs2_react_default.a.createElement("input", inputProps));
  },
  renderClear: function renderClear() {
    if (!this.props.clearable || !this.props.value || this.props.value === 0 || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
    var clear = this.props.clearRenderer();
    return external_commonjs2_react_default.a.createElement("span", {
      className: "Select-clear-zone",
      title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
      "aria-label": this.props.multi ? this.props.clearAllText : this.props.clearValueText,
      onMouseDown: this.clearValue,
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEndClearValue
    }, clear);
  },
  renderArrow: function renderArrow() {
    var onMouseDown = this.handleMouseDownOnArrow;
    var isOpen = this.state.isOpen;
    var arrow = this.props.arrowRenderer({
      onMouseDown: onMouseDown,
      isOpen: isOpen
    });
    return external_commonjs2_react_default.a.createElement("span", {
      className: "Select-arrow-zone",
      onMouseDown: onMouseDown
    }, arrow);
  },
  filterOptions: function filterOptions(excludeOptions) {
    var filterValue = this.state.inputValue;
    var options = this.props.options || [];

    if (this.props.filterOptions) {
      // Maintain backwards compatibility with boolean attribute
      var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : defaultFilterOptions;
      return filterOptions(options, filterValue, excludeOptions, {
        filterOption: this.props.filterOption,
        ignoreAccents: this.props.ignoreAccents,
        ignoreCase: this.props.ignoreCase,
        labelKey: this.props.labelKey,
        matchPos: this.props.matchPos,
        matchProp: this.props.matchProp,
        valueKey: this.props.valueKey
      });
    } else {
      return options;
    }
  },
  onOptionRef: function onOptionRef(ref, isFocused) {
    if (isFocused) {
      this.focused = ref;
    }
  },
  renderMenu: function renderMenu(options, valueArray, focusedOption) {
    if (options && options.length) {
      return this.props.menuRenderer({
        focusedOption: focusedOption,
        focusOption: this.focusOption,
        instancePrefix: this._instancePrefix,
        labelKey: this.props.labelKey,
        onFocus: this.focusOption,
        onSelect: this.selectValue,
        optionClassName: this.props.optionClassName,
        optionComponent: this.props.optionComponent,
        optionRenderer: this.props.optionRenderer || this.getOptionLabel,
        options: options,
        selectValue: this.selectValue,
        valueArray: valueArray,
        valueKey: this.props.valueKey,
        onOptionRef: this.onOptionRef
      });
    } else if (this.props.noResultsText) {
      return external_commonjs2_react_default.a.createElement("div", {
        className: "Select-noresults"
      }, this.props.noResultsText);
    } else {
      return null;
    }
  },
  renderHiddenField: function renderHiddenField(valueArray) {
    var _this6 = this;

    if (!this.props.name) return;

    if (this.props.joinValues) {
      var value = valueArray.map(function (i) {
        return stringifyValue(i[_this6.props.valueKey]);
      }).join(this.props.delimiter);
      return external_commonjs2_react_default.a.createElement("input", {
        type: "hidden",
        ref: function ref(_ref3) {
          return _this6.value = _ref3;
        },
        name: this.props.name,
        value: value,
        disabled: this.props.disabled
      });
    }

    return valueArray.map(function (item, index) {
      return external_commonjs2_react_default.a.createElement("input", {
        key: 'hidden.' + index,
        type: "hidden",
        ref: 'value' + index,
        name: _this6.props.name,
        value: stringifyValue(item[_this6.props.valueKey]),
        disabled: _this6.props.disabled
      });
    });
  },
  getFocusableOptionIndex: function getFocusableOptionIndex(selectedOption) {
    var options = this._visibleOptions;
    if (!options.length) return null;
    var focusedOption = this.state.focusedOption || selectedOption;

    if (focusedOption && !focusedOption.disabled) {
      var focusedOptionIndex = options.indexOf(focusedOption);

      if (focusedOptionIndex !== -1) {
        return focusedOptionIndex;
      }
    }

    for (var i = 0; i < options.length; i++) {
      if (!options[i].disabled) return i;
    }

    return null;
  },
  renderOuter: function renderOuter(options, valueArray, focusedOption) {
    var _this7 = this;

    var menu = this.renderMenu(options, valueArray, focusedOption);

    if (!menu) {
      return null;
    }

    return external_commonjs2_react_default.a.createElement("div", {
      ref: function ref(_ref5) {
        return _this7.menuContainer = _ref5;
      },
      className: "Select-menu-outer",
      style: this.props.menuContainerStyle
    }, external_commonjs2_react_default.a.createElement("div", {
      ref: function ref(_ref4) {
        return _this7.menu = _ref4;
      },
      role: "listbox",
      className: "Select-menu",
      id: this._instancePrefix + '-list',
      style: this.props.menuStyle,
      onScroll: this.handleMenuScroll,
      onMouseDown: this.handleMouseDownOnMenu
    }, menu));
  },
  render: function render() {
    var _this8 = this;

    var valueArray = this.getValueArray(this.props.value);
    var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
    var isOpen = this.state.isOpen;
    if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
    var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);
    var focusedOption = null;

    if (focusedOptionIndex !== null) {
      focusedOption = this._focusedOption = options[focusedOptionIndex];
    } else {
      focusedOption = this._focusedOption = null;
    }

    var className = classnames_default()('Select', this.props.className, {
      'Select--multi': this.props.multi,
      'Select--single': !this.props.multi,
      'is-disabled': this.props.disabled,
      'is-focused': this.state.isFocused,
      'is-loading': this.props.isLoading,
      'is-open': isOpen,
      'is-pseudo-focused': this.state.isPseudoFocused,
      'is-searchable': this.props.searchable,
      'has-value': valueArray.length
    });
    var removeMessage = null;

    if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
      removeMessage = external_commonjs2_react_default.a.createElement("span", {
        id: this._instancePrefix + '-backspace-remove-message',
        className: "Select-aria-only",
        "aria-live": "assertive"
      }, this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey]));
    }

    return external_commonjs2_react_default.a.createElement("div", {
      ref: function ref(_ref7) {
        return _this8.wrapper = _ref7;
      },
      className: className,
      style: this.props.wrapperStyle
    }, this.renderHiddenField(valueArray), external_commonjs2_react_default.a.createElement("div", {
      ref: function ref(_ref6) {
        return _this8.control = _ref6;
      },
      className: "Select-control",
      style: this.props.style,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onTouchEnd: this.handleTouchEnd,
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove
    }, external_commonjs2_react_default.a.createElement("span", {
      className: "Select-multi-value-wrapper",
      id: this._instancePrefix + '-value'
    }, this.renderValue(valueArray, isOpen), this.renderInput(valueArray, focusedOptionIndex)), removeMessage, this.renderLoading(), this.renderClear(), this.renderArrow()), isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null);
  }
});
/* harmony default export */ var src_Select = __webpack_exports__["default"] = (Select);

/***/ })
/******/ ]);