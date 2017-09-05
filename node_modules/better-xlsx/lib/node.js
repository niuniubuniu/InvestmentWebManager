'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.props = props;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function attrEscape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
}
function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
}

var HEAD = exports.HEAD = Symbol('head');

function props() {
  for (var _len = arguments.length, attrs = Array(_len), _key = 0; _key < _len; _key++) {
    attrs[_key] = arguments[_key];
  }

  return function (clazz) {
    var target = clazz.prototype || clazz;

    var _loop = function _loop(name) {
      Object.defineProperty(target, name, {
        get() {
          if (this.attributes) {
            return this.attributes[name];
          }
        },
        set(value) {
          if (this.attributes === undefined) {
            this.attributes = {};
          }
          this.attributes[name] = value;
        },
        configurable: true,
        enumerable: true
      });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;

        _loop(name);
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

    return clazz;
  };
}

var Node = exports.Node = function () {
  function Node() {
    var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var xmlName = arguments[2];

    _classCallCheck(this, Node);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = Object.keys(attributes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        this[key] = attributes[key];
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

    this.children = children;
    this._xmlName = xmlName || this.constructor.name.substring(1);
  }

  _createClass(Node, [{
    key: 'render',
    value: function render() {
      function walk(tree) {
        var name = tree._xmlName;
        var attributes = tree.attributes,
            children = tree.children;

        var tokens = [];

        if (tree[HEAD]) {
          tokens.push(tree[HEAD]);
        }
        tokens.push(`<${name}`);

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = Object.keys(attributes || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var key = _step3.value;

            var v = attributes[key];
            if (v === undefined) continue;
            if (typeof v === 'string') {
              v = attrEscape(v);
            }
            if (typeof v === 'boolean') {
              v = v ? 1 : 0;
            }
            tokens.push(` ${key}="${v}"`);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (!children.length) {
          tokens.push('/>');
          return tokens;
        }
        tokens.push('>');
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var child = _step4.value;

            if (child instanceof Node) {
              tokens.push(child.render());
            } else if (typeof child === 'string') {
              tokens.push(escape(child));
            } else {
              tokens.push(child.toString());
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        tokens.push(`</${name}>`);
        return tokens;
      }
      return walk(this).join('');
    }
  }]);

  return Node;
}();