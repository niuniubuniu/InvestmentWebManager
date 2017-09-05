'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XheaderFooter = exports.XpageSetup = exports.XpageMargins = exports.XprintOptions = exports.XmergeCell = exports.XmergeCells = exports.Xf = exports.Xc = exports.Xrow = exports.XsheetData = exports.Xcol = exports.Xcols = exports.XsheetFormatPr = exports.Xpane = exports.Xselection = exports.XsheetView = exports.XsheetViews = exports.Xdimension = exports.XpageSetUpPr = exports.XsheetPr = exports.Xworksheet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _dec2, _class3, _dec3, _class4, _dec4, _class5, _dec5, _class6, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _dec10, _class11, _dec11, _class12, _dec12, _class13, _dec13, _class14, _dec14, _class15, _dec15, _class16, _dec16, _class17, _dec17, _class18, _dec18, _class19;

exports.makeXworksheet = makeXworksheet;

var _node = require('./node');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Xworksheet = exports.Xworksheet = (_dec = (0, _node.props)('xmlns', 'xmlns:r'), _dec(_class = function (_Node) {
  _inherits(Xworksheet, _Node);

  function Xworksheet() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children = arguments[1];

    _classCallCheck(this, Xworksheet);

    attrs['xmlns'] = attrs['xmlns'] || 'http://schemas.openxmlformats.org/spreadsheetml/2006/main';
    attrs['xmlns:r'] = attrs['xmlns:r'] || 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';

    var _this = _possibleConstructorReturn(this, (Xworksheet.__proto__ || Object.getPrototypeOf(Xworksheet)).call(this, attrs, children));

    _this.sheetPr = null;
    _this.sheetViews = null;
    _this.sheetFormatPr = null;
    _this.printOptions = null;
    _this.pageMargins = null;
    _this.pageSetup = null;
    _this.headerFooter = null;
    _this.mergeCells = null;
    _this.dimension = null;
    _this.cols = null;
    _this.sheetData = null;

    _this[_node.HEAD] = '<?xml version="1.0" encoding="UTF-8"?>';
    return _this;
  }

  _createClass(Xworksheet, [{
    key: 'render',
    value: function render() {
      this.children = [];
      if (this.sheetPr) this.children.push(this.sheetPr);
      if (this.dimension) this.children.push(this.dimension);
      if (this.sheetViews) this.children.push(this.sheetViews);
      if (this.sheetFormatPr) this.children.push(this.sheetFormatPr);
      if (this.cols) this.children.push(this.cols);
      if (this.sheetData) this.children.push(this.sheetData);
      if (this.mergeCells) this.children.push(this.mergeCells);
      if (this.printOptions) this.children.push(this.printOptions);
      if (this.pageMargins) this.children.push(this.pageMargins);
      if (this.pageSetup) this.children.push(this.pageSetup);
      if (this.headerFooter) this.children.push(this.headerFooter);
      return _get(Xworksheet.prototype.__proto__ || Object.getPrototypeOf(Xworksheet.prototype), 'render', this).call(this);
    }
  }]);

  return Xworksheet;
}(_node.Node)) || _class);
var XsheetPr = exports.XsheetPr = (_dec2 = (0, _node.props)('filterMode'), _dec2(_class3 = function (_Node2) {
  _inherits(XsheetPr, _Node2);

  function XsheetPr() {
    _classCallCheck(this, XsheetPr);

    return _possibleConstructorReturn(this, (XsheetPr.__proto__ || Object.getPrototypeOf(XsheetPr)).apply(this, arguments));
  }

  return XsheetPr;
}(_node.Node)) || _class3);
var XpageSetUpPr = exports.XpageSetUpPr = (_dec3 = (0, _node.props)('fitToPage'), _dec3(_class4 = function (_Node3) {
  _inherits(XpageSetUpPr, _Node3);

  function XpageSetUpPr() {
    _classCallCheck(this, XpageSetUpPr);

    return _possibleConstructorReturn(this, (XpageSetUpPr.__proto__ || Object.getPrototypeOf(XpageSetUpPr)).apply(this, arguments));
  }

  return XpageSetUpPr;
}(_node.Node)) || _class4);
var Xdimension = exports.Xdimension = (_dec4 = (0, _node.props)('ref'), _dec4(_class5 = function (_Node4) {
  _inherits(Xdimension, _Node4);

  function Xdimension() {
    _classCallCheck(this, Xdimension);

    return _possibleConstructorReturn(this, (Xdimension.__proto__ || Object.getPrototypeOf(Xdimension)).apply(this, arguments));
  }

  return Xdimension;
}(_node.Node)) || _class5);

