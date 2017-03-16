this["FrintReact"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["Rx"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


var Provider = function (_Component) {
  _inherits(Provider, _Component);

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        app: this.app
      };
    }
  }]);

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

    _this.app = props.app;
    return _this;
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(_react.Component);

Provider.propTypes = {
  app: _react.PropTypes.object.isRequired,
  children: _react.PropTypes.element.isRequired
};
Provider.childContextTypes = {
  app: _react.PropTypes.object.isRequired
};
exports.default = Provider;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMountableComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Provider = __webpack_require__(2);

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function getMountableComponent(app) {
  var Component = app.get('component');
  var providerProps = { app: app };
  var ComponentInProvider = function ComponentInProvider(componentProps) {
    return _react2.default.createElement(
      _Provider2.default,
      providerProps,
      _react2.default.createElement(Component, componentProps)
    );
  };

  return function (props) {
    return _react2.default.createElement(ComponentInProvider, props);
  };
}
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObservable;
/**
 * Check if given `obj` is an Observable or not.
 *
 * @TODO: this function needs to be more proper and reliable
 *
 * @param any obj
 * @return boolean
 */
function isObservable(obj) {
  if (obj && typeof obj.subscribe === 'function' && typeof obj.map === 'function' && typeof obj.filter === 'function') {
    return true;
  }

  return false;
}
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = this["_"]; }());

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getMountableComponent = __webpack_require__(3);

var _getMountableComponent2 = _interopRequireDefault(_getMountableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'Region',

  propTypes: {
    name: _react.PropTypes.string.isRequired,
    uniqueKey: _react.PropTypes.string,
    data: _react.PropTypes.any
  },

  getInitialState: function getInitialState() {
    return {
      list: [], // array of widgets ==> { name, instance }
      listForRendering: [] // array of {name, Component} objects
    };
  },


  /**
   * Determines if the the component should be updated or not.
   * Since we are calling setState multiple times, we need to make sure that only when
   * the list of widgets to render, i.e. this.state.listForRendering, is changed should
   * trigger a re-render of the region component.
   * @param  {Object}  nextProps  the next set of props
   * @param  {Object}  nextState  the next component state to be set
   * @return {Boolean} a boolean flag indicating whether the component should be updated
   */
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    var shouldUpdate = !_lodash2.default.isEqual(this.props, nextProps);
    if (!shouldUpdate) {
      var listForRendering = nextState.listForRendering;

      shouldUpdate = shouldUpdate || this.state.listForRendering.length !== listForRendering.length;
      shouldUpdate = shouldUpdate || _lodash2.default.zipWith(this.state.listForRendering, listForRendering, function (prev, next) {
        return prev.name === next.name;
      }).some(function (value) {
        return !value;
      });
    }
    return shouldUpdate;
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    var rootApp = !this.context || !this.context.app ? window.app // @TODO: can we avoid globals?
    : this.context.app.getRootApp();

    if (!rootApp) {
      return;
    }

    this.rootApp = rootApp;
    var widgets$ = rootApp.getWidgets$(this.props.name, this.props.uniqueKey);

    this.subscription = widgets$.subscribe({
      next: function next(list) {
        _this.setState({
          list: list
        }, function () {
          _this.state.list.forEach(function (item) {
            var widgetName = item.name;
            var widgetWeight = item.weight;
            var widgetMulti = item.multi;
            var existsInState = _this.state.listForRendering.some(function (w) {
              return w.name === widgetName;
            });

            // @TODO: take care of removal in streamed list too?

            if (existsInState) {
              return;
            }

            var regionArgs = _this.props.uniqueKey ? [_this.props.name, _this.props.uniqueKey] : [_this.props.name];

            if (_this.props.uniqueKey && !rootApp.hasWidgetInstance.apply(rootApp, [widgetName].concat(regionArgs))) {
              rootApp.instantiateWidget.apply(rootApp, [widgetName].concat(regionArgs));
            }

            var widgetInstance = rootApp.getWidgetInstance.apply(rootApp, [widgetName].concat(regionArgs));
            if (widgetInstance) {
              _this.sendProps(widgetInstance, _this.props);
            }

            _this.setState({
              listForRendering: _this.state.listForRendering.concat({
                name: widgetName,
                weight: widgetWeight,
                instance: widgetInstance,
                multi: widgetMulti,
                Component: (0, _getMountableComponent2.default)(widgetInstance)
              }).sort(function (a, b) {
                return a.weight - b.weight;
              })
            });
          });
        });
      },
      error: function error(err) {
        console.warn('Subscription error for <Region name="' + _this.props.name + '" />:', err);
      }
    });
  },
  sendProps: function sendProps(widgetInstance, props) {
    var regionService = widgetInstance.get(widgetInstance.options.providerNames.region);

    if (!regionService) {
      return;
    }

    regionService.emit(props);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    this.state.listForRendering.filter(function (item) {
      return item.instance;
    }).forEach(function (item) {
      return _this2.sendProps(item.instance, nextProps);
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    var _this3 = this;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.rootApp) {
      this.state.listForRendering.filter(function (item) {
        return item.multi;
      }).forEach(function (item) {
        _this3.rootApp.destroyWidget(item.name, _this3.props.name, _this3.props.uniqueKey);
      });
    }
  },
  render: function render() {
    var listForRendering = this.state.listForRendering;


    if (listForRendering.length === 0) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      null,
      listForRendering.map(function (item) {
        var Component = item.Component,
            name = item.name;


        return _react2.default.createElement(Component, { key: 'widget-' + name });
      })
    );
  }
}); /* eslint-disable no-console, no-underscore-dangle, import/no-extraneous-dependencies */
/* globals window */

