'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XOverride = exports.XDefault = exports.XTypes = undefined;

var _dec, _class, _dec2, _class2, _dec3, _class3;

exports.makeXTypes = makeXTypes;

var _node = require('./node');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XTypes = exports.XTypes = (_dec = (0, _node.props)('xmlns'), _dec(_class = function (_Node) {
  _inherits(XTypes, _Node);

  function XTypes(_ref, children) {
    var _ref$xmlns = _ref.xmlns,
        xmlns = _ref$xmlns === undefined ? 'http://schemas.openxmlformats.org/package/2006/content-types' : _ref$xmlns;

    _classCallCheck(this, XTypes);

    var _this = _possibleConstructorReturn(this, (XTypes.__proto__ || Object.getPrototypeOf(XTypes)).call(this, { xmlns }, children));

    _this[_node.HEAD] = '<?xml version="1.0" encoding="UTF-8"?>';
    return _this;
  }

  return XTypes;
}(_node.Node)) || _class);
var XDefault = exports.XDefault = (_dec2 = (0, _node.props)('Extension', 'ContentType'), _dec2(_class2 = function (_Node2) {
  _inherits(XDefault, _Node2);

  function XDefault() {
    _classCallCheck(this, XDefault);

    return _possibleConstructorReturn(this, (XDefault.__proto__ || Object.getPrototypeOf(XDefault)).apply(this, arguments));
  }

  return XDefault;
}(_node.Node)) || _class2);
var XOverride = exports.XOverride = (_dec3 = (0, _node.props)('PartName', 'ContentType'), _dec3(_class3 = function (_Node3) {
  _inherits(XOverride, _Node3);

  function XOverride() {
    _classCallCheck(this, XOverride);

    return _possibleConstructorReturn(this, (XOverride.__proto__ || Object.getPrototypeOf(XOverride)).apply(this, arguments));
  }

  return XOverride;
}(_node.Node)) || _class3);
function makeXTypes() {
  var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new XTypes({});

  var defaults = [{
    Extension: 'rels',
    ContentType: 'application/vnd.openxmlformats-package.relationships+xml'
  }, {
    Extension: 'xml',
    ContentType: 'application/xml'
  }];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = defaults[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      types.children.push(new XDefault(item));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var overrides = [{
    PartName: '/_rels/.rels',
    ContentType: 'application/vnd.openxmlformats-package.relationships+xml'
  }, {
    PartName: '/docProps/app.xml',
    ContentType: 'application/vnd.openxmlformats-officedocument.extended-properties+xml'
  }, {
    PartName: '/docProps/core.xml',
    ContentType: 'application/vnd.openxmlformats-package.core-properties+xml'
  }, {
    PartName: '/xl/_rels/workbook.xml.rels',
    ContentType: 'application/vnd.openxmlformats-package.relationships+xml'
  }, {
    PartName: '/xl/sharedStrings.xml',
    ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml'
  }, {
    PartName: '/xl/styles.xml',
    ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml'
  }, {
    PartName: '/xl/workbook.xml',
    ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml'
  }, {
    PartName: '/xl/theme/theme1.xml',
    ContentType: 'application/vnd.openxmlformats-officedocument.theme+xml'
  }];

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = overrides[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var override = _step2.value;

      types.children.push(new XOverride(override));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return types;
}