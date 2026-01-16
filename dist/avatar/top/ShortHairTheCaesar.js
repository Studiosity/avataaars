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
var ShortHairTheCaesar = /** @class */ (function (_super) {
    __extends(ShortHairTheCaesar, _super);
    function ShortHairTheCaesar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    ShortHairTheCaesar.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return ((0, jsx_runtime_1.jsxs)("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd', children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsx)("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }), (0, jsx_runtime_1.jsx)("path", { d: 'M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z', id: path2 }), (0, jsx_runtime_1.jsxs)("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1, children: [(0, jsx_runtime_1.jsx)("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), (0, jsx_runtime_1.jsx)("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }), (0, jsx_runtime_1.jsxs)("feMerge", { children: [(0, jsx_runtime_1.jsx)("feMergeNode", { in: 'shadowMatrixOuter1' }), (0, jsx_runtime_1.jsx)("feMergeNode", { in: 'SourceGraphic' })] })] })] }), (0, jsx_runtime_1.jsx)("mask", { id: mask1, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path1 }) }), (0, jsx_runtime_1.jsx)("g", { id: 'Mask' }), (0, jsx_runtime_1.jsx)("g", { id: 'Top/Short-Hair/The-Caesar', mask: "url(#".concat(mask1, ")"), children: (0, jsx_runtime_1.jsxs)("g", { transform: 'translate(-1.000000, 0.000000)', children: [(0, jsx_runtime_1.jsx)(facialHair_1.default, {}), (0, jsx_runtime_1.jsxs)("g", { id: 'Hair', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(75.000000, 34.000000)', children: [(0, jsx_runtime_1.jsx)("mask", { id: mask2, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path2 }) }), (0, jsx_runtime_1.jsx)("use", { id: 'Caesar', fill: '#28354B', xlinkHref: '#' + path2 }), (0, jsx_runtime_1.jsx)(HairColor_1.default, { maskID: mask2 })] }), this.props.children] }) })] }));
    };
    ShortHairTheCaesar.optionValue = 'ShortHairTheCaesar';
    return ShortHairTheCaesar;
}(React.Component));
exports.default = ShortHairTheCaesar;
