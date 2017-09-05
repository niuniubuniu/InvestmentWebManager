'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alignment = exports.Font = exports.Fill = exports.Border = exports.Style = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xmlStyle = require('./xmlStyle');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Style class for set Cell styles.
 */
var Style = exports.Style = function () {
  function Style() {
    _classCallCheck(this, Style);

    this.applyBorder = false;
    this.applyFill = false;
    this.applyFont = false;
    this.applyAlignment = false;
    this.namedStyleIndex = null;

    /**
     * Cell border
     * @type {Border}
     */
    this.border = new Border({});
    /**
     * Cell fill background or foreground
     * @type {Fill}
     */
    this.fill = new Fill({});
    /**
     * Cell font
     * @type {Font}
     */
    this.font = new Font({});
    /**
     * Cell alignment
     * @type {Alignment}
     */
    this.align = new Alignment({});
  }

  _createClass(Style, [{
    key: 'makeXStyleElements',
    value: function makeXStyleElements() {
      var xFont = new _xmlStyle.Xfont({
        sz: this.font.size,
        name: this.font.name,
        family: this.font.family,
        charset: this.font.charset,
        color: this.font.color,
        b: this.font.bold,
        i: this.font.italic,
        u: this.font.underline
      });
      var xFill = new _xmlStyle.Xfill({
        patternFill: new _xmlStyle.XpatternFill({
          patternType: this.fill.patternType,
          fgColor: this.fill.fgColor,
          bgColor: this.fill.bgColor
        })
      });
      var xBorder = new _xmlStyle.Xborder({
        left: { style: this.border.left, color: this.border.leftColor },
        right: { style: this.border.right, color: this.border.rightColor },
        top: { style: this.border.top, color: this.border.topColor },
        bottom: { style: this.border.bottom, color: this.border.bottomColor }
      });
      var xXf = new _xmlStyle.Xxf({
        numFmtId: 0,
        applyBorder: this.applyBorder,
        applyFill: this.applyFill,
        applyFont: this.applyFont,
        applyAlignment: this.applyAlignment
      });

      xXf.alignment = new _xmlStyle.Xalignment({
        horizontal: this.align.h,
        indent: this.align.indent,
        shrinkToFit: this.align.shrinkToFit,
        textRotation: this.align.textRotation,
        vertical: this.align.v,
        wrapText: this.align.wrapText
      });

      if (this.namedStyleIndex !== null) {
        xXf.xfId = this.namedStyleIndex;
      }

      return { xFont, xFill, xBorder, xXf };
    }
  }]);

  return Style;
}();

/**
 * Border of the Style and border type have: `none`, `thin`, `medium`, `thick`, `dashed`, `dotted`, `double`
 * 
 */


var Border =
/**
 * top border color
 * @type {String}
 */

/**
 * left border color
 * @type {String}
 */
exports.Border = function Border(_ref) {
  var _ref$left = _ref.left,
      left = _ref$left === undefined ? 'none' : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === undefined ? 'none' : _ref$right,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 'none' : _ref$top,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === undefined ? 'none' : _ref$bottom;

  _classCallCheck(this, Border);

  this.leftColor = undefined;
  this.rightColor = undefined;
  this.topColor = undefined;
  this.bottomColor = undefined;

  /**
   * left border type
   * @type {String}
   */
  this.left = left;
  /**
   * right border type
   * @type {String}
   */
  this.right = right;
  /**
   * top border type
   * @type {String}
   */
  this.top = top;
  /**
   * bottom border type
   * @type {String}
   */
  this.bottom = bottom;
}
/**
 * bottom border color
 * @type {String}
 */

/**
 * right border color
 * @type {String}
 */
;
/**
 * Fill of the Style
 */


var Fill = exports.Fill = function Fill(_ref2) {
  var _ref2$patternType = _ref2.patternType,
      patternType = _ref2$patternType === undefined ? 'none' : _ref2$patternType,
      _ref2$fgColor = _ref2.fgColor,
      fgColor = _ref2$fgColor === undefined ? 'FFFFFFFF' : _ref2$fgColor,
      _ref2$bgColor = _ref2.bgColor,
      bgColor = _ref2$bgColor === undefined ? '00000000' : _ref2$bgColor;

  _classCallCheck(this, Fill);

  /**
   * pattern type of the fill
   * @type {String}
   */
  this.patternType = patternType;
  /**
   * foreground color of the fill
   * @type {String}
   */
  this.fgColor = fgColor;
  /**
   * background color of the fill
   * @type {String}
   */
  this.bgColor = bgColor;
};
/**
 * Font of the Style
 */


var Font =
/**
 * Is italic style
 * @type {Boolean}
 */

/**
 * font color
 * @type {String}
 */
exports.Font = function Font(_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 12 : _ref3$size,
      _ref3$name = _ref3.name,
      name = _ref3$name === undefined ? 'Verdana' : _ref3$name;

  _classCallCheck(this, Font);

  this.family = 0;
  this.charset = 0;
  this.color = undefined;
  this.bold = false;
  this.italic = false;
  this.underline = false;

  /**
   * font size [default 12]
   * @type {Number}
   */
  this.size = size;
  this.name = name;
}
/**
 * IS underline style
 * @type {Boolean}
 */

/**
 * Is bold style
 * @type {Boolean}
 */
;
/**
 * Alignment of the Style.
 */


var Alignment = exports.Alignment = function Alignment(_ref4) {
  var _ref4$h = _ref4.h,
      h = _ref4$h === undefined ? 'general' : _ref4$h,
      _ref4$v = _ref4.v,
      v = _ref4$v === undefined ? 'bottom' : _ref4$v;

  _classCallCheck(this, Alignment);

  this.indent = 0;
  this.shrinkToFit = false;
  this.textRotation = 0;
  this.wrapText = false;

  /**
   * Horizontal align: `general`, `center`, `left`, `right`
   * @type {String}
   */
  this.h = h;
  /**
   * Vertical align: `general`, `top`, `bottom`, `center`
   * @type {String}
   */
  this.v = v;
};