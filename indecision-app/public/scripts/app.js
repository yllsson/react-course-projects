"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getGreeting",
    value: function getGreeting() {
      return "Hi. I am ".concat(this.name, "!");
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return "".concat(this.name, " is ").concat(this.age, " year(s) old.");
    }
  }]);

  return Person;
}();

var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, major) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, age);
    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: "hasMajor",
    value: function hasMajor() {
      return !!this.major;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var description = _get(_getPrototypeOf(Student.prototype), "getDescription", this).call(this);

      if (this.hasMajor()) {
        description += " Their major is ".concat(this.major, ".");
      }

      return description;
    }
  }]);

  return Student;
}(Person);

var Traveler = /*#__PURE__*/function (_Person2) {
  _inherits(Traveler, _Person2);

  var _super2 = _createSuper(Traveler);

  function Traveler(name, age, homeLocation) {
    var _this2;

    _classCallCheck(this, Traveler);

    _this2 = _super2.call(this, name, age);
    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: "getGreeting",
    value: function getGreeting() {
      var greeting = _get(_getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);

      if (!!this.homeLocation) {
        greeting += " I'm visiting from ".concat(this.homeLocation, ".");
      }

      return greeting;
    }
  }]);

  return Traveler;
}(Person);

var me = new Traveler('Ylva Turner', 31, 'Edinburgh');
console.log(me.getGreeting());
var other = new Traveler();
console.log(other.getGreeting());
