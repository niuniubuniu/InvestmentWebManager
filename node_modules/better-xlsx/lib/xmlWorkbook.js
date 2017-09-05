'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XcalcPr = exports.Xsheet = exports.Xsheets = exports.XworkbookView = exports.XbookViews = exports.XworkbookProtection = exports.XworkbookPr = exports.XfileVersion = exports.Xworkbook = exports.XRelationship = exports.XRelationships = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class5, _dec5, _class6, _dec6, _class7, _dec7, _class8, _dec8, _class9;

exports.makeWorkbookRels = makeWorkbookRels;
exports.makeXworkbook = makeXworkbook;

var _node = require('./node');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XRelationships = exports.XRelationships = (_dec = (0, _node.props)('xmlns'), _dec(_class = function (_Node) {
  _inherits(XRelationships, _Node);

  function XRelationships(_ref, children) {
    var _ref$xmlns = _ref.xmlns,
        xmlns = _ref$xmlns === undefined ? 'http://schemas.openxmlformats.org/package/2006/relationships' : _ref$xmlns;

    _classCallCheck(this, XRelationships);

    var _this = _possibleConstructorReturn(this, (XRelationships.__proto__ || Object.getPrototypeOf(XRelationships)).call(this, { xmlns }, children));

    _this[_node.HEAD] = '<?xml version="1.0" encoding="UTF-8"?>';
    return _this;
  }

  return XRelationships;
}(_node.Node)) || _class);
var XRelationship = exports.XRelationship = (_dec2 = (0, _node.props)('Id', 'Target', 'Type'), _dec2(_class2 = function (_Node2) {
  _inherits(XRelationship, _Node2);

  function XRelationship() {
    _classCallCheck(this, XRelationship);

    return _possibleConstructorReturn(this, (XRelationship.__proto__ || Object.getPrototypeOf(XRelationship)).apply(this, arguments));
  }

  return XRelationship;
}(_node.Node)) || _class2);
var Xworkbook = exports.Xworkbook = (_dec3 = (0, _node.props)('xmlns', 'xmlns:r'), _dec3(_class3 = function (_Node3) {
  _inherits(Xworkbook, _Node3);

  function Xworkbook() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children = arguments[1];

    _classCallCheck(this, Xworkbook);

    attrs['xmlns'] = attrs['xmlns'] || 'http://schemas.openxmlformats.org/spreadsheetml/2006/main';
    attrs['xmlns:r'] = attrs['xmlns:r'] || 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';

    var _this3 = _possibleConstructorReturn(this, (Xworkbook.__proto__ || Object.getPrototypeOf(Xworkbook)).call(this, attrs, children));

    _this3.fileVersion = null;
    _this3.workbookPr = null;
    _this3.bookViews = null;
    _this3.sheets = null;
    _this3.calcPr = null;

    _this3[_node.HEAD] = '<?xml version="1.0" encoding="UTF-8"?>';
    return _this3;
  }

  _createClass(Xworkbook, [{
    key: 'render',
    value: function render() {
      this.children = [];
      if (this.fileVersion) this.children.push(this.fileVersion);
      if (this.workbookPr) this.children.push(this.workbookPr);
      if (this.bookViews) this.children.push(this.bookViews);
      if (this.sheets) this.children.push(this.sheets);
      if (this.calcPr) this.children.push(this.calcPr);
      return _get(Xworkbook.prototype.__proto__ || Object.getPrototypeOf(Xworkbook.prototype), 'render', this).call(this);
    }
  }]);

  return Xworkbook;
}(_node.Node)) || _class3);
var XfileVersion = exports.XfileVersion = (_dec4 = (0, _node.props)('appName', 'lastEdited', 'lowestEdited', 'rupBuild'), _dec4(_class5 = function (_Node4) {
  _inherits(XfileVersion, _Node4);

  function XfileVersion() {
    _classCallCheck(this, XfileVersion);

    return _possibleConstructorReturn(this, (XfileVersion.__proto__ || Object.getPrototypeOf(XfileVersion)).apply(this, arguments));
  }

  return XfileVersion;
}(_node.Node)) || _class5);
var XworkbookPr = exports.XworkbookPr = (_dec5 = (0, _node.props)('defaultThemeVersion', 'backupFile', 'showObjects', 'date1904'), _dec5(_class6 = function (_Node5) {
  _inherits(XworkbookPr, _Node5);

  function XworkbookPr() {
    _classCallCheck(this, XworkbookPr);

    return _possibleConstructorReturn(this, (XworkbookPr.__proto__ || Object.getPrototypeOf(XworkbookPr)).apply(this, arguments));
  }

  return XworkbookPr;
}(_node.Node)) || _class6);

