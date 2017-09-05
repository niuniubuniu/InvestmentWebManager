'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('./lib');

var _style = require('./style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The column of the Sheet.
 *
 * ```js
 * const col = sheet.col(0);
 * col.width = 20;
 * col.style.fill.patternType = 'solid';
 * col.style.fill.fgColor = '00FF0000';
 * col.style.fill.bgColor = 'FF000000';
 * col.style.align.h = 'center';
 * col.style.align.v = 'center';
 * ```
 */
var Col = exports.Col = function () {
  function Col(_ref) {
    var min = _ref.min,
        max = _ref.max,
        _ref$hidden = _ref.hidden,
        hidden = _ref$hidden === undefined ? false : _ref$hidden,
        _ref$collapsed = _ref.collapsed,
        collapsed = _ref$collapsed === undefined ? false : _ref$collapsed,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 0 : _ref$width;

    _classCallCheck(this, Col);

    this.outlineLevel = 0;
    this.numFmt = '';

    this.min = min;
    this.max = max;
    this.hidden = hidden;
    this.collapsed = collapsed;
    /**
     * Column width [default 9.5]
     * @type {Number}
     */
    this.width = width;
    /**
     * Style of the column.
     * @type {Style}
     */
    this.style = new _style.Style();
  }
  /**
   * Number format for all column @see {@link NumFmt}
   * @type {String}
   */


  _createClass(Col, [{
    key: 'setType',
    value: function setType(cellType) {
      this.numFmt = _lib.NumFmt[cellType];
    }
  }]);

  return Col;
}();