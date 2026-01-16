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
var HairColor_1 = require("./HairColor");
var ShortHairFrizzle = /** @class */ (function (_super) {
    __extends(ShortHairFrizzle, _super);
    function ShortHairFrizzle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    ShortHairFrizzle.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return ((0, jsx_runtime_1.jsxs)("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd', children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsx)("rect", { id: path2, x: '0', y: '0', width: '264', height: '280' }), (0, jsx_runtime_1.jsx)("path", { d: 'M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z', id: path1 }), (0, jsx_runtime_1.jsxs)("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1, children: [(0, jsx_runtime_1.jsx)("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), (0, jsx_runtime_1.jsx)("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }), (0, jsx_runtime_1.jsxs)("feMerge", { children: [(0, jsx_runtime_1.jsx)("feMergeNode", { in: 'shadowMatrixOuter1' }), (0, jsx_runtime_1.jsx)("feMergeNode", { in: 'SourceGraphic' })] })] })] }), (0, jsx_runtime_1.jsx)("mask", { id: mask2, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path2 }) }), (0, jsx_runtime_1.jsx)("g", { id: 'Mask' }), (0, jsx_runtime_1.jsx)("g", { id: 'Top/Short-Hair/Frizzle', mask: "url(#".concat(mask2, ")"), children: (0, jsx_runtime_1.jsxs)("g", { transform: 'translate(-1.000000, 0.000000)', children: [(0, jsx_runtime_1.jsx)(facialHair_1.default, {}), (0, jsx_runtime_1.jsx)("mask", { id: mask1, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path1 }) }), (0, jsx_runtime_1.jsx)("use", { id: 'Hair-Maks', stroke: 'none', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }), (0, jsx_runtime_1.jsx)(HairColor_1.default, { maskID: mask1 }), this.props.children] }) })] }));
    };
    ShortHairFrizzle.optionValue = 'ShortHairFrizzle';
    return ShortHairFrizzle;
}(React.Component));
exports.default = ShortHairFrizzle;