var XsheetViews = exports.XsheetViews = function (_Node5) {
  _inherits(XsheetViews, _Node5);

  function XsheetViews() {
    _classCallCheck(this, XsheetViews);

    return _possibleConstructorReturn(this, (XsheetViews.__proto__ || Object.getPrototypeOf(XsheetViews)).apply(this, arguments));
  }

  return XsheetViews;
}(_node.Node);

var XsheetView = exports.XsheetView = (_dec5 = (0, _node.props)('windowProtection', 'showFormulas', 'showGridLines', 'showRowColHeaders', 'showZeros', 'rightToLeft', 'tabSelected', 'showOutlineSymbols', 'defaultGridColor', 'view', 'topLeftCell', 'colorId', 'zoomScale', 'zoomScaleNormal', 'zoomScalePageLayoutView', 'workbookViewId'), _dec5(_class6 = function (_Node6) {
  _inherits(XsheetView, _Node6);

  function XsheetView() {
    _classCallCheck(this, XsheetView);

    return _possibleConstructorReturn(this, (XsheetView.__proto__ || Object.getPrototypeOf(XsheetView)).apply(this, arguments));
  }

  return XsheetView;
}(_node.Node)) || _class6);
var Xselection = exports.Xselection = (_dec6 = (0, _node.props)('pane', 'activeCell', 'activeCellId', 'sqref'), _dec6(_class7 = function (_Node7) {
  _inherits(Xselection, _Node7);

  function Xselection() {
    _classCallCheck(this, Xselection);

    return _possibleConstructorReturn(this, (Xselection.__proto__ || Object.getPrototypeOf(Xselection)).apply(this, arguments));
  }

  return Xselection;
}(_node.Node)) || _class7);
var Xpane = exports.Xpane = (_dec7 = (0, _node.props)('xSplit', 'ySplit', 'topLeftCell', 'activePane', 'state'), _dec7(_class8 = function (_Node8) {
  _inherits(Xpane, _Node8);

  function Xpane() {
    _classCallCheck(this, Xpane);

    return _possibleConstructorReturn(this, (Xpane.__proto__ || Object.getPrototypeOf(Xpane)).apply(this, arguments));
  }

  return Xpane;
}(_node.Node)) || _class8);
var XsheetFormatPr = exports.XsheetFormatPr = (_dec8 = (0, _node.props)('defaultColWidth', 'defaultRowHeight', 'outlineLevelCol', 'outlineLevelRow'), _dec8(_class9 = function (_Node9) {
  _inherits(XsheetFormatPr, _Node9);

  function XsheetFormatPr() {
    _classCallCheck(this, XsheetFormatPr);

    return _possibleConstructorReturn(this, (XsheetFormatPr.__proto__ || Object.getPrototypeOf(XsheetFormatPr)).apply(this, arguments));
  }

  return XsheetFormatPr;
}(_node.Node)) || _class9);

var Xcols = exports.Xcols = function (_Node10) {
  _inherits(Xcols, _Node10);

  function Xcols() {
    _classCallCheck(this, Xcols);

    return _possibleConstructorReturn(this, (Xcols.__proto__ || Object.getPrototypeOf(Xcols)).apply(this, arguments));
  }

  return Xcols;
}(_node.Node);

var Xcol = exports.Xcol = (_dec9 = (0, _node.props)('collapsed', 'hidden', 'max', 'min', 'style', 'width', 'customWidth', 'outlineLevel'), _dec9(_class10 = function (_Node11) {
  _inherits(Xcol, _Node11);

  function Xcol() {
    _classCallCheck(this, Xcol);

    return _possibleConstructorReturn(this, (Xcol.__proto__ || Object.getPrototypeOf(Xcol)).apply(this, arguments));
  }

  return Xcol;
}(_node.Node)) || _class10);