module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/no-extraneous-dependencies */


exports.default = observe;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rxjs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function observe(fn) {
  return function (Component) {
    var WrappedComponent = _react2.default.createClass({
      displayName: typeof Component.displayName !== 'undefined' ? 'observe(' + Component.displayName + ')' : 'observe',

      getInitialState: function getInitialState() {
        return {
          computedProps: {}
        };
      },
      componentWillMount: function componentWillMount() {
        var _this = this;

        var observableFn = typeof fn !== 'undefined' ? fn : function () {
          return _rxjs.Observable.of({});
        };

        this.subscription = observableFn(this.context.app).subscribe(function (computedProps) {
          _this.setState({
            computedProps: computedProps
          });
        });
      },
      componentWillUnmount: function componentWillUnmount() {
        this.subscription.unsubscribe();
      },
      render: function render() {
        var computedProps = this.state.computedProps;


        return _react2.default.createElement(Component, _extends({}, computedProps, this.props));
      }
    });

    WrappedComponent.contextTypes = {
      app: _react.PropTypes.object.isRequired
    };

    return WrappedComponent;
  };
}
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = __webpack_require__(9);

var _render2 = _interopRequireDefault(_render);

var _streamProps = __webpack_require__(11);

var _streamProps2 = _interopRequireDefault(_streamProps);

var _isObservable = __webpack_require__(4);

var _isObservable2 = _interopRequireDefault(_isObservable);

var _getMountableComponent = __webpack_require__(3);

var _getMountableComponent2 = _interopRequireDefault(_getMountableComponent);

var _observe = __webpack_require__(7);

var _observe2 = _interopRequireDefault(_observe);

var _Region = __webpack_require__(6);

var _Region2 = _interopRequireDefault(_Region);

var _Provider = __webpack_require__(2);

var _Provider2 = _interopRequireDefault(_Provider);

var _Region3 = __webpack_require__(10);

var _Region4 = _interopRequireDefault(_Region3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: _render2.default,
  streamProps: _streamProps2.default,
  isObservable: _isObservable2.default,

  getMountableComponent: _getMountableComponent2.default,
  observe: _observe2.default,
  Region: _Region2.default,
  Provider: _Provider2.default,

  RegionService: _Region4.default
};
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ = __webpack_require__(8);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(app, node) {
  var MountableComponent = _2.default.getMountableComponent(app);

  return _reactDom2.default.render(_react2.default.createElement(MountableComponent, null), node);
} /* eslint-disable import/no-extraneous-dependencies */
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegionService = function () {
  function RegionService() {
    _classCallCheck(this, RegionService);

    this.props$ = new _rxjs.BehaviorSubject({});
  }

  _createClass(RegionService, [{
    key: 'emit',
    value: function emit() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.props$.next(props);
    }

    // @TODO: support synchronous versions
    // getName() {}
    // getKey() {}

  }, {
    key: 'getProps$',
    value: function getProps$() {
      return this.props$;
    }
  }, {
    key: 'getData$',
    value: function getData$() {
      return this.props$.map(function (props) {
        return props.data;
      });
    }
  }]);

  return RegionService;
}();

exports.default = RegionService;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-underscore-dangle */
// @TODO: should go to frint-utils package?


exports.default = streamProps;

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _rxjs = __webpack_require__(1);

var _isObservable = __webpack_require__(4);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Streamer = function () {
  function Streamer() {
    var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Streamer);

    this._observables = [_rxjs.Observable.of(defaults)];
  }

  _createClass(Streamer, [{
    key: '_push',
    value: function _push(observable) {
      this._observables.push(observable);
    }
  }, {
    key: 'set',
    value: function set(value) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // (key, value)
      if (typeof value === 'string') {
        return this.setKey(value, args[0]);
      }

      // (plainObject)
      if (_lodash2.default.isPlainObject(value)) {
        return this.setPlainObject(value);
      }

      // (observable$, ...mapperFns)
      if ((0, _isObservable2.default)(value)) {
        return this.setObservable.apply(this, [value].concat(args));
      }

      return this;
    }
  }, {
    key: 'setKey',
    value: function setKey(key, value) {
      this._push(_rxjs.Observable.of(_defineProperty({}, key, value)));

      return this;
    }
  }, {
    key: 'setPlainObject',
    value: function setPlainObject(object) {
      this._push(_rxjs.Observable.of(object));

      return this;
    }
  }, {
    key: 'setObservable',
    value: function setObservable(object$) {
      var mappedObject$ = object$;

      for (var _len2 = arguments.length, mappers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        mappers[_key2 - 1] = arguments[_key2];
      }

      mappers.forEach(function (mapperFn) {
        mappedObject$ = mappedObject$.concatMap(function (object) {
          var result = mapperFn(object);

          if ((0, _isObservable2.default)(result)) {
            return result;
          }

          return _rxjs.Observable.of(result);
        });
      });

      this._push(mappedObject$);

      return this;
    }
  }, {
    key: 'setDispatch',
    value: function setDispatch(actions, store) {
      var object = {};

      Object.keys(actions).forEach(function (propKey) {
        var actionFn = actions[propKey];

        object[propKey] = function () {
          return store.dispatch(actionFn.apply(undefined, arguments));
        };
      });

      this._push(_rxjs.Observable.of(object));

      return this;
    }
  }, {
    key: 'get$',
    value: function get$() {
      return _rxjs.Observable.merge.apply(_rxjs.Observable, _toConsumableArray(this._observables)).scan(function (props, emitted) {
        return _extends({}, props, emitted);
      });
    }
  }]);

  return Streamer;
}();

function streamProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Streamer(defaultProps);
}
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })
/******/ ]);