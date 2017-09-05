'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.File = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sheet = require('./sheet');

var _templates = require('./templates');

var templates = _interopRequireWildcard(_templates);

var _reftable = require('./reftable');

var _xmlWorkbook = require('./xmlWorkbook');

var _xmlContentTypes = require('./xmlContentTypes');

var _xmlStyle = require('./xmlStyle');

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is the main class, use it:
 * 
 * ```js
 * import { File } from 'better-xlsx';
 * const file = new File();
 * const sheet = file.addSheet('Sheet-1');
 * ```
 * 
 * @class File
 */
var File = exports.File = function () {
  /**
   * @private
   */
  function File() {
    _classCallCheck(this, File);

    this.sheet = {};
    this.sheets = [];
    this.definedNames = [];

    /**
     * @private
     */
    this.styles = new _xmlStyle.XstyleSheet({});
  }
  /**
   * Add a new Sheet, with the provided name, to a File
   * @param {String} name Name of the Sheet
   * @return {Sheet}
   */

  /**
   * @private
   */

  /**
   * @private
   */


  _createClass(File, [{
    key: 'addSheet',
    value: function addSheet(name) {
      if (this.sheet[name]) {
        throw new Error(`duplicate sheet name ${name}.`);
      }
      var sheet = new _sheet.Sheet({
        name,
        file: this,
        selected: this.sheets.length === 0
      });
      this.sheet[name] = sheet;
      this.sheets.push(sheet);
      return sheet;
    }
    /**
     * Save the File to an xlsx file.
     * @param  {String} [type='nodebuffer'] For Node.js use `nodebuffer` and browser use `blob` or `base64`.
     * @return {Promise|stream} For Node.js return `stream` and browser return Promise.
     */

  }, {
    key: 'saveAs',
    value: function saveAs() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'nodebuffer';

      var parts = this.makeParts();
      var zip = new _jszip2.default();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(parts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          zip.file(key, parts[key]);
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

      if (type === 'blob' || type === 'base64') {
        return zip.generateAsync({ type });
      } else {
        return zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true });
      }
    }
    /**
     * @private
     * @return {Object} XML files mapping object
     */

  }, {
    key: 'makeParts',
    value: function makeParts() {
      var parts = {};
      var refTable = new _reftable.RefTable();
      var types = (0, _xmlContentTypes.makeXTypes)();
      var workbook = (0, _xmlWorkbook.makeXworkbook)();

      this.styles.reset();

      var i = 1;
      var sheets = new _xmlWorkbook.Xsheets();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.sheets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var sheet = _step2.value;

          var xSheet = sheet.makeXSheet(refTable, this.styles);
          types.children.push(new _xmlContentTypes.XOverride({
            PartName: `/xl/worksheets/sheet${i}.xml`,
            ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml'
          }));
          sheets.children.push(new _xmlWorkbook.Xsheet({
            name: sheet.name,
            sheetId: i,
            'r:id': `rId${i}`,
            state: 'visible'
          }));
          parts[`xl/worksheets/sheet${i}.xml`] = xSheet.render();
          i++;
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

      workbook.sheets = sheets;

      parts['xl/workbook.xml'] = workbook.render();
      parts['_rels/.rels'] = templates.DOT_RELS;
      parts['docProps/app.xml'] = templates.DOCPROPS_APP;
      parts['docProps/core.xml'] = templates.DOCPROPS_CORE;
      parts['xl/theme/theme1.xml'] = templates.XL_THEME_THEME;

      parts['xl/sharedStrings.xml'] = refTable.makeXsst().render();
      parts['xl/_rels/workbook.xml.rels'] = (0, _xmlWorkbook.makeWorkbookRels)(this.sheets.length).render();
      parts['[Content_Types].xml'] = types.render();
      parts['xl/styles.xml'] = this.styles.render();

      return parts;
    }
  }]);

  return File;
}();