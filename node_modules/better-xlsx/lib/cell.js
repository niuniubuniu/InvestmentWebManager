'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = exports.CellType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('./style');

var _lib = require('./lib');

var _kindOf = require('kind-of');

var _kindOf2 = _interopRequireDefault(_kindOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CellType = exports.CellType = {
  TypeString: 49,
  TypeFormula: 0,
  TypeNumeric: 1,
  TypeBool: 0,
  TypeInline: 0,
  TypeError: 0,
  TypeDate: 14,
  TypeGeneral: 0
};

/**
 * Cell intended to provide user access to the contents of Cell within an xlsx.Row.
 *
 * ```js
 * const cell = row.addCell();
 * cell.value = 'I am a cell!';
 * cell.hMerge = 2;
 * cell.vMerge = 1;
 * cell.style.fill.patternType = 'solid';
 * cell.style.fill.fgColor = '00FF0000';
 * cell.style.fill.bgColor = 'FF000000';
 * cell.style.align.h = 'center';
 * cell.style.align.v = 'center';
 * ```
 *
 * Set the cell value
 *
 * ```js
 * const cell = row.addCell();
 * // Date type
 * cell.setDate(new Date());
 * // Number type
 * cell.setNumber(123456);
 * cell.numFmt = '$#,##0.00';
 * ```
 */

var Cell = exports.Cell = function () {

  /**
   * Create a cell and add it to a row.
   * @private
   * @param  {Object} options.row Row of add to
   */

  /**
   * Vertical merge with other cells.
   * @type {Number}
   */

  /**
   * Hide the cell.
   * @type {Boolean}
   */

  /**
   * Number format @see {@link NumFmt}
   * @type {String}
   */
  function Cell(_ref) {
    var row = _ref.row;

    _classCallCheck(this, Cell);

    this._value = '';
    this._style = null;
    this.formula = '';
    this.numFmt = '';
    this.date1904 = false;
    this.hidden = false;
    this.hMerge = 0;
    this.vMerge = 0;
    this.cellType = 'TypeString';

    this.row = row;
  }
  /**
   * Get the cell style.
   * @return {Style}
   */

  /**
   * Horizontal merge with other cells.
   * @type {Number}
   */


  _createClass(Cell, [{
    key: 'setString',

    /**
     * Set cell value with String type.
     * @param {String} v
     */
    value: function setString(v) {
      this._value = v;
      this.formula = '';
      this.cellType = 'TypeString';
    }
    /**
     * Set cell value with Date type.
     * @param {Date} v
     */

  }, {
    key: 'setDate',
    value: function setDate(v) {
      this._value = parseInt((0, _lib.toExcelTime)(v));
      this.formula = '';
      this.numFmt = _lib.NumFmt[14];
      this.cellType = 'TypeDate';
    }
    /**
     * Set cell value with DateTime type.
     * @param {Date} v
     */

  }, {
    key: 'setDateTime',
    value: function setDateTime(v) {
      this._value = (0, _lib.toExcelTime)(v);
      this.formula = '';
      this.numFmt = _lib.NumFmt[22];
      this.cellType = 'TypeDate';
    }
    /**
     * Set cell value with Number type.
     * @param {Number} v
     */

  }, {
    key: 'setNumber',
    value: function setNumber(v) {
      this._value = v;
      this.formula = '';
      this.numFmt = _lib.NumFmt[0];
      this.cellType = 'TypeNumeric';
    }
    /**
     * Set cell value with Boolean type.
     * @param {Boolean} v
     */

  }, {
    key: 'setBool',
    value: function setBool(v) {
      this._value = v ? 1 : 0;
      this.cellType = 'TypeBool';
    }
    /**
     * Set cell formula.
     * @param {String} f - Formula like `B2*C2-D2`.
     */

  }, {
    key: 'setFormula',
    value: function setFormula(f) {
      this.formula = f;
      this.cellType = 'TypeFormula';
    }
  }, {
    key: 'style',
    get: function get() {
      if (this._style === null) {
        this._style = new _style.Style();
      }
      return this._style;
    }
    /**
     * Set the style of the cell.
     * @param  {Style} s
     */
    ,
    set: function set(s) {
      this._style = s;
    }
    /**
     * Get the cell value.
     */

  }, {
    key: 'value',
    get: function get() {
      return this._value;
    }
    /**
     * Set the cell value.
     * @param  {String|Date|Number|Boolean} v
     */
    ,
    set: function set(v) {
      var t = (0, _kindOf2.default)(v);
      if (t === 'null' || t === 'undefined') {
        return this.setString('');
      }
      if (t === 'date') {
        return this.setDateTime(v);
      }
      if (t === 'number') {
        return this.setNumber(v);
      }
      if (t === 'string') {
        return this.setString(v);
      }
      if (t === 'boolean') {
        return this.setBool(v);
      }
      return this.setString(v.toString());
    }
  }]);

  return Cell;
}();