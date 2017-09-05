'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sheet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _row = require('./row');

var _col = require('./col');

var _lib = require('./lib');

var _xmlWorksheet = require('./xmlWorksheet');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sheet of the xlsx file.
 * ```js
 * import { File } from 'better-xlsx';
 * const file = new File();
 * const sheet = file.addSheet('Sheet-1');
 * const row = sheet.addRow();
 * const cell = row.addCell();
 * ```
 */
var Sheet = exports.Sheet = function () {
  function Sheet(_ref) {
    var name = _ref.name,
        file = _ref.file,
        selected = _ref.selected;

    _classCallCheck(this, Sheet);

    this.rows = [];
    this.cols = [];
    this.maxRow = 0;
    this.maxCol = 0;
    this.hidden = false;
    this.sheetViews = [];
    this.sheetFormat = {
      defaultColWidth: 0,
      defaultRowHeight: 0,
      outlineLevelCol: 0,
      outlineLevelRow: 0
    };

    this.name = name;
    this.file = file;
    this.selected = selected;
  }
  /**
   * Create a Row and add it into the Sheet.
   * @return {Row}
   */


  _createClass(Sheet, [{
    key: 'addRow',
    value: function addRow() {
      var row = new _row.Row({ sheet: this });
      this.rows.push(row);
      if (this.rows.length > this.maxRow) {
        this.maxRow = this.rows.length;
      }
      return row;
    }
  }, {
    key: 'maybeAddCol',
    value: function maybeAddCol(cellCount) {
      if (cellCount > this.maxCol) {
        var col = new _col.Col({
          min: cellCount,
          max: cellCount,
          hidden: false,
          collapsed: false
        });
        this.cols.push(col);
        this.maxCol = cellCount;
      }
    }
    /**
     * Get Col of the sheet with index and create cols when `index > maxCol`.
     * @param  {Number} idx Index of the Col [from 0].
     * @return {Col}
     */

  }, {
    key: 'col',
    value: function col(idx) {
      this.maybeAddCol(idx + 1);
      return this.cols[idx];
    }
    /**
     * Get Row of the sheet with index and create rows when `index > maxRow`.
     * @param  {Number} idx Index of the Row [from 0].
     * @return {Row}
     */

  }, {
    key: 'row',
    value: function row(idx) {
      for (var len = this.rows.length; len <= idx; len++) {
        this.addRow();
      }
      return this.rows[idx];
    }
    /**
     * Get Cell of the sheet with `(row, col)` and create cell when out of range.
     * @param  {Number} row
     * @param {Number} col
     * @return {Cell}
     */

  }, {
    key: 'cell',
    value: function cell(row, col) {
      for (var len = this.rows.length; len <= row; len++) {
        this.addRow();
      }
      var r = this.rows[row];
      for (var _len = r.cells.length; _len <= col; _len++) {
        r.addCell();
      }
      return r.cells[col];
    }
    /**
     * Set columns width from `startcol` to `endcol`.
     * @param {Number} startcol
     * @param {Number} endcol
     * @param {Number} width
     */

  }, {
    key: 'setColWidth',
    value: function setColWidth(startcol, endcol, width) {
      if (startcol > endcol) {
        throw new Error(`Could not set width for range ${startcol}-${endcol}: startcol must be less than endcol.`);
      }
      var col = new _col.Col({
        min: startcol + 1,
        max: endcol + 1,
        hidden: false,
        collapsed: false,
        width: width
      });
      this.cols.push(col);
      if (endcol + 1 > this.maxCol) {
        this.maxCol = endcol + 1;
      }
    }
  }, {
    key: 'handleMerged',
    value: function handleMerged() {
      var merged = [];
      for (var r = 0; r < this.rows.length; r++) {
        var row = this.rows[r];
        for (var c = 0; c < row.cells.length; c++) {
          var cell = row.cells[c];
          if (cell.hMerge > 0 || cell.vMerge > 0) {
            merged.push({ r, c, cell });
          }
        }
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = merged[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;
          var _r = _ref2.r,
              _c = _ref2.c,
              _cell = _ref2.cell;

          var left = _cell.style.border.left;
          var right = _cell.style.border.right;
          var top = _cell.style.border.top;
          var bottom = _cell.style.border.bottom;

          _cell.style.border.left = 'none';
          _cell.style.border.right = 'none';
          _cell.style.border.top = 'none';
          _cell.style.border.bottom = 'none';

          for (var rownum = 0; rownum <= _cell.vMerge; rownum++) {
            for (var colnum = 0; colnum <= _cell.hMerge; colnum++) {
              var tmpcell = this.cell(_r + rownum, _c + colnum);
              tmpcell.style.applyBorder = true;
              if (rownum === 0) {
                tmpcell.style.border.top = top;
              }
              if (rownum === _cell.vMerge) {
                tmpcell.style.border.bottom = bottom;
              }
              if (colnum === 0) {
                tmpcell.style.border.left = left;
              }
              if (colnum === _cell.hMerge) {
                tmpcell.style.border.right = right;
              }
            }
          }
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
    }
  }, {
    key: 'makeXSheet',
    value: function makeXSheet(refTable, styles) {
      var sheet = (0, _xmlWorksheet.makeXworksheet)();
      var xSheet = new _xmlWorksheet.XsheetData();
      var maxRow = 0;
      var maxCell = 0;
      var maxLevelCol = void 0;
      var maxLevelRow = void 0;

      this.handleMerged();

      for (var i = 0; i < this.sheetViews.length; i++) {
        var view = this.sheetViews[i];
        if (view && view.pane) {
          sheet.sheetViews.children[i].children.push(new _xmlWorksheet.Xpane({
            xSplit: view.pane.xSplit,
            ySplit: view.pane.ySplit,
            topLeftCell: view.pane.topLeftCell,
            activePane: view.pane.activePane,
            state: view.pane.state
          }));
        }
      }
      if (this.selected) {
        sheet.sheetViews.children[0].tabSelected = true;
      }
      if (this.sheetFormat.defaultRowHeight !== 0) {
        sheet.sheetFormatPr.defaultRowHeight = this.sheetFormat.defaultRowHeight;
      }
      if (this.sheetFormat.defaultColWidth !== 0) {
        sheet.sheetFormatPr.defaultColWidth = this.sheetFormat.defaultColWidth;
      }

      var fIdList = [];
      sheet.cols = new _xmlWorksheet.Xcols();
      for (var c = 0; c < this.cols.length; c++) {
        var col = this.cols[c];
        col.min = col.min || 1;
        col.max = col.max || 1;
        var xNumFmt = styles.newNumFmt(col.numFmt);
        var fId = (0, _lib.handleStyle)(col.style, xNumFmt.numFmtId, styles);

        fIdList.push(fId);

        var customWidth = 0;
        if (col.width === 0) {
          col.width = 9.5;
        } else {
          customWidth = 1;
        }
        sheet.cols.children.push(new _xmlWorksheet.Xcol({
          min: col.min,
          max: col.max,
          hidden: col.hidden,
          width: col.width,
          customWidth: customWidth,
          collapsed: col.collapsed,
          outlineLevel: col.outlineLevel,
          style: fId
        }));

        if (col.outlineLevel > maxLevelCol) {
          maxLevelCol = col.outlineLevel;
        }
      }
      for (var r = 0; r < this.rows.length; r++) {
        var row = this.rows[r];
        if (r > maxRow) maxRow = r;
        var xRow = new _xmlWorksheet.Xrow({ r: r + 1 });
        if (row.isCustom) {
          xRow.customHeight = true;
          xRow.ht = row.height;
        }
        xRow.outlineLevel = row.outlineLevel;
        if (row.outlineLevel > maxLevelRow) {
          maxLevelRow = row.outlineLevel;
        }
        for (var _c2 = 0; _c2 < row.cells.length; _c2++) {
          var _fId = fIdList[_c2];
          var cell = row.cells[_c2];
          var _xNumFmt = styles.newNumFmt(cell.numFmt);
          var style = cell.style;
          if (style !== null) {
            _fId = (0, _lib.handleStyle)(style, _xNumFmt.numFmtId, styles);
          } else if (cell.numFmt && this.cols[_c2].numFmt !== cell.numFmt) {
            _fId = (0, _lib.handleNumFmtId)(_xNumFmt.NumFmtId, styles);
          }

          if (_c2 > maxCell) maxCell = _c2;

          var xC = new _xmlWorksheet.Xc({ r: `${(0, _lib.num2col)(_c2)}${r + 1}` });
          switch (cell.cellType) {
            case 'TypeString':
              if (cell.value) {
                xC.v = refTable.addString(cell.value);
              }
              xC.t = 's';
              xC.s = _fId;
              break;
            case 'TypeBool':
              xC.v = cell.value;
              xC.t = 'b';
              xC.s = _fId;
              break;
            case 'TypeNumeric':
              xC.v = cell.value;
              xC.s = _fId;
              break;
            case 'TypeDate':
              xC.v = cell.value;
              xC.s = _fId;
              break;
            case 'TypeFormula':
              xC.v = cell.value;
              xC.f = new _xmlWorksheet.Xf({}, [cell.formula]);
              xC.s = _fId;
              break;
            case 'TypeError':
              xC.v = cell.value;
              xC.f = new _xmlWorksheet.Xf({}, [cell.formula]);
              xC.t = 'e';
              xC.s = _fId;
              break;
            case 'TypeGeneral':
              xC.v = cell.value;
              xC.s = _fId;
              break;
          }
          xRow.children.push(xC);
          if (cell.hMerge > 0 || cell.vMerge > 0) {
            // r == rownum, c == colnum
            var start = `${(0, _lib.num2col)(_c2)}${r + 1}`;
            var endcol = _c2 + cell.hMerge;
            var endrow = r + cell.vMerge + 1;
            var end = `${(0, _lib.num2col)(endcol)}${endrow}`;
            var mc = new _xmlWorksheet.XmergeCell({ ref: start + ':' + end });
            if (sheet.mergeCells === null) {
              sheet.mergeCells = new _xmlWorksheet.XmergeCells();
            }
            sheet.mergeCells.children.push(mc);
          }
        }
        xSheet.children.push(xRow);
      }
      // Update sheet format with the freshly determined max levels
      this.sheetFormat.outlineLevelCol = maxLevelCol;
      this.sheetFormat.outlineLevelRow = maxLevelRow;
      // .. and then also apply this to the xml worksheet
      sheet.sheetFormatPr.outlineLevelCol = this.sheetFormat.outlineLevelCol;
      sheet.sheetFormatPr.outlineLevelRow = this.sheetFormat.outlineLevelRow;

      if (sheet.mergeCells !== null) {
        sheet.mergeCells.count = sheet.mergeCells.children.length;
      }

      sheet.sheetData = xSheet;

      var dimension = new _xmlWorksheet.Xdimension({
        ref: `A1:${(0, _lib.num2col)(maxCell)}${maxRow + 1}`
      });
      if (dimension.ref === 'A1:A1') {
        dimension.ref = 'A1';
      }
      sheet.dimension = dimension;
      return sheet;
    }
  }]);

  return Sheet;
}();