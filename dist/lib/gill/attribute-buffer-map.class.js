"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttribufeBufferMap = function () {
    function StandardGillAttribufeBufferMap() {
        _classCallCheck(this, StandardGillAttribufeBufferMap);

        this.buffers = new Map();
    }

    _createClass(StandardGillAttribufeBufferMap, [{
        key: "eachAttributeBuffer",
        value: function eachAttributeBuffer(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.buffers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        attributeName = _step$value[0],
                        webglBuffer = _step$value[1];

                    action(attributeName, webglBuffer);
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
        key: "hasAttributeBuffer",
        value: function hasAttributeBuffer(attributeName) {
            return this.buffers.has(attributeName);
        }
    }, {
        key: "getAttributeBuffer",
        value: function getAttributeBuffer(attributeName) {
            return this.buffers.get(attributeName);
        }
    }, {
        key: "setAttributeBuffer",
        value: function setAttributeBuffer(attributeName, webglBuffer) {
            this.buffers.set(attributeName, webglBuffer);
        }
    }]);

    return StandardGillAttribufeBufferMap;
}();

exports.default = StandardGillAttribufeBufferMap;