var XsheetData = exports.XsheetData = function (_Node12) {
  _inherits(XsheetData, _Node12);

  function XsheetData() {
    _classCallCheck(this, XsheetData);

    return _possibleConstructorReturn(this, (XsheetData.__proto__ || Object.getPrototypeOf(XsheetData)).apply(this, arguments));
  }

  return XsheetData;
}(_node.Node);

var Xrow = exports.Xrow = (_dec10 = (0, _node.props)('r', 'spans', 'hidden', 'ht', 'customHeight', 'outlineLevel'), _dec10(_class11 = function (_Node13) {
  _inherits(Xrow, _Node13);

  function Xrow() {
    _classCallCheck(this, Xrow);

    return _possibleConstructorReturn(this, (Xrow.__proto__ || Object.getPrototypeOf(Xrow)).apply(this, arguments));
  }

  return Xrow;
}(_node.Node)) || _class11);
var Xc = exports.Xc = (_dec11 = (0, _node.props)('r', 's', 't'), _dec11(_class12 = function (_Node14) {
  _inherits(Xc, _Node14);

  function Xc(attrs, children) {
    _classCallCheck(this, Xc);

    var _this14 = _possibleConstructorReturn(this, (Xc.__proto__ || Object.getPrototypeOf(Xc)).call(this, attrs, children));

    _this14.f = null;
    _this14.v = null;
    return _this14;
  }

  _createClass(Xc, [{
    key: 'render',
    value: function render() {
      if (this.f !== null) this.children.push(this.f);
      if (this.v !== null) this.children.push(new _node.Node({}, [this.v], 'v'));
      return _get(Xc.prototype.__proto__ || Object.getPrototypeOf(Xc.prototype), 'render', this).call(this);
    }
  }]);

  return Xc;
}(_node.Node)) || _class12);
var Xf = exports.Xf = (_dec12 = (0, _node.props)('t', 'ref', 'si'), _dec12(_class13 = function (_Node15) {
  _inherits(Xf, _Node15);

  function Xf() {
    _classCallCheck(this, Xf);

    return _possibleConstructorReturn(this, (Xf.__proto__ || Object.getPrototypeOf(Xf)).apply(this, arguments));
  }

  return Xf;
}(_node.Node)) || _class13);
var XmergeCells = exports.XmergeCells = (_dec13 = (0, _node.props)('count'), _dec13(_class14 = function (_Node16) {
  _inherits(XmergeCells, _Node16);

  function XmergeCells() {
    _classCallCheck(this, XmergeCells);

    return _possibleConstructorReturn(this, (XmergeCells.__proto__ || Object.getPrototypeOf(XmergeCells)).apply(this, arguments));
  }

  return XmergeCells;
}(_node.Node)) || _class14);
var XmergeCell = exports.XmergeCell = (_dec14 = (0, _node.props)('ref'), _dec14(_class15 = function (_Node17) {
  _inherits(XmergeCell, _Node17);

  function XmergeCell() {
    _classCallCheck(this, XmergeCell);

    return _possibleConstructorReturn(this, (XmergeCell.__proto__ || Object.getPrototypeOf(XmergeCell)).apply(this, arguments));
  }

  return XmergeCell;
}(_node.Node)) || _class15);
var XprintOptions = exports.XprintOptions = (_dec15 = (0, _node.props)('headings', 'gridLines', 'gridLinesSet', 'horizontalCentered', 'verticalCentered'), _dec15(_class16 = function (_Node18) {
  _inherits(XprintOptions, _Node18);

  function XprintOptions() {
    _classCallCheck(this, XprintOptions);

    return _possibleConstructorReturn(this, (XprintOptions.__proto__ || Object.getPrototypeOf(XprintOptions)).apply(this, arguments));
  }

  return XprintOptions;
}(_node.Node)) || _class16);
var XpageMargins = exports.XpageMargins = (_dec16 = (0, _node.props)('left', 'right', 'top', 'bottom', 'header', 'footer'), _dec16(_class17 = function (_Node19) {
  _inherits(XpageMargins, _Node19);

  function XpageMargins() {
    _classCallCheck(this, XpageMargins);

    return _possibleConstructorReturn(this, (XpageMargins.__proto__ || Object.getPrototypeOf(XpageMargins)).apply(this, arguments));
  }

  return XpageMargins;
}(_node.Node)) || _class17);
var XpageSetup = exports.XpageSetup = (_dec17 = (0, _node.props)('paperSize', 'scale', 'firstPageNumber', 'fitToWidth', 'fitToHeight', 'pageOrder', 'orientation', 'usePrinterDefaults', 'blackAndWhite', 'draft', 'cellComments', 'useFirstPageNumber', 'horizontalDpi', 'verticalDpi', 'copies'), _dec17(_class18 = function (_Node20) {
  _inherits(XpageSetup, _Node20);

  function XpageSetup() {
    _classCallCheck(this, XpageSetup);

    return _possibleConstructorReturn(this, (XpageSetup.__proto__ || Object.getPrototypeOf(XpageSetup)).apply(this, arguments));
  }

  return XpageSetup;
}(_node.Node)) || _class18);
var XheaderFooter = exports.XheaderFooter = (_dec18 = (0, _node.props)('differentFirst', 'differentOddEven'), _dec18(_class19 = function (_Node21) {
  _inherits(XheaderFooter, _Node21);

  function XheaderFooter(attrs, children) {
    _classCallCheck(this, XheaderFooter);

    var _this21 = _possibleConstructorReturn(this, (XheaderFooter.__proto__ || Object.getPrototypeOf(XheaderFooter)).call(this, attrs, children));

    _this21.oddHeader = null;
    _this21.oddFooter = null;
    return _this21;
  }

  _createClass(XheaderFooter, [{
    key: 'render',
    value: function render() {
      if (this.oddHeader !== null) this.children.push(new _node.Node({}, [this.oddHeader], 'oddHeader'));
      if (this.oddFooter !== null) this.children.push(new _node.Node({}, [this.oddFooter], 'oddFooter'));
      return _get(XheaderFooter.prototype.__proto__ || Object.getPrototypeOf(XheaderFooter.prototype), 'render', this).call(this);
    }
  }]);

  return XheaderFooter;
}(_node.Node)) || _class19);
function makeXworksheet() {
  var sheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Xworksheet();

  sheet.sheetPr = new XsheetPr({ filterMode: false }, [new XpageSetUpPr({ fitToPage: false })]);
  sheet.sheetViews = new XsheetViews({}, [new XsheetView({
    colorId: 64,
    defaultGridColor: true,
    rightToLeft: false,
    showFormulas: false,
    showGridLines: true,
    showOutlineSymbols: true,
    showRowColHeaders: true,
    showZeros: true,
    tabSelected: false,
    topLeftCell: 'A1',
    view: 'normal',
    windowProtection: false,
    workbookViewId: 0,
    zoomScale: 100,
    zoomScaleNormal: 100,
    zoomScalePageLayoutView: 100
  }, [new Xselection({
    activeCell: 'A1',
    activeCellId: 0,
    pane: 'topLeft',
    sqref: 'A1'
  })])]);
  sheet.sheetFormatPr = new XsheetFormatPr({ defaultRowHeight: '12.85' });
  sheet.printOptions = new XprintOptions({
    gridLines: false,
    gridLinesSet: true,
    headings: false,
    horizontalCentered: false,
    verticalCentered: false
  });
  sheet.pageMargins = new XpageMargins({
    left: 0.7875,
    right: 0.7875,
    top: 1.05277777777778,
    bottom: 1.05277777777778,
    header: 0.7875,
    footer: 0.7875
  });
  sheet.pageSetup = new XpageSetup({
    blackAndWhite: false,
    cellComments: 'none',
    copies: 1,
    draft: false,
    firstPageNumber: 1,
    fitToHeight: 1,
    fitToWidth: 1,
    horizontalDpi: 300,
    orientation: 'portrait',
    pageOrder: 'downThenOver',
    paperSize: 9,
    scale: 100,
    useFirstPageNumber: true,
    usePrinterDefaults: false,
    verticalDpi: 300
  });
  var headerFooter = new XheaderFooter();
  headerFooter.oddHeader = '&C&"Times New Roman,Regular"&12&A';
  headerFooter.oddFooter = '&C&"Times New Roman,Regular"&12Page &P';

  sheet.headerFooter = headerFooter;
  return sheet;
}