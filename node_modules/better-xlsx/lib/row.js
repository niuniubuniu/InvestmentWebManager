'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cell = require('./cell');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Row of the sheet.
 * ```js
 * const row = sheet.addRow();
 * row.setHeightCM(0.8);
 * ```
 */
var Row = exports.Row = function () {
  function Row(_ref) {
    var sheet = _ref.sheet;

    _classCallCheck(this, Row);

    this.cells = [];
    this.hidden = false;
    this.height = 0;
    this.outlineLevel = 0;
    this.isCustom = false;

    this.sheet = sheet;
  }
  /**
   * Set height of the Row with `cm` unit.
   * @param {Number} ht Height with `cm` unit
   */

  /**
   * Row height
   * @type {Number}
   */


  _createClass(Row, [{
    key: 'setHeightCM',
    value: function setHeightCM(ht) {
      this.height = ht * 28.3464567;
      this.isCustom = true;
    }
    /**
     * Create a cell and add it into the Row.
     * @return {Cell}
     */

  }, {
    key: 'addCell',
    value: function addCell() {
      var cell = new _cell.Cell({ row: this });
      this.cells.push(cell);
      this.sheet.maybeAddCol(this.cells.length);
      return cell;
    }
  }]);

  return Row;
}();