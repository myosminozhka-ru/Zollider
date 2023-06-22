"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(void 0, function (exports) {
  'use strict';

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */
  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
  }

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */
  var ChangeDetails = /*#__PURE__*/function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */

    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);
      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }

    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */
    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }

      /** Total offset considering all changes */
    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);
    return ChangeDetails;
  }();
  IMask.ChangeDetails = ChangeDetails;

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */
  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };

  /** */
  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;
      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;
      default:
        return direction;
    }
  }

  /** Escapes regular expression control chars */
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }
  function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }

  // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;
    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
      return true;
    }
    if (arrA != arrB) return false;
    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a);
      // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++)
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }
    return false;
  }

  /** Selection range */

  /** Provides details of changing input */
  var ActionDetails = /*#__PURE__*/function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */

    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);
      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection;

      // double check if left part was changed (autofilling, other non-standard input triggers)
      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }

    /**
      Start changing position
      @readonly
    */
    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }

      /**
        Inserted symbols count
        @readonly
      */
    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }

      /**
        Inserted symbols
        @readonly
      */
    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }

      /**
        Removed symbols count
        @readonly
      */
    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos ||
        // for Delete
        this.oldValue.length - this.value.length, 0);
      }

      /**
        Removed symbols
        @readonly
      */
    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }

      /**
        Unchanged head symbols
        @readonly
      */
    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }

      /**
        Unchanged tail symbols
        @readonly
      */
    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }

      /**
        Remove direction
        @readonly
      */
    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
        // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);
    return ActionDetails;
  }();
  /** Provides details of continuous extracted tail */
  var ContinuousTailDetails = /*#__PURE__*/function () {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */

    function ContinuousTailDetails() {
      _classCallCheck(this, ContinuousTailDetails);
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : undefined;
      this.value = value;
      this.from = from;
      this.stop = stop;
    }
    _createClass(ContinuousTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.value.length) return '';
        var shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
      }
    }]);
    return ContinuousTailDetails;
  }();
  /** Supported mask type */
  /** Append flags */
  /** Extract flags */
  /** Provides common masking stuff */
  var Masked = /*#__PURE__*/function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */ // $FlowFixMe no ideas
    /** Transforms value before mask processing */
    /** Validates if value is acceptable */
    /** Does additional processing in the end of editing */
    /** Format typed value to string */
    /** Parse strgin to get typed value */
    /** Enable characters overwriting */
    /** */
    /** */
    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);
      this._value = '';
      this._update(Object.assign({}, Masked.DEFAULTS, opts));
      this.isInitialized = true;
    }

    /** Sets and applies new options */
    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        // $FlowFixMe
        this.withValueRefresh(this._update.bind(this, opts));
      }

      /**
        Sets new options
        @protected
      */
    }, {
      key: "_update",
      value: function _update(opts) {
        Object.assign(this, opts);
      }

      /** Mask state */
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }

      /** Resets value */
    }, {
      key: "reset",
      value: function reset() {
        this._value = '';
      }

      /** */
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }

      /** Resolve new value */
    }, {
      key: "resolve",
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, '');
        this.doCommit();
        return this.value;
      }

      /** */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, '');
        this.doCommit();
      }

      /** */
    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.value);
      },
      set: function set(value) {
        this.value = this.doFormat(value);
      }

      /** Value that includes raw user input */
    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, '');
        this.doCommit();
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.value;
      }

      /** */
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }

      /** */
    }, {
      key: "isFilled",
      get: function get() {
        return this.isComplete;
      }

      /** Finds nearest input position in direction */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return Math.min(this.value.length, toPos - fromPos);
      }

      /** Extracts value in range considering flags */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }

      /** Extracts tail in range */
    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }

      /** Appends tail */
      // $FlowFixMe no ideas
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }

      /** Appends char */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        if (!ch) return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }

      /** Appends char */
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        var consistentState = this.state;
        var details;
        var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));
        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
          var consistentTail;
          var appended = this.doValidate(flags) !== false;
          if (appended && checkTail != null) {
            // validation ok, check tail
            var beforeTailState = this.state;
            if (this.overwrite === true) {
              consistentTail = checkTail.state;
              checkTail.unshift(this.value.length - details.tailShift);
            }
            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();

            // not ok, try shift
            if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
              this.state = beforeTailState;
              consistentTail = checkTail.state;
              checkTail.shift();
              tailDetails = this.appendTail(checkTail);
              appended = tailDetails.rawInserted === checkTail.toString();
            }

            // if ok, rollback state after tail
            if (appended && tailDetails.inserted) this.state = beforeTailState;
          }

          // revert all if something went wrong
          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }
        return details;
      }

      /** Appends optional placeholder at end */
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        return new ChangeDetails();
      }

      /** Appends optional eager placeholder at end */
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }

      /** Appends symbols considering flags */
      // $FlowFixMe no ideas
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        var details = new ChangeDetails();
        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;
        for (var ci = 0; ci < str.length; ++ci) {
          var d = this._appendChar(str[ci], flags, checkTail);
          if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
          details.aggregate(d);
        }

        // append tail but aggregate only tailShift
        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift;
          // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        if ((this.eager === true || this.eager === 'append') && flags !== null && flags !== void 0 && flags.input && str) {
          details.aggregate(this._appendEager());
        }
        return details;
      }

      /** */
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }

      /** Calls function and reapplies current value */
    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var rawInput = this.rawInputValue;
        var value = this.value;
        var ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.value.length), {}, '');
        }
        delete this._refreshing;
        return ret;
      }

      /** */
    }, {
      key: "runIsolated",
      value: function runIsolated(fn) {
        if (this._isolated || !this.isInitialized) return fn(this);
        this._isolated = true;
        var state = this.state;
        var ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }

      /** */
    }, {
      key: "doSkipInvalid",
      value: function doSkipInvalid(ch) {
        return this.skipInvalid;
      }

      /**
        Prepares string before mask processing
        @protected
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }

      /**
        Validates if value is acceptable
        @protected
      */
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }

      /**
        Does additional processing in the end of editing
        @protected
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }

      /** */
    }, {
      key: "doFormat",
      value: function doFormat(value) {
        return this.format ? this.format(value, this) : value;
      }

      /** */
    }, {
      key: "doParse",
      value: function doParse(str) {
        return this.parse ? this.parse(str, this) : str;
      }

      /** */
    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          input: true
        };
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var eagerRemove = this.eager === true || this.eager === 'remove';
        var oldRawValue;
        if (eagerRemove) {
          removeDirection = forceDirection(removeDirection);
          oldRawValue = this.extractInput(0, tailPos, {
            raw: true
          });
        }
        var startChangePos = start;
        var details = new ChangeDetails();

        // if it is just deletion without insertion
        if (removeDirection !== DIRECTION.NONE) {
          startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);

          // adjust tailShift if start was aligned
          details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
          if (removeDirection === DIRECTION.FORCE_LEFT) {
            var valLength;
            while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
              details.aggregate(new ChangeDetails({
                tailShift: -1
              })).aggregate(this.remove(valLength - 1));
            }
          } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
            tail.unshift();
          }
        }
        return details.aggregate(this.append(inserted, flags, tail));
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return this.mask === mask;
      }
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        var tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
      }
    }]);
    return Masked;
  }();
  Masked.DEFAULTS = {
    format: String,
    parse: function parse(v) {
      return v;
    },
    skipInvalid: true
  };
  Masked.EMPTY_VALUES = [undefined, null, ''];
  IMask.Masked = Masked;

  /** Get Masked class by mask type */
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    }

    // $FlowFixMe
    if (mask instanceof RegExp) return IMask.MaskedRegExp;
    // $FlowFixMe
    if (isString(mask)) return IMask.MaskedPattern;
    // $FlowFixMe
    if (mask instanceof Date || mask === Date) return IMask.MaskedDate;
    // $FlowFixMe
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber;
    // $FlowFixMe
    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
    // $FlowFixMe
    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
    // $FlowFixMe
    if (mask instanceof IMask.Masked) return mask.constructor;
    // $FlowFixMe
    if (mask instanceof Function) return IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    // $FlowFixMe
    return IMask.Masked;
  }

  /** Creates new {@link Masked} depending on mask type */
  function createMask(opts) {
    // $FlowFixMe
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    opts = Object.assign({}, opts);
    var mask = opts.mask;

    // $FlowFixMe
    if (IMask.Masked && mask instanceof IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
    return new MaskedClass(opts);
  }
  IMask.createMask = createMask;
  var _excluded$4 = ["parent", "isOptional", "placeholderChar", "displayChar", "lazy", "eager"];

  /** */

  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };

  /** */
  var PatternInputDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);
      var parent = opts.parent,
        isOptional = opts.isOptional,
        placeholderChar = opts.placeholderChar,
        displayChar = opts.displayChar,
        lazy = opts.lazy,
        eager = opts.eager,
        maskOpts = _objectWithoutPropertiesLoose(opts, _excluded$4);
      this.masked = createMask(maskOpts);
      Object.assign(this, {
        parent: parent,
        isOptional: isOptional,
        placeholderChar: placeholderChar,
        displayChar: displayChar,
        lazy: lazy,
        eager: eager
      });
    }
    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this.isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        if (fromPos === 0 && toPos >= 1) {
          this.isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }
        return new ChangeDetails();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.masked.value && this.displayChar || this.value;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.isFilled) return new ChangeDetails();
        var state = this.masked.state;
        // simulate input
        var details = this.masked._appendChar(ch, flags);
        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked2;
        // TODO probably should be done via _appendChar
        return (_this$masked2 = this.masked).append.apply(_this$masked2, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked3;
        return (_this$masked3 = this.masked).extractTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked4;
        return (_this$masked4 = this.masked).appendTail.apply(_this$masked4, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;
          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos).length;
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked5, _this$parent;
        return (_this$masked5 = this.masked).doValidate.apply(_this$masked5, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
      }
    }]);
    return PatternInputDefinition;
  }();
  /** */
  var PatternFixedDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);
      Object.assign(this, opts);
      this._value = '';
      this.isFixed = true;
    }
    _createClass(PatternFixedDefinition, [{
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.value;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;
          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        return this._isRawInput ? toPos - fromPos : 0;
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return Boolean(this._value);
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this.isFilled) return details;
        var appendEager = this.eager === true || this.eager === 'append';
        var appended = this["char"] === ch;
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        if (isResolved) details.rawInserted = this["char"];
        this._value = details.inserted = this["char"];
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return this._appendChar(this["char"], {
          tail: true
        });
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this.isFilled) return details;
        this._value = details.inserted = this["char"];
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails('');
      }

      // $FlowFixMe no ideas
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str[0], flags);
        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }
        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }]);
    return PatternFixedDefinition;
  }();
  var _excluded$3 = ["chunks"];
  var ChunksTailDetails = /*#__PURE__*/function () {
    /** */

    function ChunksTailDetails() {
      _classCallCheck(this, ChunksTailDetails);
      var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.chunks = chunks;
      this.from = from;
    }
    _createClass(ChunksTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join('');
      }

      // $FlowFixMe no ideas
    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk)) return;
        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && (
        // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
        // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            var firstTailChunk;
            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          }

          // if tail chunk still has value
          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        // $FlowFixMe
        if (!(masked instanceof IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }
        var details = new ChangeDetails();
        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];
          var lastBlockIter = masked._mapPosToBlock(masked.value.length);
          var stop = chunk.stop;
          var chunkBlock = void 0;
          if (stop != null && (
          // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails ||
            // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              var phDetails = masked._appendPlaceholder(stop);
              details.aggregate(phDetails);
            }
            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }
          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last
            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted;

            // get not inserted chars
            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (c) {
            return c.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(state) {
        var chunks = state.chunks,
          props = _objectWithoutPropertiesLoose(state, _excluded$3);
        Object.assign(this, props);
        this.chunks = chunks.map(function (cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
          // $FlowFixMe already checked above
          chunk.state = cstate;
          return chunk;
        });
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
        var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        var ci = 0;
        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.unshift(chunkShiftPos);
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.chunks.length) return '';
        var ci = this.chunks.length - 1;
        while (0 <= ci) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shift();
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            --ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
    }]);
    return ChunksTailDetails;
  }();
  var PatternCursor = /*#__PURE__*/function () {
    function PatternCursor(masked, pos) {
      _classCallCheck(this, PatternCursor);
      this.masked = masked;
      this._log = [];
      var _ref = masked._mapPosToBlock(pos) || (pos < 0 ?
        // first
        {
          index: 0,
          offset: 0
        } :
        // last
        {
          index: this.masked._blocks.length,
          offset: 0
        }),
        offset = _ref.offset,
        index = _ref.index;
      this.offset = offset;
      this.index = index;
      this.ok = false;
    }
    _createClass(PatternCursor, [{
      key: "block",
      get: function get() {
        return this.masked._blocks[this.index];
      }
    }, {
      key: "pos",
      get: function get() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      },
      set: function set(s) {
        Object.assign(this, s);
      }
    }, {
      key: "pushState",
      value: function pushState() {
        this._log.push(this.state);
      }
    }, {
      key: "popState",
      value: function popState() {
        var s = this._log.pop();
        this.state = s;
        return s;
      }
    }, {
      key: "bindBlock",
      value: function bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
          this.index = 0;
          this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
          this.index = this.masked._blocks.length - 1;
          this.offset = this.block.value.length;
        }
      }
    }, {
      key: "_pushLeft",
      value: function _pushLeft(fn) {
        this.pushState();
        for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
          var _this$block;
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
    }, {
      key: "_pushRight",
      value: function _pushRight(fn) {
        this.pushState();
        for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
    }, {
      key: "pushLeftBeforeFilled",
      value: function pushLeftBeforeFilled() {
        var _this = this;
        return this._pushLeft(function () {
          if (_this.block.isFixed || !_this.block.value) return;
          _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
          if (_this.offset !== 0) return true;
        });
      }
    }, {
      key: "pushLeftBeforeInput",
      value: function pushLeftBeforeInput() {
        var _this2 = this;
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(function () {
          if (_this2.block.isFixed) return;
          _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushLeftBeforeRequired",
      value: function pushLeftBeforeRequired() {
        var _this3 = this;
        return this._pushLeft(function () {
          if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
          _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushRightBeforeFilled",
      value: function pushRightBeforeFilled() {
        var _this4 = this;
        return this._pushRight(function () {
          if (_this4.block.isFixed || !_this4.block.value) return;
          _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
          if (_this4.offset !== _this4.block.value.length) return true;
        });
      }
    }, {
      key: "pushRightBeforeInput",
      value: function pushRightBeforeInput() {
        var _this5 = this;
        return this._pushRight(function () {
          if (_this5.block.isFixed) return;

          // const o = this.offset;
          _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE);
          // HACK cases like (STILL DOES NOT WORK FOR NESTED)
          // aa|X
          // aa<X|[]>X_    - this will not work
          // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
          return true;
        });
      }
    }, {
      key: "pushRightBeforeRequired",
      value: function pushRightBeforeRequired() {
        var _this6 = this;
        return this._pushRight(function () {
          if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return;

          // TODO check |[*]XX_
          _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
          return true;
        });
      }
    }]);
    return PatternCursor;
  }();
  /** Masking by RegExp */
  var MaskedRegExp = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedRegExp, _Masked);
    var _super = _createSuper(MaskedRegExp);
    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedRegExp, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };
        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);
    return MaskedRegExp;
  }(Masked);
  IMask.MaskedRegExp = MaskedRegExp;
  var _excluded$2 = ["_blocks"];

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {string} opts.displayChar
    @param {boolean} opts.lazy
  */
  var MaskedPattern = /*#__PURE__*/function (_Masked2) {
    _inherits(MaskedPattern, _Masked2);
    var _super2 = _createSuper(MaskedPattern);
    /** */

    /** */

    /** Single char for empty input */

    /** Single char for filled input */

    /** Show placeholder only when needed */

    function MaskedPattern() {
      _classCallCheck(this, MaskedPattern);
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _super2.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
    }

    /**
      @override
      @param {Object} opts
    */
    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);
        this._rebuildMask();
      }

      /** */
    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this7 = this;
        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;
        var _loop = function _loop(_i2) {
          if (_this7.blocks) {
            var p = pattern.slice(_i2);
            var bNames = Object.keys(_this7.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            });
            // order by key length
            bNames.sort(function (a, b) {
              return b.length - a.length;
            });
            // use block name with max length
            var bName = bNames[0];
            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = createMask(Object.assign({
                parent: _this7,
                lazy: _this7.lazy,
                eager: _this7.eager,
                placeholderChar: _this7.placeholderChar,
                displayChar: _this7.displayChar,
                overwrite: _this7.overwrite
              }, _this7.blocks[bName]));
              if (maskedBlock) {
                _this7._blocks.push(maskedBlock);

                // store block index
                if (!_this7._maskedBlocks[bName]) _this7._maskedBlocks[bName] = [];
                _this7._maskedBlocks[bName].push(_this7._blocks.length - 1);
              }
              _i2 += bName.length - 1;
              i = _i2;
              return "continue";
            }
          }
          var _char = pattern[_i2];
          var isInput = (_char in defs);
          if (_char === MaskedPattern.STOP_CHAR) {
            _this7._stops.push(_this7._blocks.length);
            i = _i2;
            return "continue";
          }
          if (_char === '{' || _char === '}') {
            unmaskingBlock = !unmaskingBlock;
            i = _i2;
            return "continue";
          }
          if (_char === '[' || _char === ']') {
            optionalBlock = !optionalBlock;
            i = _i2;
            return "continue";
          }
          if (_char === MaskedPattern.ESCAPE_CHAR) {
            ++_i2;
            _char = pattern[_i2];
            if (!_char) {
              i = _i2;
              return "break";
            }
            isInput = false;
          }
          var maskOpts = (_defs$char = defs[_char]) !== null && _defs$char !== void 0 && _defs$char.mask && !(((_defs$char2 = defs[_char]) === null || _defs$char2 === void 0 ? void 0 : _defs$char2.mask.prototype) instanceof IMask.Masked) ? defs[_char] : {
            mask: defs[_char]
          };
          var def = isInput ? new PatternInputDefinition(Object.assign({
            parent: _this7,
            isOptional: optionalBlock,
            lazy: _this7.lazy,
            eager: _this7.eager,
            placeholderChar: _this7.placeholderChar,
            displayChar: _this7.displayChar
          }, maskOpts)) : new PatternFixedDefinition({
            "char": _char,
            eager: _this7.eager,
            isUnmasking: unmaskingBlock
          });
          _this7._blocks.push(def);
          i = _i2;
        };
        for (var i = 0; i < pattern.length; ++i) {
          var _defs$char, _defs$char2;
          var _ret = _loop(i);
          if (_ret === "continue") continue;
          if (_ret === "break") break;
        }
      }

      /**
        @override
      */
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set(state) {
        var _blocks = state._blocks,
          maskedState = _objectWithoutPropertiesLoose(state, _excluded$2);
        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });
        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }

      /**
        @override
      */
    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);
        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }

      /**
        @override
      */
    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }

      /**
        @override
      */
    }, {
      key: "isFilled",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isFilled;
        });
      }
    }, {
      key: "isFixed",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isFixed;
        });
      }
    }, {
      key: "isOptional",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isOptional;
        });
      }

      /**
        @override
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });
        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }

      /**
        @override
      */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }

      /**
        @override
      */
    }, {
      key: "value",
      get: function get() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.displayValue;
        }, '');
      }

      /**
        @override
      */
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }

      /**
        @override
      */
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var _this$_mapPosToBlock;
        var details = new ChangeDetails();
        var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details;

        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
          var d = this._blocks[bi]._appendEager();
          if (!d.inserted) break;
          details.aggregate(d);
        }
        return details;
      }

      /**
        @override
      */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var blockIter = this._mapPosToBlock(this.value.length);
        var details = new ChangeDetails();
        if (!blockIter) return details;
        for (var bi = blockIter.index;; ++bi) {
          var _flags$_beforeTailSta, _flags$_beforeTailSta2;
          var block = this._blocks[bi];
          if (!block) break;
          var blockDetails = block._appendChar(ch, Object.assign({}, flags, {
            _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
          }));
          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }

      /**
        @override
      */
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this8 = this;
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
          var blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this8._findStopBefore(bi);
          blockChunk.from = _this8._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });
        return chunkTail;
      }

      /**
        @override
      */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';
        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;
        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }
        return stopBefore;
      }

      /** Appends placeholder depending on laziness */
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this9 = this;
        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;
        var startBlockIter = this._mapPosToBlock(this.value.length);
        if (!startBlockIter) return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (!b.lazy || toBlockIndex != null) {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];
            var bDetails = b._appendPlaceholder.apply(b, args);
            _this9._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });
        return details;
      }

      /** Finds block in pos */
    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';
        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var block = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += block.value;
          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }

      /** */
    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }

      /** */
    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;
        var fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos);
          // process first block
          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            }

            // process last block
            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }

      /**
        @override
      */
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
      }

      /**
        @override
      */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        if (!this._blocks.length) return 0;
        var cursor = new PatternCursor(this, cursorPos);
        if (direction === DIRECTION.NONE) {
          // -------------------------------------------------
          // NONE should only go out from fixed to the right!
          // -------------------------------------------------
          if (cursor.pushRightBeforeInput()) return cursor.pos;
          cursor.popState();
          if (cursor.pushLeftBeforeInput()) return cursor.pos;
          return this.value.length;
        }

        // FORCE is only about a|* otherwise is 0
        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // try to break fast when *|a
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeFilled();
            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
            cursor.popState();
          }

          // forward flow
          cursor.pushLeftBeforeInput();
          cursor.pushLeftBeforeRequired();
          cursor.pushLeftBeforeFilled();

          // backward flow
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
          }
          if (cursor.ok) return cursor.pos;
          if (direction === DIRECTION.FORCE_LEFT) return 0;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;

          // cursor.popState();
          // if (
          //   cursor.pushRightBeforeInput() &&
          //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
          //   (!this.lazy || this.extractInput())
          // ) return cursor.pos;

          return 0;
        }
        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // forward flow
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.pushRightBeforeFilled()) return cursor.pos;
          if (direction === DIRECTION.FORCE_RIGHT) return this.value.length;

          // backward flow
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
        }
        return cursorPos;
      }

      /**
        @override
      */
    }, {
      key: "totalInputPositions",
      value: function totalInputPositions() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var total = 0;
        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
      }

      /** Get block by name */
    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }

      /** Get all blocks by name */
    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this10 = this;
        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this10._blocks[gi];
        });
      }
    }]);
    return MaskedPattern;
  }(Masked);
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;

  /** Pattern which accepts ranges */
  var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);
    var _super3 = _createSuper(MaskedRange);
    function MaskedRange() {
      _classCallCheck(this, MaskedRange);
      return _super3.apply(this, arguments);
    }
    _createClass(MaskedRange, [{
      key: "_matchFrom",
      get:
      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */

      /** Min bound */

      /** Max bound */

      /** */

      function get() {
        return this.maxLength - String(this.from).length;
      }

      /**
        @override
      */
    }, {
      key: "_update",
      value: function _update(opts) {
        // TODO type
        opts = Object.assign({
          to: this.to || 0,
          from: this.from || 0,
          maxLength: this.maxLength || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var toStr = String(opts.to).padStart(maxLength, '0');
        var sameCharsCount = 0;
        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);
        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }

      /**
        @override
      */
    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = '';
        var maxstr = '';
        var _ref2 = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref3 = _slicedToArray(_ref2, 3),
          placeholder = _ref3[1],
          num = _ref3[2];
        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      }

      // TODO str is a single char everytime
      /**
        @override
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details;
        var _normalizePrepare3 = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));
        var _normalizePrepare4 = _slicedToArray(_normalizePrepare3, 2);
        ch = _normalizePrepare4[0];
        details = _normalizePrepare4[1];
        if (!this.autofix || !ch) return ch;
        var fromStr = String(this.from).padStart(this.maxLength, '0');
        var toStr = String(this.to).padStart(this.maxLength, '0');
        var nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return '';
        var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];
        if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
        if (Number(minstr) > this.to) {
          if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
            return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
          }
          return toStr[nextVal.length - 1];
        }
        return ch;
      }

      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate() {
        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this).apply(this, arguments);
      }
    }]);
    return MaskedRange;
  }(MaskedPattern);
  IMask.MaskedRange = MaskedRange;

  /** Date mask */
  var MaskedDate = /*#__PURE__*/function (_MaskedPattern2) {
    _inherits(MaskedDate, _MaskedPattern2);
    var _super4 = _createSuper(MaskedDate);
    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
      @param {Object} opts
    */
    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);
      return _super4.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
    }

    /**
      @override
    */
    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;
        if (opts.pattern) opts.mask = opts.pattern;
        var blocks = opts.blocks;
        opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;
          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }
        Object.assign(opts.blocks, this.blocks, blocks);

        // add autofix
        Object.keys(opts.blocks).forEach(function (bk) {
          var b = opts.blocks[bk];
          if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
        });
        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }

      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate() {
        var date = this.date;
        return _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this).apply(this, arguments) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }

      /** Checks if date is exists */
    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }

      /** Parsed Date */
    }, {
      key: "date",
      get: function get() {
        return this.typedValue;
      },
      set: function set(date) {
        this.typedValue = date;
      }

      /**
        @override
      */
    }, {
      key: "typedValue",
      get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
      }

      /**
        @override
      */
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
      }
    }]);
    return MaskedDate;
  }(MaskedPattern);
  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      if (!date) return '';
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
        _str$split2 = _slicedToArray(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];
      return new Date(year, month - 1, day);
    }
  };
  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };
  IMask.MaskedDate = MaskedDate;

  /**
    Generic element API to use with mask
    @interface
  */
  var MaskElement = /*#__PURE__*/function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }
    _createClass(MaskElement, [{
      key: "selectionStart",
      get: /** */

      /** */

      /** */

      /** Safely returns selection start */
      function get() {
        var start;
        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}
        return start != null ? start : this.value.length;
      }

      /** Safely returns selection end */
    }, {
      key: "selectionEnd",
      get: function get() {
        var end;
        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}
        return end != null ? end : this.value.length;
      }

      /** Safely sets element selection */
    }, {
      key: "select",
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }

      /** Should be overriden in subclasses */
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */
    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
      /** Should be overriden in subclasses */
    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }]);
    return MaskElement;
  }();
  IMask.MaskElement = MaskElement;

  /** Bridge between HTMLElement and {@link Masked} */
  var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);
    var _super5 = _createSuper(HTMLMaskElement);
    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */
    function HTMLMaskElement(input) {
      var _this11;
      _classCallCheck(this, HTMLMaskElement);
      _this11 = _super5.call(this);
      _this11.input = input;
      _this11._handlers = {};
      return _this11;
    }

    /** */
    // $FlowFixMe https://github.com/facebook/flow/issues/2839
    _createClass(HTMLMaskElement, [{
      key: "rootElement",
      get: function get() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
      }

      /**
        Is element in focus
        @readonly
      */
    }, {
      key: "isActive",
      get: function get() {
        //$FlowFixMe
        return this.input === this.rootElement.activeElement;
      }

      /**
        Returns HTMLElement selection start
        @override
      */
    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }

      /**
        Returns HTMLElement selection end
        @override
      */
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }

      /**
        Sets HTMLElement selection
        @override
      */
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }

      /**
        HTMLElement value
        @override
      */
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }

      /**
        Binds HTMLElement events to mask internal events
        @override
      */
    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {
        var _this12 = this;
        Object.keys(handlers).forEach(function (event) {
          return _this12._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }

      /**
        Unbinds HTMLElement events to mask internal events
        @override
      */
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this13 = this;
        Object.keys(this._handlers).forEach(function (event) {
          return _this13._toggleEventHandler(event);
        });
      }

      /** */
    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }
        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }]);
    return HTMLMaskElement;
  }(MaskElement);
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };
  IMask.HTMLMaskElement = HTMLMaskElement;
  var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
    _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);
    var _super6 = _createSuper(HTMLContenteditableMaskElement);
    function HTMLContenteditableMaskElement() {
      _classCallCheck(this, HTMLContenteditableMaskElement);
      return _super6.apply(this, arguments);
    }
    _createClass(HTMLContenteditableMaskElement, [{
      key: "_unsafeSelectionStart",
      get:
      /**
        Returns HTMLElement selection start
        @override
      */
      function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }

      /**
        Returns HTMLElement selection end
        @override
      */
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }

      /**
        Sets HTMLElement selection
        @override
      */
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        var range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }

      /**
        HTMLElement value
        @override
      */
    }, {
      key: "value",
      get: function get() {
        // $FlowFixMe
        return this.input.textContent;
      },
      set: function set(value) {
        this.input.textContent = value;
      }
    }]);
    return HTMLContenteditableMaskElement;
  }(HTMLMaskElement);
  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  var _excluded$1 = ["mask"];

  /** Listens to element events and controls changes between element and {@link Masked} */
  var InputMask = /*#__PURE__*/function () {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);
      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
      this._bindEvents();

      // refresh
      this.updateValue();
      this._onChange();
    }

    /** Read or update mask */
    _createClass(InputMask, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (this.maskEquals(mask)) return;

        // $FlowFixMe No ideas ... after update
        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }
        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }

      /** Raw value */
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }

      /** Unmasked value */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }

      /** Typed unmasked value */
    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }

      /** Display value */
    }, {
      key: "displayValue",
      get: function get() {
        return this.masked.displayValue;
      }

      /**
        Starts listening to element events
        @protected
      */
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        });
      }

      /**
        Stops listening to element events
        @protected
       */
    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        if (this.el) this.el.unbindEvents();
      }

      /**
        Fires custom event
        @protected
       */
    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l.apply(void 0, args);
        });
      }

      /**
        Current selection start
        @readonly
      */
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }

      /** Current cursor position */
    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
      }

      /**
        Stores current selection
        @protected
      */
    }, {
      key: "_saveSelection",
      value: function _saveSelection( /* ev */
      ) {
        if (this.displayValue !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }

      /** Syncronizes model value from view */
    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }

      /** Syncronizes view from model value, fires change events */
    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var newDisplayValue = this.displayValue;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (isChanged) this._fireChangeEvents();
      }

      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */
    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        var mask = opts.mask,
          restOpts = _objectWithoutPropertiesLoose(opts, _excluded$1);
        var updateMask = !this.maskEquals(mask);
        var updateOpts = !objectIncludes(this.masked, restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts);
        if (updateMask || updateOpts) this.updateControl();
      }

      /** Updates cursor */
    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;

        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
      }

      /**
        Delays cursor update to support mobile browsers
        @private
      */
    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this14 = this;
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this14.el) return; // if was destroyed
          _this14.cursorPos = _this14._changingCursorPos;
          _this14._abortUpdateCursor();
        }, 10);
      }

      /**
        Fires custom events
        @protected
      */
    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept', this._inputEvent);
        if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
      }

      /**
        Aborts delayed cursor update
        @private
      */
    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }

      /** Aligns cursor to nearest available position */
    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
      }

      /** Aligns cursor only if selection is empty */
    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
      }

      /** Adds listener on custom event */
    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
      }

      /** Removes custom event listener */
    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
          delete this._listeners[ev];
          return this;
        }
        var hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }

      /** Handles view input event */
    }, {
      key: "_onInput",
      value: function _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();

        // fix strange IE behavior
        if (!this._selection) return this.updateValue();
        var details = new ActionDetails(
        // new state
        this.el.value, this.cursorPos,
        // old state
        this.displayValue, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
          input: true,
          raw: true
        }).offset;

        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
      }

      /** Handles view change event and commits model value */
    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.displayValue !== this.el.value) {
          this.updateValue();
        }
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
      }

      /** Handles view drop event, prevents by default */
    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      /** Restore last selection on focus */
    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        this.alignCursorFriendly();
      }

      /** Restore last selection on focus */
    }, {
      key: "_onClick",
      value: function _onClick(ev) {
        this.alignCursorFriendly();
      }

      /** Unbind view events and removes element reference */
    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents();
        // $FlowFixMe why not do so?
        this._listeners.length = 0;
        // $FlowFixMe
        delete this.el;
      }
    }]);
    return InputMask;
  }();
  IMask.InputMask = InputMask;

  /** Pattern which validates enum values */
  var MaskedEnum = /*#__PURE__*/function (_MaskedPattern3) {
    _inherits(MaskedEnum, _MaskedPattern3);
    var _super7 = _createSuper(MaskedEnum);
    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);
      return _super7.apply(this, arguments);
    }
    _createClass(MaskedEnum, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        // TODO type
        if (opts["enum"]) opts.mask = '*'.repeat(opts["enum"][0].length);
        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }

      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this15 = this;
        return this["enum"].some(function (e) {
          return e.indexOf(_this15.unmaskedValue) >= 0;
        }) && _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this).apply(this, arguments);
      }
    }]);
    return MaskedEnum;
  }(MaskedPattern);
  IMask.MaskedEnum = MaskedEnum;

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  var MaskedNumber = /*#__PURE__*/function (_Masked3) {
    _inherits(MaskedNumber, _Masked3);
    var _super8 = _createSuper(MaskedNumber);
    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */

    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);
      return _super8.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
    }

    /**
      @override
    */
    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);
        this._updateRegExps();
      }

      /** */
    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        var mid = '\\d*';
        var end = (this.scale ? "(".concat(escapeRegExp(this.radix), "\\d{0,").concat(this.scale, "})?") : '') + '$';
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp("[".concat(this.mapToRadix.map(escapeRegExp).join(''), "]"), 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }

      /** */
    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }

      /** */
    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }

      /**
        @override
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        ch = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
        /*
          radix should be mapped when
          1) input is done from keyboard = flags.input && flags.raw
          2) unmasked value is set = !flags.input && !flags.raw
          and should not be mapped when
          1) value is set = flags.input && !flags.raw
          2) raw value is set = !flags.input && flags.raw
        */
        flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch);
        var _normalizePrepare5 = normalizePrepare(_get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this).call(this, ch, flags)),
          _normalizePrepare6 = _slicedToArray(_normalizePrepare5, 2),
          prepCh = _normalizePrepare6[0],
          details = _normalizePrepare6[1];
        if (ch && !prepCh) details.skip = true;
        return [prepCh, details];
      }

      /** */
    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = 0;
        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }
        return count;
      }

      /** */
    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }

      /**
        @override
      */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }

      /**
        @override
      */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
        var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }

      /** */
    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }
        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        var separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }

      /**
        @override
      */
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);
        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }

      /**
        @override
      */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
              if (separatorAtLeftPos >= 0) {
                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }
              break;
            }
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              var separatorAtRightPos = this._findSeparatorAround(cursorPos);
              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }
        return cursorPos;
      }

      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        // validate as string
        var valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && (
          // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && (
          // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }

      /**
        @override
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number;

          // check bounds
          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = this.doFormat(validnum);
          var formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }
        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }

      /** */
    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix);

        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        });
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }

      /** */
    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }

      /** */
    }, {
      key: "doSkipInvalid",
      value: function doSkipInvalid(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        var dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return _get(_getPrototypeOf(MaskedNumber.prototype), "doSkipInvalid", this).call(this, ch, flags, checkTail) && !dropFractional;
      }

      /**
        @override
      */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue, this, true);
      }

      /**
        @override
      */
    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.unmaskedValue);
      },
      set: function set(n) {
        this.rawInputValue = this.doFormat(n).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
      }

      /** Parsed Number */
    }, {
      key: "number",
      get: function get() {
        return this.typedValue;
      },
      set: function set(number) {
        this.typedValue = number;
      }

      /**
        Is negative allowed
        @readonly
      */
    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }

      /**
        @override
      */
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (_get(_getPrototypeOf(MaskedNumber.prototype), "typedValueEquals", this).call(this, value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
      }
    }]);
    return MaskedNumber;
  }(Masked);
  MaskedNumber.UNMASKED_RADIX = '.';
  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: [MaskedNumber.UNMASKED_RADIX],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: function format(n) {
      return n.toLocaleString('en-US', {
        useGrouping: false,
        maximumFractionDigits: 20
      });
    }
  };
  MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(Masked.EMPTY_VALUES), [0]);
  IMask.MaskedNumber = MaskedNumber;

  /** Masking by custom Function */
  var MaskedFunction = /*#__PURE__*/function (_Masked4) {
    _inherits(MaskedFunction, _Masked4);
    var _super9 = _createSuper(MaskedFunction);
    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);
      return _super9.apply(this, arguments);
    }
    _createClass(MaskedFunction, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;
        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);
    return MaskedFunction;
  }(Masked);
  IMask.MaskedFunction = MaskedFunction;
  var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"],
    _excluded2 = ["mask"];
  /** Dynamic mask for choosing apropriate mask in run-time */
  var MaskedDynamic = /*#__PURE__*/function (_Masked5) {
    _inherits(MaskedDynamic, _Masked5);
    var _super10 = _createSuper(MaskedDynamic);
    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */
    function MaskedDynamic(opts) {
      var _this16;
      _classCallCheck(this, MaskedDynamic);
      _this16 = _super10.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
      _this16.currentMask = null;
      return _this16;
    }

    /**
      @override
    */
    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);
        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];

          // this.currentMask = this.doDispatch(''); // probably not needed but lets see
        }
      }

      /**
        @override
      */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = this._applyDispatch(ch, flags);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        }
        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && flags._beforeTailState != null ?
        // $FlowFixMe - tired to fight with type system
        flags._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state;

        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, Object.assign({}, flags), tail);

        // restore state after dispatch
        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset();
            if (insertValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              var d = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d.inserted.length - prevValueBeforeTail.length;
            }
            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
          }
        }
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = this._applyDispatch.apply(this, arguments);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }
        return details;
      }

      /**
       @override
      */
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var details = this._applyDispatch.apply(this, arguments);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendEager());
        }
        return details;
      }
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        var details = new ChangeDetails();
        if (tail) details.aggregate(this._applyDispatch('', {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : _get(_getPrototypeOf(MaskedDynamic.prototype), "appendTail", this).call(this, tail));
      }
    }, {
      key: "currentMaskFlags",
      value: function currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        return Object.assign({}, flags, {
          _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        });
      }

      /**
        @override
      */
    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        return this.dispatch(appended, this, flags, tail);
      }

      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this).call(this, flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
      }

      /**
        @override
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _normalizePrepare7 = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, str, flags)),
          _normalizePrepare8 = _slicedToArray(_normalizePrepare7, 2),
          s = _normalizePrepare8[0],
          details = _normalizePrepare8[1];
        if (this.currentMask) {
          var currentDetails;
          var _normalizePrepare9 = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(flags)));
          var _normalizePrepare10 = _slicedToArray(_normalizePrepare9, 2);
          s = _normalizePrepare10[0];
          currentDetails = _normalizePrepare10[1];
          details = details.aggregate(currentDetails);
        }
        return [s, details];
      }

      /**
        @override
      */
    }, {
      key: "reset",
      value: function reset() {
        var _this$currentMask;
        (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }

      /**
        @override
      */
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }

      /**
        @override
      */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }

      /**
        @override
      */
    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : '';
      }

      // probably typedValue should not be used with dynamic
      ,
      set: function set(value) {
        var unmaskedValue = String(value);

        // double check it
        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
      }
    }, {
      key: "displayValue",
      get: function get() {
        return this.currentMask ? this.currentMask.displayValue : '';
      }

      /**
        @override
      */
    }, {
      key: "isComplete",
      get: function get() {
        var _this$currentMask2;
        return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
      }

      /**
        @override
      */
    }, {
      key: "isFilled",
      get: function get() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
      }

      /**
        @override
      */
    }, {
      key: "remove",
      value: function remove() {
        var details = new ChangeDetails();
        if (this.currentMask) {
          var _this$currentMask6;
          details.aggregate((_this$currentMask6 = this.currentMask).remove.apply(_this$currentMask6, arguments))
          // update with dispatch
          .aggregate(this._applyDispatch());
        }
        return details;
      }

      /**
        @override
      */
    }, {
      key: "state",
      get: function get() {
        var _this$currentMask4;
        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: (_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.state
        });
      },
      set: function set(state) {
        var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = _objectWithoutPropertiesLoose(state, _excluded);
        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });
        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }
        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }

      /**
        @override
      */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$currentMask7;
        return this.currentMask ? (_this$currentMask7 = this.currentMask).extractInput.apply(_this$currentMask7, arguments) : '';
      }

      /**
        @override
      */
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask8;
        return this.currentMask ? (_this$currentMask8 = this.currentMask).extractTail.apply(_this$currentMask8, arguments) : _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this).apply(this, arguments);
      }

      /**
        @override
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }

      /**
        @override
      */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask9;
        return this.currentMask ? (_this$currentMask9 = this.currentMask).nearestInputPos.apply(_this$currentMask9, arguments) : _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this).apply(this, arguments);
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
      },
      set: function set(overwrite) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "eager",
      get: function get() {
        return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
      },
      set: function set(eager) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "skipInvalid",
      get: function get() {
        return this.currentMask ? this.currentMask.skipInvalid : _get(_getPrototypeOf(MaskedDynamic.prototype), "skipInvalid", this);
      },
      set: function set(skipInvalid) {
        if (this.isInitialized || skipInvalid !== Masked.DEFAULTS.skipInvalid) {
          console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings');
        }
      }

      /**
        @override
      */
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
          if (!mask[mi]) return;
          var _mask$mi = mask[mi],
            oldMask = _mask$mi.mask,
            restOpts = _objectWithoutPropertiesLoose(_mask$mi, _excluded2);
          return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
        });
      }

      /**
        @override
      */
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        var _this$currentMask5;
        return Boolean((_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.typedValueEquals(value));
      }
    }]);
    return MaskedDynamic;
  }(Masked);
  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags, tail) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue;

      // simulate input
      var inputs = masked.compiledMasks.map(function (m, index) {
        var isCurrent = masked.currentMask === m;
        var startInputPos = isCurrent ? m.value.length : m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT);
        if (m.rawInputValue !== inputValue) {
          m.reset();
          m.append(inputValue, {
            raw: true
          });
        } else if (!isCurrent) {
          m.remove(startInputPos);
        }
        m.append(appended, masked.currentMaskFlags(flags));
        m.appendTail(tail);
        return {
          index: index,
          weight: m.rawInputValue.length,
          totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT)))
        };
      });

      // pop masks with longer values first
      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;

  /** Mask pipe source and destination types */
  var PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };

  /** Creates new pipe function depending on mask type, source and destination options */
  function createPipe(mask) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    var masked = createMask(mask);
    return function (value) {
      return masked.runIsolated(function (m) {
        m[from] = value;
        return m[to];
      });
    };
  }

  /** Pipes value through mask depending on mask type, source and destination options */
  function pipe(value) {
    for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipeArgs[_key - 1] = arguments[_key];
    }
    return createPipe.apply(void 0, pipeArgs)(value);
  }
  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;
  try {
    globalThis.IMask = IMask;
  } catch (e) {}
  exports.ChangeDetails = ChangeDetails;
  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports["default"] = IMask;
  exports.pipe = pipe;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});