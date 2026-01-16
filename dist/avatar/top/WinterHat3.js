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
var HatColor_1 = require("./HatColor");
var WinterHat3 = /** @class */ (function (_super) {
    __extends(WinterHat3, _super);
    function WinterHat3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    WinterHat3.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3;
        return ((0, jsx_runtime_1.jsxs)("g", { id: 'Top', children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsx)("rect", { id: path3, x: '0', y: '0', width: '264', height: '280' }), (0, jsx_runtime_1.jsx)("path", { d: 'M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z', id: path1 }), (0, jsx_runtime_1.jsxs)("filter", { x: '-0.7%', y: '-1.7%', width: '101.4%', height: '106.8%', filterUnits: 'objectBoundingBox', id: filter1, children: [(0, jsx_runtime_1.jsx)("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), (0, jsx_runtime_1.jsx)("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0', type: 'matrix', in: 'shadowOffsetOuter1' })] }), (0, jsx_runtime_1.jsx)("path", { d: 'M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z', id: path2 })] }), (0, jsx_runtime_1.jsx)("mask", { id: mask1, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path3 }) }), (0, jsx_runtime_1.jsx)("g", { id: 'Mask' }), (0, jsx_runtime_1.jsxs)("g", { id: 'Top/Accessories/Winter-Hat-3', transform: 'translate(-1.000000, 0.000000)', children: [(0, jsx_runtime_1.jsxs)("g", { id: 'hat', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(67.000000, 12.000000)', children: [(0, jsx_runtime_1.jsx)("circle", { id: 'puff', fill: '#F4F4F4', cx: '66', cy: '8', r: '20' }), (0, jsx_runtime_1.jsx)("mask", { id: mask2, fill: 'white', children: (0, jsx_runtime_1.jsx)("use", { xlinkHref: '#' + path1 }) }), (0, jsx_runtime_1.jsx)("use", { id: 'hat-mask', fill: '#D8D8D8', xlinkHref: '#' + path1 }), (0, jsx_runtime_1.jsx)(HatColor_1.default, { maskID: mask2, defaultColor: 'Red' })] }), (0, jsx_runtime_1.jsxs)("g", { id: 'hat-front', children: [(0, jsx_runtime_1.jsx)("use", { fill: 'black', fillOpacity: '1', filter: "url(#".concat(path2, ")"), xlinkHref: '#' + path2 }), (0, jsx_runtime_1.jsx)("use", { fill: '#F4F4F4', fillRule: 'evenodd', xlinkHref: '#' + path2 })] }), (0, jsx_runtime_1.jsx)(facialHair_1.default, {}), this.props.children] })] }));
    };
    WinterHat3.optionValue = 'WinterHat3';
    return WinterHat3;
}(React.Component));
exports.default = WinterHat3;
