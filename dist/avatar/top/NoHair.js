"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var lodash_1 = require("lodash");
var facialHair_1 = require("./facialHair");
var NoHair = /** @class */ (function (_super) {
    __extends(NoHair, _super);
    function NoHair() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    NoHair.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, path1 = _a.path1;
        return ((0, jsx_runtime_1.jsxs)("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd', children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsx)("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }), (0, jsx_runtime_1.jsxs)("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1, children: [(0, jsx_runtime_1.jsx)("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), (0, jsx_runtime_1.jsx)("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }), (0, jsx_runtime_1.jsxs)("feMerge", { children: [(0, jsx_runtime_1.jsx)("feMergeNode", { in: 'shadowMatrixOuter1' }), (0, jsx_runtime_1.jsx)("feMergeNode", { in: 'SourceGraphic' })] })] })] }), (0, jsx_runtime_1.jsx)("mask", { id: mask1, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path1 }) }), (0, jsx_runtime_1.jsx)("g", { id: 'Mask' }), (0, jsx_runtime_1.jsx)("g", { id: 'Top/No-Hair', mask: "url(#".concat(mask1, ")"), children: (0, jsx_runtime_1.jsxs)("g", { transform: 'translate(-1.000000, 0.000000)', children: [(0, jsx_runtime_1.jsx)(facialHair_1.default, {}), this.props.children] }) })] }));
    };
    NoHair.optionValue = 'NoHair';
    return NoHair;
}(React.Component));
exports.default = NoHair;
