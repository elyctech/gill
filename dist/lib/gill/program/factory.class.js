"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _program = require("lib/gill/program.class");

var _program2 = _interopRequireDefault(_program);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramFactory = function () {
    function StandardGillProgramFactory() {
        _classCallCheck(this, StandardGillProgramFactory);
    }

    _createClass(StandardGillProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, webglProgram, attributes, uniforms) {
            return new _program2.default(webglRenderingContext, webglProgram, attributes, uniforms);
        }
    }]);

    return StandardGillProgramFactory;
}();

exports.default = StandardGillProgramFactory;