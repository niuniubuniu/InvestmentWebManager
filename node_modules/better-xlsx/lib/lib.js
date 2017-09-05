'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toExcelTime = exports.handleNumFmtId = exports.handleStyle = exports.cid2coord = exports.num2col = exports.col2num = exports.NumFmtsCount = exports.NumFmtInv = exports.NumFmt = undefined;

var _xmlStyle = require('./xmlStyle');

var NumFmtsCount = 163;
/**
 * Number format table
 * 
 * ```js
 * {
 *   0: 'general',
 *   1: '0',
 *   2: '0.00',
 *   3: '#,##0',
 *   4: '#,##0.00',
 *   9: '0%',
 *   10: '0.00%',
 *   11: '0.00e+00',
 *   12: '# ?/?',
 *   13: '# ??/??',
 *   14: 'mm-dd-yy',
 *   15: 'd-mmm-yy',
 *   16: 'd-mmm',
 *   17: 'mmm-yy',
 *   18: 'h:mm am/pm',
 *   19: 'h:mm:ss am/pm',
 *   20: 'h:mm',
 *   21: 'h:mm:ss',
 *   22: 'm/d/yy h:mm',
 *   37: '#,##0 ;(#,##0)',
 *   38: '#,##0 ;[red](#,##0)',
 *   39: '#,##0.00;(#,##0.00)',
 *   40: '#,##0.00;[red](#,##0.00)',
 *   41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
 *   42: '_("$"* #,##0_);_("$* (#,##0);_("$"* "-"_);_(@_)',
 *   43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
 *   44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
 *   45: 'mm:ss',
 *   46: '[h]:mm:ss',
 *   47: 'mmss.0',
 *   48: '##0.0e+0',
 *   49: '@'
 * }
 * ```
 * 
 * @type {Object}
 */
var NumFmt = {
  0: 'general',
  1: '0',
  2: '0.00',
  3: '#,##0',
  4: '#,##0.00',
  9: '0%',
  10: '0.00%',
  11: '0.00e+00',
  12: '# ?/?',
  13: '# ??/??',
  14: 'mm-dd-yy',
  15: 'd-mmm-yy',
  16: 'd-mmm',
  17: 'mmm-yy',
  18: 'h:mm am/pm',
  19: 'h:mm:ss am/pm',
  20: 'h:mm',
  21: 'h:mm:ss',
  22: 'm/d/yy h:mm',
  37: '#,##0 ;(#,##0)',
  38: '#,##0 ;[red](#,##0)',
  39: '#,##0.00;(#,##0.00)',
  40: '#,##0.00;[red](#,##0.00)',
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  45: 'mm:ss',
  46: '[h]:mm:ss',
  47: 'mmss.0',
  48: '##0.0e+0',
  49: '@'
};

var NumFmtInv = {};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = Object.keys(NumFmt)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var k = _step.value;

    NumFmtInv[NumFmt[k]] = k;
  }
  // AA => 26
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

function col2num(colstr) {
  var d = 0;
  for (var i = 0; i !== colstr.length; ++i) {
    d = 26 * d + colstr.charCodeAt(i) - 64;
  }
  return d - 1;
}
// 26 => AA
function num2col(col) {
  var s = '';
  for (++col; col; col = Math.floor((col - 1) / 26)) {
    s = String.fromCharCode((col - 1) % 26 + 65) + s;
  }
  return s;
}
// B3 => {x: 1, y: 2}
function cid2coord(cid) {
  var temp = cid.match(/([A-Z]+)(\d+)/);
  return {
    x: col2num(temp[1]),
    y: parseInt(temp[2], 10) - 1
  };
}

function handleStyle(style, numFmtId, styles) {
  var _style$makeXStyleElem = style.makeXStyleElements(),
      xFont = _style$makeXStyleElem.xFont,
      xFill = _style$makeXStyleElem.xFill,
      xBorder = _style$makeXStyleElem.xBorder,
      xXf = _style$makeXStyleElem.xXf;

  var fontId = styles.addFont(xFont);
  var fillId = styles.addFill(xFill);

  // HACK - adding light grey fill, as in OO and Google
  var greyfill = new _xmlStyle.Xfill({
    patternFill: new _xmlStyle.XpatternFill({ patternType: 'lightGray' })
  });
  styles.addFill(greyfill);

  var borderId = styles.addBorder(xBorder);
  xXf.fontId = fontId;
  xXf.fillId = fillId;
  xXf.borderId = borderId;
  xXf.numFmtId = numFmtId;
  // apply the numFmtId when it is not the default cellxf
  if (xXf.numFmtId > 0) {
    xXf.applyNumberFormat = true;
  }

  xXf.alignment.horizontal = style.align.h;
  xXf.alignment.indent = style.align.indent;
  xXf.alignment.shrinkToFit = style.align.shrinkToFit;
  xXf.alignment.textRotation = style.align.textRotation;
  xXf.alignment.vertical = style.align.v;
  xXf.alignment.wrapText = style.align.wrapText;

  return styles.addCellXf(xXf);
}

function handleNumFmtId(numFmtId, styles) {
  var xf = new _xmlStyle.Xxf({ numFmtId });
  if (numFmtId > 0) {
    xf.applyNumberFormat = true;
  }
  return styles.addCellXf(xf);
}

function toExcelTime(d) {
  var unix = d.getTime() / 1000;
  return unix / 86400.0 + 25569.0;
}

exports.NumFmt = NumFmt;
exports.NumFmtInv = NumFmtInv;
exports.NumFmtsCount = NumFmtsCount;
exports.col2num = col2num;
exports.num2col = num2col;
exports.cid2coord = cid2coord;
exports.handleStyle = handleStyle;
exports.handleNumFmtId = handleNumFmtId;
exports.toExcelTime = toExcelTime;