var XworkbookProtection = exports.XworkbookProtection = function (_Node6) {
  _inherits(XworkbookProtection, _Node6);

  function XworkbookProtection() {
    _classCallCheck(this, XworkbookProtection);

    return _possibleConstructorReturn(this, (XworkbookProtection.__proto__ || Object.getPrototypeOf(XworkbookProtection)).apply(this, arguments));
  }

  return XworkbookProtection;
}(_node.Node);

var XbookViews = exports.XbookViews = function (_Node7) {
  _inherits(XbookViews, _Node7);

  function XbookViews() {
    _classCallCheck(this, XbookViews);

    return _possibleConstructorReturn(this, (XbookViews.__proto__ || Object.getPrototypeOf(XbookViews)).apply(this, arguments));
  }

  return XbookViews;
}(_node.Node);

var XworkbookView = exports.XworkbookView = (_dec6 = (0, _node.props)('activeTab', 'firstSheet', 'showHorizontalScroll', 'showVerticalScroll', 'showSheetTabs', 'tabRatio', 'windowHeight', 'windowWidth', 'xWindow', 'yWindow'), _dec6(_class7 = function (_Node8) {
  _inherits(XworkbookView, _Node8);

  function XworkbookView() {
    _classCallCheck(this, XworkbookView);

    return _possibleConstructorReturn(this, (XworkbookView.__proto__ || Object.getPrototypeOf(XworkbookView)).apply(this, arguments));
  }

  return XworkbookView;
}(_node.Node)) || _class7);

var Xsheets = exports.Xsheets = function (_Node9) {
  _inherits(Xsheets, _Node9);

  function Xsheets() {
    _classCallCheck(this, Xsheets);

    return _possibleConstructorReturn(this, (Xsheets.__proto__ || Object.getPrototypeOf(Xsheets)).apply(this, arguments));
  }

  return Xsheets;
}(_node.Node);

var Xsheet = exports.Xsheet = (_dec7 = (0, _node.props)('name', 'sheetId', 'r:id', 'state'), _dec7(_class8 = function (_Node10) {
  _inherits(Xsheet, _Node10);

  function Xsheet() {
    _classCallCheck(this, Xsheet);

    return _possibleConstructorReturn(this, (Xsheet.__proto__ || Object.getPrototypeOf(Xsheet)).apply(this, arguments));
  }

  return Xsheet;
}(_node.Node)) || _class8);
var XcalcPr = exports.XcalcPr = (_dec8 = (0, _node.props)('calcId', 'iterateCount', 'refMode', 'iterate', 'iterateDelta'), _dec8(_class9 = function (_Node11) {
  _inherits(XcalcPr, _Node11);

  function XcalcPr() {
    _classCallCheck(this, XcalcPr);

    return _possibleConstructorReturn(this, (XcalcPr.__proto__ || Object.getPrototypeOf(XcalcPr)).apply(this, arguments));
  }

  return XcalcPr;
}(_node.Node)) || _class9);
function makeWorkbookRels(sheetCount) {
  var rels = new XRelationships({});
  for (var i = 1; i <= sheetCount; i++) {
    rels.children.push(new XRelationship({
      Id: `rId${i}`,
      Target: `worksheets/sheet${i}.xml`,
      Type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet'
    }));
  }
  rels.children.push(new XRelationship({
    Id: `rId${sheetCount + 1}`,
    Target: 'sharedStrings.xml',
    Type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings'
  }));
  rels.children.push(new XRelationship({
    Id: `rId${sheetCount + 2}`,
    Target: 'theme/theme1.xml',
    Type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme'
  }));
  rels.children.push(new XRelationship({
    Id: `rId${sheetCount + 3}`,
    Target: 'styles.xml',
    Type: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles'
  }));
  return rels;
}

function makeXworkbook() {
  var workbook = new Xworkbook();
  workbook.fileVersion = new XfileVersion({ appName: 'JS XLSX' });
  workbook.workbookPr = new XworkbookPr({ showObjects: 'all' });
  workbook.bookViews = new XbookViews({}, [new XworkbookView({
    showHorizontalScroll: true,
    showSheetTabs: true,
    showVerticalScroll: true,
    tabRatio: 204,
    windowHeight: 8192,
    windowWidth: 16384,
    xWindow: 0,
    yWindow: 0
  })]);
  workbook.calcPr = new XcalcPr({
    iterateCount: 100,
    iterate: false,
    iterateDelta: 0.001,
    refMode: 'A1'
  });

  return workbook;
}