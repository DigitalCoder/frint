this["FrintCompat"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["_"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createService;

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */


function createService() {
  var extend = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  console.warn('[DEPRECATED] `createService` has been deprecated. Use `createClass` or direct ES6 classes instead.');

  var Service = function Service() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Service);

    if (!options.app) {
      throw new Error('App instance not provided.');
    }

    this.app = options.app;

    _lodash2.default.merge(this, extend);

    Object.keys(this).filter(function (prop) {
      return _this[prop] instanceof Function;
    }).forEach(function (prop) {
      return _this[prop] = _this[prop].bind(_this);
    });

    if (typeof this.initialize === 'function') {
      this.initialize(options);
    }
  };

  return Service;
}
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function() { module.exports = this["FrintReact"]; }());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

exports.default = _react.PropTypes;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module that specifies the createComponent function for creating Components.
 *
 * @module src/createComponent.js
 */

/**
 * Creates a component to be used in the application.
 *
 * @function createComponent
 * @param {Object} options Specify the options to be used in this component,
 * the supported members are the render method, and lifecycle event handlers.
 * @return {ReactClass} The created component object.
 * @public
 */
function createComponent() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!options.render || typeof options.render !== 'function') {
    throw new Error('Component ' + options.name + ' missing required method: render');
  }

  return _react2.default.createClass(_extends({}, options, {
    componentWillMount: function componentWillMount() {
      if (typeof options.beforeMount === 'function') {
        return options.beforeMount.call(this);
      }

      return null;
    },
    componentDidMount: function componentDidMount() {
      if (typeof options.afterMount === 'function') {
        return options.afterMount.call(this);
      }

      return null;
    },
    componentWillUnmount: function componentWillUnmount() {
      if (typeof options.beforeUnmount === 'function') {
        options.beforeUnmount.call(this);
      }
    },


    /**
     * Returns the root HTML element of the component.
     *
     * @method getDOMElement
     * @return {HTMLElement|null} Returns the component's root HTML Node.
     * @public
     */
    getDOMElement: function getDOMElement() {
      return _reactDom2.default.findDOMNode(this);
    }
  }));
}
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFactory;

var _createService = __webpack_require__(2);

