'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xr = exports.Xt = exports.Xsi = exports.Xsst = undefined;

var _dec, _class, _dec2, _class2;

var _node = require('./node');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Xsst = exports.Xsst = (_dec = (0, _node.props)('xmlns', 'count', 'uniqueCount'), _dec(_class = function (_Node) {
  _inherits(Xsst, _Node);

  function Xsst(_ref, children) {
    var _ref$xmlns = _ref.xmlns,
        xmlns = _ref$xmlns === undefined ? 'http://schemas.openxmlformats.org/spreadsheetml/2006/main' : _ref$xmlns;

    _classCallCheck(this, Xsst);

    var _this = _possibleConstructorReturn(this, (Xsst.__proto__ || Object.getPrototypeOf(Xsst)).call(this, { xmlns }, children));

    _this[_node.HEAD] = '<?xml version="1.0" encoding="UTF-8"?>';
    return _this;
  }

  return Xsst;
}(_node.Node)) || _class);

var Xsi = exports.Xsi = function (_Node2) {
  _inherits(Xsi, _Node2);

  function Xsi() {
    _classCallCheck(this, Xsi);

    return _possibleConstructorReturn(this, (Xsi.__proto__ || Object.getPrototypeOf(Xsi)).apply(this, arguments));
  }

  return Xsi;
}(_node.Node);

var Xt = exports.Xt = (_dec2 = (0, _node.props)('xml:space'), _dec2(_class2 = function (_Node3) {
  _inherits(Xt, _Node3);

  function Xt() {
    _classCallCheck(this, Xt);

    return _possibleConstructorReturn(this, (Xt.__proto__ || Object.getPrototypeOf(Xt)).apply(this, arguments));
  }

  return Xt;
}(_node.Node)) || _class2);

var Xr = exports.Xr = function (_Node4) {
  _inherits(Xr, _Node4);

  function Xr() {
    _classCallCheck(this, Xr);

    return _possibleConstructorReturn(this, (Xr.__proto__ || Object.getPrototypeOf(Xr)).apply(this, arguments));
  }

  return Xr;
}(_node.Node);