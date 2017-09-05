'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xalignment = exports.Xxf = exports.XcellXfs = exports.XcellStyleXfs = exports.XcellStyle = exports.XcellStyles = exports.Xborder = exports.Xborders = exports.XpatternFill = exports.Xfill = exports.Xfills = exports.Xfont = exports.Xfonts = exports.XnumFmt = exports.XnumFmts = exports.XstyleSheet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _dec2, _class3, _dec3, _class4, _dec4, _class5, _dec5, _class6, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _dec10, _class11, _dec11, _class12, _dec12, _class13, _dec13, _class14, _dec14, _class15, _dec15, _class16, _dec16, _class17;

var _node = require('./node');

var _lib = require('./lib');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XstyleSheet = exports.XstyleSheet = (_dec = (0, _node.props)('xmlns'), _dec(_class = function (_Node) {
  _inherits(XstyleSheet, _Node);

  function XstyleSheet(_ref, children) {
    var _ref$xmlns = _ref.xmlns,
        xmlns = _ref$xmlns === undefined ? 'http://schemas.openxmlformats.org/spreadsheetml/2006/main' : _ref$xmlns;

    _classCallCheck(this, XstyleSheet);

    var _this = _possibleConstructorReturn(this, (XstyleSheet.__proto__ || Object.getPrototypeOf(XstyleSheet)).call(this, { xmlns }, children));

    _this.fonts = null;
    _this.fills = null;
    _this.borders = null;
    _this.cellStyles = null;
    _this.cellStyleXfs = null;
    _this.cellXfs = null;
    _this.numFmts = null;
    _this.numFmtRefTable = {};

    _this[_node.HEAD] = '<?xml version="1.0" encoding="UTF-8"?>';
    return _this;
  }

  _createClass(XstyleSheet, [{
    key: 'render',
    value: function render() {
      this.children = [];
      if (this.numFmts) this.children.push(this.numFmts);
      if (this.fonts) this.children.push(this.fonts);
      if (this.fills) this.children.push(this.fills);
      if (this.borders) this.children.push(this.borders);
      if (this.cellStyleXfs) this.children.push(this.cellStyleXfs);
      if (this.cellXfs) this.children.push(this.cellXfs);
      if (this.cellStyles) this.children.push(this.cellStyles);
      return _get(XstyleSheet.prototype.__proto__ || Object.getPrototypeOf(XstyleSheet.prototype), 'render', this).call(this);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.children = [];
      this.fonts = new Xfonts();
      this.fills = new Xfills();
      this.borders = new Xborders();
      this.cellXfs = new XcellXfs({ count: 1 }, [new Xxf()]);
      this.numFmts = new XnumFmts();
      this.addBorder(new Xborder({
        left: { style: 'none' },
        right: { style: 'none' },
        top: { style: 'none' },
        bottom: { style: 'none' }
      }));
    }
  }, {
    key: 'addFont',
    value: function addFont(xFont) {
      if (!xFont.name) return 0;
      var list = this.fonts.children;
      var len = list.length;
      for (var i = 0; i < list.length; i++) {
        if (xFont.equals(list[i])) return i;
      }
      list.push(xFont);
      this.fonts.count = list.length;
      return len;
    }
  }, {
    key: 'addFill',
    value: function addFill(xFill) {
      var list = this.fills.children;
      var len = list.length;
      for (var i = 0; i < list.length; i++) {
        if (xFill.equals(list[i])) return i;
      }
      list.push(xFill);
      this.fills.count = list.length;
      return len;
    }
  }, {
    key: 'addBorder',
    value: function addBorder(xBorder) {
      var list = this.borders.children;
      var len = list.length;
      for (var i = 0; i < list.length; i++) {
        if (xBorder.equals(list[i])) return i;
      }
      list.push(xBorder);
      this.borders.count = list.length;
      return len;
    }
  }, {
    key: 'addCellXf',
    value: function addCellXf(xXf) {
      var list = this.cellXfs.children;
      var len = list.length;
      for (var i = 0; i < list.length; i++) {
        if (xXf.equals(list[i])) return i;
      }
      list.push(xXf);
      this.cellXfs.count = list.length;
      return len;
    }
  }, {
    key: 'addNumFmt',
    value: function addNumFmt(xNumFmt) {
      if (xNumFmt.numFmtId <= _lib.NumFmtsCount) return;
      if (this.numFmtRefTable[xNumFmt.numFmtId] === undefined) {
        this.numFmts.children.push(xNumFmt);
        this.numFmts.count = this.numFmts.children.length;
        this.numFmtRefTable[xNumFmt.numFmtId] = xNumFmt;
      }
    }
  }, {
    key: 'newNumFmt',
    value: function newNumFmt(formatCode) {
      if (!formatCode) return new XnumFmt({ numFmtId: 0, formatCode: 'general' });
      var numFmtId = _lib.NumFmtInv[formatCode];
      if (numFmtId !== undefined) {
        return new XnumFmt({ numFmtId, formatCode });
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.numFmts.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var numFmt = _step.value;

          if (formatCode === numFmt.formatCode) return numFmt;
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

      numFmtId = _lib.NumFmtsCount + 1;
      do {
        if (this.numFmtRefTable[numFmtId]) {
          numFmtId++;
        } else {
          this.addNumFmt(new XnumFmt({ numFmtId, formatCode }));
          break;
        }
      } while (1);
      return new XnumFmt({ numFmtId, formatCode });
    }
  }]);

  return XstyleSheet;
}(_node.Node)) || _class);
var XnumFmts = exports.XnumFmts = (_dec2 = (0, _node.props)('count'), _dec2(_class3 = function (_Node2) {
  _inherits(XnumFmts, _Node2);

  function XnumFmts() {
    _classCallCheck(this, XnumFmts);

    return _possibleConstructorReturn(this, (XnumFmts.__proto__ || Object.getPrototypeOf(XnumFmts)).apply(this, arguments));
  }

  _createClass(XnumFmts, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(XnumFmts.prototype.__proto__ || Object.getPrototypeOf(XnumFmts.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return XnumFmts;
}(_node.Node)) || _class3);
var XnumFmt = exports.XnumFmt = (_dec3 = (0, _node.props)('numFmtId', 'formatCode'), _dec3(_class4 = function (_Node3) {
  _inherits(XnumFmt, _Node3);

  function XnumFmt() {
    _classCallCheck(this, XnumFmt);

    return _possibleConstructorReturn(this, (XnumFmt.__proto__ || Object.getPrototypeOf(XnumFmt)).apply(this, arguments));
  }

  return XnumFmt;
}(_node.Node)) || _class4);
var Xfonts = exports.Xfonts = (_dec4 = (0, _node.props)('count'), _dec4(_class5 = function (_Node4) {
  _inherits(Xfonts, _Node4);

  function Xfonts() {
    _classCallCheck(this, Xfonts);

    return _possibleConstructorReturn(this, (Xfonts.__proto__ || Object.getPrototypeOf(Xfonts)).apply(this, arguments));
  }

  _createClass(Xfonts, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(Xfonts.prototype.__proto__ || Object.getPrototypeOf(Xfonts.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return Xfonts;
}(_node.Node)) || _class5);
var Xfont = exports.Xfont = (_dec5 = (0, _node.props)('sz', 'name', 'family', 'charset', 'color', 'b', 'i', 'u'), _dec5(_class6 = function (_Node5) {
  _inherits(Xfont, _Node5);

  function Xfont() {
    _classCallCheck(this, Xfont);

    return _possibleConstructorReturn(this, (Xfont.__proto__ || Object.getPrototypeOf(Xfont)).apply(this, arguments));
  }

  _createClass(Xfont, [{
    key: 'render',
    value: function render() {
      var str = '<font>';
      if (this.sz) str += `<sz val="${this.sz}"/>`;
      if (this.name) str += `<name val="${this.name}"/>`;
      if (this.family) str += `<family val="${this.family}"/>`;
      if (this.charset) str += `<charset val="${this.charset}"/>`;
      if (this.color) str += `<color rgb="${this.color}"/>`;
      if (this.b) str += `<b/>`;
      if (this.i) str += `<i/>`;
      if (this.u) str += `<u/>`;
      return str + '</font>';
    }
  }, {
    key: 'equals',
    value: function equals(o) {
      return this.sz === o.sz && this.name === o.name && this.family === o.family && this.charset === o.charset && this.color === o.color && this.b === o.b && this.i === o.i && this.u === o.u;
    }
  }]);

  return Xfont;
}(_node.Node)) || _class6);
var Xfills = exports.Xfills = (_dec6 = (0, _node.props)('count'), _dec6(_class7 = function (_Node6) {
  _inherits(Xfills, _Node6);

  function Xfills() {
    _classCallCheck(this, Xfills);

    return _possibleConstructorReturn(this, (Xfills.__proto__ || Object.getPrototypeOf(Xfills)).apply(this, arguments));
  }

  _createClass(Xfills, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(Xfills.prototype.__proto__ || Object.getPrototypeOf(Xfills.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return Xfills;
}(_node.Node)) || _class7);
var Xfill = exports.Xfill = (_dec7 = (0, _node.props)('patternFill'), _dec7(_class8 = function (_Node7) {
  _inherits(Xfill, _Node7);

  function Xfill() {
    _classCallCheck(this, Xfill);

    return _possibleConstructorReturn(this, (Xfill.__proto__ || Object.getPrototypeOf(Xfill)).apply(this, arguments));
  }

  _createClass(Xfill, [{
    key: 'render',
    value: function render() {
      return `<fill>${this.patternFill.render()}</fill>`;
    }
  }, {
    key: 'equals',
    value: function equals(o) {
      var pf1 = this.patternFill;
      var pf2 = o.patternFill;
      if (pf1 && pf2) {
        return pf1.patternType === pf2.patternType && pf1.fgColor === pf2.fgColor && pf1.bgColor === pf2.bgColor;
      }
      return !pf1 && !pf2;
    }
  }]);

  return Xfill;
}(_node.Node)) || _class8);
var XpatternFill = exports.XpatternFill = (_dec8 = (0, _node.props)('patternType', 'fgColor', 'bgColor'), _dec8(_class9 = function (_Node8) {
  _inherits(XpatternFill, _Node8);

  function XpatternFill() {
    _classCallCheck(this, XpatternFill);

    return _possibleConstructorReturn(this, (XpatternFill.__proto__ || Object.getPrototypeOf(XpatternFill)).apply(this, arguments));
  }

  _createClass(XpatternFill, [{
    key: 'render',
    value: function render() {
      var str = `<patternFill patternType="${this.patternType}">`;
      if (this.fgColor) str += `<fgColor rgb="${this.fgColor}"/>`;
      if (this.bgColor) str += `<bgColor rgb="${this.bgColor}"/>`;
      return str + '</patternFill>';
    }
  }]);

  return XpatternFill;
}(_node.Node)) || _class9);
var Xborders = exports.Xborders = (_dec9 = (0, _node.props)('count'), _dec9(_class10 = function (_Node9) {
  _inherits(Xborders, _Node9);

  function Xborders() {
    _classCallCheck(this, Xborders);

    return _possibleConstructorReturn(this, (Xborders.__proto__ || Object.getPrototypeOf(Xborders)).apply(this, arguments));
  }

  _createClass(Xborders, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(Xborders.prototype.__proto__ || Object.getPrototypeOf(Xborders.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return Xborders;
}(_node.Node)) || _class10);
var Xborder = exports.Xborder = (_dec10 = (0, _node.props)('left', 'right', 'top', 'bottom'), _dec10(_class11 = function (_Node10) {
  _inherits(Xborder, _Node10);

  function Xborder() {
    _classCallCheck(this, Xborder);

    return _possibleConstructorReturn(this, (Xborder.__proto__ || Object.getPrototypeOf(Xborder)).apply(this, arguments));
  }

  _createClass(Xborder, [{
    key: '_renderLine',
    value: function _renderLine(pos) {
      var posVal = this[pos];
      if (!posVal) return '';

      var str = `<${pos} style="${posVal.style}">`;
      if (posVal.color) str += `<color rgb="${posVal.color}"/>`;
      return str + `</${pos}>`;
    }
  }, {
    key: 'render',
    value: function render() {
      var str = '<border>';
      str += this._renderLine('left');
      str += this._renderLine('right');
      str += this._renderLine('top');
      str += this._renderLine('bottom');
      return str + '</border>';
    }
  }, {
    key: 'equals',
    value: function equals(o) {
      var check = function check(a, b) {
        if (a && b) {
          return a.style === b.style && a.color === b.color;
        }
        return !a && !b;
      };
      return check(this.left, o.left) && check(this.right, o.right) && check(this.top, o.top) && check(this.bottom, o.bottom);
    }
  }]);

  return Xborder;
}(_node.Node)) || _class11);
var XcellStyles = exports.XcellStyles = (_dec11 = (0, _node.props)('count'), _dec11(_class12 = function (_Node11) {
  _inherits(XcellStyles, _Node11);

  function XcellStyles() {
    _classCallCheck(this, XcellStyles);

    return _possibleConstructorReturn(this, (XcellStyles.__proto__ || Object.getPrototypeOf(XcellStyles)).apply(this, arguments));
  }

  _createClass(XcellStyles, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(XcellStyles.prototype.__proto__ || Object.getPrototypeOf(XcellStyles.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return XcellStyles;
}(_node.Node)) || _class12);
var XcellStyle = exports.XcellStyle = (_dec12 = (0, _node.props)('builtInId', 'customBuiltIn', 'hidden', 'iLevel', 'name', 'xfId'), _dec12(_class13 = function (_Node12) {
  _inherits(XcellStyle, _Node12);

  function XcellStyle() {
    _classCallCheck(this, XcellStyle);

    return _possibleConstructorReturn(this, (XcellStyle.__proto__ || Object.getPrototypeOf(XcellStyle)).apply(this, arguments));
  }

  return XcellStyle;
}(_node.Node)) || _class13);
var XcellStyleXfs = exports.XcellStyleXfs = (_dec13 = (0, _node.props)('count'), _dec13(_class14 = function (_Node13) {
  _inherits(XcellStyleXfs, _Node13);

  function XcellStyleXfs() {
    _classCallCheck(this, XcellStyleXfs);

    return _possibleConstructorReturn(this, (XcellStyleXfs.__proto__ || Object.getPrototypeOf(XcellStyleXfs)).apply(this, arguments));
  }

  _createClass(XcellStyleXfs, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(XcellStyleXfs.prototype.__proto__ || Object.getPrototypeOf(XcellStyleXfs.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return XcellStyleXfs;
}(_node.Node)) || _class14);
var XcellXfs = exports.XcellXfs = (_dec14 = (0, _node.props)('count'), _dec14(_class15 = function (_Node14) {
  _inherits(XcellXfs, _Node14);

  function XcellXfs() {
    _classCallCheck(this, XcellXfs);

    return _possibleConstructorReturn(this, (XcellXfs.__proto__ || Object.getPrototypeOf(XcellXfs)).apply(this, arguments));
  }

  _createClass(XcellXfs, [{
    key: 'render',
    value: function render() {
      if (this.count) return _get(XcellXfs.prototype.__proto__ || Object.getPrototypeOf(XcellXfs.prototype), 'render', this).call(this);
      return '';
    }
  }]);

  return XcellXfs;
}(_node.Node)) || _class15);
var Xxf = exports.Xxf = (_dec15 = (0, _node.props)('applyAlignment', 'applyBorder', 'applyFont', 'applyFill', 'applyNumberFormat', 'applyProtection', 'borderId', 'fillId', 'fontId', 'numFmtId', 'xfId'), _dec15(_class16 = function (_Node15) {
  _inherits(Xxf, _Node15);

  function Xxf(attrs, children) {
    _classCallCheck(this, Xxf);

    var defaults = {
      applyAlignment: false,
      applyBorder: false,
      applyFont: false,
      applyFill: false,
      applyNumberFormat: false,
      applyProtection: false,
      borderId: 0,
      fillId: 0,
      fontId: 0,
      numFmtId: 0
    };

    var _this15 = _possibleConstructorReturn(this, (Xxf.__proto__ || Object.getPrototypeOf(Xxf)).call(this, _extends({}, defaults, attrs), children));

    _this15.alignment = new Xalignment();
    return _this15;
  }

  _createClass(Xxf, [{
    key: 'render',
    value: function render() {
      if (this.alignment) {
        this.children = [this.alignment];
      }
      return _get(Xxf.prototype.__proto__ || Object.getPrototypeOf(Xxf.prototype), 'render', this).call(this);
    }
  }, {
    key: 'equals',
    value: function equals(o) {
      return this.applyAlignment === o.applyAlignment && this.applyBorder === o.applyBorder && this.applyFont === o.applyFont && this.applyFill === o.applyFill && this.applyProtection === o.applyProtection && this.borderId === o.borderId && this.fillId === o.fillId && this.fontId === o.fontId && this.numFmtId === o.numFmtId && this.xfId === o.xfId && this.alignment.equals(o.alignment);
    }
  }]);

  return Xxf;
}(_node.Node)) || _class16);
var Xalignment = exports.Xalignment = (_dec16 = (0, _node.props)('horizontal', 'indent', 'shrinkToFit', 'textRotation', 'vertical', 'wrapText'), _dec16(_class17 = function (_Node16) {
  _inherits(Xalignment, _Node16);

  function Xalignment(attrs) {
    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Xalignment);

    var defaults = {
      horizontal: 'general',
      indent: 0,
      shrinkToFit: false,
      textRotation: 0,
      vertical: 'bottom',
      wrapText: false
    };
    return _possibleConstructorReturn(this, (Xalignment.__proto__ || Object.getPrototypeOf(Xalignment)).call(this, _extends({}, defaults, attrs), children));
  }

  _createClass(Xalignment, [{
    key: 'equals',
    value: function equals(o) {
      return this.horizontal === o.horizontal && this.indent === o.indent && this.shrinkToFit === o.shrinkToFit && this.textRotation === o.textRotation && this.vertical === o.vertical && this.wrapText === o.wrapText;
    }
  }]);

  return Xalignment;
}(_node.Node)) || _class17);