var _createService2 = _interopRequireDefault(_createService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */
// creation of Service and Factory classes are same as of this point


function createFactory() {
  var extend = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  console.warn('[DEPRECATED] `createFactory` has been deprecated. Use `createClass` or direct ES6 classes instead.');

  var Service = (0, _createService2.default)(extend);

  var Factory = function (_Service) {
    _inherits(Factory, _Service);

    function Factory() {
      _classCallCheck(this, Factory);

      return _possibleConstructorReturn(this, (Factory.__proto__ || Object.getPrototypeOf(Factory)).apply(this, arguments));
    }

    return Factory;
  }(Service);

  return Factory;
}
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendApp;

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
/* eslint-disable no-console */
function extendApp(Frint, FrintStore, FrintReact) {
  var App = Frint.App;
  var createStore = FrintStore.createStore;
  var getMountableComponent = FrintReact.getMountableComponent;


  var previousGetRootApp = App.prototype.getRootApp;
  App.prototype.getRootApp = function getRootApp() {
    if (typeof window !== 'undefined' && typeof window.app !== 'undefined') {
      return window.app;
    }

    return previousGetRootApp.bind(this)();
  };

  var previousRegisterRootProviders = App.prototype._registerRootProviders;
  App.prototype._registerRootProviders = function _registerRootProviders() {
    previousRegisterRootProviders.bind(this)();

    this._backwardsCompatibility();
  };

  App.prototype._backwardsCompatibility = function _backwardsCompatibility() {
    var _this = this;

    this.readableAppNames = [];

    // backwards compatibility: component
    if (typeof this.options.component !== 'undefined') {
      console.warn('[DEPRECATED] `component` now needs to be defined as a provider.');
      this.options.providers.push({
        name: 'component',
        useValue: this.options.component,
        cascade: false
      });
    }

    // backwards compatibility: store
    if (typeof this.options.store !== 'undefined') {
      console.warn('[DEPRECATED] `options.store` has been deprecated. Use `providers` for defining your Store instead.');
      this.options.providers.push({
        name: 'store',
        useValue: this.options.store,
        cascade: false
      });
    } else if (typeof this.options.reducer === 'function') {
      console.warn('[DEPRECATED] `options.reducer` has been deprecated. Use `providers` for defining your Store instead.');
      this.options.providers.push({
        name: 'store',
        useFactory: function useFactory(deps) {
          var Store = createStore({
            initialState: _this.options.initialState ? _this.options.initialState : {},
            reducer: _this.options.reducer,
            thunkArgument: deps,
            enableLogger: _this.options.enableLogger
          });

          return new Store();
        },
        cascade: false,
        deps: ['app']
      });
    } else if (typeof this.options.initialState !== 'undefined') {
      console.warn('[DEPRECATED] `options.initialState` has been deprecated. Use `providers` for defining your Store instead.');
      this.options.providers.push({
        name: 'store',
        useFactory: function useFactory(deps) {
          var Store = createStore({
            initialState: _this.options.initialState ? _this.options.initialState : {},
            thunkArgument: deps,
            enableLogger: _this.options.enableLogger
          });

          return new Store();
        },
        cascade: false,
        deps: ['app']
      });
    }

    // backwards compatibility: services
    if (typeof this.options.services !== 'undefined') {
      console.warn('[DEPRECATED] `options.services` has been deprecated. Use `providers` instead.');
      _lodash2.default.each(this.options.services, function (ServiceClass, serviceName) {
        _this.options.providers.push({
          name: serviceName,
          useClass: ServiceClass,
          deps: ['app'],
          cascade: true
        });
      });
    }

    // backwards compatibility: factories
    if (typeof this.options.factories !== 'undefined') {
      console.warn('[DEPRECATED] `options.factories` has been deprecated. Use `providers` instead.');
      _lodash2.default.each(this.options.factories, function (FactoryClass, factoryName) {
        _this.options.providers.push({
          name: factoryName,
          useClass: FactoryClass,
          deps: ['app'],
          cascade: true,
          scoped: true
        });
      });
    }

    // backwards compatibility: models
    if (typeof this.options.models !== 'undefined') {
      console.warn('[DEPRECATED] `options.models` has been deprecated. Use `providers` instead.');
      _lodash2.default.each(this.options.models, function (ModelClass, modelName) {
        if (typeof ModelClass !== 'function') {
          throw new Error('Expected model class \'' + modelName + '\' to be a valid Model class');
        }

        _this.options.providers.push({
          name: modelName,
          useValue: new ModelClass(_this.options.modelAttributes[modelName]),
          cascade: true
        });
      });
    }
  };

  App.prototype.getState$ = function getState$() {
    var appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    console.warn('[DEPRECATED] `getState$` has been deprecated. Access your store via `get` instead.');

    var app = appName ? this._getAppByName(appName) : this;

    if (!app) {
      return null;
    }

    var store = app.get('store');

    if (!store) {
      return null;
    }

    return store.getState$();
  };

  App.prototype.dispatch = function dispatch(action) {
    console.warn('[DEPRECATED] `dispatch` has been deprecated. Access your store via `get` instead.');
    return this.get('store').dispatch(action);
  };

  App.prototype.render = function render() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.warn('[DEPRECATED] `render` has been deprecated.');
    var Component = getMountableComponent(this);

    return function () {
      return _react2.default.createElement(Component, args);
    };
  };

  App.prototype._getAppByName = function _getAppByName() {
    var appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!appName) {
      return this;
    }

    var rootApp = this.getRootApp();
    if (!rootApp) {
      return null;
    }

    var foundWidget = _lodash2.default.find(rootApp._widgetsCollection, function (w) {
      return w.name === appName;
    });

    if (!foundWidget) {
      return null;
    }

    return foundWidget.instances.default;
  };

  App.prototype.getStore = function getStore() {
    var appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    console.warn('[DEPRECATED] `getStore` has been deprecated. Use `get` instead.');
    if (!appName) {
      return this.container.get(this.options.providerNames.store);
    }

    var w = this._getAppByName(appName);
    if (!w) {
      return null;
    }

    return w.instances.default.getStore();
  };

  App.prototype.getModel = function getModel(name) {
    console.warn('[DEPRECATED] `getModel` has been deprecated. Use `get` instead.');
    return this.get(name);
  };

  App.prototype.getService = function getService(name) {
    console.warn('[DEPRECATED] `getService` has been deprecated. Use `get` instead.');
    return this.get(name);
  };

  App.prototype.getFactory = function getFactory(name) {
    console.warn('[DEPRECATED] `getFactory` has been deprecated. Use `get` instead.');
    return this.get(name);
  };

  App.prototype.setRegion = function setRegion(region) {
    console.warn('[DEPRECATED] `setRegion` has been deprecated. Use `registerWidget` instead.');
    return this.setRegions([region]);
  };

  App.prototype.setRegions = function setRegions() {
    var regions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    console.warn('[DEPRECATED] `setRegions` has been deprecated. Use `registerWidget` instead.');
    var rootApp = this.getRootApp();

    if (!rootApp || this === rootApp) {
      throw new Error('No root app instance available');
    }

    rootApp._widgetsCollection.push({
      name: this.options.name,
      regions: regions,
      instances: {
        default: this
      }
    });

    rootApp._widgets$.next(rootApp._widgetsCollection);
  };

  App.prototype.getWidgets = function getWidgets() {
    var regionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    console.warn('[DEPRECATED] `getWidgets` has been deprecated. Use `getWidgets$` instead.');
    return this.getRootApp()._widgetsCollection.filter(function (w) {
      if (!regionName) {
        return true;
      }

      return w.regions.indexOf(regionName) > -1;
    }).map(function (w) {
      return w.instances.default;
    });
  };

  App.prototype.readStateFrom = function readStateFrom() {
    var appNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    console.log('[DEPRECATED] `readStateFrom` has been deprecated.');
    this.readableApps = appNames;
  };

  ['beforeMount', 'afterMount', 'beforeUnmount'].forEach(function (hookName) {
    App.prototype[hookName] = function lifecycleHook() {
      var providedHook = this.options[hookName];
      var hook = typeof providedHook === 'function' ? providedHook : function noop() {};
      this[hookName] = hook.bind(this);

      return this[hookName].apply(this, arguments);
    };
  });
}
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendStore;
function extendStore(_ref) {
  var Store = _ref.Store;

  Store.prototype.subscribe = function subscribe(callback) {
    this.options.console.warn('[DEPRECATED] `Store.subscribe` has been deprecated, and kept for consistency purpose only with v0.x');

    var subscription = this.getState$().subscribe(function (state) {
      callback(state);
    });

    return function unsubscribe() {
      subscription.unsubscribe();
    };
  };
}
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeGetMountableComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(3);

