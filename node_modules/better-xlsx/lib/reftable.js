'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xmlSharedStrings = require('./xmlSharedStrings');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RefTable = exports.RefTable = function () {
  function RefTable() {
    _classCallCheck(this, RefTable);

    this.strings = [];
    this.known = {};
  }

  _createClass(RefTable, [{
    key: 'makeXsst',
    value: function makeXsst() {
      var len = this.strings.length;
      var sst = new _xmlSharedStrings.Xsst({
        count: len,
        uniqueCount: len
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.strings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var str = _step.value;

          var si = new _xmlSharedStrings.Xsi({}, [new _xmlSharedStrings.Xt({}, [str])]);
          sst.children.push(si);
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

      return sst;
    }
  }, {
    key: 'addString',
    value: function addString(str) {
      if (this.known[str] === undefined) {
        var index = this.strings.length;
        this.strings.push(str);
        this.known[str] = index;
        return index;
      }
      return this.known[str];
    }
  }, {
    key: 'getString',
    value: function getString(index) {
      return this.strings[index];
    }
  }, {
    key: 'length',
    value: function length() {
      return this.strings.length;
    }
  }]);

  return RefTable;
}();