var _frintReact2 = _interopRequireDefault(_frintReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeGetMountableComponent(Frint) {
  var previousGetMountableComponent = Frint.getMountableComponent;

  function getMountableComponent(app) {
    var ComponentInProvider = previousGetMountableComponent(app);

    app.beforeMount();

    var WrapperComponent = _react2.default.createClass({
      displayName: 'WrapperComponent',
      componentDidMount: function componentDidMount() {
        app.afterMount();
      },
      componentWillUnmount: function componentWillUnmount() {
        app.beforeUnmount();
      },
      render: function render() {
        return _react2.default.createElement(ComponentInProvider, this.props);
      }
    });

    return WrapperComponent;
  }

  _frintReact2.default.getMountableComponent = getMountableComponent;
  Frint.getMountableComponent = getMountableComponent;

  return getMountableComponent;
}
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-console */


exports.default = makeMapToProps;

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _rxjs = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeMapToProps(_ref) {
  var observe = _ref.observe,
      streamProps = _ref.streamProps;

  return function mapToProps() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    console.warn('[DEPRECATED] `mapToProps` has been deprecated. Use `observe` instead.');
    var options = _extends({
      app: null,
      dispatch: {},
      factories: {},
      models: {},
      services: {},
      shared: null,
      state: null,
      observe: null
    }, opts);

    return function (Component) {
      return observe(function (app) {
        var props = streamProps();

        // app
        if (typeof options.app === 'function') {
          props.set(options.app(app));
        }

        // dispatch
        props.setDispatch(options.dispatch, app.get('store'));

        // factories/models/services
        var providers = Object.assign({}, options.factories, options.models, options.services);
        _lodash2.default.each(providers, function (providerName, propName) {
          props.set(propName, app.get(providerName));
        });

        // shared
        if (typeof options.shared === 'function') {
          props.set(options.shared({}));

          var sharedStateObservables = [];

          app.readableApps.forEach(function (readableAppName) {
            sharedStateObservables.push(app.getWidgetOnceAvailable$(readableAppName).concatMap(function (readableApp) {
              return readableApp.get('store').getState$();
            }).map(function (readableState) {
              return _defineProperty({}, readableAppName, readableState);
            }));
          });

          var shared$ = _rxjs.Observable.merge.apply(_rxjs.Observable, sharedStateObservables).map(function (sharedState) {
            return options.shared(sharedState);
          });
          props.set(shared$);
        }

        // state
        if (typeof options.state === 'function') {
          props.set(app.get('store').getState$(), function (state) {
            return options.state(state);
          });
        }

        // observe
        if (typeof options.observe === 'function') {
          props.set(options.observe(app));
        }

        return props.get$();
      })(Component);
    };
  };
}
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function() { module.exports = this["Frint"]; }());

/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function() { module.exports = this["FrintModel"]; }());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function() { module.exports = this["FrintStore"]; }());

/***/ }),
/* 15 */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function() { module.exports = this["Rx"]; }());

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(12);

var _frint2 = _interopRequireDefault(_frint);

var _frintStore = __webpack_require__(14);

var _frintStore2 = _interopRequireDefault(_frintStore);

var _frintModel = __webpack_require__(13);

var _frintModel2 = _interopRequireDefault(_frintModel);

var _frintReact = __webpack_require__(3);

var _frintReact2 = _interopRequireDefault(_frintReact);

var _extendApp = __webpack_require__(7);

var _extendApp2 = _interopRequireDefault(_extendApp);

var _extendStore = __webpack_require__(8);

var _extendStore2 = _interopRequireDefault(_extendStore);

var _createComponent = __webpack_require__(5);

var _createComponent2 = _interopRequireDefault(_createComponent);

var _PropTypes = __webpack_require__(4);

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _h = __webpack_require__(10);

var _h2 = _interopRequireDefault(_h);

var _createFactory = __webpack_require__(6);

var _createFactory2 = _interopRequireDefault(_createFactory);

var _createService = __webpack_require__(2);

var _createService2 = _interopRequireDefault(_createService);

var _mapToProps = __webpack_require__(11);

var _mapToProps2 = _interopRequireDefault(_mapToProps);

var _getMountableComponent = __webpack_require__(9);

var _getMountableComponent2 = _interopRequireDefault(_getMountableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// store
_frint2.default.createStore = _frintStore2.default.createStore; /* eslint-disable no-console */

_frint2.default.combineReducers = _frintStore2.default.combineReducers;
_frint2.default.Store = _frintStore2.default.Store;

// model
_frint2.default.createModel = _frintModel2.default.createModel;
_frint2.default.Model = _frintModel2.default.Model;

// react
_frint2.default.createComponent = _createComponent2.default;
_frint2.default.h = _h2.default;
_frint2.default.PropTypes = _PropTypes2.default;
_frint2.default.render = _frintReact2.default.render;
_frint2.default.Region = _frintReact2.default.Region;
_frint2.default.observe = _frintReact2.default.observe;
_frint2.default.streamProps = _frintReact2.default.streamProps;
_frint2.default.getMountableComponent = _frintReact2.default.getMountableComponent;

// backwards compatibility
_frint2.default.createFactory = _createFactory2.default;
_frint2.default.createService = _createService2.default;
_frint2.default.mapToProps = (0, _mapToProps2.default)(_frint2.default);

(0, _extendApp2.default)(_frint2.default, _frintStore2.default, _frintReact2.default);
(0, _extendStore2.default)(_frintStore2.default);

_frint2.default.getMountableComponent = (0, _getMountableComponent2.default)(_frint2.default);
_frintReact2.default.getMountableComponent = _frint2.default.getMountableComponent;

// export
exports.default = _frint2.default;
module.exports = exports['default'];

/***/ })
/******/ ]);